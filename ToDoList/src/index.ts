console.log('It works!');
import { v4 as uuidv4 } from 'uuid';
const list = document.querySelector<HTMLUListElement>('#list');
const form = document.querySelector<HTMLFormElement>('#new-task-form');
const input = document.querySelector<HTMLInputElement>('#new-task-input');

type Task = {
  id: string;
  createdAt: number;
  title: string;
  completed: boolean;
}  

const tasks: Task[] = loadTasks();
tasks.forEach(addNewTask);
console.log(tasks);

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (input?.value.trim() == '' || input?.value.trim() == null) {
    return;
  }
  console.log('input value', input.value);
  const task: Task = {
    id: uuidv4(),
    createdAt: Date.now(),
    title: input.value,
    completed: false,
  };

  console.log(task);
  tasks.push(task);
  addNewTask(task);
  input.value = '';
});

function addNewTask(task: Task) {
  const li = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked;
    saveTasks();
  });
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  label.append(checkbox, task.title);
  li.append(label);
  list?.append(li);
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  const loadedTasks = localStorage.getItem('tasks');
  if (loadedTasks == null) {
    return [];
  }
  return JSON.parse(loadedTasks);
}