new Promise((resolve, reject)=>{
    resolve();
})

const fakeRequest = (url)=>{
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(()=>{
            if(rand<0.7){
                resolve("data is here!");
            }
            reject("error");
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data)=>{
        console.log('Done', data);
    })
    .catch((err)=>{
        console.log('oh no!', err)
    })


const delayedColorChange = (color, delay)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(()=>{
        delayedColorChange('orange', 1000);
    })
    .then(()=>{
        delayedColorChange('yellow', 1000);
    })
    .then(()=>{
        delayedColorChange('red', 1000);
    })
    .then(()=>{
        delayedColorChange('blue', 1000);
    })