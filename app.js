// modulos requeridos. Ejecutar en consola " npm install express mysql util" para hacer funcionar el proyecto
const express = require('express');
const mysql = require('mysql');
const util = require('util');
// instaciamos express definimos el puerto donde va estar recibiendo peticiones y le permitimos a la pasear json
const app = express();
const puerto = 8080;
app.use(express.json());
// completar con las credenciales de la base de datos
const conexion = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
})
/*  valga la redundancia establecemos la conexion a la base de datos. Esta comentado sino crashea al ejecutarse
conexion.connect((error)=>{
    if(error) {
        throw error
    };
    console.log('conectado a la base de datos')
}) 
*/

const qy = util.promisify(conexion.query).bind(conexion); // permite uso de async await



//deberia resoponder con el index.htlm
app.get('/', (req, res) => {
    res.send('trabajo practico')
})

// 

const selectAll =  'SELECT * FROM '

app.get('/categoria', async (req, res) => {
    try {
        const getCategorias = await qy( `${selectAll} categoria`);
        res.send(getCategorias)
        
    } catch (error) {
        console.log(error.message);
        res.status(413).send({"Hubo un error": e.message})        
    }    


    res.send('obteniendo categorias')
})

app.get('/persona', (req, res) => {
    res.send('obteniendo personas')
})

app.get('/libro', (req, res) => {
    res.send('obteniendo libro')
})






// ponemos la applicacion a "escuchar" las peticiones
app.listen(puerto, () =>{
    console.log('server on' , puerto)
})