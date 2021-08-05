import '../components/login/Login.css';
import React from 'react';
import './Formulario_vacunacion.css';
import Headertab from '../components/headertab/Headertab';

function FormularioVacunacion(){
  return (
    <div className='container-fluid'>
       <Headertab />
      <form className='borde_externo_vacunacion'>
        <div className='botones_superiores'>
          <div>  
            <label> Estado: Activo</label>
          </div> 
          <div>
            <button type="submit" >Guardar cambios</button>
            <button type="submit" >Cerrar</button> 
          </div>
        </div>
      <h3>INFORMACIÓN DEL PACIENTE</h3>

      <div className='borde_externo'>
      <div className='registro_paciente'>
        <div className='caja_fecha'>
          <div className='fecha_registro'>
              <label>Fecha de registro:</label>
              <div className='registro_fecha'>
              </div>
          </div>
        </div>
        <div className='caja_registro'>
          <div className='nro_registro'>
            <label>Número de registro:</label>
          </div>
          <div className='registro_fecha'>
          </div>
        </div>
      </div>
        <h5>DATOS PERSONALES</h5>
      <div className="Informacion_identificacion">
          <div id='datos-p'>
            <input type="" className="input_informacion" id="" placeholder='Nombre' />
            <input type="" className="input_informacion" id="" placeholder='Apellidos' />
            <input type="" className="input_informacion" id="" placeholder='Número de identificación' /><br />
          </div>
     <div className='edad'>
            <input type="" className="input_informacion" id="" placeholder='Fecha de nacimiento' />
            <input type="" className="input_informacion" id="" placeholder='Edad' />
            <input type="" className="input_informacion" id="" placeholder='EPS' />
     </div>
      </div>
      </div>
      <div className='borde_externo'>
    
        <h5>INFORMACIÓN DE VACUNACIÓN</h5>
          <div className="Informacion_identificacion">
          <div id='datos-s'>
            <input type="" className="input_informacion" id="" placeholder='Sede' />
            <select name='' id='select_vacu'>
            <option selected value="">Profesional</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
        <div className='select_y_doc'>
        <select className='select_doc'>
            <option selected value="">Tipo Documento</option>
            <option value="">C.C</option>
            <option value="">C.EXTRANJERÍA</option>
            <option value="">PASAPORTE</option>
        </select>
          <input type="" className="input_informacion" id="input_info" placeholder='No. Documento del profesional' /><br />
        </div>
          </div>
     <div className='dosis'>
            <input type="" className="input_informacion" id="" placeholder='fecha 1a dosis' />
            <input type="" className="input_informacion" id="" placeholder='fecha 2a dosis' />
            <select name='' id='select_vacu'>
            <option selected value="" >Biológico</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
     </div>
      </div>

      <div>
      <label></label>
         <textarea className='estilo_textarea' placeholder='Observaciones adicionales'></textarea>
     </div>
      </div>
  </form>
          <footer>
            <p> © 2021 FORJAEMPRESAS </p>
          </footer>
</div>
  );
}
export default FormularioVacunacion;