import express from "express";

const app = express();
const port = 3000;
let formData = [];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/",(req, res)=>{
    res.render("index.ejs");
})

app.post("/create", (req, res) => {
    const {title, desc} = req.body;
    formData.push({title, desc});
    res.redirect("/posts");
});

app.get("/posts", (req, res) => {
    res.render("posts.ejs", { formData });
});
app.get("/about",(req, res)=>{
    res.render("about.ejs");
})

// app.get("/contact",(req, res)=>{
//     res.render("contact.ejs");
// })
// app.get("/terms",(req, res)=>{
//     res.render("terms.ejs");
// })

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    console.log("Listening...");
})