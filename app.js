// modulos requeridos. Ejecutar en consola " npm install express mysql " para hacer funcionar el proyecto
const express = require('express');
const mysql = require('mysql');
// instaciamos express y definimos el puerto donde va estar recibiendo peticiones  
const app = express();
const puerto = 8080;
// completar con las credenciales de la base de datos
const conexion = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
})
// conexion.connect()  valga la redundancia establecemos la conexion a la base de datos esta comentado sino crashea al ejecutarse



app.get('/', (req, res) => {
    res.send('trabajo practico')
})

app.get('/categoria', (req, res) => {
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
    console.log('server on')
})