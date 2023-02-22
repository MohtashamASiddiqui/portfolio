const express = require("express");
const { default: mongoose } = require("mongoose");
// const Article = require("./models/blog");
const blogRouter = require("./routes/routers");
const methodOverride = require("method-override");
const app = express();

mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// // app.use("/blog", blogRouter);

app.use("/waiting", (req, res) => {
  res.render("waiting");
});
// app.use("/blog", async(req, res) => {
//     const articles = await Article.find().sort({ createdAt: "desc" });
//     res.render("articles/blog", { arcticles: articles });
// });

app.use("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => console.log("Server started listening on port : 8080"));
