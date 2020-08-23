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
import Destinations from './Components/Destinations/Destinations';
import InfoDes from './Components/InfoDes/InfoDes';


function App() {
return (
  <div className="App">
    <div className="PageWrap">
    <Router>
    <Header></Header>
      <Switch>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/nosotros" component={AboutUs}></Route>
          <Route exact path="/destinos" component={Destinations}></Route>
          <Route exact path="/agencias" component={agencyScript}></Route>
          <Route exact path="/contacto" component={Contact}></Route>
          <Route exact path="/ifconline" component={ifcoScripts}></Route>
          <Route exact path="/infoDes" component={InfoDes}></Route>
        </div>
      </Switch>
    </Router>
    </div>
    <Footer></Footer>
  </div>    
);
}

export default App;
