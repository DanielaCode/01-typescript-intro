interface Passenger{
    name:string,
    children?:string[]//un pasajero puede o no tener hijos
}

const passenger1:Passenger={
    name:"dani"
}


const passenger2:Passenger={
    name:"sofi",
    children:["luca"]
}

//NOTE - funcion que retorna el numero de hijos de un pasajero
function passengerChildren(passenger:Passenger){
    //NOTE - si no tiene children pues retorna undefined pero no rompe el resto del codigo con un error
    //el error seria querer acceder la propiedad de un undefined por que no tiene ninguna
    const howManyChildrens = passenger.children?.length;
    //NOTE - tambien se puede poner para que si no existe retorne algo asi
    const howManyChildrens2 = passenger.children?.length || 0;
    return howManyChildrens2;
}

passengerChildren(passenger1); //0
passengerChildren(passenger2); //1
