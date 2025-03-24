const conexion = require('../config/connection');
const mongoose = require('mongoose');
const moment = require('moment-timezone');

const productoSchema = new mongoose.Schema({
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
    descripcion:{
        type: String,
        require: true
    },
    talla:{
        type: String,
        require: true,
        default : 'unica'
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },
    imagen1: {
        type: String,
        required: false,
        default:"https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
    },
    imagen2: {
        type: String,
        required: false,
        default:"https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
    },
    imagen3: {
        type: String,
        required: false,
        default:"https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
    },
    categoria: {
        type: String,
        required: true,
        trim: true
    },
    descuento:{
        type:Number,
        default: 0,
        min:0
    },
    estado: {
        type: String,
        enum: ['activo', 'inactivo'],
        default: 'activo'
    },
    vistas: {
        type: Number,
        default: 0,
        min: 0
    },
    fechaCreacion: {
        type: Date,
        default: () => moment().tz("America/Bogota").toDate(),
        immutable: true 
    },
    fechaEdicion: {
        type: Date,
        default: () => moment().tz("America/Bogota").toDate() 
    }

}, { versionKey: false });

const productos = conexion.model('productos', productoSchema);

module.exports = productos;