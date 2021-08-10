const Store = require("../models/store");


const registerStore = async (req,res) =>{
    
    if(!req.body.name || !req.body.city || !req.body.location)return res.status(401).send("Please helpe looking you have to fill all the camps noob");

    const existingStore = await Store.findOne({location:req.body.location});

    if(existingStore) return res.status(401).send("Sorry already have one store in that position");

    const store = new Store ({
        name: req.body.name,
        
    })
}