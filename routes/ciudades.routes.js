import { Router } from "express";
import { readFile } from 'fs/promises'

const router = Router()

const fileUsers = await readFile ('./data/ciudades.json' , 'utf-8') //leo el json

const userData = JSON.parse(fileUsers)

router.post('/ciudades',(req,res)=>{ 
    res.status(200).json(userData)
})
export  default router

router.get('/ciudades', (req, res) => {
    const ciudadesPath = path.join(__dirname, '../data/ciudades.json');
    fs.readFile(ciudadesPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading cities data');
            return;
        }
        const ciudades = JSON.parse(data);
        res.json(ciudades);
    });
});