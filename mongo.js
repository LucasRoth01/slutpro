
const mongo = require("mongodb").MongoClient;
const oid = require("mongodb").ObjectID;

async function conn(){

const con=await mongo.connect("mongodb+srv://food:food@cluster0-6gg2e.mongodb.net/test?retryWrites=true&w=majority",{ useUnifiedTopology: true })
const db= await con.db("foodapp");
const col=await db.collection("foods");
return col;

}
module.exports=conn;