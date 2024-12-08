# DM Training Grounds

## Elevator Pitch
Soon welcoming the newest [WorldSmith.io](https://www.worldsmith.io/) feature: The Dungeon Master Training Grounds! Already, we use AI to help DMs prepare their campaigns and sessions. However, what if you are a new DM? What if you want to learn how to run your own sessions with ease and wow your players? The WorldSmith Training Grounds is the perfect tool to help you get started and prepare for your first session. It features an AI-powered chatbot that simulates real player interactions, allowing you to practice handling different player dynamics in a controlled environment. Additionally, the learning module includes interactive lessons and quizzes on core game mechanics, helping new DMs build confidence, track their progress, and improve their skills before stepping into live gameplay.

## Design
Here are some initial sketches for the **DM Training Grounds** interface:

### DM Training Hub
![DM Training Hub](src/assets/images/DM_Training_Grounds_Homepage.png)
*Main dashboard for users to access learning modules, quizzes, and the chatbot.*

### ChatBot Interface
![ChatBot Interface](src/assets/images/ChatBot.png)
*Interface where DMs interact with AI-powered players.*

### Login Page
![Login Page](src/assets/images/Login.png)
*Simple login page where DMs create an account or log in.*

### Dropdown
![Dropdown](src/assets/images/Dropdown.png)
*Dropdown feature for selecting scenarios or player configurations.*

## Chatbot Interaction Flow

```mermaid
sequenceDiagram
    participant DM
    participant AI_Chatbot as AI Chatbot (Simulating Players)
    
    DM->>AI_Chatbot: Start Session
    AI_Chatbot-->>DM: Confirm Session Start
    
    DM->>AI_Chatbot: Describe Scene
    AI_Chatbot->>DM: Simulated Player Action 1
    DM->>AI_Chatbot: Process Action
    AI_Chatbot-->>DM: Provide Feedback
    
    DM->>AI_Chatbot: Describe Next Scene
    AI_Chatbot->>DM: Simulated Player Action 2
    DM->>AI_Chatbot: Process Action
    AI_Chatbot-->>DM: Provide Feedback

    DM->>AI_Chatbot: End Session
    AI_Chatbot-->>DM: Session End Confirmation
```
*Mermaid diagram illustrating the flow of interaction between the Dungeon Master (DM) and the AI-powered chatbot, which simulates the actions of multiple players during a training session.*

## Key Features
- **Learning Modules**: Structured lessons covering key D&D mechanics. Each module is interactive, guiding new DMs through different topics and challenges they may encounter in real sessions.
- **Quizzes and Scoring**: After completing each module, users will take quizzes to assess their understanding. Scores are tracked and displayed next to completed modules in the user’s profile.
- **AI-Powered Chatbot**: Simulates realistic player interactions, allowing DMs to practice handling multiple players in a controlled environment.
- **Player Configuration**: Customize player attributes like class and level to simulate different types of players.
- **Scenario Selection**: Choose from pre-made scenarios or load custom ones to test your ability to adapt to various in-game situations.
- **Interactive Gameplay**: Users manage player actions, rolls, and the story in real-time. Practice your role as a DM in realistic gameplay scenarios.
- **Real-Time Feedback**: DMs will receive instant feedback and scoring after each session, helping them improve their game management skills.
- **Progress Tracking**: Users can view their quiz results, completed lessons, and chatbot performance in their profile, making it easy to see their progress.

## Technologies
I will use the required technologies in the following ways:

- **HTML**: The app will utilize standard HTML for organizing content, including sections for the DM Training Hub, Learning Modules, and Chatbot Interface.
- **CSS**: CSS will be used to create responsive designs and ensure the app looks great across devices. There will be animations for smoother transitions between sections like lessons, quizzes, and gameplay sessions.
- **React**: React will serve as the framework for building a single-page application (SPA). It will manage dynamic content updates in the chatbot interface, learning modules, and user profile.
- **JavaScript**: JavaScript will handle user interactions, such as quiz submissions, scoring, and the dynamic chatbot. It will manage real-time responses from the chatbot and updates to the user's progress.
- **Web Services**:
  - **Own Service**: The backend APIs will manage game scenarios, user progress, and real-time chatbot interactions.
  - **Third-Party Services**:
    - **ChatGPT/Claude**: API calls will be made to ChatGPT or Claude to simulate player interactions during the chatbot sessions.
- **Authentication**: The app will use a custom authentication system built with Express and MongoDB. Users will log in using an email and password. JWT tokens will manage session authentication and be stored securely in cookies.
- **Database**: MongoDB will store user data, including quiz scores, lesson progress, and chatbot performance. Predefined quiz questions will also be stored in MongoDB and pulled randomly for each quiz.
- **WebSockets**: WebSockets will manage real-time interactions between the DM and simulated players during the chatbot sessions.
>>>>>>> b7f3438fe72e18e478429ef506def39c74873462



## HTML Deliverable
This deliverable establishes the fundamental structure of the application using HTML placeholders.

- Created six HTML pages to represent core functionalities (login, dashboard, database, quizzes, chatbot, home).
- Incorporated a navigation bar on each page for seamless transitions between sections.
- Added placeholder text and images to suggest future features and visual elements.
- Included a placeholder login form, a database page for user data and logs, and an area to simulate real-time chatbot communication.

## CSS Deliverable
This deliverable introduces consistent, responsive styling across the application.

- Implemented a cohesive visual theme with styled headers, footers, and main content areas.
- Refined navigation elements by adjusting typography, spacing, and hover effects.
- Ensured full responsiveness, allowing the layout to adapt to various screen sizes.
- Styled modal windows (login, signup) to be clean, functional, and resizable.
- Applied consistent fonts, colors, and spacing to achieve a modern, user-friendly look.

## Startup React Deliverable
This deliverable transitions the static HTML/CSS layout into a React-based single-page application.

- Bundled and optimized the code using Vite for efficient, production-ready builds.
- Developed core React components for quizzes, chatbot, authentication (Auth), and the dashboard.
- Integrated React Router for smooth navigation between main pages.
- Displayed developer details and a GitHub repository link on the homepage as required.
- Utilized React hooks (useState) to manage state, ensuring a dynamic and interactive user experience.

## Startup Service Deliverable
This deliverable adds backend functionality with Node.js, Express.js, MongoDB integration, and third-party APIs.

- Created API endpoints for chatbot operations (/api/chatbot/start, /api/chatbot) and a sample /example route to demonstrate MongoDB queries.
- Integrated OpenAI’s GPT-3.5 API to simulate realistic AI-driven player responses.
- Configured Express.js to serve the frontend and handle backend services seamlessly.
- Established a development proxy and used browser dev tools for comprehensive debugging.
- Successfully deployed the full-stack application to AWS, accessible at https://startup.dmtraininggrounds.com.

## Login Functionality Deliverable
This deliverable secures the application by implementing user authentication and restricted access.

- Enabled user registration and encrypted credential storage in MongoDB.
- Implemented secure login/logout flows with password validation.
- Dynamically updated headers to display the logged-in username or "Login" when appropriate.
- Restricted key pages to authenticated users, redirecting unauthorized visitors to a login prompt.
- Confirmed full functionality in production at https://startup.dmtraininggrounds.com.
