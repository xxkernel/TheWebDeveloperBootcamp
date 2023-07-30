// 1
const con = document.querySelector('#container');
const image = document.querySelector('img');
con.style.textAlign = 'center';
image.style.width = '150px';
image.style.borderRadius = '50%';



// 2
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!
//YOU CODE GOES HERE:
const texts = document.querySelectorAll('span');
let i = 0;
for(let text of texts){
    text.style.color = colors[i];
    i++;
}