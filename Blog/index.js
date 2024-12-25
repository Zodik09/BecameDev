import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/",(req, res)=>{
    res.render("index.ejs");
})
app.get("/services",(req, res)=>{
    res.render("services.ejs");
})
app.get("/contact",(req, res)=>{
    res.render("contact.ejs");
})
app.get("/about",(req, res)=>{
    res.render("about.ejs");
})
app.get("/terms",(req, res)=>{
    res.render("terms.ejs");
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    console.log("Listening...");
})