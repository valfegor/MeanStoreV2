const Product = require("../models/product");


const registerProduct = async (req,res)=>{
    if(!req.body.name || !req.body.code || !req.body.price) return res.status(401).send("You have to fill all the camps so please");

    const existinProduct = await Product.findone({name:req.body.name , code:req.body.code});

    if(existinProduct) return res.status(401).send("Sorry you have the same code and name");

    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      code: req.body.code,
      dbstatus:true,  
    });

    const result = await product.save();

    if(!result) return res.status(401).send("Sorry I cant save your product please try again");

    return res.status(201).send({product});
}

const listProduct = async (req,res)=>{
    const product = await Product.find();
    if(!product) return res.status(401).send("Sorry I cant find");
    return res.status(201).send({product});
}


module.exports = {registerProduct, listProduct}