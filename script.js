// 1. store value of input field
const todoInput = document.querySelector('#todo-input');
const form = document.querySelector('form');
// 2. add event listener to form to get the data of input field

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted!', todoInput.value);
});
// 3. create a container and attach li to it
