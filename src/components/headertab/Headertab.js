import './Headertab.css';
/*import '../firebase';*/
import logo from '../../utils/imagenes/logoforja.png';
import franja from '../../utils/imagenes/franja.png'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

function Headertab() {
  return (
    <div className="container">
       <div id="headtab">
            <div id="headt">
              <img id='logotab' src={logo} alt='logo'></img>
              <div id="bottab">
                <Link to="/principal">
              <button ><i className="fas fa-house-user fa-2x"></i></button>
              </Link>
              <Link to="/login">
              <button ><i className="fas fa-power-off fa-2x"></i></button>
              </Link>
              </div>
              </div>
          
            <div className='franjan'> 
                <img  src={franja} className="frantab" alt='franja' />
                <div id="fazul"></div>
            </div>
        </div>
    </div>
  );
}

export default Headertab;