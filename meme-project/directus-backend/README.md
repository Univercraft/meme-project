# README for Directus Backend

This directory contains the backend setup for the "meme-project" using Directus. Below are the instructions and information needed to set up and run the Directus backend.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)
- A database (e.g., MySQL, PostgreSQL) configured and accessible

## Installation

1. Navigate to the `directus-backend` directory:
   ```
   cd directus-backend
   ```

2. Install the necessary dependencies:
   ```
   npm install
   ```

3. Configure the Directus settings in the `config/directus-config.yml` file. Ensure that the database connection details are correct.

## Running the Backend

To start the Directus backend, run the following command:
```
npx directus start
```

This will start the Directus server, and you can access the API at `http://localhost:8055`.

## Migrations

The `migrations` directory contains scripts for setting up the database schema. To run the migration for creating the meme library, execute:
```
npx directus migrations:run
```

## API Documentation

Refer to the Directus documentation for details on how to interact with the API and manage your data.

## Contributing

If you wish to contribute to the project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.