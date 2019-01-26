'use strict';

//Metodo que trae todos los Members activos
function generateMessage(req, res, next) {
    // var timeInMss = Date.now()
    var datetime = new Date();
    console.log(datetime);
    //console.log(datetime.toISOString().slice(0,10));
    next();
}

//Permite llamar a los metodos dentro del controlador
module.exports = {
    generateMessage
}