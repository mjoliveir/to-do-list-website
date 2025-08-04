let tema = 'dark';
const root = document.documentElement;

let light = () => {
    root.style.setProperty('--main-color', 'rgb(254, 239, 217)');
    root.style.setProperty('--sec-color', 'rgb(79, 70, 59)');
    root.style.setProperty('--lat-color', 'rgb(197, 188, 175)');
    root.style.setProperty('--hover-color', 'rgb(157, 147, 137)');
    tema = 'light'
}

let dark = () =>{
    root.style.setProperty('--main-color', 'rgba(32, 23, 11, 1)');
    root.style.setProperty('--sec-color', 'rgba(135, 126, 116, 1)');
    root.style.setProperty('--lat-color', 'rgb(79, 70, 59)');
    root.style.setProperty('--hover-color', 'rgba(113, 89, 64, 1)');
    tema = 'dark'
}

function switchTheme(){
    if (tema == 'dark') light()
    else dark()
}

function createTask(){
const div = document.getElementById('newTasks');
const newInput = document.createElement('input');
const newTasksButton = document.getElementById('taskButton')
newInput.textContent = 'Clique aqui!';
div.appendChild(newInput);

newTasksButton.style.display = 'none';
}
