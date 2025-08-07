let tema = 'dark';
const root = document.documentElement;
const input = document.getElementById('c1-add-tasks-input');
const lista = document.getElementById('task_list');
let tasks = [];

//modo claro
let light = () => {
    root.style.setProperty('--main-color', 'rgb(254, 239, 217)');
    root.style.setProperty('--sec-color', 'rgb(79, 70, 59)');
    root.style.setProperty('--lat-color', 'rgb(197, 188, 175)');
    root.style.setProperty('--hover-color', 'rgb(157, 147, 137)');
    tema = 'light';

    const icons = document.getElementsByClassName('hidden');
    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.remove('hidden');
    }
};

//modo escuro
let dark = () => {
    root.style.setProperty('--main-color', 'rgba(32, 23, 11, 1)');
    root.style.setProperty('--sec-color', 'rgba(135, 126, 116, 1)');
    root.style.setProperty('--lat-color', 'rgb(79, 70, 59)');
    root.style.setProperty('--hover-color', 'rgba(113, 89, 64, 1)');
    tema = 'dark';
};

function switchTheme() {
    if (tema === 'dark') light();
    else dark();
}


function createTask() {
    if (input.value.trim() !== '') {
        let value = input.value;
        createTaskFromText(value, true);
    }
}


function createTaskFromText(text, addArray, isComplete) {
    console.log('create task', text)
    if (text !== '') {
        task_template = addItemToArray(text, addArray);

        const task = document.createElement('li');
        task.classList.add('teste');
        const taskText = document.createElement('p');
        taskText.textContent = text;
        const divButtons = document.createElement('div')
        divButtons.classList.add('taskBTN')
        //remover task
        const removeTask = document.createElement('button');
        removeTask.innerHTML = '<i class="fa-solid fa-xmark"></i>'; 
        removeTask.classList.remove('teste')
        removeTask.classList.add('buttonRemove')
        removeTask.onclick = () => {
            //task_template.status = 'removed'
            //lista.removeChild(task);
            //tasks = tasks.filter(tasks => tasks.status !== 'removed')
        }
        
        task.appendChild(taskText);
        task.appendChild(divButtons)
        divButtons.appendChild(removeTask);
        lista.appendChild(task);
        
        const completedTasks = document.createElement('button');
        completedTasks.innerHTML = '<i class="fa-solid fa-check"></i>'
        completedTasks.classList.remove('teste')
        completedTasks.classList.add('buttonDone')

        if(isComplete){
            taskText.classList.toggle('tarefaConcluida')
            completedTasks.classList.add('buttonDonePress')
            completedTasks.classList.add('completed')
        }

        completedTasks.onclick = () =>{
            taskText.classList.toggle('tarefaConcluida')
            completedTasks.classList.add('buttonDonePress')
            completedTasks.classList.add('completed')
            completedTask(task_template.index);
        }
        divButtons.appendChild(completedTasks)
        
    }
}


input.addEventListener('keydown', function(event) {
    console.log('=================')
  if (event.key === 'Enter') {
      createTask();
      save();

      input.value = '';
  }
});

const getIndex = () => {
    console.log('getIndex', tasks);
    var index = 0;
    if(tasks != undefined && tasks.length > 0){
        console.log('tamanho ', tasks.length , 'posicao ', tasks.length - 1)
        var lastElement = tasks[tasks.length - 1];
        index = lastElement.index + 1;
    } else {
        console.log('nao entreou')
    }
    return index;
}

const addItemToArray = (text, addArray) => {
    var index = getIndex();

    let task_template = {
        index: index,
        task: text,
        status: 'pendente'
    };
    
    if(addArray == true){
        tasks.push(task_template);
    }

    return task_template;
}

const completedTask = (index) => {
    console.log('complete', index)

    let task_template = tasks[index];
    console.log('task_template', task_template)
    task_template.status = 'completed';
    tasks[index] = task_template;

            save();
}

const save = () =>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log('save' , tasks);
}

const restore = () => {
    tasks = []
    input.value = '';
    tasks = JSON.parse(localStorage.getItem('tasks'));

    if(tasks != undefined && tasks.length > 0){
        for(let i = 0; i < tasks.length ; i++){
            createTaskFromText(tasks[i].task, false, tasks[i].status == 'completed' ? true : false);
            console.log('for', i)
        }
    }

    console.log('restore' , tasks);
};

const resetTasks = () => {
    tasks = []
    localStorage.setItem('tasks', JSON.stringify(tasks))
};

//resetTasks();
restore()
