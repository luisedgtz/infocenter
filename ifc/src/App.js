import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Components/Header';
import Home from './Components/Home';
import ifcoScripts from './scripts/ifcoScripts';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Router>
        <Switch>
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route excat path="/nosotros" component={AboutUs}></Route>
            <Route excat path="/destinos" component={Home}></Route>
            <Route excat path="/agencias" component={Home}></Route>
            <Route excat path="/contacto" component={Home}></Route>
            <Route excat path="/ifconline" component={ifcoScripts}></Route>


          </div>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>    
  );
}

export default App;
