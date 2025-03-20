const number = require("../models/numeroModels")

//crear numero
exports.createNumber =async(req, res) =>{
    try{
        const newNumber = {
            numero: req.body.numero,
            email: req.body.email,
            faceurl: req.body.faceurl,
            instaurl: req.body.instaurl,
            nombreweb: req.body.nombreweb,
            estado: req.body.estado
        };
        let insert =await number.create(newNumber);
        res.status(200).json({ mensaje: 'Created successfully'});
    }catch (error) {
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
};
// Obtener todos los numeros
exports.getNumber = async (req, res) => {
    try {
        let numbers = await number.find();
        res.status(200).json(numbers);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
};

// Actualizar un numero
exports.editNumber = async (req, res) => {
    try {
        const updateNumber = {
            numero: req.body.numero,
            email: req.body.email,
            faceurl: req.body.faceurl,
            instaurl: req.body.instaurl,
            nombreweb: req.body.nombreweb,
            estado: req.body.estado
        };
        let update = await number.findOneAndUpdate({ _id: req.params.id }, updateNumber)
        if (update) {
            res.status(200).json({ mensaje: 'updated successfully' })
        } else {
            res.status(404).json({ error: 'service not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
};

//eliminar un numero
exports.deleteNumber = async (req, res) => {
    try {
        const remove = await number.findOneAndDelete({ _id: req.params.id });
        if (remove) {
            res.status(200).json({ mensaje: 'delete successfully' })
        } else {
            res.status(404).json({ error: 'service not found' })
        };
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
}