const conexion = require('../config/connection');
const mongoose = require('mongoose');

const numberSchema = new mongoose.Schema({
    numero: {
        type: Number,
        required: true,
        trim: true,
        default: 0,
        min:0
    },
    estado: {
        type: String,
        enum: ['activo', 'inactivo'],
        default: 'activo'
    },
},{ versionKey: false })

const number = conexion.model('number', numberSchema);

module.exports = number;