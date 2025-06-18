const mongoose = require("mongoose");
const express = require("express");
const http = require("http");
const fs = require("fs");
const path = require('path');

const Products = require("./models/productModel");
const Blogs = require("./models/blogModel");
const Users = require("./models/userModel");

const authRoutes = require("./routes/loginSigninRoutes");
const shopRoutes = require("./routes/shopRoutes");

//express app
const app = express();
const PORT = process.env.PORT || 10000;

//ejs
app.set("view engine", "ejs");
app.set("views", "pages");

//DB
mongoose.connect('mongodb+srv://maksym:1234@cluster0.fcn5ca4.mongodb.net/el3fant?retryWrites=true&w=majority&appName=Cluster0', {
})
.then(() => app.listen(3000))
.catch((err) => console.error('Error:', err));

//routing
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "styles", "imgs")));

app.get("/", async (req, res) => {
    try {
        const products = await Products.find({new: true});
        const blogs = await Blogs.find();
        res.render("index", { blogs, products });
    } catch (err) {
        console.log(err);
        res.status(500).send("Помилка сервера");
    }
});

app.get("/blog", (req, res) =>{
    Blogs.find()
    .then((result) =>{res.render("blog", {blogs: result})})
    .catch((err) =>{
        console.log(err);
    });
});

app.get("/contacts", (req, res) =>{
    res.render("contacts");
});

app.get("/product/:id", (req, res) =>{
    const id = req.params.id;
    Products.findById(id)
    .then((result) =>{res.render("product", {product: result})})
    .catch((err) =>{
        console.log(err);
    });
});

app.use(authRoutes);
app.use(shopRoutes);

app.use((req, res) => {
    res.render("error404");
});