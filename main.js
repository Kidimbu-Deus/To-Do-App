window.addEventListener('load', () =>{
    taskList = JSON.parse(this.localStorage.getItem('todos')) || [];
const nameInput = document.querySelector('#name');
const newTaskForm = document.querySelector('#new-task');

const username = localStorage.getItem('username') || '';

nameInput.value = username;

nameInput.addEventListener('change', e => {
    localStorage.setItem('username', e.target.value);
    })
})