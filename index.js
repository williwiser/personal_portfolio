import express from "express";

const app = express();
const port = process.env.PORT || 3000;
const today = new Date;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        year: today.getFullYear()
    });
});

app.get("/about", (req, res) => {
    res.render("about.ejs", {
        year: today.getFullYear()
    });
});

app.get("/projects", (req, res) => {
    res.render("projects.ejs", {
        year: today.getFullYear()
    });
});

app.post("/submit", (req, res) => {
});

app.listen(port, () => {
    console.log(`Running on port ${port}.`);
});