const express = require('express')
var MongoClient = require('mongodb').MongoClient;
const app = express();
var usersCollection;
var url = "mongodb://localhost:27017/zinobe";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  dbo = db.db("zinobe");
  dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
  usersCollection = dbo.collection('users')
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
})

app.use(express.json())

app.route('/api/users').get((req, res) => {
    //usersCollection = dbo.collection('users')
    //res.send({hello: 'world'});

    MongoClient.connect(url, function(err, db) {
       // var cursor = db.db.collection('users').find().pretty();

        dbo = db.db("zinobe");
        usersCollection = dbo.collection('users').find().toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
  })
  
app.route('/api/cats').get((req, res) => {
    res.send({hello: 'world'});
})

app.listen(4201, '127.0.0.1', function() {
    console.log("Server now listening on 4201");
});