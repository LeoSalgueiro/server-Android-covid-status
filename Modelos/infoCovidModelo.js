const mongoose = require('mongoose');
const {Schema} = mongoose;

const infoCovidEsquema = new Schema({
    nombre: String,
    
})

mongoose.model('infoCovid', infoCovidEsquema);