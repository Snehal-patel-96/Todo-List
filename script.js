const todoInput = document.querySelector('#todo-input');
const form = document.querySelector('form');
const ul = document.querySelector('#ul');

const createTodo = (event) => {
  event.preventDefault();
  if (!todoInput.value) {
    alert('Please enter Task!');
    return;
  }

  const todoContainer = document.createElement('div');
  todoContainer.classList.add(
    'flex',
    'justify-between',
    'items-center',
    'p-3',
    'bg-teal-600',
    'text-white'
  );

  const li = document.createElement('li');
  li.classList.add('flex-1');
  li.textContent = todoInput.value;
  todoContainer.append(li);

  const completeButton = document.createElement('button');
  completeButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  completeButton.classList.add('mr-5');
  completeButton.id = 'check';
  todoContainer.append(completeButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteButton.id = 'delete';
  todoContainer.append(deleteButton);

  ul.append(todoContainer);
  todoInput.value = '';
};

const deleteTodo = (event) => {
  const item = event.target.parentElement;
  if (item.id === 'check') {
    item.previousElementSibling.classList.add('line-through');
    item.parentElement.classList.add('bg-red-400');
    item.disabled = true;
  } else if (item.id === 'delete') {
    item.parentElement.remove();
  }
};

form.addEventListener('submit', createTodo);

ul.addEventListener('click', deleteTodo);
