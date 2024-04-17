function classDecorator<T extends {new(...args:any[]):{}}>(
    constructor : T
){
    return class extends constructor{
        newProp = "newprop";
        hello = "override";
    }
}

export class SuperClass{
    public initialProp:string="initial";

    print(){
        console.log("hola, initial method")
    }
}

//!SECTION imprime la definicion de la clase
console.log(SuperClass);

//NOTE - con un decorador agrega funcionalodad a nivel de clase o de metodo
@classDecorator
export class SuperClass2{
    public initialProp:string="initial";

    print(){
        console.log("hola, initial method")
    }
}

console.log(SuperClass2);
//SECTION - los decoradores casi no se implementan mas que nada se usan, y son como los de java