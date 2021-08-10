//traemos la libreria que nos va a ayudar con mongo.

const mongoose = require('mongoose');

//creamos la conexion de nuestra funcion flecha.

const DATABASECONNECTION = async () =>{
    //en la conexion a la base de datos siempre va un try catch.
    try {
        //utilizamos el await 
        await mongoose.connect(process.env.DB_CONNECTION,{
            //siempre los mismos 4 
            useNewUrlParser:true,
            useFindAndModify:false,
            useCreateIndex:true,
            useUnifiedTopology:true
        });
        console.log("Coneccion a mongo DB correcta");
    } catch (e) {
        //aqui vamos a ver el error.
        console.log("Error conectando a la bd",e);
        ///aqui va el error que se detalla en la consola
        throw new Error("Error en la conexion a mongo");
    }
}

//Exportamos nuestro modulo
module.exports = {DATABASECONNECTION}