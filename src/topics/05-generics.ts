
//!SECTION el any se debe evitar, por que no voy a tener el intelisense y seria como usar js
export function whatIsMyType(argument:any): any{
    return argument;
}

//NOTE - ts no puede inferir el tipo y le pone any
//sin embargo en esta funcion la logica depende del tipo de dato que pase a la funcion
//como se resolveria? si necesito pasar cualquier tipo de dato, no uno fijo
let imIaString = whatIsMyType("hola");
let imIaNumber = whatIsMyType(100);

//!SECTION con generics
export function whatIsMyType2<T>(argument:T): T{
    return argument;
}
//NOTE -  si me paro sobre este vs muestra el tipo correcto
let imIaString2 = whatIsMyType2("hola");
let imIaNumber2 = whatIsMyType2(100);
//NOTE - tambie le puedo poner explicitamente que tipo es el generic 
let imIaBoolean= whatIsMyType2<boolean>(true);
//NOTE - si paso algo que no es un boolean TS muestra el error
//let imIaBoolean2= whatIsMyType2<boolean>(3);