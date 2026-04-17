import './Formulario.css';

function InputTextSinPH({ label, valor, cambio }) {
  return (
    <div>
      <label>{label}</label>
      <textarea 
        className="u-full-width"
        value={valor}
        onChange={cambio}
      ></textarea>
    </div>
  );
}

export default InputTextSinPH;