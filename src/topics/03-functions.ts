//!SECTION funcion declarativa
//NOTE - TS infiere esta firma addNumbers(): void -> duncion sin params que no retorna nada
function addNumbers(){

}

//NOTE - addNumbers2(a: any, b: any): void, ts me advierte que los params son any
function addNumbers2(a,b){

}

//NOTE - addNumbers3(a: number, b: number): number , funcion con dos argumentos obligatorios de tipo number
function addNumbers3(a:number,b:number){
    return a+b;
}

//NOTE - addNumbers4(a: number, b: number): number , funcion con dos argumentos obligatorios de tipo numeric y returna number pero escrito explicitamente
function addNumbers4(a:number,b:number):number{
    return a+b;
}


//NOTE - TS infiere a result como number 
const result = addNumbers4(1,2);

//NOTE -obligatorios-> opcionales  -> y// opcionales con valores por default
//se aconseja ponerlos en ese orden
function multiply(uno:number, dos?:number, base:number=2){
    return uno*base;
}

//!SECTION funcion de flecha
//NOTE - esta seria la firma de addNumbers5: (a: number, b: number) => number
const addNumbers5 = (a:number,b:number):number=>{
    return a+b;
}


//!SECTION Funciones con objetos como argumentos
interface pet{
    name:string,
    action:()=>string
}

//NOTE - the signature will be feedPet(pet: pet, amount: number): void
function feedPet(pet:pet, amount:number){

}

const luca:pet ={
    name:"luca",
    action:()=>"feeding luca"
}

export {};