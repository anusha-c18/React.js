const nums=[1,2,3];

// map takes in a function as an arg and applies it on each ele of the array
const doublenum=nums.map((sum)=>{
    // sum takes up each val of the nums array elements and returns it to create a new array doublenum
    return sum*2;
});

console.log(nums)
console.log(doublenum)