import './SelectInput.css'

export const SelectInput = (props) => {
  return (
    <div className='selection'>
      <label>{props.label}</label>

      <select
        onChange={ev => props.setInputValue(ev.target.value)} 
        value={props.inputValue} 
        required={props.required}
      >
        <option value='' disabled>Selecione um time</option>

        {props.itens.map((i) => (
          <option key={i}>{i}</option>
        ))}
      </select>
    </div>
  );
};
