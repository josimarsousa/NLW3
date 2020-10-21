import express from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';


const app = express();

app.use(express.json());

app.post('/orphanages', (request, response) =>{

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
        


    });

    orphanagesRepository.save(orphanage);
   
   return response.json({ message: 'Hello World'});
});



app.listen(3333);

