import './Formpaciente.css';
import Headertab from '../headertab/Headertab';
import React, {useState, useEffect} from "react";
import Footer from '../footer/Footer'
import { Redirect, useParams } from 'react-router';




function Formularioregistro(props){

   const initialStateValues = {
         nregistro:"",
         fregistro:"",
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
  
  const {id}=useParams()

  const[values,setValues] = useState(initialStateValues);

  const handleInputChange = e =>{
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };

  const handleSubmit2 = e =>{
    e.preventDefault();
    props.addData(values);
    setValues({...initialStateValues})
  };

   
  

  return (
    <div className='container-fluid'>
        <Headertab />
      <h1 id="tituform">REGISTRO USUARIO NUEVO</h1>
      <form className='formulario_nuevo' onSubmit={handleSubmit2}>
      <div className='borde_externo'>
      <div className='registro_paciente' >
          <div className='fecha_registro' id='datos-p'>
              <input type="date" 
                placeholder='fecha de registro'
                className='fechan'
                type="date" 
                name="fregistro"
                onChange={handleInputChange}
                value={values.fregistro}
                required='required'

                />

            <input 
            type="" 
            className="input_informacion" 
            id="" 
            placeholder='N registro' 
            name="nregistro" 
            onChange={handleInputChange}
            value={values.nregistro}
            />
    
        </div>
       
      </div>
  <h5 className='datospaciente'>DATOS DEL PACIENTE</h5>
      <div className="Informacion_identificacion">
          <div id='datos-p'>
             <input 
            type="" 
            className="input_informacion" 
            id="" 
            placeholder='Nombres' 
            name="nombre"
            onChange={handleInputChange}
            value={values.nombre}
            required='required'
            label='Nombre'
            placeholder='Escribe tu nombre'
            />
           
            <input 
            type="" 
            className="input_informacion" 
            id="" 
            placeholder='Apellidos' 
            name="apellido"
            onChange={handleInputChange}
            value={values.apellido}
            required='required'

            />
        </div> 
        {/*-------------------------------------------------NOMBRES Y APELLIDOS------------------------------------------------------------ */}
        <div id='datos-p'>
            <input 
              type="" 
              className="input_informacion" 
              id="" 
              placeholder='Número de identificación' 
              name="dni"
              onChange={handleInputChange}
              value={values.dni}
              required='required'
            />
           
           <select name='tdocumento'  required='required'  onChange={handleInputChange}
            value={values.tdocumento}>
            <option defaultValue="">Tipo de documento</option>
            <option value="NUIP">NUIP</option>
            <option value="RC">REGISTRO CIVIL</option>
            <option value="CC">CÉDULA DE CIUDADANÍA</option>
            <option value="CE">CÉDULA DE EXTRANJERÍA</option>
            <option value="PSP">PASAPORTE</option>
            <option value="PP">PEP</option>
         </select>
        </div> 
        {/*-------------------------------------------------DNNI- TIPO------------------------------------------------------------ */}

        <div id='datos-p'>
             <input
             className='fechan'
              type="date" 
              name="born"
              onChange={handleInputChange}
              value={values.born}
              required='required'
            />
           
           <input type="" 
        className="input_informacion" 
         id=""
         placeholder='Edad' 
         name="edad"
         onChange={handleInputChange}
         value={values.edad}
         required='required'
         />
        </div> 
        {/*-------------------------------------------------NOMBRES Y APELLIDOS------------------------------------------------------------ */}
</div>
      <h5 className='infocontacto'>INFORMACIÓN DE CONTACTO</h5>
      <div className="Informacion_contacto">
          <div id='datos-p'>
          <select name='departamento' onChange={handleInputChange}
                value={values.departamento} >
                  <option defaultValue="">Departamento de residencia</option>
                  <option value="">Amazonas</option>
                  <option value="">Antioquia</option>
                  <option value="">Arauca</option>
                  <option value="">Atlántico</option>
                  <option value="">Bolívar</option>
                  <option value="">Boyacá</option>
                  <option value="">Caldas</option>
                  <option value="">Caquetá</option>
                  <option value="">Casanare</option>
                  <option value="">Cauca</option>
                  <option value="">Cesar</option>
                  <option value="">Chocó</option>
                  <option value="">Córdoba</option>
                  <option value="">Cundinamarca</option>
                  <option value="">Guainía</option>
                  <option value="">Guaviare</option>
                  <option value="">Huila</option>
                  <option value="">La Guajira</option>
                  <option value="">Magdalena</option>
                  <option value="">Meta</option>
                  <option value="">Nariño</option>
                  <option value="">Norte de Santander</option>
                  <option value="">Putumayo</option>
                  <option value="">Quindío</option>
                  <option value="">Risaralda</option>
                  <option value="">San Andrés y Providencia</option>
                  <option value="">Santander</option>
                  <option value="">Sucre</option>
                  <option value="">Tolima</option>
                  <option value="">Valle del Cauca</option>
                  <option value="">Vaupés</option>
                  <option value="">Vichada</option>
              </select>

              <select name='municipio' 
                onChange={handleInputChange}
                value={values.municipio}>
                
                  <option defaultValue="">Municipio de residencia</option>
                  <option value="">Leticia</option>
                  <option value="">Medellín</option>
                  <option value="">Arauca</option>
                  <option value="">Barranquilla</option>
                  <option value="">Cartagena</option>
                  <option value="">Tunja</option>
                  <option value="">Manizales</option>
                  <option value="">Florencia</option>
                  <option value="">Popayán</option>
                  <option value="">Cauca</option>
                  <option value="">Valledupar</option>
                  <option value="">Quibdó</option>
                  <option value="">Montería</option>
                  <option value="">Bogotá</option>
                  <option value="">Puerto Inírida</option>
                  <option value="">San José del Guaviare</option>
                  <option value="">Neiva</option>
                  <option value="">Riohacha</option>
                  <option value="">Santa Marta</option>
                  <option value="">Villavicencio</option>
                  <option value="">Pasto</option>
                  <option value="">Cúcuta</option>
                  <option value="">Mocoa</option>
                  <option value="">Armenia</option>
                  <option value="">Pereira</option>
                  <option value="">San Andrés</option>
                  <option value="">Bucaramanga</option>
                  <option value="">Sincelejo</option>
                  <option value="">Ibagué</option>
                  <option value="">Cali</option>
                  <option value="">Mitú</option>
                  <option value="">Puerto Carreño</option>
        </select>
        </div>

        <div id='datos-p'>
            <input type=""
            className="input_informacion"
             name="direccion"
             placeholder='Dirección'
             onChange={handleInputChange}
             value={values.direccion}
             required='required'
              />
          
            <input type="" 
            className="input_informacion" 
             name="correo" 
             placeholder='Correo' 
             onChange={handleInputChange}
             value={values.correo}
             required='required'
             />
        </div>
        <div  id='datos-p'>
             <input type=""
             className="input_informacion" 
             name="telefono"
             placeholder='Teléfono fijo' 
             onChange={handleInputChange}
             value={values.telefono}
             required='required'
             />
            <input type="" 
            className="input_informacion" 
            id="" 
            name="celular"
            placeholder='Celular' 
            onChange={handleInputChange}
            value={values.celular}
            required='required'
            />
        </div>
      </div>
      <h5 className='estadosalud'>ESTADO DE SALUD</h5>
      <div className="Informacion_salud">
        <div id='datos-p'>
        <select name='Preexistencias'   required='required'>
            <option defaultValue="" >Preexistencias</option>
                  <option value="">Ninguna</option>
                  <option value="">Diabetes</option>
                  <option value="">Hipertensión</option>
                  <option value="">Obesidad</option>
                  <option value="">VIH</option>
                  <option value="">Lupus-Cancer</option>
        </select>
        <select name='Tipo de identificación'  required='required'>
            <option defaultValue="">Discapacidad</option>
                  <option value="">Ninguna</option>
                  <option value="">Auditiva</option>
                  <option value="">Visual</option>
                  <option value="">Motríz</option>
                  <option value="">Física</option>
                  <option value="">Cógnitiva</option>
        </select>
            <input type=""
            className="input_informacion"
             id=""
             name="alergia" 
             placeholder='Alergias' 
             onChange={handleInputChange}
             value={values.alergia}
             required='required'
             />
        </div>

        <div>
        <label>¿El paciente se ha realizado la prueba del covid con anterioridad y esta ha salido positiva?</label>

          <div className='radio'>
                <label className='label_radio'>SI</label>
                <input type='radio' 
                name='ppositiva' 
                id='input_prueba' 
                onChange={handleInputChange}
                value={values.ppositiva}
                />
                
                <label className='label_radio'>NO</label>
                <input 
                type='radio' 
                name='pnegativa' 
                onChange={handleInputChange}
                value={values.pnegativa}
                />
          </div>

          <label>¿El paciente ha tenido un contacto estrecho o cercano con una persona confirmada o sospechosa COVID-19 en los últimos 14 días?</label><br />
          <div  className='radio'>
                <label className='label_radio'>SI</label>
                <input 
                type='radio' 
                name='sicontacto' 
                onChange={handleInputChange}
                value={values.sicontacto}
                />


                <label className='label_radio'>NO</label>
                <input 
                type='radio' 
                name='nocontacto' 
                onChange={handleInputChange}
                value={values.nocontacto}
                />

            </div>    
           </div>
        </div>
      </div>
      <div className='boton'>
        <button type="submit"
         className="btn2 btn-primary">
           Guardar
        </button>
        
      </div>
  </form>
         <Footer />
</div>
  );
}

export default Formularioregistro;