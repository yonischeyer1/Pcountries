
import express from 'express';
const router = express.Router();
import {getCountries, getAllCountries, editCountry, removeCountry} from '../controllers/country.controller.js'


router.get('/allCountries', async (req,res)=>{
    try {
        const countries = await getAllCountries().catch((err)=>{
            throw err
        });
        return res.json(countries)
    } catch (err) {
        res.status(err.status || 500).json({error:err.message})
    }
})

router.get('/countries', async (req,res)=>{
    let page = Number(req.query.page);
    let size = Number(req.query.size);
    try {
        const countries = await getCountries({page, size}).catch((err)=>{
            throw err
        });
        return res.json(countries)
    } catch (err) {
        res.status(err.status || 500).json({error:err.message})
    }
})

router.post('/country/edit', async (req,res)=>{
    try {
        const country = await editCountry(req.body).catch((err)=>{
            throw err
        });
        return res.json(country)
    } catch (err) {
        res.status(err.status || 500).json({error:err.message})
    }
})

router.delete('/country/remove/:id', async (req,res)=>{
    try {
        const id = Number(req.params.id);
        const result = await removeCountry(id).catch((err)=>{
            throw err
        });
        return res.json(result)
    } catch (err) {
        res.status(err.status || 500).json({error:err.message})
    }
})

export default router