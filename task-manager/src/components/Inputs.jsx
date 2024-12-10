import { forwardRef } from "react"

// eslint-disable-next-line react/prop-types
const Input = forwardRef(function Inputs({ label, textarea, ...props }, ref ) {
    return <p>
        <label>{label}</label>
        {textarea ? <textarea ref={ref} {...props}/> : <input ref={ref} {...props} />}
    </p>
})
export default Input;