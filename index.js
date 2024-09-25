import express from "express";
import routerApi from "./routes/rutas.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/",(req, res) => {
    res.send("Sistema Escolar_v1");
});

routerApi(app);

app.listen(port, () => {
    console.log("My port is working on: " + port);
});