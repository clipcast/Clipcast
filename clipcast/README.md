# ClipCast Application

## Overview
ClipCast is a web application designed to manage and share clips. It consists of a backend service built with TypeScript and a frontend application using React. This README provides instructions for setting up and running the application.

## Project Structure
The project is organized into the following directories:

- **backend/**: Contains the backend service code.
- **frontend/**: Contains the frontend application code.
- **scripts/**: Contains scripts for setting up the project.
- **.devcontainer/**: Contains configuration for the development container.
- **.github/**: Contains CI/CD workflows.

## Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Docker (for development container)
- TypeScript (for backend and frontend)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd clipcast
```

### 2. Install Dependencies
#### Backend
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

#### Frontend
Navigate to the frontend directory and install dependencies:
```bash
cd ../frontend
npm install
```

### 3. Environment Variables
Copy the example environment file and update it with your configuration:
```bash
cp .env.example .env
```

### 4. Running the Application
#### Backend
To start the backend server, run:
```bash
cd backend
npm start
```

#### Frontend
To start the frontend application, run:
```bash
cd frontend
npm start
```

### 5. Development Container
To use the development container, open the project in a compatible IDE and follow the instructions to build and run the container.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.