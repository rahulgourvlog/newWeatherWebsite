const express=require("express");
const app=express();
const port =process.env.PORT || 8000;
const path=require("path");
const hbs =require("hbs")
//  console.log(path.join(__dirname,"../public"))
// public staticpath 
  const staticpath=path.join(__dirname,"../public")
  
 console.log(path.join(__dirname,"../templates/views"))
 const templatepath=path.join(__dirname,"../templates/views")
 app.set("view engine","hbs");
 app.set("views", templatepath);

  app.use(express.static(staticpath))
 const partials_path=path.join(__dirname,"../templates/partials")
 hbs.registerPartials( partials_path);
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather");

})

app.get("*",(req,res)=>{
    res.render("404Error")
})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
});
