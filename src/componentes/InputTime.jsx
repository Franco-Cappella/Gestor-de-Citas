import './Formulario.css';

function InputTime({ label, valor, cambio }) {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="time" 
        className="u-full-width"
        value={valor}
        onChange={cambio}
      />
    </div>
  );
}

export default InputTime;