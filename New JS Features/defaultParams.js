function rollDie(num = 6){
    // if(num===undefined){
    //     num = 6;
    // }

    return Math.floor(Math.random()*num) + 1;
}

console.log(rollDie());

function greet(msg="Hey", person){
    return `${msg} ${person}`;
}
//params should be in the last position to not get undefined