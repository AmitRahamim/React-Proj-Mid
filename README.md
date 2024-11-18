# React-Proj-Mid
**React Project - User Management & Todo/Posts System**

**Description**
This project is a React-based application designed to manage users, their todos, and posts. The app allows users to view and interact with a list of employees, edit their information, add todos, and create posts. Users can also view detailed information about each employee, mark todos as complete, and perform CRUD operations on user-related data.

This application uses a component-based architecture where each component handles a specific feature or section of the system, such as viewing users, adding todos, and displaying posts.

**Features**
**User Management:**

Display a list of users with editable fields for name and email.
Option to update user information (name, email).
Option to delete users from the list.

**Todo Management:**

Display todos for each user.
Mark todos as "completed".
Option to add new todos for each user.
Post Management:

Display posts for each user.
Option to add new posts for each user.

**User Details:**

Ability to display additional details for each user upon clicking a user.

**Search Functionality:**

Search users by name or email.
Responsive User Interface:

Built with React, styled using basic CSS.
**Technologies Used :**
React: A JavaScript library for building user interfaces.
JSX: JavaScript syntax extension used with React for defining the UI structure.
CSS: Used for styling the components.
Axios: For making HTTP requests to fetch data from the external JSONPlaceholder API.
Git: For version control.

**Project Structure
The project is structured as follows:**

src/: Contains all the React components and application logic.
App.jsx: The main component that serves as the entry point for the application.
UserComp.jsx: Displays a list of users. It also includes functionality for editing and deleting users.
UserOtherData.jsx: Displays additional information for a specific user when clicked.
UserTodosAndPosts.jsx: Displays the todos and posts for each user.
UserAddPage.jsx: Provides the form for adding new users to the system.
UserTodoAddPage.jsx: Provides the form for adding todos to specific users.
UserPostAddPage.jsx: Provides the form for adding posts to specific users.
main.jsx: The entry point where the React application is rendered to the DOM.

**Features in Detail**

**User Management**

Display User Information: Users can be listed with their names and emails.
Update User: Edit the user’s name and email.
Delete User: Users can be deleted from the list.

**Todo Management**
Display Todos: View todos related to a specific user.
Mark Todo Completed: Mark todos as completed.
Add Todo: Option to add new todos for each user.

**Post Management**

Display Posts: View posts associated with each user.
Add Post: Option to add new posts for each user.

**Responsive UI**
The application is responsive, with separate components for different tasks and interactions.
**Search Functionality**
Users can search for other users by their name or email using a text box.


**How to Run the Project**
Clone the repository:

bash
Copy code
git clone and
Navigate to the project directory:

bash
Copy code
cd React-Proj-Mid or cd MidProj/src 
Install dependencies:

Install the required dependencies with npm 

bash
Copy code
npm install

Run the application:

After installing dependencies, start the application:

bash
Copy code
npm run dev

This will open the application in your browser at some http adress that he will give
