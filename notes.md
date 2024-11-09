###########################################################################################################################
Key Git Commands:
###########################################################################################################################

git clone <repo-url>: Creates a local copy of the remote repository.  
git add <file>: Stages the specified file(s) for the next commit (tracks changes).  
git commit -m "<message>": Commits the staged changes with a message explaining what was done.  
git push: Uploads the committed changes to the remote repository (syncs local changes with GitHub).  
git pull: Fetches and integrates changes from the remote repository into your local repository.  
git merge: Combines changes from different branches (or remote versions) into one.  
git status: Shows the current state of the working directory and staging area (what’s changed and what’s staged).  
git add .: Stages all changed files at once.  
git commit -am "<message>": Adds and commits changes in one step for tracked files.

Merge Conflict Resolution:  
Conflict markers: <<<<<<<, =======, >>>>>>> show the differences in files. Edit to keep the desired changes, then commit.

###########################################################################################################################
AWS EC2 Server Setup Notes
###########################################################################################################################

Server Info  
    Elastic IP Address: 3.220.115.123  
    Instance Type: t2.micro  
    Region: US East (N. Virginia) - us-east-1  
    Key File Location: ~/Desktop/cs260/DMTrainingGrounds-key.pem

Key Commands  
    SSH into the Server: ssh -i ~/Desktop/cs260/DMTrainingGrounds-key.pem ubuntu@3.220.115.123  
    Set Correct Permissions on PEM File: chmod 600 ~/Desktop/cs260/DMTrainingGrounds-key.pem

Start/Stop/Terminate the Instance  
    Start Instance: Use the AWS Console or aws ec2 start-instances (if AWS CLI is configured).  
    Stop Instance: Use the AWS Console or aws ec2 stop-instances.  
    Terminate Instance: Use the AWS Console or aws ec2 terminate-instances.

Caddy HTTPS Setup  
    Domain: matthewandersonthompson.com  
    Edited Caddyfile to enable HTTPS for the domain and subdomains (startup.matthewandersonthompson.com)  
    Restart Caddy: sudo service caddy restart  
    Caddy auto-requests certificates from Let's Encrypt for HTTPS.
