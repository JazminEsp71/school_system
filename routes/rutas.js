// Importar rutas
import studentsRouter from './studentsRouter.js';
import subjectsRouter from './subjectsRouter.js';
import teachersRouter from './teachersRouter.js';
import roomsRouter from './roomsRouter.js';

// Funcion rutas de la API
function routerApi(app){
    app.use('/students', studentsRouter);
    app.use('/subjects', subjectsRouter);
    app.use('/teachers', teachersRouter);
    app.use('/rooms', roomsRouter);
}

export default routerApi;   