//exportamos nuestra libreria de express.

const express = require('express');

//exportamos nuestra libreria de cors.

const cors = require('cors');

//exportamos nuestra conexion a la base de datos.
//de esta manera ya cargamos nuestra database
const {DATABASECONNECTION} = require('../backend/bd/bd');

//no olvidar siempre importar nuestra libreria de dot env.
require('dotenv').config();

//usamos express en nuestra aplicacion.

const app = express();

//como todo lo que quiero va a retornar un json debo decirle al codigo.
app.use(express.json());

app.use(cors());

//es hora de utilizar el listen para que nuestro backend se conecte.
//el app.listen utilizamos nuestro archivo .env recordando que va a utilizar el puerto 
app.listen(process.env.PORT,()=>console.log("Backend Server Running  Ok On Port",process.env.PORT))

//llamamos a nuestra coneccion a la base de datos.

DATABASECONNECTION();