import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/home", (req, res) => {
    res.render("home.ejs");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});