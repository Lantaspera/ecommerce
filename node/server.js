 const express = require("express");
 const app = express();
 const port = 8080;

 app.get("/",(req,res)=>{
   res.send("Home page")
 })
 
 app.get("/dashboard",(req,res)=>{
  res.send("login page")
})

 app.listen(port, ()=>{
   console.log("server started, port",port)
 })