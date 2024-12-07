
// eslint-disable-next-line react/prop-types
export default function Sidebar({onStartProject}) {
    return (
        <section className="side-container">
            <div className="side-content">
                <h1>Your Projects</h1>
                <button onClick={onStartProject}>+ Add Project</button>
                <ul></ul>
            </div>
        </section>
    )
}