var express = require("express");
var app = express();

// "/" =>" "Hi there, welcome to my assignment"
app.get("/", function(req, res){
   res.send("Hi there, welcome to my assignment"); 
});

app.get("/speak/:animals", function(req, res){
    var sounds = {
        pig: "'Oink'",
        cow: "'Moo'",
        dog: "'Woof Woof!'"
    };
    var animal = req.params.animals.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
});

// repeat the phrase number of times
app.get("/repeat/:phrase/:num_times", function(req, res){
    var word = req.params.phrase;
    var number = req.params.num_times;
    var mystr ="";
    for(var i=0; i<number; i++){
        mystr += word + " ";
    }
    res.send(mystr); 
});

// everything else => "Sorry, page not found...What are you doing with your life?"
app.get("*", function(req, res){
   res.send("Sorry, page not found...What are you doing with your life?"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has started!!!") 
});