import './Pantaprinci.css';
import franja from '../../utils/imagenes/franja.png';
import guerreros from '../../utils/imagenes/guerreros.png';


function Pantaprinci() {
  return (
    <div id="buscador1">
                
    <div id="pantalla">
        <h1>BIENVENIDOS</h1>
        <div id="inpu">
        <p>Digite el numero de documento del paciente</p>
        <input type="number" id="documen" name="documen" required maxLength="15" size="18"></input>
        </div>
        <div>
           <div id="franjaazul"></div>
           <img src={franja} className="franja2" alt="franja"/>
        </div>
       

         <img src={guerreros} className="guerreros" alt="imagenguerreroscovid" />
    </div>

</div>
 );
}

export default Pantaprinci;