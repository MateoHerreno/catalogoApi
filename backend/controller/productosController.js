const producto = require("../models/productosModels")

//crear producto
exports.createProduct = async (req, res) => {
    try {
        const newService = {
            referencia: req.body.referencia,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            talla:req.body.talla,
            precio: req.body.precio,
            imagen1: req.body.imagen1,
            imagen2: req.body.imagen2,
            imagen3: req.body.imagen3,
            categoria: req.body.categoria,
            estado: req.body.estado || 'activo',
        };

        let insert = await producto.create(newService);
        res.status(200).json({ mensaje: 'Created successfully'});
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
};

// Obtener todos los productos
exports.getProducts = async (req, res) => {
    try {
        let services = await producto.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
};

// Obtener un producto por id
exports.getProductByid = async (req, res) => {
    try {
        const service = await producto.findOne({ _id: req.params.id });
        if (service) {
            res.status(200).json({ 'data': service });
        } else {
            res.status(404).json({ error: 'Service not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
};

// Actualizar un producto
exports.updateProduc = async (req, res) => {
    try {
        const updateService = {
            referencia: req.body.referencia,
            nombre: req.body.nombre,
            descripcion:req.body.descripcion,
            talla:req.body.talla,
            precio: req.body.precio,
            imagen1: req.body.imagen1,
            imagen2: req.body.imagen2,
            imagen3: req.body.imagen3,
            categoria: req.body.categoria,
            estado: req.body.estado || 'activo',
        };
        let update = await producto.findOneAndUpdate({ _id: req.params.id }, updateService)
        if (update) {
            res.status(200).json({ mensaje: 'updated successfully' })
        } else {
            res.status(404).json({ error: 'service not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
};

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
    try {
        const remove = await producto.findOneAndDelete({ _id: req.params.id });
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
exports.increaseview = async (req, res) => {
    try {
        const productoview = await producto.findByIdAndUpdate({ _id: req.params.id},
            { $inc: { vistas: 1 } },
        );
        if (!productoview ) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.json({ message: 'Vista incrementada', vistas: producto.vistas });
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
}