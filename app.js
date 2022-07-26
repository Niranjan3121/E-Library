const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const PORT=process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://admin:MrYfQ!$5MFT!vK.@cluster0.lffzygn.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));

