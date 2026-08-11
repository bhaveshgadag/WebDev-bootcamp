import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {    
    const d = new Date();
    let day = d.getDay();

    res.render("index.ejs",
        {day : day}
    );
});

app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`);
});