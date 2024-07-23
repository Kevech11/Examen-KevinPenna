import { Router } from "express";
import { readFile } from 'fs/promises'

const router = Router()

const fileUsers = await readFile ('./data/ciudades.json' , 'utf-8') //leo el json

const userData = JSON.parse(fileUsers)

router.post('/ciudades',(req,res)=>{
    
    res.status(200).json(userData)
})
export  default router