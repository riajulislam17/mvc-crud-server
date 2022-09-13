const express = require("express");
const {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const BookModel = require("../models/bookModel");

const router = express();

// create a book
router.post("/addBook", createBook);

// get all books
router.get("/getBooks", getBooks);

// get a book
router.get("/getBook/:id", getBook);

// update a book
router.put("/updateBook/:id", updateBook);

// delete a book
router.delete("/deleteBook/:id", deleteBook);

module.exports = router;
