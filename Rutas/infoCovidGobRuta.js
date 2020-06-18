
const mongoose = require('mongoose');
const CovidModelo = mongoose.model('infoCovid');

var bodyParser 	= require('body-parser');
var request = require("request");


var url = 'https://sisa.msal.gov.ar/datos/descargas/covid-19/files/Covid19Casos.csv';


module.exports = (app) => {
    
    // Soporte para bodies codificados en jsonsupport.
    app.use(bodyParser.json());

    app.get('/api/covid-info', function(req, res) {
        request({
            url: url,
            json: false
        }, function (error, response, body) {
    
            if (!error && response.statusCode === 200) {
                // Pintamos la respuesta JSON en navegador.
                res.send(JSON.stringify(body)) 
            }
            else{
                console.log(error)
            }
        })
    });


    app.get('/api/covid', function (req, res) {
        request('https://sisa.msal.gov.ar/datos/descargas/covid-19/files/Covid19Casos.csv', 
        { json: true }, 
        (err, res, body) => {
            if (err) {
                 return console.log(err); 
            }
            console.log(body.url);
            console.log(body.explanation);
        });

    });


} 