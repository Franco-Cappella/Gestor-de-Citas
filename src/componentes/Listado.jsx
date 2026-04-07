import Cita from './Cita';
import './Listado.css';

const Listado = ({ citas }) => {
  return (
    <>
      <h2>Administra tus citas</h2>
      <div className="lista-citas">
        {citas.map(cita => (
          <Cita 
            cita={cita} 
          />
        ))}
      </div>
    </>
  );
};

export default Listado;