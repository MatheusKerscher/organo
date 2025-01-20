import './TextInput.css'

const TextInput = (props) => {
    const onType = (ev) => {
        props.setInputValue(ev.target.value)
    }

    return (
        <div className="text-input">
            <label>
                {props.label}
            </label>

            <input 
                onChange={onType} 
                value={props.inputValue} 
                required={props.required} 
                placeholder={props.placeholder} 
            />
        </div>
    )
}

export default TextInput