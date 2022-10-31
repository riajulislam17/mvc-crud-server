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
const requireAdmin = require("../middleware/requireAdmin");

const router = express();

// create a book
router.post("/addBook", requireAuth, requireAdmin, createBook);

// get all books
router.get("/getBooks", getBooks);

// get a book
router.get("/getBook/:id", getBook);

// update a book
router.put("/updateBook/:id", requireAuth, requireAdmin, updateBook);

// delete a book
router.delete("/deleteBook/:id", requireAuth, requireAdmin, deleteBook);

module.exports = router;
