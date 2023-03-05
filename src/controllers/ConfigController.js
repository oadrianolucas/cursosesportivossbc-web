const axios = require("axios")
axios.defaults.baseURL = "http://localhost:3030/api/v1/"
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"

const ConfigController = {
  GetHome(req, res) {
    return res.render("home")
  },
  GetLogin(req, res) {
    return res.render("login")
  },
  GetDashboard(req, res) {
    axios
      .get("/dashboard")
      .then((api) => {
        res.send(api.data)
      })
      .catch((err) => {
        res.send({ status: err.data })
      })
  },
}

module.exports = ConfigController
