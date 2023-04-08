import  express  from "express";
import cors from 'cors'
//import conection db

import db from "./database/db.js";
//import routes

import userRoutes from './routes/routes.js'

const app =express()

app.use(cors())
app.use(express.json())
app.use('/users', userRoutes)

try{
    await db.authenticate()
    console.log('conexion exitosa')
}catch(error){
    console.log(`error de conexion, el error es: ${error}`)

}
app.get('/',(req, res)=>{
    res.send('Holaxd')
})
app.listen(8000, ()=>{
    console.log('corriendo por el puerto http://localhost:8000/')
})