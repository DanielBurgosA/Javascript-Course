console.log("hello world");


export const ejercicio1 = () => { 
    let full_name = 'daniel burgos' ;
    let profession = 'fullstack';
    let job = 'full stack senior';

    let res = `Respuesta ejercicio 1:
    Hola, me llamo ${full_name} y me dedico a ${profession}. Estoy cursando este Máster porque me gustaría trabajar en ${job}`
    
    console.log(res);
}

export const ejercicio2 = () => {
    
    let res = `Respuesta ejercicio 2:
    dado que javascript es sincrónico y lee e código de arriba a abajo, lo que esta sucediendo en pasos es lo siguiente:
    1. El programa llega primero a la importación de aboutme
    2. El programa lee el archivo linea por linea de aboutme, y cuando llega los console.log los ejecuta ya que son funciones que se están invocando y ejecutando.
    3. terminado de leer el archivo, sale y vuelve al index, donde llega a la línea del console.log y lo ejecuta despúes de leer oda la importación
    40 en mi caso que estoy exportando por modulos las funciones de las respuestas, el programa ejecuta las funciones al invocarlas en index y,
    por lo tanto, solo ejecuta el código interno de las funciones hasta el momento de ser invocadas.
    `    
    console.log(res);
}

export const ejercicio3 = () => {
    let numbers = '';

    for (let i=1; i<100/7; i++){
        numbers += 7*i + '\n';
    }

    console.log(`Respuesta ejercicio 3:
    for (let i=1; i<100/7; i++){
        console.log(7*i);
    }

    ${numbers}`);
}

export const ejercicio4 = () =>{
    let res = `Respuesta ejercicio 4:
    El último valor de i es 101, pues el orden del último paso sería el siguiente:
    i=100
    i es menor que que 101 por lo que i++
    i=101
    i no es menor a 101 así que sale del for

    La forma para que la variable no sea global es usando let en vez de var en la declaración. De esta forma el scope de la variable solo llega hasta dentro del for
    `    
    console.log(res);
}

export const ejercicio5 = () =>{
    let res = `Respuesta ejercicio 5:
    Los <scripts> se comportan así:
    Carga secuencial: Los archivos se cargan y ejecutan en el orden en que aparecen en el documento HTML.
    Variables globales: Las variables definidas en un archivo <script> se agregan al ámbito global del documento.
    No es un módulo: No admite las características de los módulos de ES6, como import y export.
    Carga sincrónica: Bloquea la carga de la página hasta que se complete la descarga y ejecución del script, a menos que se use el atributo defer o async.

    los <sript type="module"> se comportan así:
    Tratamiento como módulo: Los archivos se consideran módulos de ES6.
    Encapsulación de ámbito: Las variables y funciones no se agregan automáticamente al ámbito global, ayudando a evitar colisiones de nombres y mejorando la encapsulación.
    Soporte para import y export: Permite la importación y exportación de funciones, variables y clases entre módulos.
    Carga diferida y asincrónica: Los módulos se cargan de forma diferida, no bloquean la carga de la página y se descargan solo cuando se importan explícitamente.
    Compatibilidad con defer: Puede usarse el atributo defer para cargar el archivo de forma diferida, manteniendo el orden de ejecución, pero permitiendo que la página 
    se renderice antes de que se complete la descarga y ejecución del módulo.

    En resumen la diferencia es que el module no genera variables globales, permite hacer import de otros archivos, no bloquea la renderización, y se descargan solo
    cuando hay un import explicito volviendolos más eficientes.
    `    
    console.log(res);
}

function Formatter() {
    this.exercise = 'Respuesta ejercicio 6:';
    this.prefix = 'Hello ';
    this.append = function(text){
        console.log(this.prefix + text)
    return this.prefix + text};
  }

Formatter.prototype.toLowerString = function(text){
    console.log(text.toLowerCase())
    return text.toLowerCase;
};

export const formatter = new Formatter()

console.log("laater");

