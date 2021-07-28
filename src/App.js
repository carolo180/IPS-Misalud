import './App.css';
import Inicio from './pages/Inicio'
import Principal from './pages/Principal'
import Login from './components/login/Login'
import Pacientes from './pages/Pacientes'
import Vacunas from './pages/Vacunas'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  
} from "react-router-dom";

function App() {
  return (
    <div className="container">
        <Router>
         <div>
           <switch>
              
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

            
         
      
          </switch>
        </div>
      
     
      </Router>
        
    </div>
  );
}

export default App;
