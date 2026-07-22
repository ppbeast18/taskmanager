# 📋 Task Management System

A modern and responsive **Task Management System** built using **React.js**, **Firebase Authentication**, and **Cloud Firestore**. The application enables users to securely manage their personal tasks with features such as authentication, task creation, editing, deletion, searching, filtering, and dashboard statistics.

---

# 🚀 Project Overview

The Task Management System is a web application that helps users efficiently organize and manage their daily tasks.

Each registered user has a secure account and can:

- Register and Login securely
- Create personal tasks
- Edit existing tasks
- Delete tasks
- Search tasks instantly
- Filter tasks by status
- View task statistics
- Store data securely using Firebase Firestore

The application is fully responsive and provides a clean user experience across desktop and mobile devices.

---

# 🛠 Technology Stack

## Frontend

- React.js (Vite)
- React Router DOM
- Tailwind CSS
- JavaScript (ES6+)

## Backend

- Firebase Authentication
- Cloud Firestore Database

## Development Tools

- Visual Studio Code
- Git
- GitHub
- Vercel

---

# ⚙️ Setup Instructions

## 1. Clone the Repository

```bash
git clone https://github.com/ppbeast18/taskmanager.git
```

## 2. Navigate to the Project

```bash
cd taskmanager/task-management-system
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start Development Server

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

# 🔥 Firebase Configuration

Create a Firebase project and enable:

- Authentication
  - Email/Password Sign-In

- Cloud Firestore Database

Update your Firebase configuration inside:

```
src/firebase/firebase.js
```

---

# 📁 Folder Structure

```
task-management-system
│
├── src
│   ├── assets
│   ├── components
│   ├── context
│   │     └── AuthContext.jsx
│   │
│   ├── firebase
│   │     └── firebase.js
│   │
│   ├── hooks
│   │
│   ├── layouts
│   │
│   ├── pages
│   │     ├── Login.jsx
│   │     ├── Register.jsx
│   │     ├── Dashboard.jsx
│   │     └── NotFound.jsx
│   │
│   ├── routes
│   │     └── ProtectedRoute.jsx
│   │
│   ├── services
│   │     └── taskService.js
│   │
│   ├── utils
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 🏗 Architecture Explanation

The application follows a modular component-based architecture.

```
                    User
                      │
                      ▼
               React Components
                      │
                      ▼
              React Router DOM
                      │
                      ▼
               Authentication
              (Firebase Auth)
                      │
                      ▼
            AuthContext Provider
                      │
                      ▼
              Dashboard Component
                      │
                      ▼
              Task Service Layer
                      │
                      ▼
             Cloud Firestore Database
```

### Architecture Components

### Authentication Layer

- User Registration
- User Login
- Logout
- Session Persistence

### Routing Layer

- Public Routes
- Protected Routes
- Route Guard using AuthContext

### Service Layer

Handles all Firestore operations:

- Create Task
- Read Tasks
- Update Task
- Delete Task

### Database Layer

Cloud Firestore stores:

- User Tasks
- Status
- Priority
- Due Date
- Creation Time
- User ID

---

# ✨ Features

## Authentication

- User Registration
- User Login
- Logout
- Protected Dashboard

## Task Management

- Add Task
- Edit Task
- Delete Task
- View Tasks

## Dashboard

- Total Tasks
- Pending Tasks
- Completed Tasks

## Search & Filter

- Search by Title
- Search by Description
- Filter by Task Status

## User Experience

- Responsive Design
- Clean UI
- User-specific Tasks
- Secure Authentication

---

# 💡 Challenges Faced

During development several challenges were encountered:

- Configuring Firebase Authentication
- Implementing Protected Routes
- Managing React State efficiently
- Performing Firestore CRUD operations
- Restricting users to view only their own tasks
- Handling asynchronous Firebase operations
- Maintaining responsive layouts across devices
- Debugging routing and JSX syntax errors

These challenges were resolved through component restructuring and proper Firebase integration.

---

# 🚀 Future Improvements

Potential enhancements include:

- Task Categories
- Drag and Drop Task Management
- Dark Mode
- Due Date Notifications
- Email Reminders
- Task Attachments
- Task Priority Colors
- Real-time Firestore Updates
- User Profile Management
- Team Collaboration
- Activity History
- Calendar View
- Export Tasks to PDF/Excel
- Unit Testing
- Offline Support

---

# 👨‍💻 Author

**sai**

React Developer | Firebase | JavaScript | Tailwind CSS

GitHub: https://github.com/ppbeast18
