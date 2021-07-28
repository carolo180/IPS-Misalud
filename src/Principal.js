import './Principal.css';
import logo from './logoforja.png';
import franja from './franja.png';
import guerreros from './guerreros.png';


function Principal() {
  return (
    <div className="container">
        <section id="principal">
            <div id="menulatera">
                <img src={logo} className="logop" alt="logo" />
                <div id="botonmenu">
                    <button>Pacientes</button>
                    <button>Vacunación</button>
                    <button>Vacunas</button>
                    <button>Cerrar sesión</button>
                </div>
            </div>
            <div id="buscador">
                
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
        </section>
        
    </div>
  );
}

export default Principal;
