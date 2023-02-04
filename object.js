const toDo = {
	list: {
      "create a new practice task": "In Progress", 
	   "make a bed": "Done", 
	   "write a post": "To Do",
   },
   changeStatus(name, progress) {
      this.list[name] = progress;
   },
   addTask(name, progress) {
      progress = "To Do";
      this.list[name] = progress;
   },
   deleteTask(name) {
      delete this.list[name];
   },
   showList() {
      for (const name in this.list) {
         if (this.list[name] === "To Do") {
            console.log("To Do:", name);
         }
      };
      for (const name in this.list) {
         if (this.list[name] === "In Progress") {
            console.log("In Progress:", name);
         }
      }
      for (const name in this.list) {
         if (this.list[name] === "Done") {
            console.log("Done:", name);
         }
      }
   }
};


toDo.changeStatus("write a post", 'Done');
toDo.addTask("have a walk");
toDo.deleteTask("have a walk");
toDo.showList();