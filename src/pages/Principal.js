import '../components/menulateral/Menulateral.css';
import logo from '../utils/imagenes/logoforja.png';
import '../components/pantaprincipal/Pantaprinci.css';
import franja from '../utils/imagenes/franja.png';
import guerreros from '../utils/imagenes/guerreros.png';
import React, {useEffect, useState}from "react";
import Swal from 'sweetalert2'
import $ from "jquery";
import {db} from '../firebase'
import { useHistory } from 'react-router';

import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";



function Principal() {

  const [pacientesdata, setData] = useState([])
      const [term, setTerm] = useState("")
 
 
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

   
   
   let history = useHistory();

    const handleSubmit5 = async(e) =>{
     e.preventDefault()

     const table = document.querySelector('table');
     const foot = document.querySelector('#footerprinci');
    
     table.style.setProperty("margin-top","50px")
     table.style.setProperty("margin-left","12%")
     table.style.setProperty("width","1000px")
     table.style.setProperty("height","150px")
     foot.style.setProperty("margin-top","187px")

  
     
    

   const addData = dat => {
       let html = `
           <tr>
           <th>Id Registro</th>
           <th>Nombres</th>
           <th>Apellidos</th>
           <th># Documento</th>
           <th>Dosis</th>
           <th colspan="2">Acciones</th>
           
           </tr>


           <tr>
              <td> ${dat.nregistro} </td>
              <td> ${dat.nombre} </td>
              <td> ${dat.apellido} </td>
              <td> ${dat.dni} </td>
              <td> ${dat.dosis} </td>
              <td><button onClick='enviard()'  id="btpaci"><i class="fas fa-syringe fa-2x"></i></button><p>Editar vacuna</p></td>
              <td><button onClick='enviarc()' id="btpaci"><i class="far fa-eye fa-2x"></i></button><p>Editar datos</p></td>
             
             
           </tr>
          
     
       `;
           table.innerHTML += html;

           window.enviard = () => {
            history.push("/vacunas")
                      
           
          }

          window.enviarc = () => {
            
            history.push(`/pacientes/`)
          }

       
       
   };

   
   
     
     
   console.log(term)
    
     
     db.collection("pacientesdata").where("dni", "==", term).get().then(snapshot => {
        // Que hacer despues de recibir el dato
        console.log(snapshot.docs[0].data());
        snapshot.forEach(doc => {
          // console.log(doc.data());
          addData(doc.data());
      });
             
    })
    .catch(err => Swal.fire({
      title: 'Usuario no registrado, desea realizar el registro?',
      imageUrl: 'https://forjaempresas.com/wp-content/uploads/2020/08/Logos-01-1.png',
      imageWidth: 300,
      imageHeight: 70,
      showCancelButton: true,
      confirmButtonColor: '#c55110',
      cancelButtonColor: '#072f5e',
      confirmButtonText: 'Si, gracias!'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href=("/formupaciente");
      }
    }));
    
      
       
  };


  const refPage = async(e) =>{
    window.location.replace(`/principal/`)
  }

  

 
  
  

  
  return (
    
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
                    <div id="searchingstar">
                    <form className="input-effect"  autoComplete="off" >
				   					     <input className="effect-16"
                           type="text"
                           placeholder="Digite el numero de documento"
                            required="required" 
                            name="look" 
                            id="look" 
                            onChange={e => setTerm(e.target.value)} />
                            <span className="focus-border"/>
                                                               
                    </form>
                    <button id="lookstart" type="button" onClick={handleSubmit5}><i class="fas fa-search"></i></button>
                    <button id="refresh" type="button" onClick={refPage}><i class="fas fa-redo"></i></button>
                     </div>
                     <table>
                      
                                          
                  
                      </table>
                      
                    

                   
     
                <div>
                   <img src={guerreros} className="guerreros" alt="imagenguerreroscovid" />
                   </div>
                   <div id="footerprinci">
                       <img src={franja} className="franja2" alt="franja"/>
                    </div>
                </div>
          </div>
      </section>
    
        
        
    
    
    
  );
}

export default Principal;
