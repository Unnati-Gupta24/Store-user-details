const express = require("express");
const app = express();
const path = require("path");
const userModel = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));


app.get("/",(req,res)=>{
    res.render("index");
});

app.post("/create",async (req,res)=>{
    let createdUser = await userModel.create({
        name: req.body.name,
        email: req.body.mail,
        imageurl: req.body.img
    });
    res.send(createdUser);
});

app.listen(2006,()=>{
    console.log("server started");
});

