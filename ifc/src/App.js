import React from 'react';
import './App.css';
import {
BrowserRouter as Router,
Switch,
Route,
} from "react-router-dom";

import Home from './Components/Home/Home.js';
import ifcoScripts from './scripts/ifcoScripts';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import Header from './Components/Header/Header';
import agencyScript from './scripts/agencyScript'
import Contact from './Components/Contact/Contact'


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
          <Route excat path="/agencias" component={agencyScript}></Route>
          <Route excat path="/contacto" component={Contact}></Route>
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
