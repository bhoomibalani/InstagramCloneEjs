const express= require("express");
const app=express();
const port=8080;
const path=require("path");
const { v4 : uuidv4 } = require('uuid');


app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
app.set(express.static(path.join(__dirname,"public")));

let posts=[
    {   id:uuidv4(),
        username:"bhxxmx_",
        caption:"aesthetics dosent require efforts",
        imgUrl:"/images/postb.jpg"
    },
    {
        id:uuidv4(),
        username:"kartikeytandon11",
        caption:"missing my curly hair nd black frame already",
        imgUrl:"/images/postk.jpg"
    },
    {
        id:uuidv4(),    
        username:"poonamtandom",
        caption:"beauty lies in soul",
        imgUrl:"/images/postp.jpg"
    },
    {
        id:uuidv4(),
        username:"komalbalani",
        caption:"arent lies also truths in other realms?",
        imgUrl:"/images/postko.jpg"
    }
]

app.get("/home",(req,res)=>{
   res.render("home.ejs",{posts});

})
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});

app.get("/posts/new",(req,res)=>{
    req.render("new.ejs");
})
