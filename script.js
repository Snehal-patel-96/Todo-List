const todoInput = document.querySelector('#todo-input');
const form = document.querySelector('form');
const ul = document.querySelector('#ul');

const createTodo = (event) => {
  event.preventDefault();

  //   const todoContainer = document.querySelector('#todo-container');
  const todoContainer = document.createElement('div');
  todoContainer.classList.add('flex', 'justify-between', 'items-center', 'p-2');

  // create li and append it to the todo container
  const li = document.createElement('li');
  li.classList.add('flex-1');
  li.textContent = todoInput.value;
  todoContainer.append(li);

  // create complete button and append to the container
  const completeButton = document.createElement('button');
  completeButton.classList.add(
    'border-2',
    'p-2',
    'mr-2',
    'border-black',
    'rounded-full'
  );
  completeButton.id = 'complete';
  completeButton.textContent = 'complete';
  todoContainer.append(completeButton);

  // create delete button and append to the container
  const deleteButton = document.createElement('button');
  deleteButton.classList.add(
    'border-2',
    'p-2',

    'border-black',
    'rounded-full'
  );
  deleteButton.id = 'delete';
  deleteButton.textContent = 'delete';
  todoContainer.append(deleteButton);

  // append todo container to the ul
  ul.append(todoContainer);
  todoInput.value = '';
};

const deleteTodo = (event) => {
  const item = event.target;
  if (item.id === 'complete') {
    item.previousElementSibling.classList.add('line-through');
    item.parentElement.classList.add('bg-red-400');
    item.disabled = true;
  } else if (item.id === 'delete') {
    item.parentElement.remove();
  }
};

form.addEventListener('submit', createTodo);

ul.addEventListener('click', deleteTodo);
