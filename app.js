const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log("Server is up on port " + port);
});