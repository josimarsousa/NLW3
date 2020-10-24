import express, { request } from 'express';
import './database/connection';
import { getRepository } from 'typeorm';
import Orphanage from "./models/Orphanage";


const app = express();

app.use(express.json());

/*app.post('/orphanages', async(request, response) => {
    const{
        name,
        latitude,
        longitude,
        about, 
        instructions,
        opening_hours,
        open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const orphage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about, 
        instructions,
        opening_hours,
        open_on_weekends,
    });

    await orphanagesRepository.save(orphage);

    return response.json({ message: 'Hello World'});
    
})*/

app.post('/orphanages', async(request, response) => {
     const {
        name,
        latitude,
        longitude,
        about, 
        instructions,
        opening_hours,
        open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
   });

    await orphanagesRepository.save(orphanage);
   
    return response.status(201).json(orphanage);
});



app.listen(3333);

