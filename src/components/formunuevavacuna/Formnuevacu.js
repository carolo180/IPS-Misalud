import './Formnuevacu.css';
import Headertab from '../headertab/Headertab';
import React, {useState, useEffect} from "react";


function FormNuevac(props){

   const initialStateValues = {

    nregistro:"",
    fregistro:"",
    nombre:"",
    apellido: "",
    dni: "",
    eps:"",
    born:"",
    tdocumento:"",
    edad:"",
    dosis:"",
    profesional:"",
    sede:"",
    biologico:"",
    docuprofe:"",
    pdosis:"",
    sdosis:"",
    observa:""


  };
  
  

  const[values,setValues] = useState(initialStateValues);

  const handleInputChange = e =>{
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };

  const handleSubmit3 = e =>{
    e.preventDefault();
    props.addData(values);
    setValues({...initialStateValues})
  };

  return (
    <div className='container-fluid' onSubmit={handleSubmit3}>
       <Headertab />
      <form className='borde_externo_vacunacion '>
        <div className='botones_superiores'>
          <div>  
            <label className='activo'> Estado: Activo</label>
          </div> 
          <div>
            <button className='cambios' type="submit" >Guardar cambios</button>
            <button className='cambios'type="submit" >Cerrar</button>
          </div>
        </div>
      <h3>INFORMACIÓN DEL PACIENTE</h3>
      <div className='borde_externovac'>
          <div className='registro_paciente'>
              <input
               className='fechanvac'
               type="date" 
               name="fregistro"
               onChange={handleInputChange}
               value={values.fregistro}
                />
            <input type="" 
              className="input_informacion"
             name="nregistro"
             placeholder='Número de registro'
             onChange={handleInputChange}
             value={values.nregistro}
              />
          </div>
               
          <div className="'registro_paciente">
          <h5>DATOS PERSONALES</h5>
             <div id='datos-p'>
             <input type="" 
              className="input_informacion"
              placeholder='Nombre' 
              name="nombre"
              onChange={handleInputChange}
              value={values.nombre}
              />
            <input type="" 
            className="input_informacion"
             id="" 
             placeholder='Apellidos' 
             name="apellido"
             onChange={handleInputChange}
             value={values.apellido}
             />
        </div>      
      <div  id='datos-p'> 
            <input type=""
             className="input_informacion"
              id="" 
              placeholder='Número de identificación' 
              name="dni" 
              onChange={handleInputChange}
              value={values.dni}
              />
              
            <input type="date" 
            className="input_informacion"
             placeholder='Fecha de nacimiento' 
             name="born"
             onChange={handleInputChange}
             value={values.born}
             />
       </div>
       
       <div className="'registro_paciente" id='datos-p'>
            <input type="" 
            className="input_informacion" 
            placeholder='Edad' 
            name="edad"
            onChange={handleInputChange}
            value={values.edad}
            />
    
            <select 
            name='profesional'
            className="input_informacion"  
            id='select_vacu'
             onChange={handleInputChange}
            value={values.eps}
            >
            <option selected value="">EPS</option>
            <option value="">FAMISANAR</option>
            <option value="">SANITAS</option>
            <option value="">ALIANSALUD</option>
            <option value="">COLMÉDICA</option>
            <option value="">COMPENSAR</option>
        </select>
        </div>     
     
      </div>
      </div>


      <div className='borde_externovac'>
        <h5>INFORMACIÓN DE VACUNACIÓN</h5>
          <div className="Informacion_identificacion">
          <div id='datos-p'>
            <select 
            name='sede' 
            className="input_informacion"
            placeholder='Sede' 
            onChange={handleInputChange}
            value={values.profesional}>
            <option selected value="">Sede</option>
            <option value="">Chía</option>
            <option value="">Bogotá D.C</option>
        </select>
            <select name='profesional' id='select_vacu' onChange={handleInputChange}
            value={values.profesional}>
            <option selected >Profesional</option>
            <option value="">Maria Fernández</option>
            <option value="">Pedro Rodriguez</option>
            <option value="">Martín De la Oz</option>
            <option value="">Lina Fonseca</option>
            <option value=""></option>
        </select>
        </div>
        <div  className="Informacion_identificacion">
        <div id='datos-p'>
            <input 
            type="" 
            className="input_informacion"
            placeholder='id profesional'
            name="docuprofe" 
            onChange={handleInputChange}
            value={values.docuprofe}
            />
         
        
            <input type=""
             className="input_informacion" 
             placeholder='dosis'
              name="dosis" 
              onChange={handleInputChange}
              value={values.dosis}
              /> 
        </div>   
        <div  className="Informacion_identificacion">
        <div  id='datos-p'>
        <select name='biologico'  
            onChange={handleInputChange}
            value={values.biologico}>
            <option selected value="" >Biológico</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
            <input type="" 
            className="input_informacion" 
            id="" 
            placeholder='fecha 1a dosis' 
            name="pdosis"
            onChange={handleInputChange}
            value={values.pdosis}
            />

          
            <input type=""
             className="input_informacion" 
             id=""
              placeholder='fecha 2a dosis' 
              name="sdosis" 
              onChange={handleInputChange}
              value={values.sdosis}
              />
          </div>
       </div> 
     </div>
      </div>

      <div>
         <textarea 
         className='estilo_textarea'
          placeholder='Observaciones adicionales'
           name="observa"
           onChange={handleInputChange}
            value={values.observa}
           ></textarea>
     </div>
      </div>
  </form>
          <footer>
            <p> © 2021 FORJAEMPRESAS </p>
          </footer>
</div>
  );
}
export default FormNuevac;