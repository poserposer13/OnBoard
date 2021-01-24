import { useEffect, useState } from 'react';
import API from '../utils/API';
import TaskTabs from '../components/TaskTabs';

const Tasks = function () {
    const [tasks, setTasks] = useState([]);
    // so we can refresh the Page *after* we get a response back from the server on our new task!
    const [refresh] = useState(0);
    const [selected, setSelected] = useState('In-Progress');


    // Notice deps has refresh in there - this way when it increments from someone submitting
    // it calls fetch tasks again.
    useEffect(() => {
        fetchTasks();
    }, [refresh]);

    async function fetchTasks() {
        const { data } = await API.getTasks();
        setTasks(data);
        console.log(data);
    }

    const toggleTask = async (id, checkedStatus) => {
        const flippedCheckedStatus = !checkedStatus;
        await API.changeCompletion(id, flippedCheckedStatus);
        fetchTasks();
    };


    return (
        <div>
            <h2>Tasks</h2>
            <TaskTabs selected={selected} setSelected={setSelected} tasks={tasks} toggleTask={toggleTask} />
        </div >
    );
};

export default Tasks;