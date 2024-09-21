import express from "express";
import routerApi from "./routes/rutas.js";

const app = express();
const port = 3000;

app.get("/",(req, res) => {
    res.send("Sistema Escolar_v1");
});

routerApi(app);

app.use(express.json());

app.listen(port, () => {
    console.log("My port is working on: " + port);
});