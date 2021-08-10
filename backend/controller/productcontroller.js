const Product = require("../models/product");


const registerProduct = async (req,res)=>{
    if(!req.body.name || !req.body.code || !req.body.price) return res.status(401).send("You have to fill all the camps so please");

    const existinProduct = await Product.findone({name:req.body.name , code:req.body.code});

    if(existinProduct) return res.status(401).send("Sorry you have the same code and name");

    
}