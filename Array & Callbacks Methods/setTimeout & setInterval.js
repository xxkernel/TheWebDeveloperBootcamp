console.log('Hello!...')
setTimeout(()=>{
    console.log('...are you still there?')
}, 3000)


const id = setInterval(()=>{
    console.log(Math.random());
},2000);

clearInterval(id);