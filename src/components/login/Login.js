import './Login.css';
import logo from  './logoforja.png';
import '../../App.js';
import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";


const Login = () =>{
  

    function validarUsu(e){
      e.preventDefault();
     
      
        let usu=document.getElementById("correo").value
        let pas=document.getElementById("contraseña").value
        
       
        if(usu===0){
          alert("Digite el usuario")
          
    
        }
        else if(pas===0){
           alert("Digite la contraseña")
          
    
        }
        
        else if (usu==="carolo" & pas==="carol123"){
            window.location.href=("/principal");
           }
        else {
            alert (`${usu} ${pas}"No es correcta"`)
        }
               
         };

         

  return (
    <div className='login'>
      <Link to="/inicio">
      <button id="volver">Volver al inicio</button>
      </Link>
      <form className='log' name="formi">
      <div className='ingresa'>
        <img className='logol' src={logo} alt='logo' />
        <h4 id="slogan">Contigo, siempre!</h4>
      </div>
      <div className=" inputs mb-3">
        <label for="correo" className="form-label">Usuario</label>
        <input type="email" className="form-control" name="correo" id="correo" aria-describedby="emailHelp" />
      </div>
      <div className=" inputs mb-3">
        <label for="contraseña" className="form-label">Contraseña</label>
        <input type="password" className="form-control" name="contraseña" id="contraseña" />
      </div>
      <div className="mb-3 form-check">
        <a href=''>¿Olvidaste tu contraseña? </a>
      </div>
      <div className='botoni'>
        <button type="submit" className="btn btn-primary" onClick={validarUsu}>Ingresar</button>
      </div>
      
    </form>
    
    </div>

    
  );

 ;
}

export default Login;