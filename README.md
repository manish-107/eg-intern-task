# To-Do List Application

A simple and elegant To-Do List application built with modern web technologies. This app allows users to manage their tasks efficiently, featuring a clean design inspired by a provided Figma UI.

## Tech Stack

- **Next.js**: A React framework for building server-side rendered and static web applications.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Context API**: For state management, providing a way to share values across components without prop drilling.

## Features

### Core Features
- **Add New Task**: Users can enter a task in the input field and add it to the list by clicking the "Add" button. Tasks cannot be empty.
- **Mark Task as Complete**: Each task has a checkbox that users can click to mark it as completed, visually differentiating completed tasks (e.g., checkmark and strikethrough styling).
- **Clear All Tasks**: A "Clear All" button allows users to delete all tasks in the list at once.
- **Task Counter**: Displays the total number of tasks currently in the list, helping users keep track of their tasks.

### Other Features
- **Sort Options**:
  - Sort by Not Completed: Displays only the tasks that are yet to be completed.
  - Sort by Completed: Displays only the tasks that are marked as completed.
  - Sort by Recent To-Do: Sorts tasks based on their recency, showing newly added tasks at the top.
- **Edit Task**: Each task has an "Edit" button that allows users to modify the task description.
- **Delete Task**: Each task has a "Delete" button to remove it from the list.

