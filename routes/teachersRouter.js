import	{teachers} from './arrays.js';
import	    express from 'express';

const teachersRouter = express.Router();

teachersRouter.get("/", (req, res) => {
    res.json(teachers);
});

//  Obtener una materia por id
teachersRouter.get("/:idProfesor", (req, res) => {
    const { idProfesor } = req.params;
    const teacherFunction = teachers.find((teacherFunction) => teacherFunction.idProfesor === idProfesor);

    if(teacherFunction){
        res.json(teacherFunction);
    } else {
        res.send("Error!");
    }
});

//  Agregar
teachersRouter.post("/", (req, res) => {
    const {idProfesor, nombre, carrera, turno} = req.body;

    if(!idProfesor || !nombre || !carrera || !turno){
        return res.json({error: "Incomplete data"})
    }

    const newTeacher = {
        idProfesor, nombre, carrera, turno
    }

    teachers.push(newTeacher)

    res.status(201).json({message:"successful", data:newTeacher})
})

// Modificar
teachersRouter.patch("/:idProfesor", (req, res) => {
    const {idProfesor} = req.params;
    const {nombre, carrera, turno} = req.body;

    //  Identifica
    const teacher = teachers.find((teacher) => teacher.idProfesor === idProfesor)

    if(!teacher){
        return res.json({error: "Not stored"})
    }

    // Actualiza
    if(nombre) teacher.nombre = nombre;
    if(carrera) teacher.carrera = carrera;
    if(turno) teacher.turno = turno;

    res.json({message: "successful", data:teacher})
})

// Exportar el router como predeterminado
export default teachersRouter;