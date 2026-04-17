import './Formulario.css'; 

function InputDate({ label, valor, cambio }) {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="date" 
        className="u-full-width" 
        value={valor}
        onChange={cambio}
      />
    </div>
  );
}

export default InputDate;