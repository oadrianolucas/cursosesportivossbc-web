const axios = require("axios")
axios.defaults.baseURL = "http://localhost:3030/api/v1/"
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"
const UserController = {
  PostLogin(req, res) {
    const email = req.body.email
    const password = req.body.password
    const data = {
      email: email,
      password: password,
    }
    axios
      .post("login", data, {
        Accept: "application/json",
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((api) => {
        //Login não funciona
      })
      .catch((err) => {
        res.send("err: " + err)
      })
  },
  PostSignUp(req, res) {
    const email = req.body.email
    const password = req.body.password
    const compare_password = req.body.compare_password
    if (password == compare_password) {
      const data = {
        email: email,
        password: password,
      }
      axios
        .post("signup", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((api) => {
          if (!api.data.error) {
            const msg = api.data
            req.flash("success_msg", msg)
            res.render("user/confirm_account", data)
          } else {
            const msg = api.data.error.email
            req.flash("error_msg", msg)
            res.redirect("/singin")
          }
        })
        .catch((err) => {
          res.send("err: " + err)
        })
    } else {
      const msg = "Senhas não coincidem."
      req.flash("error_msg", msg)
      res.redirect("/singin")
    }
  },
  PostConfirmAccount(req, res) {
    const email = req.body.email
    const token = req.body.token
    const data = {
      email: email,
      token: token,
    }
    axios
      .post("email/token", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((api) => {
        res.json({ data: api.data })
      })
      .catch((err) => {
        res.send("err: " + err)
      })
  },
}

module.exports = UserController
