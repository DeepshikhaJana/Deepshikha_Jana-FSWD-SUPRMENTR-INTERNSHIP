const express = require("express");
const router = express.Router();

let books = [{ id: 1, title: "Book One", authorId: 1 }];

// GET all books
router.get("/", (req, res) => {
  res.json(books);
});

// GET single book
router.get("/:id", (req, res) => {
  const book = books.find((b) => b.id == req.params.id);
  res.json(book);
});

// POST new book
router.post("/", (req, res) => {
  const newBook = { id: Date.now(), ...req.body };
  books.push(newBook);
  res.json(newBook);
});

// PUT update book
router.put("/:id", (req, res) => {
  books = books.map((b) => (b.id == req.params.id ? { ...b, ...req.body } : b));
  res.json({ message: "Book updated" });
});

// DELETE book
router.delete("/:id", (req, res) => {
  books = books.filter((b) => b.id != req.params.id);
  res.json({ message: "Book deleted" });
});

module.exports = router;
