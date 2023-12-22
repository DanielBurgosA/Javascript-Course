// Ejercicio 1
interface Person {
    name : string;
    age : number;
    profession : string;
}

const getValues = (person:Person) : (string | number)[] =>{
    const { name, age, profession} = person;
    return [name, age, profession];
}
// Ejercicio 2

const sumOrConcatenate = (a:string|number, b:string|number) : string | number =>{
    if(typeof a === 'number' && typeof b === 'number')  return a+b;
    else if (typeof a === 'string' && typeof b === 'string') return `${a}-${b}`
    else return `${a}:${b}`
}

// Ejercicio 3
interface Car{
    tires : number,
    turnOnEngine() : void;
    pressPedal() : void;
}

interface Motorcycle{
    tires : number,
    turnOnEngine(): void;
    openThrottle():void;
}

const letsRoll = (vehicle: Car|Motorcycle):void=>{
    function isCar(vehicle: Car | Motorcycle): vehicle is Car {
        return 'pressPedal' in vehicle;
    }

    function isMotorcycle(vehicle: Car | Motorcycle): vehicle is Motorcycle {
        return 'openThrottle' in vehicle;
    }

    vehicle.turnOnEngine()

    if(isCar(vehicle)) vehicle.pressPedal();
    if(isMotorcycle(vehicle)) vehicle.openThrottle();
}

// Ejercicio 4

const remove = <T> (array:(string | number)[]) : (string | number)[] =>{
    return array.slice(1);
}
