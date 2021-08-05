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
  
} from "react-router-dom";
import AddData from './pages/Adddata';

function App() {
  return (
    <div className="container">
        <Router>
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

            <Route  path="/formuvacuna" >
             <FormularioVacunacion />
            </Route>

            <Route  path="/formunuevo" >
             <AddData />
            </Route>

            <Route  path="/formunuevo/:id" >
             <AddData />
            </Route>
                
          </Switch>
        </div>
        <ToastContainer />
      
     
      </Router>
        
    </div>
  );
}

export default App;
