const express = require('express');
const app = express();
const cors = require("cors");
const router = require('./backend/routes/routes');
const PORT = process.env.PORT || 3000;
require('dotenv').config();

app.use(cors({
  origin: "*", // Permite todas las solicitudes (puedes cambiarlo a tu frontend específico)
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/', router());
app.use(cors());


app.listen(PORT, () => {
    console.log('Servidor corriendo en', PORT);
});



