const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON

let books = [];

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// POST add a new book
app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Title and author required" });
  }
  const newBook = {
    id: books.length + 1,
    title,
    author,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update a book by ID
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Title and author required" });
  }

  book.title = title;
  book.author = author;
  res.json(book);
});

// DELETE a book by ID
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = books.length;
  books = books.filter((b) => b.id !== id);

  if (books.length === initialLength) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json({ message: "Book deleted" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
