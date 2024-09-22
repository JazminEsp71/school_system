import { faker } from "@faker-js/faker";
import express from 'express';
import { subjects } from './arrays.js'

const subjectsRouter = express.Router();

subjectsRouter.get("/", (req, res) => {
    res.json(subjects);
});

export default subjectsRouter;