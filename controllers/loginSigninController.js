const User = require("../models/userModel");
const Product = require("../models/productModel");

const mongoose = require("mongoose");

let curentUser = "6852372e829f365b753cf0ad";

module.exports.signIn_get = (req, res) => {
    res.render("form");
};

module.exports.logIn_get = (req, res) => {
    res.render("signIn");
};

module.exports.signIn_post = async (req, res) => {
    const {username, password, email} = req.body;
    
    try{
        const user = await User.create({
            username: username,
            password: password,
            email: email,
            wishlist: [],
            cart: [] 
        });
        curentUser = toString(user._id);
        console.log(user);
        res.redirect("/");
    }
    catch(err){
        console.log(err);
    }

};

module.exports.logIn_post = async (req, res) => {
    const {password, email} = req.body;
    
    try{
        const user = await User.findOne({password: password, email: email});
        curentUser = toString(user._id);
        console.log(user);
        res.redirect("/");
    }
    catch(err){
        console.log(err);
    }
};

module.exports.account_get = (req, res) => {
    User.findById(curentUser)
        .then((result) => {
            
            res.render("account", {user: result});
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports.AddToCart = async (req, res) => {
 try {
        // Знаходимо товар
        const prod = await Product.findById(req.body.index); // або req.params.index — залежить від роута

        if (!prod) {
            return res.status(404).send("Товар не знайдено");
        }

        // Знаходимо користувача
        const user = await User.findById(curentUser);

        if (!user) {
            return res.status(404).send("Користувача не знайдено");
        }

        // Додаємо продукт як об'єкт у cart
        user.cart.push({
            name: prod.name,
            price: prod.price,
            rate: prod.rate
        });

        // Зберігаємо юзера
        await user.save();

        // Рендеримо сторінку акаунту
        res.render("account", { user });
    } catch (err) {
        console.log(err);
        res.status(500).send("Помилка сервера");
    }
};