//Importo librerias
import express from 'express' 
import cors from 'cors'

//Crear instancia
const app = express()

//Configurar Puerto
const port = 3000

//levanto el servidor
app.listen(port, () =>{
    console.log(`Servidor levantado en el puerto ${port}`)
})

//Definicion de rutas
app.get('/', (req, res)=>{
    res.send('Hola Mundo!')
})