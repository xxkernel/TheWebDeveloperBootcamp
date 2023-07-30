// 1
// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const product_text = document.querySelector('#product');
const number = document.querySelector('#qty');
const lists = document.querySelector('#list');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const product_text = document.querySelector('#product');
    const number = document.querySelector('#qty');
    const list = document.createElement('li');
    list.textContent = `${number.value} ${product_text.value}`;
    lists.appendChild(list);
    product_text.value = '';
    number.value = '';
})



//2