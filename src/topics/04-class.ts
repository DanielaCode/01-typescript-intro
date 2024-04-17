
export class Person{
    //NOTE - necesito ponerlas en el constructor 
    public name: string;
    //NOTE - no acceible desde el exterior, pero si se tiene acceso al final es js
    //lo que hace ts es mostrar el error explicito en el ide
    private address: string;
    
    constructor(name:string, address:string){
        this.name=name;
        this.address=address;
    }
}

//NOTE - dani es de tipo Person 
const dani = new Person("dani","new york");
console.log(dani);


//!SECTION es muy raro en angular verlo asi como esta arriba , hay una sintaxis mas corta

export class Person2{
   
    constructor(public name:string,private address:string="no address"){}
}

//NOTE - dani es de tipo Person 
const dani2 = new Person2("dani");
console.log(dani);

//!SECTION extender una clase, añadir su funcionalidad(herencia)

export class Hero extends Person{
    constructor(
        public alterEgo:string,
        public age:number,
        public realName: string,
    ){
        super(realName,"newyork");
    }
}

const ironman = new Hero("Ironman", 45,"tony");
console.log(ironman)

//!SECTION Priorizar composicion sobre herencia, extender en un nivel ok pero extender de una extencion de otra extencion complica todo

//NOTE - este es el primer aproach, pero entonces si person cambia esta clase se veria
//afectada por que tiene codigo explicito dentro, definido esta acoplada
export class Hero2 {

    public person : Person;

    constructor(
        public alterEgo:string,
        public age:number,
        public realName: string,
    ){
        this.person=new Person(realName, "newYork")
    }
}

const ironman2 = new Hero2("Ironman2", 45,"tony");
console.log(ironman)


//NOTE - otro aproach mejor seria este, pasar a person desde el constructor:
//INYECCION DE DEPENDENCIAS
export class Hero3 {

    constructor(
        public alterEgo:string,
        public age:number,
        public realName: string,
        public person : Person,
    ){}
}

const person = new Person("tony", "newYork")
const ironman3 = new Hero3("Ironman2", 45,"tony",person);
console.log(ironman)

