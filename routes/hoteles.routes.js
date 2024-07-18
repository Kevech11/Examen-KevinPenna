import { Router } from "express";
import { readFile } from 'fs/promises'

const router = Router()

const fileUsers = await readFile ('./data/hoteles.json' , 'utf-8') //leo el json

const userData = JSON.parse(fileUsers)

router.post('/hoteles',(req,res)=>{
    
    res.status(200).json(userData)
})
export  default router