#!/usr/bin/env bash

while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployService.sh -k <pem key file> -h <hostname> -s <service>\n\n"
    exit 1
fi

printf "\n----> Deploying React bundle $service to $hostname with $key\n"

# Step 1: Build distribution
printf "\n----> Build the distribution package\n"
rm -rf build dist
mkdir build
npm install
npm run build

# Move the React front end to build/public
cp -rf dist build/public

# Copy entire service directory except node_modules
cp -r service/* build/
rm -rf build/node_modules # remove node_modules if present

# Step 2: Clear out old distribution on target
printf "\n----> Clearing out previous distribution on the target\n"
ssh -i "$key" ubuntu@$hostname << ENDSSH
rm -rf services/${service}
mkdir -p services/${service}
ENDSSH

# Step 3: Copy distribution package to target
printf "\n----> Copying the distribution package to the target\n"
scp -r -i "$key" build/* ubuntu@$hostname:services/$service

# Step 4: Deploy the service on the target
printf "\n----> Deploying the service on the target\n"
ssh -i "$key" ubuntu@$hostname << ENDSSH
cd services/${service}
npm install

pm2 restart ${service} || true

RUNNING=\$(pm2 list | grep ${service} || true)
if [ -z "\$RUNNING" ]; then
    pm2 start index.js --name ${service}
fi
ENDSSH

# Step 5: Clean up local build
printf "\n----> Removing local distribution package\n"
rm -rf build dist

printf "\nDeployment complete!\n"
