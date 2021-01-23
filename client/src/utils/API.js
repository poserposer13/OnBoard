import axios from 'axios';

const API = {
    // Gets all tasks
    getTasks: function () {
        return axios.get('/api/tasks');
    },
    // Gets the task with the given id
    getTask: function (id) {
        return axios.get('/api/tasks/' + id);
    },
    // Deletes the task with the given id
    deleteTask: function (id) {
        return axios.delete('/api/tasks/' + id);
    },
    // Saves a task to the database
    saveTask: function (taskData) {
        return axios.post('/api/tasks', taskData);
    },
    // Changes the task completion with the given id
    changeCompletion: function (id, checkedStatus) {
        return axios.patch('/api/tasks/' + id, {isComplete: checkedStatus});
    }  
};
export default API;

