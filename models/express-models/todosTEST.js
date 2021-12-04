let tasks = {}; //

/*
  tasks (defined above) will be a place to store tasks by person;
  example:
  {
    person1: [{task object 1}, {task object 2}, etc.],
    person2: [{task object 1}, {task object 2}, etc.],
    etc.
  }
*/

module.exports = {
    reset: function () {
        tasks = {}; // (this function is completed for you.)
    },

    // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====

    listPeople: function () {
        // this is an array of names of people in the tasks object;
        //if the object is empty, this is []
        if (Object.keys(tasks).length > 0) {
            return Object.keys(tasks);
        }
        else {
            return [];
        }

        // returns an array of all people for whom tasks exist
    },

    add: function (name, task) {
        // this function accepts a name, and an object which contains a task
        //if the task object has a "complete" value, it leaves it as is
        //if the task object does not have a "complete value" it sets it to false
        //before adding the task to the tasks object
        if (task.complete === undefined) {
            task.complete = false;
        }

        if (tasks[name]) {
            tasks[name].push(task);
            //if the name exists in the tasks object defined above, 
            //the task is pushed (added) to the existing array which holds 
            //all tasks for a given person
            //that array within the object is accessed using tasks[name]
            //example tasks["zeke"] = [{content : 'clean room'}]
        }
        else {
            tasks[name] = [task];
            //if the person doesn't have any tasks yet, we create a key in the 
            //tasks object (name) and the value is an array holding the task
        }
        // saves a task for a given person

    },

    list: function (name) {
        return tasks[name];
        // returns tasks for specified person
    },

    complete: function (name, idx) {
        //access tasks object to access array of tasks for name given 
        //as argument to the function
        //access the idx-th entry in the task array for the name
        // set the complete value to true at the given idx
        tasks[name][idx].complete = true;

        // marks a task complete
    },

    remove: function (name, idx) {
        //uses the name provided as an argument to access the tasks object
        //uses the idx provided to access the array of tasks for the person
        //removes the idx-th task in the array
        tasks[name].splice(idx, 1);
        // removes a tasks
    },
};
