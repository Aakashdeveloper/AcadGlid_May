const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = 6799;
var db;
var dbproduct;
var colName = 'first';
var colProd =  'Products';
var url = "mongodb://localhost:27017"


app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/abc', (req,res)=>{
    db.collection(colName).find().toArray((err,result)=>{
        if(err) return console.log(err)
        res.json(result)
    })
});

app.get('/getProducts', (req,res)=>{
    dbproduct.collection(colProd).find().toArray((err,result)=>{
        if(err) return console.log(err)
        res.json(result)
    })
})

app.get('/thanku',(req,res)=>{
    res.render(thankyou)
})

app.post('/add_user',(req,res)=>{
    db.collection(colName).save(req.body,(err,result) => {
        if(err) return console.log(err)
        res.redirect('/abc')
    })
})

app.put('/updateUser',(req,res)=>{
    db.collection(colName).findOneAndUpdate(
        {"_id":req.body._id},{
            $set:{
                name:req.body.name,
                lname:req.body.lname
            }
        },
        {
            sort:{_id:-1},
            upsert:true
        },(err,result) => {
            if(err) return console.log(err)
            res.render('/thanku')
        }
    )
})

app.delete('/delete_user',(req,res)=>{
    db.collection(colName).findOneAndDelete({
        "_id":req.body._id
    },(err,result) => {
        if(err) return console.log(err)
        res.render('/thanku')
    })
})

MongoClient.connect(url, (err,client)=>{
    if(err) return console.log(err)
    db = client.db('acadgild');
    dbproduct = client.db('ProductApp')

    app.listen(port, function(err){
        console.log("server is running on port "+port)
    })
})

