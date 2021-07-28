import './CuerpoPaciente.css';


function CuerpoPaciente() {
  return (
    <div className="container-fluid">
        <div id="seccionprim">
            <div id="bit">
            <button id="botagregar">Agregar <i class="fas fa-user-plus"></i></button>
            <div id="inpupac">
            <input type="search" id="sites" name="q"
             aria-label="Search through site content" />
              <button id="buscar"><i class="fas fa-search"></i></button>
             </div>
            </div>
            <div id="titlepaci">
                <h1>PACIENTES</h1>
            </div>
        </div>
        <div id="tabla">
         <table data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
            <tr>
                <th># DE REGISTRO</th>
                <th># DOCUMENTO</th>
                <th>NOMBRES Y APELLIDOS</th>
                <th>FECHA DE REGISTRO</th>
                <th>ACCIONES</th>
            </tr>
           <tr>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Editar <i class="fas fa-pencil-alt"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td></td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Editar <i class="fas fa-pencil-alt"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Editar <i class="fas fa-pencil-alt"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Editar <i class="fas fa-pencil-alt"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Editar <i class="fas fa-pencil-alt"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Editar <i class="fas fa-pencil-alt"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Editar <i class="fas fa-pencil-alt"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td></td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Editar <i class="fas fa-pencil-alt"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Editar <i class="fas fa-pencil-alt"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Editar <i class="fas fa-pencil-alt"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td></td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Editar <i class="fas fa-pencil-alt"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button id="edit">Editar <i class="fas fa-pencil-alt"></i></button><button id="elim">Eliminar <i class="fas fa-window-close"></i></button> </td>
          </tr>
          
            </table>
        </div>
     
    </div>
  );
}

export default CuerpoPaciente;