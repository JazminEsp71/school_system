import	{teachers} from './arrays.js';
import	express from 'express';

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
        res.send("Errooooooooor :0->-< !!!!");
    }
});

export default teachersRouter;