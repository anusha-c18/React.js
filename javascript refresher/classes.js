// classes are blueprints for js objects. it can have both properties (vars) & methods (functions)

class Human{
    constructor(){
        this.gender='Female';
    }
    setgender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor(){
        super();
        this.name='Anu';
    }
    printmyname(){
        console.log(this.name);
    }
}

const me = new Person(); 
me.printmyname();
me.setgender();
// instantiation of class 
