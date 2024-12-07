
import Inputs from "./Inputs.jsx"
export default function Projects() {
    return (
        <div>
            <menu>
                <li><button>Cancel</button></li>
                <li><button>Save</button></li>
            </menu>
            <div>
                <Inputs label='Title'/>
                <Inputs label='Description' textarea />
                <Inputs label='Due Date' />
            </div>
        </div>
    )
}