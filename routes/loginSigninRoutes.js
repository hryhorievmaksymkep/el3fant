const {Router} = require("express");
const loginSigninController = require("../controllers/loginSigninController");


const router = Router()

router.get( "/logIn", loginSigninController.logIn_get);
router.post( "/logIn", loginSigninController.logIn_post);
router.get( "/signIn", loginSigninController.signIn_get);
router.post( "/signIn", loginSigninController.signIn_post);
router.get( "/account", loginSigninController.account_get);

module.exports = router;