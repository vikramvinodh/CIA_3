const express = require("express");
const path = require("path");
const connectToMongo = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

connectToMongo();

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
dotenv.config();

app.use("/public", express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

app.use((req, res, next) => {
  res.set('Content-Security-Policy', "img-src 'self' data: blob:");
  next();
});

app.use("/auth", require("./Routes/auth.controller"));
app.use("/blog", require("./Routes/Blogs/blog.controller"));
app.use("/blog-category", require("./Routes/Blogs/BlogCategory.controller"));
app.use("/blog-author", require("./Routes/Blogs/BlogAuthor.controller"));


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", 'index.html'));
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on ${process.env.PORT}`)
);

