const express = require('express');
//const mongodb = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');
const adminRouter = express.Router();

function router(nav){
    const products = [
        {
            "_id": "5a05dacc734d1d68d42d31f3",
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.5,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "_id": "5a05daec734d1d68d42d32ca",
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "_id": "5a05db08734d1d68d42d3300",
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
        {
            "_id": "5a05db24734d1d68d42d3313",
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
        }
    ]
    adminRouter.route('/')
    .get((req,res)=>{
        const url = "mongodb://localhost:27017";
        const dbName = 'ProductApp';

        (async function mongodb(){
            let client;
            try{
                client = await MongoClient.connect(url);
                const db  = client.db(dbName)

                await db.collection('Products').insertMany(products);
                res.json(response);
            }catch(err){

            }
        }());
        res.send('inserting data')
    });
    return adminRouter
}

module.exports = router;
