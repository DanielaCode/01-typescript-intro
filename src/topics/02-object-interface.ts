//!SECTION - ARRAYS Y TS

//NOTE - TS esta infiriendo string[]
const skills = ["some1","some2"]

//NOTE - pero que pasa si:  -> ahor infiere skills2: (string | number | boolean)[]
//esto no esta bien por que seria bueno que me limitara a mantener el mismo tipo en los arrays
const skills2 = ["some1","some2",true,123]

//NOTE - me obliga, esto seria lo correcto
const skills3 : string[] = ["some1","some2"]

//!SECTION LITERAL OBJECTS Y TS

//NOTE - un objeto normal como lo tiparia? con doble :: en sus props? eso no se puede


const dani = {
    name:"dan",
    hp:10,
    skills:["some","some2"]
}

//NOTE por ende puedo hacerlo creando una interface o un type

interface Character{
    name:string;
    hp:number;
    skills:string[];
    hometown?: string //opcional
}

//NOTE - si faltara alguna propiedad o un tipo fuera incorrecto entonces TS se quejaria
const sofi : Character = {
    name:"dan",
    hp:10,
    skills:["some","some2"],
    hometown:"qro"
}

console.table(sofi)

export {};