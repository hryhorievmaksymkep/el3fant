module.exports.signIn_get = (req, res) => {
    res.render("SignIn");
};

module.exports.logIn_get = (req, res) => {
    res.render("form");
};

module.exports.signIn_post = (req, res) => {
    res.send("хуй");
};

module.exports.logIn_post = (req, res) => {
    res.send("хуй");
};