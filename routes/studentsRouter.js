import { faker } from '@faker-js/faker';
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
                id: faker.datatype.uuid(),
                name: faker.name.firstName()
            });
        }
    }
    res.json(students);
});

// Exportar el router como predeterminado
export default studentsRouter;