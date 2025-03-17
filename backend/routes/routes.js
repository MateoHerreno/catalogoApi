const express = require('express');
const router = express.Router();
const services = require('../controller/serviciosController')

module.exports = function () {

    // Servicios
    router.post("/services", services.createService); //crear producto
    router.get("/services", services.getServices); // traer todos los productos
    router.get("/services/:id", services.getServiceByReference); //traer un producto con id
    router.put("/services/:id", services.updateService); // editar un producto
    router.post("/services/:id/vista", services.incrementarVista); //incrementar el contador de vistas id
    router.delete("/services/:id", services.deleteService); //eliminar un producto

    return router
}
//readme
/*
para activar la ruta de editar se deve usar el put, y para activar la ruta de contador de vista se deve usar el post
*/