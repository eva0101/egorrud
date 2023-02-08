let toDoList = ['почитать', 'помыть посуду', 'помыть машину', 'посадить цветы'];

function deleteTask(task) {
   task.splice(1, 1);
};

function addTask(task) {
   task.splice(1, 0, 'оно');
};

function showToDoList () {
   deleteTask(toDoList);
   addTask(toDoList);
   for (const task of toDoList) {
      console.log(task);
   }
}

showToDoList();