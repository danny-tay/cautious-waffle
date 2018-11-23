var express = require("express");
var app = express();

// "/" =>" "Hi there, welcome to my assignment"
app.get("/", function(req, res){
   res.send("Hi there, welcome to my assignment"); 
});

// everything else => "Sorry, page not found..."
app.get("/second/:stuff", function(req, res){
   var stuff = req.params.stuff;
   res.render("stuff.ejs", {moreStuff:stuff}); 
});


// everything else => "Sorry, page not found..."
app.get("*", function(req, res){
   res.send("Sorry, page not found..."); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started!!!"); 
});