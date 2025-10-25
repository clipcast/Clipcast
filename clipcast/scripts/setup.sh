#!/bin/bash

# This script sets up the ClipCast application environment

# Exit immediately if a command exits with a non-zero status
set -e

# Function to install npm packages
install_npm_packages() {
    echo "Installing npm packages..."
    npm install
}

# Function to install backend dependencies
install_backend_dependencies() {
    echo "Installing backend dependencies..."
    cd backend
    npm install
    cd ..
}

# Function to install frontend dependencies
install_frontend_dependencies() {
    echo "Installing frontend dependencies..."
    cd frontend
    npm install
    cd ..
}

# Function to copy environment variables
copy_env_variables() {
    echo "Copying environment variables..."
    cp .env.example .env
}

# Main setup function
main() {
    install_npm_packages
    install_backend_dependencies
    install_frontend_dependencies
    copy_env_variables
    echo "Setup completed successfully!"
}

# Execute the main function
main