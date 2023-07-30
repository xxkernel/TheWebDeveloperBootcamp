const nums = [1,2,3,4,5,6,7]

console.log(nums);
console.log(...nums);

// arrays
const cats = ['a', 'b', 'c'];
const dogs = [1,2,3];
const allPets = [...cats, ...dogs];
console.log(allPets);

//objects
const data = {
    a: 1,
    b: 2,
    c: 3
}

const newData = {...data, d: 4, e: 5};
console.log(newData);