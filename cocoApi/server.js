const express = require("express");
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const app = express();
const PORT = 4000;
var cors = require("cors");
app.use(cors());

const MONGO_URL ='mongodb://127.0.0.1:27017' 

// Rest Api endpoints

app.get("/", function (req, res){
    res.send("Hello World");
  });
  
  // get bestsellers
  app.get("/bestsellers", function (req, res){
      db.collection("bestsellers").
      find()
      .toArray((err,result)=>{
          if (err) throw err;
          res.send(result);
      });
  });

//   Cadbury
app.get("/cadbury", function (req, res){
    db.collection("cadbury").
    find()
    .toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
    });
});

//   Godiva
app.get("/godiva", function (req, res){
    db.collection("godiva").
    find()
    .toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
    });
});

//   Hersheys
app.get("/hersheys", function (req, res){
    db.collection("Hersheys").
    find()
    .toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
    });
});

//   Lindt 
app.get("/lindt", function (req, res){
    db.collection("Lindt").
    find()
    .toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
    });
});

 //   Neuhaus
app.get("/neuhaus", function (req, res){
    db.collection("Neuhaus").
    find()
    .toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
    });
});

//   whittakers
app.get("/whittakers", function (req, res){
    db.collection("whittakers").
    find()
    .toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
    });
});

//   Venchi
app.get("/venchi", function (req, res){
    db.collection("Venchi").
    find()
    .toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
    });
});

//  for Single product
app.get("/products", function (req, res){
    db.collection("Single").
    find()
    .toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
    });
});

app.get("/products/:id", function (req, res) {
    // let id = mongo.ObjectId(req.params.id); // Correctly convert the id to an ObjectId
    let id = req.params.id;
    db.collection("Single")
        .find({ product_id: id})
        .toArray((err, result) => {
            if (err) throw err;
            res.send(result);
            console.log(result);
        });
});



// mongo connection
MongoClient.connect(MONGO_URL, (err, client)=>{
    console.log("Mongo is connected")
    if (err)console.log("Error connecting")
   db = client.db("cocomart")
    app.listen(PORT, ()=>{ 
        console.log(`server listen on port ${PORT}`);
    });
});


