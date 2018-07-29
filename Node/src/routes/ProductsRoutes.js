const express = require('express');
const {MongoClient, ObjectID} = require('mongodb');
const productRouter = express.Router();

function router(nav){
    productRouter.use((req, res, next) => {
        if(req.user){
            next();
        } else {
            res.redirect('/');
        }
    })
    productRouter.route('/')
    .get((req,res) => {
        const url = 'mongodb://localhost:27017';
        const dbName = 'ProductApp';

        (async function mongo(){
            let client;
            try{
                client  = await MongoClient.connect(url);
                const db = client.db(dbName);

                const col = await db.collection('Products');
                const products = await col.find().toArray();
                res.render('ProductList',
                {
                    nav:nav,
                    products:products,
                    title:'Products Page'}
                )
            }catch(err){

            }
            client.close()
        }());
       
    })
    productRouter.route('/:id')
        .get((req,res)=>{
        const {id} = req.params;
        const url = 'mongodb://localhost:27017';
        const dbName = 'ProductApp';

        (async function mongo(){
            let client;
            try{
                client = await MongoClient.connect(url);
                const db = client.db(dbName);
                const col = await db.collection('Products');
                console.log("<<<<<>>>>"+id)
                //const product  = await col.findOne({ _id:new ObjectID(id)})
                const product  = await col.findOne({ _id:id})
                console.log(">>>>"+product)
                res.render('ProductDetail',
                {   
                    title:"Product Details",
                    products:product, 
                    nav:nav
                })
            }
            catch(err){
                console.log("no connection")
            }
            client.close()
        }())  
    })


    return productRouter;
}


module.exports = router;

/*
function add(a,b){
    return a+b
}

var add = (a,b) =>{
    return a+b
}

*/