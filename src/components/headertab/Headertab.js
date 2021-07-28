import './Headertab.css';
/*import '../firebase';*/
import logo from '../../utils/imagenes/logoforja.png';
import franja from '../../utils/imagenes/franja.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
  
} from "react-router-dom";

function Headertab() {
  return (
    <div className="container-fluid">
       <div id="headtab">
          <img id='logotab' src={logo} alt='logo'></img>
          <div id="bottab">
            <Link to="/principal">
          <button ><i class="fas fa-house-user fa-2x"></i></button>
          </Link>
          <Link to="/login">
          <button ><i class="fas fa-power-off fa-2x"></i></button>
          </Link>
          </div>
        </div>
        <div className='franjan'> 
            <img  src={franja} className="frantab" alt='franja' />
            <div id="fazul"></div>
        </div>
    </div>
  );
}

export default Headertab;