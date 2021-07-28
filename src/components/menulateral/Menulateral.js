import './Menulateral.css';
import logo from '../../utils/imagenes/logoforja.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect,
    
  } from "react-router-dom";


function MenuLateral() {
  return (
           <div id="menulatera">
                <img src={logo} className="logop" alt="logo" />
                <div id="botonmenu">
                <Link to="/pacientes">
                    <button>Pacientes</button>
                 </Link>   
                    <Link to="/vacunas">
                    <button>Vacunación</button>
                    </Link>
                    <Link to="/login">
                    <button>Cerrar sesión</button>
                    </Link>
                </div>
            </div>
 );
}

export default MenuLateral;