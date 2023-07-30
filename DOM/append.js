const image = document.createElement('img');
document.body.appendChild(image);




// WRITE YOUR CODE IN HERE:
const cont = document.querySelector('#container');
for(let i = 0;i<100;i++){
    const btn = document.createElement('button');
    btn.innerText = 'Hey!';
    cont.appendChild(btn);
}