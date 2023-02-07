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

// ES7 can create properties without construstors and methods use arrow functions which will not result in any issues with the this keyword

class newHuman{
    gender='F'
    printgender = ()=>{
        console.log(this.gender)
    }
}

class newperson extends newHuman{
    name='anusha'
    printname = ()=>{
        console.log(this.name)
    }
}

const obj=new newperson();
obj.printname();
obj.printgender();