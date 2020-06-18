
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//aca importo los modelos
require('./Modelos/ejemploModelo');//modelo ejemplo
require('./Modelos/infoCovidModelo');//modelo del covid, aun no creado

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/covid-status`);

app.use(bodyParser.json());

//aca importo las rutas
require('./Rutas/ejemploRuta')(app);//ruta ejemplo
require('./Rutas/infoCovidGobRuta')(app);//ruta para traer la info del covid


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
}); 