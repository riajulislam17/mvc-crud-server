const express = require("express");
const {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const BookModel = require("../models/bookModel");
const requireAuth = require("../middleware/requireAuth");

const router = express();

// create a book
router.post("/addBook", requireAuth, createBook);

// get all books
router.get("/getBooks", getBooks);

// get a book
router.get("/getBook/:id", getBook);

// update a book
router.put("/updateBook/:id", requireAuth, updateBook);

// delete a book
router.delete("/deleteBook/:id", requireAuth, deleteBook);

module.exports = router;
