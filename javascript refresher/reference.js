// primitive type
const num1=1;

// will create an actual copy of the value
const num2=num1;

console.log(num2)

const p1={
    name:'anu'
};
const p2=p1
// reference will store a pointer to the memory of p1. if i change p1 values will also change in p2 as it is only a pointer to p1. This applies to both objects and arrays
p1.name='anusha'
console.log(p2)

// to create an actual copy we can use the spread operator

const p3={
    ...p1
}
console.log(p3.name)
p1.name="hey"
console.log(p3.name)
console.log(p1.name)

//thus, objs and arrays are reference types