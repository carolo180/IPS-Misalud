import Formularioregistro from './Formpaciente'
import {db} from '../../firebase'
import Swal from 'sweetalert2'
import React, {useEffect, useState}from "react";



function Addregist() {
   
   
    const addData = async (dataObject) => {
     
      await db.collection('pacientesdata').doc().set(dataObject);
      Swal.fire({
        title: 'Desea enviar el registro?',
          imageUrl: 'https://forjaempresas.com/wp-content/uploads/2020/08/Logos-01-1.png',
            imageWidth: 300,
            imageHeight: 70,
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
          window.location.href=("/pacientes")
        }
    })
      
    };
   



  return (
    <div className="container">
         <Formularioregistro {...{addData}} />
    </div>
  );
}

export default Addregist;