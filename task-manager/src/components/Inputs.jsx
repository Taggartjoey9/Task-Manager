// eslint-disable-next-line react/prop-types
export default function Inputs({ label, textarea, ...props }) {
    return <p>
        <label>{label}</label>
        {textarea ? <textarea {...props}/> : <input {...props} />}
    </p>
}