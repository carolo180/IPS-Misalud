import './App.css';
import Inicio from './pages/Inicio'
import Principal from './pages/Principal'
import Login from './components/login/Login'
import Pacientes from './pages/Pacientes'
import Vacunas from './pages/Vacunas'
import FormularioVacunacion from './pages/Formuvacuna'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter
  
} from "react-router-dom";
import AddData from './pages/Adddata';
import AddVacu from './pages/Addvacu';
import Addregist from './components/formunuevo/Addregist';
import AddregVac from './components/formunuevavacuna/Addregvac';

function App() {
  return (
    <div className="container">
        <HashRouter basename='/'>
         <div>
           <Switch>
              
           <Route exact path="/" render={() =>(<Redirect to="/inicio" />)}>
              <Inicio />
            </Route>

            <Route  path="/inicio" >
             <Inicio />
            </Route>

            <Route  path="/login" >
             <Login />
            </Route>

            <Route  path="/principal" >
             <Principal />
            </Route>

            <Route  path="/pacientes" >
             <Pacientes />
            </Route>

            <Route  path="/vacunas" >
             <Vacunas />
            </Route>

            <Route  path="/formupaciente" >
             <Addregist />
            </Route>

            <Route exact path="/formunuevo" >
             <AddData />
            </Route>

            <Route exact path="/formunuevo/:identificador" >
             <AddData />
            </Route>

            <Route  path="/formuregvac" >
             <AddregVac />
            </Route>

            <Route  path="/formuvacuna" >
             <AddVacu />
            </Route>

            <Route  path="/formuvacuna/:id" >
             <AddVacu />
            </Route>
                
          </Switch>
        </div>
           
      </HashRouter>
        
    </div>
  );
}

export default App;
