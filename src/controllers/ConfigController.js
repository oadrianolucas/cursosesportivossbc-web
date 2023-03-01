const ConfigController = {
  GetHome(req, res) {
    return res.render("home")
  },
  GetLogin(req, res) {
    return res.render("login")
  },
  GetDashboard(req, res) {
    return res.render("user/dashboard")
  },
  GetCourses(req, res) {
    return res.render("user/courses")
  },
  GetRegistryCourse(req, res) {
    return res.render("user/registry_course")
  },
  GetRegistryCourseConfirm(req, res) {
    return res.render("user/registry_course_confirm")
  },
}

module.exports = ConfigController
