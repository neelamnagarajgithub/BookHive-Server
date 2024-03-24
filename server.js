const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors=require('cors');
const BookRouter = require("./Routes/BookRoute");
const app = express();

dotenv.config({ path: "./config.env" });

app.use(express.json());

app.use(
  cors({
    origin: "https://book-hive-silk.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("Database is connected");
});

app.use("/api/books", BookRouter);

port = process.env.port;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
