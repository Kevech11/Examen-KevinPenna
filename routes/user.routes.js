import { Router } from "express";
import { readFile } from 'fs/promises'

const router = Router()

const fileUsers = await readFile ('./data/users.json' , 'utf-8') //leo el json

const userData = JSON.parse(fileUsers)

router.post('/login',(req,res)=>{
    const userName = req.body.userName
    const pass = req.body.pass

    const result = userData.find(e => e.username === userName && e.pass === pass) 

    if(result){
        const data = {
            name: result.name,            
            lastName: result.lastname,
            userName: result.username,
            status: true
        }
        res.status(200).json(data)
    }else{
        res.status(400).json({status: false})
    }
})
export  default router