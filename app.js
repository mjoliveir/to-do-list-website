let tema = 'dark';
const root = document.documentElement;
const input = document.getElementById('c1-add-tasks-input');
const lista = document.getElementById('task_list');
let tasks = [];

tasks.filter(tasks => task.status !== 'removed')










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
        let task_template = {
        task: value,
        status: 'pendente'
        };
        console.log(value);
        console.log(tasks);
        const task = document.createElement('li');
        task.classList.add('teste');
        const taskText = document.createElement('p');
        taskText.textContent = value;

        //remover task
        const removeTask = document.createElement('button');
        removeTask.textContent = "remover";
        removeTask.onclick = () => {
            task_template.status = 'removed'
            lista.removeChild(task);
        }
        if (task_template.status == 'removed'){
            tasks = tasks.filter(task => tasks.status !== 'removed')
        }
        tasks.push(task_template);
        task.appendChild(taskText);
        task.appendChild(removeTask);
        lista.appendChild(task);

        //completar task
        const completedTasks = document.createElement('button');
        completedTasks.textContent = 'completar'
        completedTasks.onclick = () =>{
        completedTasks.classList.toggle('completed')
        task_template.status = completedTasks.classList.contains('completed')? 'completed' : 'pendente'
        }
        task.appendChild(completedTasks)

        //editar task
        const editTask = document.createElement('button');
        editTask.textContent = 'editar'
        editTask.onclick = () =>{

        }
    }
}

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      createTask();
      input.value = '';
  }
});

//BOTOES DE AÇÃO DAS TASKS

