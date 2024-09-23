import { faker } from '@faker-js/faker';
import { subjects } from './arrays.js';
import express from 'express';

const studentsRouter = express.Router();

let students = [];

//Obtener todos los alumnos
studentsRouter.get("/", (req, res) => {
    const {size} = req.query;
    const limit = size || 15;

    if(students.length === 0 ){
        for (let index = 0; index < limit; index++){
            students.push({
                matricula: faker.string.alphanumeric(6),
                nombre: faker.person.fullName(),
                carrera: faker.helpers.arrayElement(["Ingeniería en Sistemas", "Ingeniería Automotriz", "Ingeniería Bioquimica", "Ingeniería Industrial"]),
                edad: faker.number.int({ min: 18, max: 30 }),
                genero: faker.helpers.arrayElement(["Masculino", "Femenino", "Otro"]),
                materia1: faker.helpers.arrayElement(subjects).nombre,
                materia2: faker.helpers.arrayElement(subjects).nombre,
                materia3: faker.helpers.arrayElement(subjects).nombre,
            });
        }
    }
    res.json(students);
});

// Exportar el router como predeterminado
export default studentsRouter;