const form = document.querySelector('#form-main');
const email = document.querySelector('#email');
const divForm = document.querySelector('#form');
const error = document.createElement('p');
error.innerText = ('please provide a valid email')
console.log(error)
error.classList.add('error');
console.log(email)
console.log(divForm.lastElementChild)
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    divForm.lastElementChild.appendChild(error);
    email.style.border = '1px solid red'
})