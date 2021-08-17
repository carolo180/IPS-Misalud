import FormNuevac from './Formnuevacu'
import {db} from '../../firebase'
import Swal from 'sweetalert2'
import React, {useEffect, useState}from "react";



function AddregVac() {
   
    
    const addData = async (dataObject) => {
     
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
      
    };
   



  return (
    <div className="container">
         <FormNuevac {...{addData}} />
    </div>
  );
}

export default AddregVac;