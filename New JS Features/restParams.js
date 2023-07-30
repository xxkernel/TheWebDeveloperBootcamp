function sum(...nums){
    return nums.reduce((total, el) => total+el)
}

console.log(sum(1,2,3,4));
