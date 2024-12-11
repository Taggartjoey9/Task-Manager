import { useRef } from "react"
import Inputs from "./Inputs.jsx"

export default function Projects({ onAdd }) {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    
    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <div>
            <menu className="project-buttons">
                <li><button>Cancel</button></li>
                <li><button onClick={handleSave}>Save</button></li>
            </menu>
            <div className="input-container">
                <Inputs type="text "ref={title} label='Title'/>
                <Inputs ref={description} label='Description' textarea />
                <Inputs type="date" ref={dueDate} label='Due Date' />
            </div>
        </div>
    )
}