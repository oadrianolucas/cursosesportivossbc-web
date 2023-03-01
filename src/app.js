const express = require("express")
const path = require("path")
const { engine } = require("express-handlebars")
const app = express()
const routes = require("./routes")
app.use(express.urlencoded({ extended: true }))
require("dotenv").config()
app.set("port", process.env.PORT || 3000)
app.use(express.static("public"))
app.use(express.static(path.join(__dirname, "/public")))
app.set("views", path.join(__dirname, "views"))
app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    extname: "hbs",
    helpers: {
      formatDate: (date) => {
        return moment(date).format("DD/MM/YYYY")
      },
    },
  })
)
/* app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg")
  res.locals.error_msg = req.flash("error_msg")
  res.locals.user = req.session.user
  next()
}) */
app.set("view engine", ".hbs")
app.use("/", routes)

module.exports = app
