import FormularioNuevo from './Formu_nuevo'
import {db} from '../firebase'
import { toast } from 'react-toastify'
import React, {useEffect, useState}from "react";
import { useParams } from 'react-router';


function AddData() {
    const [pacientesData, setData] = useState([])
    const [currentId, setCurrentId] = useState('');
    const {id}=useParams()   

    const addOrEditData = async (dataObject) => {
        await db.collection('pacientesdata').doc().set(dataObject);
        toast('Nuevo registro agregado',{
            type:"succes",
            autoClose:2000,
    });
};
useEffect(() => {
  setCurrentId(id)

},[id])

    
   
  return (
    <div className="container">
         <FormularioNuevo {...{addOrEditData, currentId, pacientesData}} />
    </div>
  );
}

export default AddData;