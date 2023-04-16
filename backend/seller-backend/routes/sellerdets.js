const router = require("express").Router();
const Sellerdet = require("../models/Sellerdet");
let Product = require("../models/Sellerdet");

//add product details
router.route("/add").post((req,res)=>{
    const category = req.body.category;
    const title =req.body.title;
    const description = req.body.description;
    const price =  Number(req.body.price);

    const newProduct = new Product({
        category,
        title,
        description,
        price
    })

//send data(object) to the database
    newProduct.save().then(()=>{
        res.json("Product Added")
    }).catch((err)=>{
        console.log(err);
    })

})
