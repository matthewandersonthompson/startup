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

### Quiz/Learning Module
![Quiz and Learning Module](src/assets/images/Quiz:Learning.png)
*Interactive lessons and quizzes for new Dungeon Masters.*

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
    - **D&D 5e API**: The [D&D 5e API](https://www.dnd5eapi.co/) will be used to fetch data like spells, monsters, and other in-game details to enhance the gameplay experience.
- **Authentication**: The app will use a custom authentication system built with Express and MongoDB. Users will log in using an email and password. JWT tokens will manage session authentication and be stored securely in cookies.
- **Database**: MongoDB will store user data, including quiz scores, lesson progress, and chatbot performance. Predefined quiz questions will also be stored in MongoDB and pulled randomly for each quiz.
- **WebSockets**: WebSockets will manage real-time interactions between the DM and simulated players during the chatbot sessions.
>>>>>>> b7f3438fe72e18e478429ef506def39c74873462



## HTML Deliverable  

For this deliverable, I structured my application using HTML to represent key functionality placeholders.

- **HTML Pages** - Six HTML pages represent different functionalities, including login, dashboard, database, quizzes, chatbot interaction, and home.
- **Links** - Each page contains a navigation bar with links to every other page in the application, ensuring seamless transitions between features.
- **Text** - Each page includes placeholder text representing the features the application will eventually support, such as quizzes, player data, and chatbot scenarios.
- **Images** - Added images on the quizzes, dashboard, and chatbot pages to enhance visual engagement and represent future functionality.
- **DB/Login** - Login form includes email and password input fields, with a placeholder for displaying the logged-in user's name. The database page contains placeholders for player data, game session logs, and quiz results.
- **WebSocket** - The chatbot page includes a placeholder for real-time communication, which will simulate Dungeon Master scenarios with an AI-powered chatbot.


## CSS Deliverable
For this deliverable, I styled the application to achieve a consistent, responsive design.

- **Header, Footer, and Main Content Body**- Consistent styling across all pages with proper spacing, color, and alignment.
- **Navigation Elements**- Removed bold styling, refined padding, and applied hover effects to match the overall theme.
- **Responsive to Window Resizing**- Fully responsive design that adapts smoothly to various screen sizes and devices.
- **Modal Windows**- Clean, functional modals for login and signup, with responsive resizing on all devices.
- **Application Elements**- Applied good contrast, spacing, and clean layout for modern visual appeal.
- **Application Text Content**- Ensured consistent fonts, sizes, and spacing for all headings, body text, and links.
- **Application Images**- Placeholder images in place for future visual elements, with room for styling updates as needed.


## Startup React Deliverable
For this deliverable, I used JavaScript and React to convert the startup application into a single-user version, setting up components, routing, and placeholders for future functionality.

- **Bundling and Optimization** - Successfully bundled with Vite, ensuring efficient production-ready code.
- **Component Structure** - Created components for each main part of the app, including:
    - **Quizzes** - Functional quiz with scoring, question progression, and reset options.
    - **Chatbot** - Placeholder setup for future AI interactivity.
    - **Auth** - Basic login and signup placeholders.
    - **Dashboard** - Static links and placeholders ready for user data.
-  **React Router Integration** - Configured routing for smooth navigation between Home, Dashboard, Quizzes, and Chatbot pages.
- **GitHub and Developer Info** - My name and a link to my GitHub repository are prominently displayed on the homepage as required.
- **Styling and Layout Consistency** - Applied custom CSS to ensure cohesive styling across all components, supporting a full-screen layout.
- **State Management with Hooks** - Used React useState hook to manage component states, including quiz score tracking and question navigation.


## Startup Service Deliverable
For this deliverable, I added backend functionality to the DM Training Grounds application using Node.js and Express.js. This includes serving the frontend, creating API endpoints, and integrating third-party services to enhance the user experience.

- **Backend APIs**: Added custom endpoints to manage interactions with the AI-powered chatbot:
  - **`/api/chatbot/start`** - Initializes a new chatbot session, creating a scenario for Dungeon Master training.
  - **`/api/chatbot`** - Handles real-time communication between the DM and AI-simulated players.
  - **`/example`** - Demonstrates MongoDB integration with simple insert and query operations.
- **Third-Party API Integration**: Integrated OpenAI’s GPT-3.5 API to simulate realistic player interactions in the chatbot feature, providing unique responses to DM inputs during training sessions.
- **Static Middleware**: Configured Express.js to serve the frontend using static middleware, ensuring the application is production-ready and accessible.
- **Development Tools**: 
  - Configured a proxy in `vite.config.js` to forward API requests during development, simplifying backend debugging.
  - Used browser developer tools and the Node.js debugger in VS Code to ensure functionality across frontend and backend.
- **Deployment**: Successfully deployed the full-stack application to AWS using the provided `deployService.sh` script. The application is live and accessible at [https://startup.dmtraininggrounds.com](https://startup.dmtraininggrounds.com).

- **Summary**: Overall this deliverable adds essential backend functionality to support the DM Training Grounds' core features while maintaining a clean and scalable architecture.
