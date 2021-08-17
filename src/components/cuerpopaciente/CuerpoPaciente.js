import './CuerpoPaciente.css';
import React, {useEffect, useState}from "react";
import Swal from 'sweetalert2'
import {db} from '../../firebase'
import {
      BrowserRouter as Router,
      Link,
    } from "react-router-dom";


function CuerpoPaciente() {
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
          return function(x){
            return x.dni.includes(term) || !term;
          };
        }

        

        

  return (
    <section id="pacprincipal">
        <div id="seccionprim">
            <div id="bit">
            <Link to="/Formupaciente">
            <button id="botagregar">Agregar <i className="fas fa-user-plus"></i></button>
            </Link>
            <div id="inpupac">
            <input type="search" 
            id="sites" 
            name="term"
            placeholder="Numero de documento"
             aria-label="Search through site content"
             onChange={e => setTerm(e.target.value)} />
              <button id="buscar"><i className="fas fa-search"></i></button>
             </div>
            </div>
            <div id="titlepaci">
                <h1>PACIENTES</h1>
            </div>
        </div>
        
              
         <table id="table" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabindex="0">
            <tr>
                <th># DE REGISTRO</th>
                <th># DOCUMENTO</th>
                <th>NOMBRES</th>
                <th>APELLIDOS</th>
                <th>EDAD</th>
                <th>ACCIONES</th>
            </tr>
            {pacientesdata.filter(searchTerm(term)).map((dat, index) =>(
                   <tr key={index}>
                   <td>{dat.nregistro}</td>
                   <td>{dat.dni} </td>
                   <td>{dat.nombre} </td>
                   <td>{dat.apellido} </td>
                   <td>{dat.edad} </td>
                   <td><button id="edit" onClick={() =>{ 
                     localStorage.setItem("identificador", dat.id)
                     window.location.replace(`/formunuevo/`) }}>Editar <i className="fas fa-pencil-alt"></i></button>
                     <button id="elim" onClick={() => onDeletep(dat.id)}>Eliminar <i className="fas fa-window-close"></i></button> </td>
             </tr>

            ))}
          
          
            </table>
        
     </section>
    
  );
}

export default CuerpoPaciente;