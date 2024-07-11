//Importo 
import express from 'express' 
import userRouter from './routes/user.routes.js'



//Crear instancia
const app = express()

//Configurar Puerto
const port = 3005

//autorizar uso de JSON
app.use(express.json());

//levanto el servidor
app.listen(port, () =>{
    console.log(`Servidor levantado en el puerto ${port}`)
})


app.use(express.static('./public/pages/home')) //levantar nuestro FRON-END

//Rutas de end-point
app.use('/user', userRouter)


   

