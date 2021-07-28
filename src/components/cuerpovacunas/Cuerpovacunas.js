import './Cuerpovacunas.css';


function CuerpoVacunas() {
  return (
    <div className="container-fluid">
         <div id="buscador">
                <input type="search" id="sites" name="q"
                aria-label="Search through site content" />
              <button id="buscar"><i class="fas fa-search"></i></button>
          </div>
              
        <div id="seccionprim2">
              <div id="bit">
                   <button id="botagregar2">Agregar <i class="fas fa-user-plus"></i></button>
               </div>
               
            <div id="titlevacu">
                <h1>VACUNACION</h1>
            </div>
            <div id="fechas">
                        <input type="date" id="start" name="trip-start"
                        value="2021-07-28"
                        min="2018-01-01" max="2021-12-31" />
            </div>
        </div>
        <div id="tabla">
         <table id="tabvacu" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
            <tr>
                <th># DE REGISTRO</th>
                <th># DOCUMENTO</th>
                <th>NOMBRES Y APELLIDOS</th>
                <th>HORA</th>
                <th>PROFESIONAL</th>
                <th>ACCIONES</th>
            </tr>
           <tr>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i class="far fa-eye"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i class="far fa-eye"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i class="far fa-eye"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i class="far fa-eye"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i class="far fa-eye"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i class="far fa-eye"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i class="far fa-eye"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i class="far fa-eye"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i class="far fa-eye"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i class="far fa-eye"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i class="far fa-eye"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Detalles <i class="far fa-eye"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          
            </table>
        </div>
     
    </div>
  );
}

export default CuerpoVacunas;