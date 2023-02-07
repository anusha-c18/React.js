function printname(name){
    console.log(name);
}
printname('anusha');
printname('anjali');

// arrow functions 

const printer = (name) =>{
    console.log(name)
}

printer('avinash')

// with one arg you can eliminate paranthesis

const printer2 = name =>{
    console.log(name)
}

printer2("hello")

// with no args you have to have paranthesis

const printer3 = () => {
    console.log('hey')
}

printer3()

// with more than 1 args you have to have paranthesis

const printer4 = (name, age) => {
    console.log(name+' '+age)
}

printer4('anusha',21)

// can return vals

const mult = (n1, n2) => {
    return n1*n2;
}

console.log(mult(12,21))

// a function with only a return statement can be reduced to 

const add =(n1,n2) => n1+n2;

console.log(add(103,2));


