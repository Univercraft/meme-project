# Meme Project

## Overview
The Meme Project is a web application that allows users to create profiles and manage a personal library of memes. It is built using Angular for the frontend and Directus for the backend.

## Features
- User profile management: Users can create and edit their profiles.
- Meme library: Users can view, add, edit, and delete memes in their personal library.
- Meme editor: A user-friendly interface for creating new memes.

## Project Structure
```
meme-project
├── angular-app          # Frontend application built with Angular
│   ├── src              # Source files for the Angular application
│   ├── angular.json     # Angular CLI configuration
│   ├── package.json     # NPM dependencies for Angular
│   └── tsconfig.json    # TypeScript configuration
├── directus-backend     # Backend application built with Directus
│   ├── config           # Configuration files for Directus
│   ├── migrations       # Database migration scripts
│   └── package.json     # NPM dependencies for Directus
└── README.md            # Project documentation
```

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your machine.
- Angular CLI installed globally.

### Frontend Setup
1. Navigate to the `angular-app` directory:
   ```
   cd angular-app
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the Angular application:
   ```
   ng serve
   ```

### Backend Setup
1. Navigate to the `directus-backend` directory:
   ```
   cd directus-backend
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Configure the Directus settings in `config/directus-config.yml`.
4. Run the migration script to set up the database:
   ```
   node migrations/create-meme-library.js
   ```
5. Start the Directus backend.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.