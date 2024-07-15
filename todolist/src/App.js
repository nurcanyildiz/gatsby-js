import './App.css';
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([]);

    function addTask(name) {
        if (name.length === 0 && name === '') {
            alert('Write your task!')
            return;
        }
        if (name.match(/^[A-Za-z]+$/) === null) {
            alert("No symbols and number allowed")
            return;
        }
        setTasks(prev => {
            return [...prev, {name: name, done: false}]
        })

    }

    function updateTaskDone(taskIndex, newDone) {
        setTasks(prev => {
            const newTasks = [...prev];
            newTasks[taskIndex].done = newDone;
            return newTasks
        });
    }

    return (
        <>
            <main>
                <TaskForm onAdd={addTask}/>
                {tasks.map((task, index) => (
                    <Task {...task}
                          onToggle={done => updateTaskDone(index, done)}/>
                ))}

            </main>
        </>
    );
}

export default App;
