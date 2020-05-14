import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Components/Home';
import ifcoScripts from './scripts/ifcoScripts';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">

      

      <div className="PageWrap">

      <Router>
        
      <Header></Header>

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
      </div>
      <Footer></Footer>
    </div>    
  );
}

export default App;
