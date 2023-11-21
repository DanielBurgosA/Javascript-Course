// Ejercicio 1
import "./aboutme.js";
import { ejercicio1,
        ejercicio2,
        ejercicio3,
        ejercicio4,
        ejercicio5,
        formatter } from "./aboutme.js";

//ejericico 1
ejercicio1();
console.log("Ejercicio 1");
// Ejercicio 2
ejercicio2();
// Ejercicio 3
ejercicio3();
// Ejercicio 4
ejercicio4();
// Ejercicio 5
ejercicio5();
// Ejercicio 6
console.log(`${formatter.exercise}
${formatter.append("Lucas Fernández")}
${formatter.toLowerString("ESTO FUE ESCRITO EN MAYÚSCULAS")}

La respuesta se ve duplicada pues las funciones aparte de retornar los valores hacen el console.log como se indica en el enunciado, por lo que
hacen primero los logs.
`);


