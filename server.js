const mongoose = require("mongoose");
const express = require("express");
const http = require("http");
const fs = require("fs");
const path = require('path');
const Products = require("./models/productModel");
const Blogs = require("./models/blogModel");
const Users = require("./models/userModel");

//express app
const app = express();
const PORT = process.env.PORT || 10000;

//ejs
app.set("view engine", "ejs");
app.set("views", "pages");

//DB
mongoose.connect('mongodb+srv://maksym:1234@cluster0.fcn5ca4.mongodb.net/el3fant?retryWrites=true&w=majority&appName=Cluster0', {
})
.then(() => app.listen(PORT))
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

app.get("/shop", (req, res) =>{
    Products.find()
    .then((result) =>{res.render("shop", {products: result})})
    .catch((err) =>{
        console.log(err);
    });
});

app.post("/shop", (req, res) =>{
    let sort = {}, filter = {};

    const categoryFilter = req.body.categories || "all";
    const priceFilter = req.body.prices || "all";
    const sortBy = req.body.sortby || "from-chip-to-expensive";

    if(categoryFilter != null && categoryFilter !== "all"){
        filter.categories = {$in: [categoryFilter]};
    };
    if(priceFilter != null && priceFilter !== "all"){
        switch(priceFilter){
            case "0-5000":
                filter.price = {$gt: 0, $lte: 5000};
                break;
            case "5000-10000":
                filter.price = {$gte: 5000, $lte: 10000};
                break;
            case "10000-15000":
                filter.price = {$gte: 10000, $lte: 15000};
                break;
            case "15000-20000":
                filter.price = {$gte: 15000, $lte: 20000};
                break;
            case "20000-above":
                filter.price = {$gte: 20000};
                break;
        };
    };
    if(sortBy != null){
        if (sortBy === "from-chip-to-expensive") {
            sort.price = 1;
        } else if (sortBy === "from-expensive-to-chip") {
            sort.price = -1;
        };
    };

    Products.find(filter).sort(sort)
        .then((result) =>{
            res.render("shop", {products: result, categoryFilter, priceFilter, sortBy});
        })
        .catch((err) =>{
            console.log(err);
        });
});

app.get("/form", (req, res) =>{
    res.render("form");
});

app.get("/signIn", (req, res) =>{
    res.render("signIn");
});

app.get("/product/:id", (req, res) =>{
    const id = req.params.id;
    Products.findById(id)
    .then((result) =>{res.render("product", {product: result})})
    .catch((err) =>{
        console.log(err);
    });
});

app.use((req, res) => {
    res.render("error404");
});