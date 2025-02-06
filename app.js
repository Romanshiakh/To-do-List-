// variables
const addTask = document.getElementById("add-task"); // btn
const taskContainer = document.getElementById("task-container"); // new container : all items are come in it inthe form of : list
const inputTask = document.getElementById("input-task"); // user input

// Event listeer for btn

addTask.addEventListener("click", () => {
    let task = document.createElement("div"); //? create task
    task.classList.add("task"); // add into the html

    let li = document.createElement("li"); // ?create list
    li.innerText = `${inputTask.value}`; //add the user input in the list which we created just now
    task.appendChild(li);

    let checkBtn = document.createElement("button"); //? create check btn
    checkBtn.innerHTML = '<i class = "fa-solid fa-check"><i/>'; // plus symbol
    checkBtn.classList.add("checkTask"); // !checkTask :created just and use it in the css also
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement("button"); //? create delete btn
    deleteBtn.innerHTML = '<i class = "fa-solid fa-trash-can"><i/>'; // trash symbol
    deleteBtn.classList.add("deleteTask"); // !deleteTask :created just and use it in the css also
    task.appendChild(deleteBtn);

    if (inputTask.value === "") {
        alert("Please Enter a Task");
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkBtn.addEventListener("click", () => {
        checkBtn.parentElement.style.textDecoration = "line-through";
    });

    deleteBtn.addEventListener("click", event => {
        let target = event.target;
        target.parentElement.parentElement.remove();
    });
});
