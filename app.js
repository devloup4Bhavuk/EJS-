const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get('/',function(req,res){
    res.render('index',{newlistitem: items});
});

app.post('/',function(req,res){
    var item = req.body.newitem;
    items.push(item);

    res.redirect("/");
});

app.listen(process.env.PORT || 3000,function(){
    console.log("currently running at port 3000");
})