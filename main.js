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
    

    const task = {
        content: e.target.elements.task-content.value,
        category: e.target.elements.category.value,
        done: false,
        createdAt: new Date().getTime
    }

    taskList.push(task);

    localStorage.setItem('taskList', JSON,stringify(taskList))

    e.target.reset()

    DisplayTaskLists()

    })

    DisplayTaskLists()

})

function DisplayTaskLists() {
    const taskItems = documnet.getElementById('task-list')

    taskItems.innerHTML = ''

    taskList.forEach(task => {
        const taskItem = document.createElement('div')
        taskItem.classList.add('task-item')

        const label = document.createElement('label')
        const input = document.createElement('input')
        const span = document.createElement('span')
        const content = document.createElement('div')
        const actions = document.createElement('div')
        const edit = document.createElement('button')
        const deleteButton = document.createElement('button')

        input.type = 'checkbox'
        input.checked = task.done
        span.classList.add('bubble')

        if (todo.category == 'personal'){
            span.classList.add('personal')
        } else {
            span.classList.add('work')
        }
    })

}
