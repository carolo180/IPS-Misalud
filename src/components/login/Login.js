import './Login.css';
import logo from  './logoforja.png';
import '../../App.js';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
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

        if(usu==0 & pas==0){
          Swal.fire({
            showCloseButton: true,
            title: 'Oops!',
            text: 'Porfavor ingresa tu usuario y contraseña',
            imageUrl: 'https://forjaempresas.com/wp-content/uploads/2020/08/Logos-01-1.png',
            imageWidth: 300,
            imageHeight: 70,
            closeButtonColor:'#040D66',
            confirmButtonColor: '#C55110',
            background: '#FFECD8',
            imageAlt: 'Custom image',
          })
          
    
        }
        
       
        else if(usu==0){
                  
              Swal.fire({
                showCloseButton: true,
                title: 'Oops!',
                text: 'Olvidaste escribir tu usuario',
                fontWeight:'bold',
                imageUrl: 'https://forjaempresas.com/wp-content/uploads/2020/08/Logos-01-1.png',
                imageWidth: 300,
                imageHeight: 70,
                confirmButtonColor: '#C55110',
                imageAlt: 'Custom image',
              })
          }

        else if(pas==0){
          
          Swal.fire({
            showCloseButton: true,
            title: 'Oops!',
            text: 'Olvidaste escribir tu contraseña',
            fontWeight:'bold',
            imageUrl: 'https://forjaempresas.com/wp-content/uploads/2020/08/Logos-01-1.png',
            imageWidth: 300,
            imageHeight: 70,
            confirmButtonColor: '#C55110',
            imageAlt: 'Custom image',
          })
           
        }

         else if (usu==="carolo" & pas==="carol123"){
          let timerInterval
          Swal.fire({
            title: 'Bienvenida Carolina!',
            html: 'Cargando',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          })
         window.location.href=("/principal");
        }
              
        else if (usu==="carolo" & pas!=="carol123"){
          Swal.fire({
            showCloseButton: true,
            title: 'Oops!',
            text: (`"${pas}"  No es una contraseña valida`),
            fontWeight:'bold',
            imageUrl: 'https://forjaempresas.com/wp-content/uploads/2020/08/Logos-01-1.png',
            imageWidth: 300,
            imageHeight: 70,
            confirmButtonColor: '#C55110',
            imageAlt: 'Custom image',
          })
           
            
        }

        else if (usu!=="carolo" & pas==="carol123"){
          Swal.fire({
            showCloseButton: true,
            title: 'Oops!',
            text: (`"${usu}"  No es un usuario registrado`),
            fontWeight:'bold',
            imageUrl: 'https://forjaempresas.com/wp-content/uploads/2020/08/Logos-01-1.png',
            imageWidth: 300,
            imageHeight: 70,
            confirmButtonColor: '#C55110',
            imageAlt: 'Custom image',
          })
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
        <label id="labl" for="correo" className="form-label">Usuario</label>
        <input type="email" className="form-control" name="correo" id="correo" aria-describedby="emailHelp" />
      </div>
      <div className=" inputs mb-3">
        <label id="labl" for="contraseña" className="form-label">Contraseña</label>
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