import './Cuerpovacunas.css';
import Swal from 'sweetalert2'
import React, {useEffect, useState}from "react";
import {db} from '../../firebase'
import {
      BrowserRouter as Router,
      Link,
    } from "react-router-dom";


function CuerpoVacunas() {

      const [pacientesdata, setData] = useState([])
      const [term, setTerm] = useState("")
     

      const onDeletep = async (id) => {
            Swal.fire({
                title: 'Estas seguro de eliminar este registro?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#c55110',
                cancelButtonColor: '#072f5e',
                confirmButtonText: 'Si, gracias!'
              }).then((result) => {
                if (result.isConfirmed) {
                     db.collection('pacientesdata').doc(id).delete();
                  Swal.fire(
                    'Registro eliminado!',
                    
                  )
                }
              })
                
          };

      const getData = async () => {
            db.collection('pacientesdata').onSnapshot((querySnapshot) => {
                const docs = [];
            querySnapshot.forEach((doc) => {
                
                docs.push({...doc.data(), id:doc.id});
            });
            setData(docs);
                
          });
        };
    
        useEffect(() => {
            getData();
    
        },[]);

        function searchTerm(term){
          return function(dat){
            return dat.dni.includes(term) ||  !term;
          };

          
        };

       


  return (
    <div className="container">
         <div id="buscador2">
               <Link to="/formuregvac">
                <button id="botagregar2">Agregar <i className="fas fa-user-plus"></i></button>
                </Link>
                <input type="search"
                  name="term"
                 placeholder="Numero de documento"
                  aria-label="Search through site content"
                  onChange={e => setTerm(e.target.value)} 
                 />
              <button id="buscar"><i className="fas fa-search"></i></button>
          </div>
              
        <div id="seccionprim2">
                             
            <div id="titlevacu">
                <h1>VACUNACIÓN</h1>
            </div>
           
        </div>
        <div id="fechas">
              <div id="pfecha">
              <label><strong>Desde</strong></label>
              <input type="date" 
              id="start" 
              name="term"
              min="2010-01-01" 
              max="2021-12-31" 
              onChange={e => setTerm(e.target.value)}
              />

               </div>
               <div id="sfecha">
               <label><strong>Hasta</strong></label>
              <input type="date" 
              id="term"
               name="term"
                min="2018-01-01"
                max="2021-12-31"
                onChange={e => setTerm(e.target.value)}
                 />

               </div>
            </div>
        
         <table id="tabvacu" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabindex="0">
            <tr>
                <th># DE REGISTRO</th>
                <th>FECHA DE REGISTRO</th>
                <th># DOCUMENTO</th>
                <th>NOMBRES</th>
                <th>APELLIDOS</th>
                <th>DOSIS</th>
                <th>PROFESIONAL</th>
                <th>ACCIONES</th>
            </tr>

            {pacientesdata.filter(searchTerm(term)).map((dat, index) =>(
              <tr key={index}>
                <td>{dat.nregistro}</td>
                <td>{dat.fregistro}</td>
                <td>{dat.dni} </td>
                <td>{dat.nombre}</td>
                <td>{dat.apellido} </td>
                <td>{dat.dosis} </td>
                <td>{dat.profesional} </td>
                <td><button id="edit" onClick={() =>{ 
                     localStorage.setItem("identificador", dat.id)
                     window.location.replace(`/formuvacuna/`)}}>Editar <i className="fas fa-pencil-alt"></i></button>
                <button id="elim" onClick={() => onDeletep(dat.id)}>Eliminar <i className="fas fa-window-close"></i></button> </td>
          </tr>

             ))}
         
          
            </table>
        
     
    </div>
  );
}

export default CuerpoVacunas;