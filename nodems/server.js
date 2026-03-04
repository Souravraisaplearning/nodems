const express = require('express')
const app = express();
const fs = require("fs");

app.get('/',function(req, res){
    res.send("helllo Sourav")
});

app.get('/employee',function(req, res){
    let content = fs.readFileSync("./webapp/model/employee.json","utf-8")
    res.send(content);
});

app.get('/vendor',function(req, res){
    let content = fs.readFileSync("./webapp/model/employee.json","utf-8")
    res.send(content);
});

app.get('/customer',function(req, res){
    let content = fs.readFileSync("./webapp/model/employee.json","utf-8")
    res.send(content);
});
app.listen(process.env.PORT || 3002)