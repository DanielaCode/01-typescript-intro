//NOTE typescript infiere el tipo dependiendo de lo que asigne
let name = "dani";

//NOTE - name=123; no lo permite por que no es reasignable ya tiene un tipo
//si no va a cambiear desde que se asigna pues manejemosla como una constante
//a menos que necesite cambiar el valor de name a otro string entonces seria let

//NOTE - Asignar el tipo explicitamente
let hpPoints:number = 95; 

//NOTE - Tambien puedo asignar varios tipos permitidos
let hpPoints2:number|string=95;
hpPoints2="FULL";

//NOTE - tambien puedo asignar un valor especifico 
let hpPoints3:number|"FULL"=95;
hpPoints2="FULL";
//ERROR hpPoints3="HOLA";

const isAlive = true;


export {};