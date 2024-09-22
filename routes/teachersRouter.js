import	{teachers} from './arrays.js';
import	express from 'express';

const teachersRouter = express.Router();

teachersRouter.get("/", (req, res) => {
    res.json(teachers);
});

export default teachersRouter;