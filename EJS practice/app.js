var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var comments = [
      {headline: "whatver", author: "guest 1"},
      {headline: "whatver 2", author: "guest 2"},
      {headline: "whatver 3", author: "guest 3"}
   ];


// "/" =>" "Hi there, welcome to my assignment"
app.get("/", function(req, res){
   res.send("Hi there, welcome to my assignment"); 
});

app.get("/second/:stuff", function(req, res){
   var stuff = req.params.stuff;
   res.render("stuff.ejs", {moreStuff:stuff}); 
});

app.post("/addcomment", function(req, res){
   var newComment = {headline: req.body.newHeadline, 
                     author: req.body.authorName};
   comments.push(newComment);
   res.redirect("/comments");
});

app.get("/comments", function(req, res){
   res.render("comment.ejs", {comments:comments}); 
});


// everything else => "Sorry, page not found..."
app.get("*", function(req, res){
   res.send("Sorry, page not found..."); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started!!!"); 
});