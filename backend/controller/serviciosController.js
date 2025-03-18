const Servicio = require("../models/serviciosModels")

//crear servicio
exports.createService = async (req, res) => {
    try {
        const newService = {
            referencia: req.body.referencia,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            imagen1: req.body.imagen1,
            imagen2: req.body.imagen2,
            imagen3: req.body.imagen3,
            categoria: req.body.categoria,
            estado: req.body.estado || 'activo',
        };

        let insert = await Servicio.create(newService);
        res.status(200).json({ mensaje: 'Created successfully'});
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
exports.getServiceByid = async (req, res) => {
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
    try {
        const updateService = {
            referencia: req.body.referencia,
            nombre: req.body.nombre,
            descripcion:req.body.descripcion,
            precio: req.body.precio,
            imagen1: req.body.imagen1,
            imagen2: req.body.imagen2,
            imagen3: req.body.imagen3,
            categoria: req.body.categoria,
            estado: req.body.estado || 'activo',
        };
        let update = await Servicio.findOneAndUpdate({ _id: req.params.id }, updateService)
        if (update) {
            res.status(200).json({ mensaje: 'updated successfully' })
        } else {
            res.status(404).json({ error: 'service not found' })
        }
    } catch (error) {
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
//contador de vistas en producto
exports.incrementarVista = async (req, res) => {
    try {
        const producto = await Servicio.findByIdAndUpdate({ _id: req.params.id},
            { $inc: { vistas: 1 } },
        );
        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.json({ message: 'Vista incrementada', vistas: producto.vistas });
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
}