import { faker } from "@faker-js/faker";
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
        res.send("Errooooooooor :0->-< !!!!");
    }
});

export default roomsRouter;