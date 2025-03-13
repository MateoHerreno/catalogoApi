const express = require('express');
const router = express.Router();
const services = require('../controller/serviciosController')

module.exports = function () {

    // Servicios
    router.post("/services", services.createService);
    router.get("/services", services.getServices);
    router.get("/services/:id", services.getServiceByReference);
    router.put("/services/:id", services.updateService);
    router.delete("/services/:id", services.deleteService);

    return router
}
