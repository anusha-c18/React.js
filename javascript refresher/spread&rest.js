// the operator is ...
// the spread is used to split up array elements or obj properties

// const newarray=[...oldarray,1,2]
// const newobj=[...oldobj,newprop:5]

// the above joins the old array with two new elements into a new array and joins and old obj with a new property in a new obj. If the property is present in the old array it will be overwritten with the new key value pair specified in the new object

// rest is used to merge a list of function arguments into an array

// function sortargs(...args){
//     return args.sort();
// }

const num1= [1,2,3]
const num2=[...num1,4,5]
console.log(num2)
const num3=[0,...num1,4,5]
console.log(num3)
//object below
const person={
    name: 'anu'
};
const newperson={
    ...person,
    age:21
};
console.log(newperson);
const newperson1={
    ...person,
    name:'21' //overwrites the property
};
console.log(newperson1);

const filter =(...args)=>{
    return args.filter(el=> el === 1||el===3);
    // === checks for type and equality
}

console.log(filter(1,2,3,4));