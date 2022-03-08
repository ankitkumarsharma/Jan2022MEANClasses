var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

mongoClient.connect(url, (err,db)=>{
    // if(err) throw err;
    console.log("Database connected successfully!!!");
    let dbObject = db.db("jan21");
    dbObject.collection("test").find({}).toArray((err,res)=>{
        // console.log(res);
        // db.close();
    });

    // insert
    let obj = [{
        name:'xyz',
        email:'xyz@xyz.com',
        age:'11'
    },
    {
        name:'xyz2',
        email:'xyz2@xyz.com',
        age:'11'
    }]
    dbObject.collection("test").insertMany(obj, (err,res)=>{
        console.log("One Record inserted ... ",res);
        db.close();
    })
})

