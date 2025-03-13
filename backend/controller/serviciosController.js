const Servicio = require("../models/serviciosModels")

//crear servicio
exports.createService = async (req, res) => {
    try {
        const newService = {
            referencia: req.body.referencia,
            nombre: req.body.nombre,
            precio: req.body.precio,
            imagen: req.body.imagen,
            estado: req.body.estado || 'activo',
        };

        let insert = await Servicio.create(newService);
        res.status(200).json({ mensaje: 'Created successfully', data: insert });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
};

// Obtener todos los servicios
exports.getServices = async (req, res) => {
    try {
        let services = await Servicio.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
};

// Obtener un servicio por id
exports.getServiceByReference = async (req, res) => {
    try {
        const service = await Servicio.findOne({ _id: req.params.id });
        if (service) {
            res.status(200).json({ 'data': service });
        } else {
            res.status(404).json({ error: 'Service not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
};

// Actualizar un servicio
exports.updateService = async (req, res) => {
    try{
        const updateService = {
            referencia: req.body.referencia,
            nombre: req.body.nombre,
            precio: req.body.precio,
            imagen: req.body.imagen,
            estado: req.body.estado || 'activo',
        };
        let update = await Servicio.findOneAndUpdate({_id:req.params.id},updateService)
        if(update){
            res.status(200).json({mensaje:'updated successfully'}) 
        }else{
            res.status(404).json({error: 'service not found' }) 
        }
    }catch (error) {
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
};

// Eliminar un servicio
exports.deleteService = async (req, res) => {
    try {
        const remove = await Servicio.findOneAndDelete({ _id: req.params.id });
        if (remove) {
            res.status(200).json({ mensaje: 'delete successfully' })
        } else {
            res.status(404).json({ error: 'service not found' })
        };
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
};
