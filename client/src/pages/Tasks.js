import { useEffect, useState } from 'react';
import API from '../utils/API';


const Tasks = function () {
    const [tasks, setTasks] = useState([]);
    // so we can refresh the Page *after* we get a response back from the server on our new task!
    const [refresh] = useState(0);


    // Notice deps has refresh in there - this way when it increments from someone submitting
    // it calls fetch tasks again.
    useEffect(() => {
        fetchTasks();
    }, [refresh]);

    async function fetchTasks() {
        const { data } = await API.getTasks();
        setTasks(data);
    }
    return (
        <div>
            <h2>Tasks</h2>
            <ol>
                {tasks.map(task => {
                    return (
                        <li key={task._id}>
                            <strong>{task.title}</strong> {task.body} <sub>from: {task.user.email}</sub>
                        </li>
                    );
                })}
            </ol>

        </div>
    );
};

export default Tasks;