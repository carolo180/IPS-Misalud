import '../components/menulateral/Menulateral.css';
import logo from '../utils/imagenes/logoforja.png';
import '../components/pantaprincipal/Pantaprinci.css';
import franja from '../utils/imagenes/franja.png';
import guerreros from '../utils/imagenes/guerreros.png';
import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import $ from "jquery";


function Principal() {
 
 
   function Main(){
   
    let men=document.getElementById("menulatera")
    
       $(men).animate({
         left:'0'
       })
    };

   function Main2(){
      let men=document.getElementById("menulatera")
     
        $(men).animate({
          left:'-100%'
        })
   };

  return (
    
    <div className="container">

      <section id="principal1">
      <div id="menulatera">
                  <div className="boton_cerrame">
                     <a href="#" className="bt-cerra"><span className="bot_cerra" onClick={Main2}><i className="fas fa-arrow-left"></i></span></a>
                   </div>
                   <img src={logo} className="logop" alt="logo" />
                <div id="botonmenu">
                    <Link to="/pacientes">
                      <button><i className="fas fa-users"><p>Pacientes</p></i></button>
                    </Link>   
                    <Link to="/vacunas">
                      <button><i className="fas fa-syringe"><p>Vacunación</p></i></button>
                    </Link>
                    <Link to="/login">
                      <button><i className="fas fa-power-off"><p>Cerrar sesión</p></i></button>
                    </Link>
                </div>
            </div>
            <div id="buscador1">
                
                <div id="pantalla">
                   <div className="boton_desple">
                     <a href="#" className="bt-menu"><span className="bot_icon" onClick={Main}><i className="fas fa-bars"></i></span></a>
                   </div>
                   <div id="loguser">
                   <i className="fas fa-user fa-1x"></i>
                   <h3 id="profe">Carolina Loaiza </h3>
                     </div>
                  
                    <h1>BIENVENIDOS</h1>
                    <form className="input-effect"  autoComplete="off" >
				   					     <input className="effect-16" type="text" placeholder="Digite el numero de documento" required="required" name="dni" id="dni"/>
                         <span className="focus-border"/>
                    </form>
                   <img src={guerreros} className="guerreros" alt="imagenguerreroscovid" />
                   <div id="footerprinci">
                      <div id="franjaazul"></div>
                      <img src={franja} className="franja2" alt="franja"/>
                    </div>
                </div>
          </div>
      </section>
        
        
    </div>
  );
}

export default Principal;
