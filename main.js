    window.addEventListener("load", () => {
taskList = JSON.parse(this.localStorage.getItem('taskList')) || [];
const nameInput = document.querySelector('#name');
const newTaskForm = document.querySelector('#new-task');

const username = localStorage.getItem('username') || '';

nameInput.value = username;

nameInput.addEventListener('change', e => {
    localStorage.setItem('username', e.target.value);
})

    newTaskForm.addEventListener('submit', e => {
        e.preventDefault();
    

    const task = {
        content: e.target.elements.task-content.value,
        category: e.target.elements.category.value,
        done: false,
        createdAt: new Date().getTime(),
    }

    taskList.push(task);

    localStorage.setItem('taskList', JSON.stringify(taskList));

    e.target.reset();

    DisplayTaskList();

    })

    DisplayTaskList();

})

function DisplayTaskList() {
    const taskItems = document.querySelector('#task-list');

    taskList.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        const label = document.createElement('label');
        const input = document.createElement('input');
        const span = document.createElement('span');
        const content = document.createElement('div');
        const actions = document.createElement('div');
        const edit = document.createElement('button');
        const deleteButton = document.createElement('button');

        input.type = 'checkbox';
        input.checked = task.done;
        span.classList.add('bubble');

        if (task.category == 'personal'){
            span.classList.add('personal');
        } else {
            span.classList.add('work');
        }

        content.classList.add('content');
        actions.classList.add('actions');
        edit.classList.add('edit');
        deleteButton.classList.add('delete');

        content.innerHTML = `<input type="text" value="${task.content}" readonly>`;
        edit.innerHTML = 'edit';
        deleteButton.innerHTML = 'delete';

        label.appendChild(input);
        label.appendChild(span);
        actions.appendChild(edit);
        actions.appendChild(deleteButton);
        taskItem.appendChild(label);
        taskItem.appendChild(content);
        taskItem.appendChild(actions);

        taskItems.appendChild(taskItem);

        if (task.done) {
            taskItem.classList.add('done');
        }

        input.addEventListener('click', e => {
            task.done = e.target.checked;
            localStorage.setItem('taskList', JSON.stringify(taskList))

            if (task.done){
                taskItem.classList.add('done');
            } else {
                taskItem.classList.remove('done');
            }

            DisplayTaskList();
        })

        edit.addEventListener('click', e => {
            const input = content.querySelector('input');
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', e =>{
                input.setAttribute('readonly', true);
                task.content = e.target.value;
                localStorage.setItem('taskList', JSON.stringify(taskList))
                DisplayTaskList()

            })

        })

        deleteButton.addEventListener('click', e =>{
            taskList = taskList.filter(t => t != task);
            localStorage.setItem('taskList', JSON.stringify(taskList))
            DisplayTaskList();
        })
    })

}
