let submitBtn = document.getElementById("new-task-submit")

    submitBtn.onclick = function (e) {

    e.preventDefault()

    let validated = true;

    let newTaskInput = document.getElementById("new-task-input");

    let list = document.createElement("li");
    let textNode = document.createTextNode(document.getElementById("new-task-input").value);
    list.appendChild(textNode);
    document.getElementById("task-ist").appendChild(list);
    
    
}
