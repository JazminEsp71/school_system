import { faker } from '@faker-js/faker';
import { subjects, rooms } from './arrays.js';
import express from 'express';

const studentsRouter = express.Router();
const students = [];

//Obtener todos los alumnos
studentsRouter.get("/", (req, res) => {
    const {size} = req.query;
    const limit = size || 15;

        for (let index = 0; index < limit; index++){
            students.push({
                matricula: faker.string.alphanumeric(6),
                nombre: faker.person.fullName(),
                carrera: faker.helpers.arrayElement(["Ingeniería en Sistemas", "Ingeniería Automotriz", "Ingeniería Bioquimica", "Ingeniería Industrial"]),
                edad: faker.number.int({ min: 18, max: 30 }),
                genero: faker.helpers.arrayElement(["Masculino", "Femenino", "Otro"]),
                materia1: faker.helpers.arrayElement(subjects),
                materia2: faker.helpers.arrayElement(subjects),
                materia3: faker.helpers.arrayElement(subjects),
            });
    }
    res.json(students);
});

//  Obtener un usuario por ID
studentsRouter.get("/:matricula", (req, res) =>{
    const {matricula} = req.params;
    const viewStudent = students.find((viewStudent) => viewStudent.matricula === matricula);

    if(viewStudent){
        res.json(viewStudent);
    } else{
        res.send("Errooooooooor :0->-< !!!!")
    }
});

//  Obtener un subjects por ID
studentsRouter.get("/subjects/:id", (req, res) => {
    const { id } = req.params;
    const viewSubject = subjects.find(c => c.id === id);

    if(viewSubject){
        res.json(viewSubject);
    }else {
        res.send("Errooooooooor :0->-< !!!!")
    }
});

// Obtener un aula por id
studentsRouter.get("/rooms/:numAula", (req, res) => {
    const numAula = parseInt(req.params.numAula, 10);
    const roomsFunction = rooms.find((roomsFunction) => roomsFunction.numAula === numAula);

    if(roomsFunction){
        res.json(roomsFunction);
    } else {
        res.send("Errooooooooor :0->-< !!!!");
    }
});

// Agregar 
studentsRouter.post("/", (req, res) =>{
    const {matricula, nombre, carrera, edad, genero, materia1, materia2, materia3} = req.body;

    // Valida
    if(!matricula || !nombre || !carrera || !edad || !genero || !materia1 || !materia2 || !materia3){
        return res.status(400).json({error: "Incomplete data"})
    }

    const newStudent = {
        matricula, nombre, carrera, edad, genero, materia1, materia2, materia3
    };

    students.push(newStudent);

    res.status(201).json({message:"successful", data:newStudent,});
});

// Exportar el router como predeterminado
export default studentsRouter;