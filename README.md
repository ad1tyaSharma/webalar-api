# Contact Management Node.js Backend

This repository contains the Node.js backend for the Contact Management application.

## Getting Started

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Create a `.env` file based on `.env.example` and provide the required configuration.
4. Run the server using `npm start`.

## API Endpoints
- `GET /auth/:id`: Get the user by ID.
- `POST /auth/login`: Login user with email and password.
- `POST /auth/register`: Register new user with name, email, password, and profile picture.
- `POST /contact/allContacts`: Get all contacts created by logged-in users.
- `GET /contact/:id`: Get a specific contact by ID.
- `POST /contact/create`: Create a new contact.
- `PUT /contact/edit/:id`: Update a contact by ID.
- `DELETE /contact/delete/:id`: Delete a contact by ID.

## Technologies Used

- Node.js
- Express
- MongoDB 
- ...

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
