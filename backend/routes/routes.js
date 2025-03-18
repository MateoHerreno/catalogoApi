const express = require('express');
const router = express.Router();
const services = require('../controller/serviciosController')

module.exports = function () {

    // Servicios
    router.post("/createProducts", services.createService); //crear producto
    router.get("/allProducts", services.getServices); // traer todos los productos
    router.get("/products/:id", services.getServiceByid); //traer un producto con id
    router.put("/editProducts/:id", services.updateService); // editar un producto
    router.post("/countProducts/:id/", services.incrementarVista); //incrementar el contador de vistas id
    router.delete("/deleteProducts/:id", services.deleteService); //eliminar un producto

    return router
}

/* Readme
para activar la ruta de editar se deve usar el put, y para activar la ruta de contador de vista se deve usar el post
*/