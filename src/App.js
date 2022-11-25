
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LoginPage from "./Pages/Login";


import PersonnePage from "./Pages/personnePage/PersonnePage";


const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      
        <Route path="/login" component={LoginPage} />
        <Route exact path="/crud_personne"  >
          <PersonnePage></PersonnePage>
          
           
          </Route>
       
        </Switch>
      
    </div>
  </Router>
);

export default App;
