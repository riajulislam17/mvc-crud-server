const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 7000;
app.use(express.json());

const bookRoutes = require("./routes/bookRoute");
const userRoutes = require("./routes/userRoute");

// connect to DB
const url =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lkuqr.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected Successful"))
  .catch((err) => console.log(err));

// routes for book
app.use("/api/books", bookRoutes);

// routes for user
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
