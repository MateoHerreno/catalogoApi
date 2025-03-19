const express = require('express');
const router = express.Router();
const products = require('../controller/productosController')
const number = require('../controller/numeroController')

module.exports = function () {

    // productos
    router.post("/createProducts", products.createProduct); //crear producto
    router.get("/allProducts", products.getProducts); // traer todos los productos
    router.get("/products/:id", products.getProductByid); //traer un producto con id
    router.put("/editProducts/:id", products.updateProduc); // editar un producto
    router.delete("/deleteProducts/:id", products.deleteProduct); //eliminar un producto
    router.post("/increaseview/:id", products.increaseview); //incrementar el contador de vistas id

    //numerotelefono
    router.post("/createNumber",number.createNumber);
    router.get("/number",number.getNumber);
    router.put("/editNumber/:id",number.editNumber);
    router.delete("/deleteNumber/:id",number.deleteNumber);
   
    return router
}

/* Readme
para activar la ruta de editar se deve usar el put, y para activar la ruta de contador de vista se deve usar el post
*/