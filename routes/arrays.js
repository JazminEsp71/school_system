import { faker } from "@faker-js/faker";

// Profesor
function teacherFunction(){
    const teachers_array = [];
    const size = 20;
    for(let index = 0; index < size; index++){
        teachers_array.push({
        idProfesor: faker.string.alphanumeric(8),
        nombre: faker.person.fullName(),
        carrera: faker.helpers.arrayElement(["Ingeniería en Sistemas", "Medicina", "Derecho", "Arquitectura", "Psicología"]),
        turno: faker.helpers.arrayElement(["Matutino", "Vespertino", "Nocturno"])
        });
    }
    return teachers_array;
}

// Aula
function roomsFunction(){
    const rooms_array = [];
    const size = 20;
    for(let index = 0; index < size; index++){
        rooms_array.push({
            numeroAula: faker.number.int({ min: 100, max: 500 }),
            edificio: faker.helpers.arrayElement(["Edificio A", "Edificio B", "Edificio C", "Edificio D"]),
        });
    }
    return rooms_array;
}

// Materia
function subjectsFunction(){
    const subjects_array = [];
    const size = 20;
    for(let index = 0; index < size; index++){
        subjects_array.push({
            id: faker.string.uuid(),
            nombre: faker.helpers.arrayElement(["Matemáticas", "Historia", "Ciencias", "Lenguaje"]),
            profesor: faker.person.fullName(),
            aula: faker.number.int({ min: 100, max: 500 }),
            teacher_id: teachers[index % teachers.length].id,
            room_id: rooms[index % rooms.length].id
        });
    }
    return subjects_array;
}

export const teachers = teacherFunction();
export const rooms = roomsFunction();
export const subjects = subjectsFunction(teachers, rooms);
