# TextUtils

Visit TextUtils: [https://text-utils-react-app1.netlify.app/](https://text-utils-react-app1.netlify.app/)

## Overview
This project is a simple React-based text utility application called **TextUtils**. The application provides various text manipulation functionalities, including:

- Converting text to uppercase or lowercase
- Clearing the text
- Removing extra spaces
- Text pronunciation

Additionally, the app supports both light and dark themes, which can be toggled by the user.

## Technical Aspects

### 1. Component-Based Architecture
The application is organized into distinct, reusable function based components (`Navbar`, `TextForm`, `About`, `Alert`). This modular structure allows for easier maintenance and scalability.

### 2. State Management
**useState Hook**:
The `useState` hook is used to manage the application's state, such as theme mode (light or dark) and the alert messages. This hook allows you to create reactive components that update the UI in response to user actions.

### 3. React Router
**Routing**:
`React Router` is used to handle client-side routing. It enables navigation between the home page (where the text manipulation occurs) and the "About Us" page without reloading the page, maintaining a smooth user experience.

### 4. Conditional Rendering & Styling
- **Dynamic Styles**:
  Components like `About` and `TextForm` adjust their styles dynamically based on the current theme. This ensures that the application’s UI remains consistent and readable in both light and dark modes.
  
- **Conditional Content**:
  The `Alert` component conditionally renders based on whether an alert message is present.

### 5. Event Handling
- **Text Manipulation Functions**:
  Functions like `handleUpClick` and `handleLoClick` are tied to button click events, triggering text transformations and updating the state accordingly.
  
- **Mode Toggle**:
  The `toggleMode` function handles the theme switching logic, updating the state and applying the appropriate styles to the body element.

### 6. Bootstrap Integration
Bootstrap classes are used extensively for responsive design, layout, and components like the navbar and accordion. This allows for a polished and responsive UI with minimal custom CSS.

### 7. Alert System
**Real-Time Feedback**:
The application uses an alert system to provide immediate feedback to the user. The `showAlert` function sets an alert that is displayed for a short duration and then disappears.

### 8. Text Analysis and Utility Functions
**Text Processing**:
The `TextForm` component includes several utility functions to analyze and manipulate text, such as:

- Counting words and characters
- Removing extra spaces
- Using the Web Speech API for text-to-speech functionality

### 9. Performance Considerations
**Efficient Updates**:
By using React’s state management, the app ensures that only the necessary parts of the UI are re-rendered when the state changes, optimizing performance.
