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
    email:{
        type : String,
        required: true,
        trim: true
    },
    faceurl:{
        type : String,
        required: true,
        trim: true
    },
    instaurl:{
        type : String,
        required: true,
        trim: true
    },
    nombreweb:{
        type : String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        enum: ['activo', 'inactivo'],
        default: 'activo'
    },
},{ versionKey: false })

const number = conexion.model('number', numberSchema);

module.exports = number;