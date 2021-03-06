const express = require('express')
var MongoClient = require('mongodb').MongoClient;
const app = express();
var usersCollection;
var url = "mongodb+srv://juliogom:R4groupsas@cluster0-im3mh.mongodb.net/test?retryWrites=true&w=majority"
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  dbo = db.db("zinobe");
  dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection users created!");
    dbo.createCollection("banks", function(err, res) {
        if (err) throw err;
        console.log("Collection banks created!");
        db.close();
      });
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

    MongoClient.connect(url, function(err, db) {

        dbo = db.db("zinobe");

        usersCollection = dbo.collection('users')
        .find().toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        })
    });
  })

  app.route('/api/bank').get((req, res) => {

    MongoClient.connect(url, function(err, db) {

        dbo = db.db("zinobe");

        dbo.collection('banks')
        .findOne({ name: "zinobe" },function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        })
    });
  })
  
app.route('/api/users').post((req, res) => {
    console.log('POST');

    MongoClient.connect(url, function(err, db) {

        dbo = db.db("zinobe");
        dbo.collection('users')
        .findOne({ mail: req.body.mail },function(err, result) {
            if (err) throw err;
            req.body.credits[0].paid= false;
            if(result){
                !result.rejected ? req.body.credits[0].state="ACEPTADO" : req.body.credits[0].state="DENEGADO";
                
                result.credits.push(req.body.credits[0])
                dbo.collection("users")
                .updateOne({ _id: result._id }, {$set : {"credits": result.credits}}, function(err, resultUpdated) {
                    if (err) throw err;
                    console.log("1 document updated");
                    if(req.body.credits[0].state="ACEPTADO"){
                        UpdateBankAmmount(dbo,db,req.body,res,req.body.credits[0].value)
                    }else{
                        res.send(req.body);
                        db.close();
                    }
                  });
            }else {
                req.body.rejected= aprove();
                !req.body.rejected? req.body.credits[0].state="ACEPTADO": req.body.credits[0].state="DENEGADO";
                dbo.collection('users').insertOne(req.body,function(err, result){
                    if (err) throw err;
                    if(req.body.credits[0].state="ACEPTADO"){
                        UpdateBankAmmount(dbo,db,req.body,res,req.body.credits[0].value)
                    }else{
                        res.send(req.body);
                        db.close();
                    }
                })
            }
        })
    });
})

function UpdateBankAmmount(dbo, db, user, res, approvedAmmount){
        dbo.collection('banks')
        .findOne({ name: "zinobe" },function(err, result) {

            dbo.collection("banks")
                .updateOne({ name: "zinobe" }, {$set : {"capital": result.capital - approvedAmmount}}, function(err, resultUpdated) {
                    if (err) throw err;
                    console.log("bank capital updated");
                    res.send(user);

            db.close();
        })
});
}

function aprove(){
    return Math.random() < 0.5 ? true: false;
}

app.listen(4201, '127.0.0.1', function() {
    console.log("Server now listening on 4201");
});