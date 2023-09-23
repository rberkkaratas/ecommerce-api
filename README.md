# E-Commerce API with Express & MongoDB

v1.1.0

## Description

This is a simple API for an e-commerce application. It uses Express.js for routing and MongoDB for the database. It has the following features:
- CRUD operations for products and orders
- ✅CORS, Rate Limiting, and Sanitize middleware
- ✅User authentication with JWT
- Image upload with Multer 
- Pagination
- Filtering
- Sorting
- Searching
- ✅Error handling
- Logging
- Unit and integration testing 
- Deployment to Vercel

## Installation

1. Clone the repository

```bash
git clone https://github.com/iamberk/ecommerce-api
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file in the root directory and add the following environment variables

```bash
PORT = 5000

MONGO_URI = your-mongodb-uri

JWT_SECRET_KEY = <JWT_SECRET_KEY>
JWT_EXPIRES_IN = "7d"

JWT_TEMPORARY_KEY = <JWT_TEMPORARY_KEY>
JWT_TEMPORARY_EXPIRES_IN = "3m"
```

4. Run the app

```bash
npm start
```

## Usage

### Authentication

In this version, this API uses JWT for authentication. You can register a user with the **/api/v1/register** endpoint. You can login with the **/api/v1/login** endpoint. You can get a user by JWT with the **/api/v1/me** endpoint. You can update a user with the **/api/v1/update-user/:id** endpoint. You can delete a user with the **/api/v1/delete-user/:id** endpoint.

#### Get all Users

```http
GET /api/v1/get-users
```

#### Get a User

```http
GET /api/v1/get-user/:id
```

#### Get a User by JWT

```http
GET /api/v1/me
```

- Headher: Authorization: Bearer ${token}

#### Register a User

```http
POST /api/v1/register
```

- Body: firstname, lastname, pronounce, email, password

#### Login a User

```http
POST /api/v1/login
```

- Body: email, password

#### Update a User

```http
PATCH /api/v1/update-user/:id
```
- Body: password, firstname, lastname

#### Delete a User

```http
DELETE /api/v1/delete-user/:id
```

### Categories

In this version, category feature is not included. It will be added in the next versions.

### Products

In this version, product feature is not included. It will be added in the next versions.

### Orders

In this version, order feature is not included. It will be added in the next versions.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

ISC