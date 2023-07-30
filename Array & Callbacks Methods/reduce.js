const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

const total = prices.reduce((temp, current) =>{
    return temp+current;
});

console.log(total);

const minPrice = prices.reduce((min, price) =>{
    if(min>price){
        return price;
    }
    return min;
})

console.log(minPrice)

const evens = [2,4,6,8];
const res = evens.reduce((sum,num) => sum+num, 100);
console.log(res)