# bitcoin-address-login

## Introduction

This project allows users to create and submit Bitcoin addresses. It includes both client-side and server-side functionality to handle Bitcoin address creation and validation.

## Features

- Create new Bitcoin addresses using `bitcoinjs-lib`
- Submit existing Bitcoin addresses
- Validate Bitcoin addresses
- Securely store generated Bitcoin addresses

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/akaday/bitcoin-address-login.git
   cd bitcoin-address-login
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```
   SSL_KEY_PATH=path/to/your/ssl/key.pem
   SSL_CERT_PATH=path/to/your/ssl/cert.pem

   DB_HOST=your_database_host
   DB_PORT=your_database_port
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name

   ENCRYPTION_KEY=your_encryption_key
   ```

4. Start the server:
   ```
   npm start
   ```

## Usage

1. Open `index.html` in your browser.

2. To create a new Bitcoin address, click the "Create Bitcoin Address" button. The generated address will be displayed on the page.

3. To submit an existing Bitcoin address, enter the address in the input field and click the "Submit" button.

## Security

- Ensure that the database is properly configured with strong authentication and encryption.
- Use environment variables to store sensitive information securely.
- Implement access controls to restrict who can read and write to the database and files.

## License

This project is licensed under the MIT License.
