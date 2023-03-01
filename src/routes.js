const router = require("express").Router()
const configController = require("./controllers/ConfigController")

router.get("/", configController.GetHome)
router.get("/login", configController.GetLogin)
router.get("/dashboard", configController.GetDashboard)
router.get("/courses", configController.GetCourses)
router.get("/registry", configController.GetRegistryCourse)
router.get("/registry/confirm", configController.GetRegistryCourseConfirm)


module.exports = router
 