const exams = [80,85,90,100,87,74];

const check = exams.every(n =>{
    return n>=75;
})

const check_only = exams.some(n =>{
    return n>=75;
})
console.log(check)
console.log(check_only)