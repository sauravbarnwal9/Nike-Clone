const { Router } = require("express");
const { getProduct, addProduct } = require("../controller/product.controller");



const productRouter=Router()

productRouter.get("/product",getProduct)
productRouter.post("/product",addProduct)

module.exports={
    productRouter
}