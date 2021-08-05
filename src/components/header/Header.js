import './Header.css';
/*import '../firebase';*/
import logo from '../../utils/imagenes/logoforja.png';
import linea from '../../utils/imagenes/linea.png';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <header>
        
          <div id="blacksect">
            <p>j</p>
          </div>
          <div id="contact">
            <div id="picono">
              <i className="fas fa-phone-alt"></i><p>+57 1 744 7050</p>
            </div>
          <div id="sicono">
            <i className="fas fa-map-marker-alt"></i><p>Carrera 21 # 98-71 Segundo piso<br></br> Bogotá-Colombia</p>
          </div>
          <div id="ticono">
          <Link to="/login">
          <button id="ingreso1"><p>Iniciar sesión <i className="far fa-user"></i></p></button>
          </Link>
          </div>
          </div>
          <br></br>
                
          <div id="principal">
              <img src={logo} className="logo" alt="logo" />
              <i className="fas fa-syringe"></i>
              <img src={linea} className="linea" alt="linea" />

          </div>
       </header>
    </div>
  );
}

export default Header;
