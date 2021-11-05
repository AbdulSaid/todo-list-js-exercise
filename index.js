
// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title,description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function(task) {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: function(task) {
      task.complete = true;
    }
  };
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter","Take all the 💩 out of the litter box")
const task2 = newTask("Do Laundry","😨"); // task 1
const tasks = [task1,task2];

task1.logState(); //Clean cat litter has not been completed
task1.markCompleted();
task1.logState(); //Clean cat litter has been completted

console.log(tasks);
