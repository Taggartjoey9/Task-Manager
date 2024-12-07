import fallBackImg from '../assets/no-projects.png'

// eslint-disable-next-line react/prop-types
export default function FallBackCont({onStartProject}) {
    return <div>
        <img src={fallBackImg} alt='cartoon clip-board with pen'/>
        <h2>No Project Selected</h2>
        <p>Select a Project or Get Started with a New One</p>
        <p>
            <button onClick={onStartProject}>Create New Project</button>
        </p>
    </div>
}