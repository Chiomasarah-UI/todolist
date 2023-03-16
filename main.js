window.addEventListener('load', () => {
    const form = document.querySelector("#formInput");
    const input = document.querySelector("#newTask");
    const list = document.querySelector("#tasks");

    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        localStorage.setItem("contain", (input.value));
        taskContain = localStorage.getItem("contain");

        if(!taskContain){
            //document.getElementById("pet").innerHTML = " field cannot be empty";
            alert('please');
            return;
        }

        
        const taskElement = document.createElement("div");
        taskElement.classList.add("taskContain");
        
        
        const taskElementContain = document.createElement("div");
        taskElementContain.classList.add("taskWrap")
        //taskElementContain.innerText = taskContain;

        taskElement.prepend(taskElementContain);

        const taskInput = document.createElement("input");
        taskInput.classList.add("text");
        taskInput.type = "text";
        taskInput.value = taskContain;
        taskInput.setAttribute("readonly", "readonly");

        taskElementContain.prepend(taskInput);

        const taskAction = document.createElement("div");
        taskAction.classList.add("actions");

        const taskEdit = document.createElement("button");
        taskEdit.classList.add("edit");
        taskEdit.innerHTML = "Edit";

        const taskDelete = document.createElement("button");
        taskDelete.classList.add("delete");
        taskDelete.innerHTML = "Delete";

        taskAction.appendChild(taskEdit);
        taskAction.appendChild(taskDelete);

        taskElement.appendChild(taskAction);


        list.prepend(taskElement);

        input.value = "";

        taskEdit.addEventListener('click', () =>{
            if(taskEdit.innerText.toLowerCase() == "edit"){
                taskInput.removeAttribute("readonly");
                taskInput.focus();
                taskEdit.innerText = "Save";
            }else {
                taskInput.setAttribute("readonly", "readonly");
                taskEdit.innerText = "Edit";
            }
            
        });

        taskDelete.addEventListener('click', () =>{
            list.removeChild(taskElement);
        });

    });

});