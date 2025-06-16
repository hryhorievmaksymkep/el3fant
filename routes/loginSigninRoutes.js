const {Router} = require("express");
const loginSigninController = require("../controllers/loginSigninController");


const router = Router()

router.get( "/LogIn", loginSigninController.logIn_get);
router.post( "/LogIn", loginSigninController.logIn_post);
router.get( "/SignIn", loginSigninController.signIn_get);
router.post( "/SignIn", loginSigninController.signIn_post);

module.exports = router;