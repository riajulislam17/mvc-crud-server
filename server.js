const express = require("express");
const bookRoutes = require("./routes/bookRoute");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 7000;
app.use(express.json());

// connect to DB
const url =
  "mongodb+srv://mern-crud:9gQI8CezKuBXaJca@cluster0.lkuqr.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected Successful"))
  .catch((err) => console.log(err));

// routes
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
