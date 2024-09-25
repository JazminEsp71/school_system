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
});

//  Agregar
subjectsRouter.post("/", (req, res) =>{
    const {id, nombre, profesor, aula, teacher_id, room_id} = req.body;

    //  valida
    if(!id || !nombre || !profesor || !aula || !teacher_id || !room_id){
        return res.status(400).json({error:"Incomplete data"})
    }

    const newSubject = {
        id, nombre, profesor, aula, teacher_id, room_id
    };

    subjects.push(newSubject);

    res.status(201).json({message:"successful", data:newSubject});
});

//  Moldificar datos de materia
subjectsRouter.patch("/:id", (req, res) =>{
    const {id} = req.params;
    const {nombre, profesor, aula, teacher_id, room_id} = req.body;

    //  Identifica
    const subject = subjects.find((subject) => subject.id === id)

    if(!subject){
        return res.status(404).json({error: "Not stored"})
    }

    //  Actualiza
    if(nombre) subject.nombre = nombre;
    if(profesor) subject.profesor = profesor;
    if(aula) subject.aula = aula;
    if(teacher_id) subject.teacher_id = teacher_id;
    if(room_id) subject.room_id = room_id;

    res.json({message: "successful", data:student})
})

export default subjectsRouter;