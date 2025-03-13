const mongoose = require("mongoose")
require("dotenv").config()
const URI = `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORDDB}@catalogo.rxlpa.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DB}`

mongoose.connect(URI)
.then(() => console.log("Conectado MongoDB"))
.catch(error => console.error("Error al conectar MongoDB", error));

module.exports = mongoose 
