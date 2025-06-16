const Products = require("../models/productModel");

module.exports.shop_get = (req, res) => {
    Products.find()
        .then((result) =>{res.render("shop", {
            products: result,                 
            categoryFilter: "all",
            priceFilter: "all",
            sortBy: "from-chip-to-expensive"
        })})
        .catch((err) =>{
            console.log(err);
        });
};
module.exports.shop_post = (req, res) => {
    let sort = {}, filter = {};

    const categoryFilter = req.body.categories || "all";
    const priceFilter = req.body.prices || "all";
    const sortBy = req.body.sortby || "from-chip-to-expensive";

    if(categoryFilter !== "all"){
        filter.categories = {$in: [categoryFilter]};
    };
    if(priceFilter !== "all"){
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
    if (sortBy === "from-chip-to-expensive") {
        sort.price = 1;
    } else if (sortBy === "from-expensive-to-chip") {
        sort.price = -1;
    };

    Products.find(filter).sort(sort)
        .then((result) =>{
            res.render("shop", {
                products: result,
                categoryFilter,
                priceFilter,
                sortBy
            });
        })
        .catch((err) =>{
            console.log(err);
        });
};
//$in: [categoryFilter]
module.exports.shopLivingRoom_get = (req, res) =>{
    Products.find({categories : {$in : ["livingRoom"]}})
        .then((result) =>{res.render("shop", {
            products: result,                 
            categoryFilter: "living-room",
            priceFilter: "all",
            sortBy: "from-chip-to-expensive"
        })})
        .catch((err) =>{
            console.log(err);
        });
};
module.exports.shopBedRoom_get = (req, res) =>{
    Products.find({categories : {$in : ["bedroom"]}})
        .then((result) =>{res.render("shop", {
            products: result,                 
            categoryFilter: "bedroom",
            priceFilter: "all",
            sortBy: "from-chip-to-expensive"
        })})
        .catch((err) =>{
            console.log(err);
        });
};
module.exports.shopKitchen_get = (req, res) =>{
    Products.find({categories : {$in : ["kitchen"]}})
        .then((result) =>{res.render("shop", {
            products: result,                 
            categoryFilter: "kitchen",
            priceFilter: "all",
            sortBy: "from-chip-to-expensive"
        })})
        .catch((err) =>{
            console.log(err);
        });
};
module.exports.shopSearch_post = (req, res) =>{
    const searchQuery = req.body.search;
    if (typeof searchQuery === "string" && searchQuery.trim() !== ""){
        Products.find({name : {$regex: searchQuery, $options: "i"}})
            .then((result) => {
                res.render("shop", {
                    products: result,
                    categoryFilter: "all",
                    priceFilter: "all",
                    sortBy: "from-chip-to-expensive",
                })
            })
            .catch((err) =>{
                console.log(err);
            });
    };
};