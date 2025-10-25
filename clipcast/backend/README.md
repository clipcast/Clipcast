# ClipCast Backend

This is the backend for the ClipCast application. It is built using TypeScript and Node.js, providing a RESTful API for managing clips.

## Getting Started

To get started with the backend, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd clipcast/backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Copy the `.env.example` file to `.env` and fill in the required values.

4. **Run the application**:
   ```bash
   npm start
   ```

## API Endpoints

The backend provides the following API endpoints:

- `GET /clips`: Retrieve a list of clips.
- `POST /clips`: Create a new clip.
- `GET /clips/:id`: Retrieve a specific clip by ID.
- `PUT /clips/:id`: Update a specific clip by ID.
- `DELETE /clips/:id`: Delete a specific clip by ID.

## Testing

To run the tests, use the following command:

```bash
npm test
```

## License

This project is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details.