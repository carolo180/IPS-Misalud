import './Cuerpovacunas.css';
import React from "react";
import {
      BrowserRouter as Router,
      Link,
    } from "react-router-dom";


function CuerpoVacunas() {
  return (
    <div className="container">
         <div id="buscador">
               <Link to="/formuvacuna">
                <button id="botagregar2">Agregar <i className="fas fa-user-plus"></i></button>
                </Link>
                <input type="search" id="sites" name="q" placeholder=" #Documento/apellido"
                aria-label="Search through site content" />
              <button id="buscar"><i className="fas fa-search"></i></button>
          </div>
              
        <div id="seccionprim2">
                             
            <div id="titlevacu">
                <h1>VACUNACION</h1>
            </div>
           
        </div>
        <div id="fechas">
              <div id="pfecha">
              <label><strong>Desde</strong></label>
              <input type="date" id="start" name="trip-start"
                        value="2010-07-28"
                        min="2010-01-01" max="2021-12-31" />
               </div>
               <div id="sfecha">
               <label><strong>Hasta</strong></label>
              <input type="date" id="start" name="trip-start"
                        value="2021-07-28"
                        min="2018-01-01" max="2021-12-31" />
               </div>
            </div>
        <div id="tabla">
         <table id="tabvacu" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabindex="0">
            <tr>
                <th># DE REGISTRO</th>
                <th># DOCUMENTO</th>
                <th>NOMBRES Y APELLIDOS</th>
                <th>DOSIS</th>
                <th>PROFESIONAL</th>
                <th>ACCIONES</th>
            </tr>
           <tr>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i className="far fa-eye"></i></button><button id="elim">Eliminar <i className="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i className="far fa-eye"></i></button><button id="elim">Eliminar <i className="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i className="far fa-eye"></i></button><button id="elim">Eliminar <i className="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i className="far fa-eye"></i></button><button id="elim">Eliminar <i className="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i className="far fa-eye"></i></button><button id="elim">Eliminar <i className="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i className="far fa-eye"></i></button><button id="elim">Eliminar <i className="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i className="far fa-eye"></i></button><button id="elim">Eliminar <i className="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i className="far fa-eye"></i></button><button id="elim">Eliminar <i className="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i className="far fa-eye"></i></button><button id="elim">Eliminar <i className="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i className="far fa-eye"></i></button><button id="elim">Eliminar <i className="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i className="far fa-eye"></i></button><button id="elim">Eliminar <i className="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i className="far fa-eye"></i></button><button id="elim">Eliminar <i className="fas fa-window-close"></i></button> </td>
          </tr>
          
            </table>
        </div>
     
    </div>
  );
}

export default CuerpoVacunas;