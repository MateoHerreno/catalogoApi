const conexion = require('../config/connection');
const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
    referencia: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },
    imagen: {
        type: String, // URL de la imagen
        required: false
    },
    estado: {
        type: String,
        enum: ['activo', 'inactivo'],
        default: 'activo'
    }
}, { versionKey: false });

const servicios = conexion.model('servicios', servicioSchema);

module.exports = servicios;