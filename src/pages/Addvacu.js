import FormularioVacunacion from './Formuvacuna'
import Swal from 'sweetalert2'
import {db} from '../firebase'
import { toast } from 'react-toastify'
import React, {useEffect, useState}from "react";
import { Redirect, useParams } from 'react-router';


function AddVacu() {
  const [pacientesdata, setData] = useState([])
  const [currentId, setCurrentId] = useState('');
  const  identificador = localStorage.getItem("identificador")
   
    

    const addOrEditData = async (dataObject) => {
      if (currentId === "") { 
      await db.collection('pacientesdata').doc().set(dataObject);
      Swal.fire({
        title: 'Desea enviar el registro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#c55110',
        cancelButtonColor: '#072f5e',
        confirmButtonText: 'Si, gracias!'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear()

          Swal.fire(
            'Registro agregado!',
         )
          window.location.href=("/vacunas")
        }
      })
    }
    else{
      await db.collection('pacientesdata').doc(currentId).update(dataObject);
      Swal.fire({
        title: 'Desea actualizar el registro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#c55110',
        cancelButtonColor: '#072f5e',
        confirmButtonText: 'Si, gracias!'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear()

          Swal.fire(
            'Registro actualizado!',
         )
          window.location.href=("/vacunas")
        }
      });
      setCurrentId('');
    }
   
};

console.log(identificador)

useEffect(() => {
  setCurrentId(identificador)
  

},[])

    
   
  return (
    <div className="container">
         <FormularioVacunacion {...{addOrEditData, currentId:identificador, pacientesdata }} />
    </div>
  );
}

export default AddVacu;