import { rooms } from './arrays.js';
import express from 'express';

const roomsRouter = express.Router();

roomsRouter.get("/", (req, res) => {
    res.json(rooms);
});

// Obtener un aula por id
roomsRouter.get("/:numAula", (req, res) => {
    const numAula = parseInt(req.params.numAula, 10);
    const roomsFunction = rooms.find((roomsFunction) => roomsFunction.numAula === numAula);

    if(roomsFunction){
        res.json(roomsFunction);
    } else {
        res.send("Error");
    }
});

//  Agregar
roomsRouter.post("/", (req, res) => {
    const{numAula, edificio} = req.body;

    //  Valida
    if( !numAula || !edificio){
        return res.json({error: "Incomplete data"})
    }

    const newRoom = {
        numAula, edificio
    }

    rooms.push(newRoom)

    res.json({message: "successful", data:newRoom})
})

//  Modificar datos de aulas
roomsRouter.patch("/:numAula", (req, res) => {
     const {numAula} = req.params;
     const {edificio} = req.body;

     //  Idenifica
     const room = rooms.find((teacher) => room.numAula = numAula)

    if(!room){
        return res.json({error: "Not stored"})
    }

    //  Actualiza
    if(edificio) room.edificio = edificio;

    res.json({message: "successful", data:room})
    })
// Exportar el router como predeterminado
export default roomsRouter;