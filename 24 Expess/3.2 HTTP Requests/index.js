import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/contact", (req, res) => {
    res.send("Contact me on my email</br>abc@mail.com ");
});

app.get("/about", (req, res) => {
    res.send("<h1>About me</h1></br>Learning web development");
});

app.listen(3000, () => {
    console.log(`Server listening on port ${port}`);
});