var express = require("express"),
    bodyParser = require("body-parser");

var jsonFileObject = require("json-file-object");

var mesMessages = jsonFileObject({
    value: [],
    file:"./messages.json"
});

app = express();

var parser = bodyParser.urlencoded({extended:false});

app.get("/messages", function(req,res) {
    res.json(mesMessages);
});

app.post("/", parser, function(req,res) {
    mesMessages.push(req.body);
    res.render("index.pug",{msgs:mesMessages});
});

app.get("/", function(req,res){
    res.render("index.pug",{msgs:mesMessages});
});

app.listen(9876);
