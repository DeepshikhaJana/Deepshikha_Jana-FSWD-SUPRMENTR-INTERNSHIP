const express = require("express");
const router = express.Router();

let authors = [{ id: 1, name: "Author One" }];

// GET all authors
router.get("/", (req, res) => {
  res.json(authors);
});

// POST author
router.post("/", (req, res) => {
  const newAuthor = { id: Date.now(), ...req.body };
  authors.push(newAuthor);
  res.json(newAuthor);
});

module.exports = router;
