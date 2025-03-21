const path = require('path');
const express = require('express');
const app = express();
const router = require('./backend/routes/routes');
const PORT = process.env.PORT || 3000;
require('dotenv').config();


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/', router())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/frontend/views/pages'));
app.use(express.static('./frontend/views/static'))


app.listen(PORT, () => {
    console.log('Servidor corriendo en', PORT);
});