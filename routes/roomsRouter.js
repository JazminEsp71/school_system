import { faker } from "@faker-js/faker";
import { rooms } from './arrays.js';
import express from 'express';

const roomsRouter = express.Router();

roomsRouter.get("/", (req, res) => {
    res.json(rooms);
});

export default roomsRouter;