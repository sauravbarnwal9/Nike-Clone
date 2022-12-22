const { ProductModel } = require("../models/product.model");


 exports.getProduct=async (req, res) => { 
    try{
       
        if(req.query.id){
            
            let product = await ProductModel.findById(req.query.id).limit(req.query._limit);
            res.status(201).send({msg: product})
        }else{
            let product = await ProductModel.find()
            
            res.status(201).send({msg: product}) 
        }
    }catch(err){
        console.log(err)
        res.status(404).send({msg: [err], error: 'something went wrong'})
    }       
};

exports.addProduct=async(req,res)=>{
    try {
     const data=req.body
        let newD=new ProductModel(data);
newD.save()
res.status(201).send({msg:"product added successfully"})
    } catch (error) {
        console.log(error)
        res.status(404).send({msg: [error], error: 'something went wrong'})

    }
}
