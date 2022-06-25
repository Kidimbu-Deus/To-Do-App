window.addEventListener("load", () => {
    taskList = JSON.parse(this.localStorage.getItem('taskList')) || [];
const nameInput = document.querySelector('#name');
const newTaskForm = document.querySelector('#new-task');

const username = localStorage.getItem('username') || '';

nameInput.value = username;

nameInput.addEventListener("change", e => {
    localStorage.setItem('username', e.target.value);
})

    newTaskForm.addEventListener("submit", e => {
        e.preventDefault();
    

    const tasks = {
        content: e.target.elements.task-content.value,
        category: e.target.elements.category.value,
        done: false,
        createdAt: new Date().getTime
    }

    taskList.push(tasks);

    localStorage.setItem('taskList', JSON,stringify(taskList))

    e.target.reset()

    })

})