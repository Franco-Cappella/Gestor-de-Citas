import './InputTextPlaceholder.css';

const InputTextPlaceholder = ({ label, name, placeholder }) => {
  return (
    <>
      <label>{label}</label>
      <input 
        type="text" 
        name={name} 
        className="u-full-width" 
        placeholder={placeholder} 
      />
    </>
  );
};

export default InputTextPlaceholder;