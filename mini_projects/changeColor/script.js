const changeButton = document.querySelector('#color');
changeButton.addEventListener('click', ()=>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.querySelector('h1').innerHTML = `rgb(${r}, ${g}, ${b})`;
})