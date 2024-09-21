// Importar rutas
import studentsRouter from './studentsRouter.js';

// Funcion rutas de la API
function routerApi(app){
    app.use('/students', studentsRouter);
}

export default routerApi;   