import '../components/login/Login.css';
import './Formulario_nuevo.css';
import Headertab from '../components/headertab/Headertab';
import React, {useState, useEffect} from "react";


function FormularioNuevo(props){

   const initialStateValues = {
         nombre:"",
         apellido: "",
         dni: "",
         born:"",
         tdocumento:"",
         edad:"",
         departamento:"",
         municipio:"",
         direccion:"",
         correo:"",
         telefono:"",
         celular:"",
         alergia:"",
         ppositiva:"",
         pnegativa:"",
         sicontacto:"",
         nocontacto:""


  };

  const[values,setValues] = useState(initialStateValues);

  const handleInputChange = e =>{
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };

  const handleSubmit = e =>{
    e.preventDefault();
    props.addOrEditData(values);
    setValues({...initialStateValues})
  };

  useEffect(() => {
       
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      console.log('editing');
    }
    }, [props.currentId]);
  

  return (
    <div className='container-fluid'>
        <Headertab />
      <form className='formulario_nuevo' onSubmit={handleSubmit}>
      <h3 id="tituform">REGISTRO USUARIO NUEVO</h3>
      <div className='borde_externo'>
        <h5>DATOS DEL PACIENTE</h5>
      <div className="Informacion_identificacion">
          <div id='datos-p'>
            <input 
            type="" 
            className="input_informacion" 
            id="" 
            placeholder='Nombre' 
            name="nombre" 
            onChange={handleInputChange}
            value={values.nombre}
            />
            <input 
            type="" 
            className="input_informacion" 
            id="" 
            placeholder='Apellidos' 
            name="apellido"
            onChange={handleInputChange}
            value={values.apellido}
            />
            <input 
            type="" 
            className="input_informacion" 
            id="" 
            placeholder='Número de identificación' 
            name="dni"
            onChange={handleInputChange}
            value={values.dni}
            /><br />
          </div>
     <div className='tipo'>
     <select name='tdocumento' id='NOMBRES'   onChange={handleInputChange}
            value={values.tdocumento}>
            <option defaultValue="">Tipo de documento</option>
            <option value="NUIP">NUIP</option>
            <option value="RC">REGISTRO CIVIL</option>
            <option value="CC">CÉDULA DE CIUDADANÍA</option>
            <option value="CE">CÉDULA DE EXTRANJERÍA</option>
            <option value="PSP">PASAPORTE</option>
            <option value="PP">PEP</option>
          
        
        </select>
        <input 
        type="" 
        className="input_informacion" 
        id="" 
        placeholder='Fecha de nacimiento' 
        name="born"
        onChange={handleInputChange}
        value={values.born}
        />
        <input type="" 
        className="input_informacion" 
         id=""
         placeholder='Edad' 
         name="edad"
         onChange={handleInputChange}
         value={values.edad}
         />
     </div>
      </div>
      <h5 id='contactof'>INFORMACIÓN DE CONTACTO</h5>
      <div className="Informacion_contacto">
          <div id='i-contacto'>
            <input type=""
             className="input_informacion" 
             id="" 
             name="departamento" 
             placeholder='Departamento de residencia' 
             onChange={handleInputChange}
             value={values.departamento}
             />
            <input type="" 
            className="input_informacion" 
            id="" 
            name="municipio" 
            placeholder='Municipio de residencia'
            onChange={handleInputChange}
            value={values.municipio}
             />
            <input type=""
            className="input_informacion"
             id="" 
             name="direccion"
             placeholder='Dirección'
             onChange={handleInputChange}
             value={values.direccion}
              /><br />
          </div>
          <div className='contactar'>
            <input type="" 
            className="input_informacion" 
            id=""
             name="correo" 
             placeholder='Correo' 
             onChange={handleInputChange}
             value={values.correo}
             />
             <input type=""
             className="input_informacion" 
             id="" 
             name="telefono"
             placeholder='Teléfono fijo' 
             onChange={handleInputChange}
             value={values.telefono}
             />
            <input type="" 
            className="input_informacion" 
            id="" 
            name="celular"
            placeholder='Celular' 
            onChange={handleInputChange}
            value={values.celular}
            />
          </div>
      </div>
      <h5 id='estado-de-salud'>ESTADO DE SALUD</h5>
      <div className="Informacion_salud">
        <div id='salud'>
        <select name='Preexistencias' id='NOMBRES'>
            <option defaultValue="" >Preexistencias</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
        <select name='Tipo de identificación' id='NOMBRES'>
            <option defaultValue="">Discapacidad</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
            <input type=""
            className="input_informacion"
             id=""
             name="alergia" 
             placeholder='Alergias' 
             onChange={handleInputChange}
             value={values.alergia}
             />
        </div>

        <div>
          <label id="labformu">¿El paciente se ha realizado la prueba del covid con anterioridad y esta ha salido positiva?</label>

          <div className='pruebaf'>
                <label>SI</label>
                <input type='radio' 
                name='ppositiva' 
                id='input_prueba' 
                onChange={handleInputChange}
                value={values.ppositiva}
                />
                
                <label>NO</label>
                <input 
                type='radio' 
                name='pnegativa' 
                id='input_prueba' 
                onChange={handleInputChange}
                value={values.pnegativa}
                />
          </div>

          <label>¿El paciente ha tenido un contacto estrecho o cercano con una persona confirmada o sospechosa COVID-19 en los últimos 14 días?</label><br />
          <div className='pruebaf'>
                <label>SI</label>
                <input 
                type='radio' 
                name='sicontacto' 
                id='input_prueba'
                onChange={handleInputChange}
                value={values.sicontacto}
                />
                <label>NO</label>
                <input 
                type='radio' 
                name='nocontacto' 
                id='input_prueba'
                onChange={handleInputChange}
                value={values.nocontacto}
                />
          </div>
        </div>
        </div>
      </div>
      <div className='boton'>
        <button type="submit" className="btn2 btn-primary">Enviar</button>
        <button type="submit" className="btn2 btn-primary">Reestablecer</button>
      </div>
  </form>
            <div id="footerf">
            <p> © 2021 FORJAEMPRESAS </p>
           </div>
</div>
  );
}

export default FormularioNuevo;