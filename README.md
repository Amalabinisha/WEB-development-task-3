# WEB-development-task-3

# Book Management API

This project is a simple RESTful API built using Node.js and Express.js.  
It allows users to manage a collection of books with basic CRUD operations.

## What We Did
- Set up an Express.js server.
- Used `express.json()` middleware to handle JSON request data.
- Created an in-memory `books` array to store book data.
- Implemented the following routes:
  - **GET /books** – Retrieve all books.
  - **POST /books** – Add a new book (requires title and author).
  - **PUT /books/:id** – Update an existing book by ID.
  - **DELETE /books/:id** – Delete a book by ID.
- Returned appropriate status codes and messages for success and errors.
- Ran the server on port 3000 using `app.listen(3000)`.

## Purpose
To learn and practice building a basic REST API using Express.js for CRUD operations.

## Output Screenshot

<img width="1234" height="259" alt="Screenshot 2025-11-17 221435" src="https://github.com/user-attachments/assets/b570819f-0b82-4231-8b08-fa377cb855d5" />
