//Importo 
import express from 'express' 
import userRouter from './routes/user.routes.js'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath (import.meta.url)
const __dirname = path.dirname (__filename)


//Crear instancia
const app = express()

//Configurar Puerto
const port = 3005

//autorizar uso de JSON
app.use(express.json());

//levanto el servidor
app.listen(port, () =>{
    console.log(`Servidor levantado en el puerto ${port}`)
});

//levantar nuestro FRON-END
app.get('/home', (req, res)=>{
    res.sendFile(path.join(__dirname,'public','pages','home','index.html'));
});

app.get('/info', (req, res)=>{
    res.sendFile(path.join(__dirname,'public','pages','info','index.html'));
});

app.get('/summary', (req, res)=>{
    res.sendFile(path.join(__dirname,'public','pages','summary','index.html'));
});

//app.use(express.static('./public/pages/home')) 

//Rutas de end-point
app.use('/user', userRouter)


   

