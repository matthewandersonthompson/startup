# Key Git Commands:
git clone <repo-url>: Creates a local copy of the remote repository.
git add <file>: Stages the specified file(s) for the next commit (tracks changes).
git commit -m "<message>": Commits the staged changes with a message explaining what was done.
git push: Uploads the committed changes to the remote repository (syncs local changes with GitHub).
git pull: Fetches and integrates changes from the remote repository into your local repository.
git merge: Combines changes from different branches (or remote versions) into one.
git status: Shows the current state of the working directory and staging area (what’s changed and what’s staged).
git add .: Stages all changed files at once.
git commit -am "<message>": Adds and commits changes in one step for tracked files.

# Merge Conflict Resolution:
Conflict markers: <<<<<<<, =======, >>>>>>> show the differences in files. Edit to keep the desired changes, then commit.


# DM Training Grounds HTML Project Notes

## Key Technologies Represented with Placeholders
- **Application Data**: In **app-data.html**, shows user progress (quizzes completed, chatbot sessions) and includes a course outline for DM training with images.
- **Authentication**: **auth.html** allows user login and registration. The user's name will be displayed on the **Dashboard** after login.
- **Database Data**: **database.html** shows placeholders for player data, session logs, and quiz results in list and table formats.
- **WebSocket Data**: **realtime.html** simulates real-time communication with a chatbot, allowing users to practice DMing scenarios with scene selection and prompts.

---

## Pages Created
- **index.html**: Home page with an intro to DM Training Grounds and key features.
- **auth.html**: User login and registration with a form.
- **app-data.html**: User dashboard showing progress and a training course outline.
- **database.html**: Database data placeholders (player data, session logs, quiz results).
- **quizzes.html**: Quiz page with radio buttons and submit form.
- **realtime.html**: Chatbot page for real-time communication simulation.

---

## Git Workflow
- **git clone <repo-url>**: Cloned the project repo.
- **git add .**: Staged all changes after each update.
- **git commit -m "<message>"**: Committed changes with clear messages.
- **git push origin main**: Pushed changes to GitHub to sync the repository.

---

## Deployment Process
- **deployFiles.sh**: Deployed files to the production server using the script.
- **SCP command**: Manually transferred images and adjusted file paths and permissions (chmod 644) for proper display.

---

## Key Changes Made
1. **Authentication System**: User login and name display added to **auth.html** and **app-data.html**.
2. **Dashboard Enhancements**: Progress tracking and course outline added to **app-data.html** with Duolingo-style image.
3. **Quizzes**: Moved quiz content to **quizzes.html** with interactive forms for user responses.
4. **Database Page**: Rebuilt **database.html** with player data, session logs, and quiz results in table format.
5. **Chatbot**: **realtime.html** contains placeholders for WebSocket data with scene selection and prompt inputs.
6. **Full Navigation**: Every page now links to all other pages for easy navigation.
7. **File Permissions and Paths**: Corrected file paths and permissions for image display on the server.

---

## Troubleshooting and Fixes
- **Image Uploads**: Resolved image display issues by adjusting file paths and using SCP to upload images directly, setting permissions with `chmod 644`.
- **Deployment**: Successfully used **deployFiles.sh** to deploy the entire project to the production server.


# CodePen Assignments Notes

## CSS Practice Assignment

- **General Styling:**
  - Used `* {}` selector to apply universal styling for font and color.
  - Set body background color to a dark shade using `background-color: #121212;`.
  - Styled headers, sections, and footer with padding, margin, and rounded corners for better layout.

- **Header and Section Styling:**
  - Applied distinct background colors to the header (`#555`) and sections (`#888`) for visual distinction.
  - Increased padding and margin for a cleaner look.

- **Typography:**
  - Changed font to `'Arial', sans-serif` for better readability.
  - Adjusted the font weight for `h2` elements to `300` for a subtler visual effect.
  - Modified `h1` border to `dashed white` for a unique header design.

- **Table Styling:**
  - Styled the table with black borders and aligned text using `text-align: center;`.
  - Adjusted padding for cells to ensure a balanced layout.

- **Footer Styling:**
  - Centered the footer text for a uniform look across all devices.
  - Changed font size to `1.2em` and removed italic styling for clarity.

- **Animations:**
  - Implemented a `fly-from-left` animation to simulate content flying in from the left.
  - Adjusted animation timing and starting point for smoother transitions.

---

## Additional Lessons Learned:

- **CSS Specificity:** The importance of using the correct selectors to apply styles efficiently without overriding unintentionally.
- **Consistency in Layouts:** Leveraging padding, margin, and border-radius properties to create a visually balanced design.
- **Use of Animations:** Applying animations like `@keyframes` to enhance user experience through subtle movements.
- **Experimenting with Colors:** Adjusting color schemes using HSL for more control over hue and saturation.
- **Responsive Design:** Ensured that elements are flexible and centered to accommodate different screen sizes.

---

## Key Takeaways:
- Always test changes in small increments to see how individual CSS properties affect the design.
- Use animations sparingly to enhance user experience without overwhelming the interface.
- Keep experimenting with different color and layout combinations to achieve the best visual hierarchy.
