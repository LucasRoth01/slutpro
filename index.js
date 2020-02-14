const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());
/* let data = [
    {id:3, body:"Do stuff"},
    {id:4, body:"Buy Milk"},
    {id:5, body:"Sleep"},
    {id:6, body:"Make great music"}
]; */

init();
async function init(){
const oid = require("mongodb").ObjectID;
const col=await require("./mongo")();






app.get('/data',function(req,res){ 
    setTimeout(()=>{
        res.send(data);
    },1000);

});

app.post('/save',function(req,res){

    let obj = {...req.body, id:Date.now()};
    data.push(obj);
    res.send({mes:"Data updated"});
 });

app.listen(3456);


}