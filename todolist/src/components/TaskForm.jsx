import {useState} from "react";

const TaskForm = ({onAdd}) => {
    const [taskName, setTaskName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onAdd(taskName);
        setTaskName("");
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <button className="sign">+</button>
                <input type="text"
                       value={taskName}
                       onChange={e => setTaskName(e.target.value)}
                       placeholder="Type your task"/>
            </form>
        </>
    )
}
export default TaskForm;