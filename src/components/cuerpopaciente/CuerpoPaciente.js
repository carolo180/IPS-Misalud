import './CuerpoPaciente.css';
import React, {useEffect, useState}from "react";
import { toast } from 'react-toastify'
import {db} from '../../firebase'
import {
      BrowserRouter as Router,
      Link,
    } from "react-router-dom";


function CuerpoPaciente() {
      const [pacientesData, setData] = useState([])
      const [currentId, setCurrentId] = useState('');

      const onDeletep = async (id) => {
            if (window.confirm("Estas seguro que deseas eliminar el registro?")){
            await db.collection('pacientesdata').doc(id).delete();
            toast('Registro eliminado',{
                  type:"error",
                  autoClose:2000,
            });
            }
            
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

        

  return (
    <div className="container">
        <div id="seccionprim">
            <div id="bit">
            <Link to="/Formunuevo">
            <button id="botagregar">Agregar <i className="fas fa-user-plus"></i></button>
            </Link>
            <div id="inpupac">
            <input type="search" id="sites" name="q"
             aria-label="Search through site content" />
              <button id="buscar"><i className="fas fa-search"></i></button>
             </div>
            </div>
            <div id="titlepaci">
                <h1>PACIENTES</h1>
            </div>
        </div>
        <div id="tabla">
              
         <table data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabindex="0">
            <tr>
                <th># DE REGISTRO</th>
                <th># DOCUMENTO</th>
                <th>NOMBRES Y APELLIDOS</th>
                <th>EDAD</th>
                <th>ACCIONES</th>
            </tr>
            {pacientesData.map((dat, index) =>(
                   <tr key={index}>
                   <td>{dat.nombre}</td>
                   <td>{dat.apellido} </td>
                   <td>{dat.born} </td>
                   <td>{dat.edad} </td>
                   <td><button id="edit" onClick={() => window.location.replace(`/formunuevo/${dat.id}`)}>Editar <i className="fas fa-pencil-alt"></i></button><button id="elim" onClick={() => onDeletep(dat.id)}>Eliminar <i className="fas fa-window-close"></i></button> </td>
             </tr>

            ))}
          
          
            </table>
        </div>
     
    </div>
  );
}

export default CuerpoPaciente;