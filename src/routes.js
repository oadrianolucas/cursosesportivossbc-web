const router = require("express").Router()
const configController = require("./controllers/ConfigController")
const userController = require("./controllers/UserControllers")

router.get("/", configController.GetHome)
router.get("/singin", configController.GetLogin)
router.get("/user/dashboard", configController.GetDashboard)
router.post("/token/confirm/password", userController.PostConfirmAccount)
router.post("/signup", userController.PostSignUp)
router.post("/login", userController.PostLogin)

module.exports = router
