import { faker } from "@faker-js/faker";
import express from 'express';
import { subjects, teachers, rooms } from './arrays.js'

const subjectsRouter = express.Router();

subjectsRouter.get("/", (req, res) => {
    res.json(subjects);
});

//  Obtener una materia por id
subjectsRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    const subjectsFunction = subjects.find((subjectsFunction) => subjectsFunction.id === id);

    if(subjectsFunction){
        res.json(subjectsFunction);
    } else {
        res.send("Errooooooooor :0->-< !!!!");
    }
});

// Obtener profesor
subjectsRouter.get("/teachers/:idProfesor", (req, res) => {
    const { idProfesor } = req.params;
    const viewTeacher = teachers.find(c => c.idProfesor === idProfesor);

    if(viewTeacher){
        res.json(viewTeacher);
    }else{
        res.send("Errooooooooor :0->-< !!!!")
    }
});

// Obtener Aula
subjectsRouter.get("/rooms/:numAula", (req, res) => {
    const numAula = parseInt(req.params.numAula, 10);
    const viewAula = rooms.find(c => c.numAula === numAula);

    if(viewAula){
        res.json(viewAula);
    }else{
        res.send("Errooooooooor :0->-< !!!!")
    }
})

export default subjectsRouter;