const Product = require("../models/product");


const registerProduct = async (req,res)=>{
    if(!req.body.name || !req.body.code || !req.body.price) return res.status(401).send("You have to fill all the camps so please");

    const existinProduct = await Product.findOne({name:req.body.name});


    const existingCode = await Product.findOne({code:req.body.code});

    if(existingCode && existinProduct) return res.status(401).send("That product its already created , please check");

    if(existinProduct) return res.status(401).send("You have one product with the same name in your stock");

    if(existingCode) return res.status(401).send("You have one product with the same code in your stock");

    

    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      code: req.body.code,
      description:req.body.description,
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