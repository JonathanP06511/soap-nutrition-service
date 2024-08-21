# Information API

This project is a SOAP-based Nutritious Food Service built with Node.js and Express. It provides an endpoint that returns a list of nutritious foods with their respective calorie, protein, fat, and carbohydrate content.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side execution.
- **Express**: Framework for Node.js that facilitates web application development.
- **SOAP**: Simple Object Access Protocol, used for creating and consuming web services.
- **fs**: Node.js module for working with the file system.
- **path**: Node.js module for handling and transforming file paths.

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone <repository URL>
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```

3. The SOAP service will be available at `http://localhost:3011/wsdl`.

## Project Structure

- `index.js`: Main file where the Express server and the SOAP service are configured.
- `service.wsdl`: WSDL file that defines the SOAP service contract.

## SOAP Operations

- `getFoods`: Returns a list of nutritious foods including their name, calorie content, protein, fat, and carbohydrates.

## Example Request

To consume this SOAP service, you would send a request to the `/wsdl` endpoint with the appropriate SOAP envelope defined by the `service.wsdl`.

## Docker

To run this project in a Docker container:

1. Build the Docker image:
    ```bash
    docker build -t soap-nutrition .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 3011:3011 soap-nutrition
    ```

3. The SOAP service will be available at `http://localhost:3011/wsdl` inside the Docker container.


