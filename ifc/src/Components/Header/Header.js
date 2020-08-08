import React from 'react'
import Logo from '../Assets/LOGO.svg'
import FB from '../Assets/FB.svg'
import IG from '../Assets/IG.svg'
import SH from '../Assets/SH.svg'
import IFCO from '../Assets/IFConline.svg'
import {NavLink} from "react-router-dom";

import style from "./style.css"
  

export default (props)=>{

    return(
    <div className="NavContainer">
        <div className="logoContainer">
        <a className="logo" href="/" ><img style={{margin: 20}} src={Logo} height="60" alt=""></img></a>
        </div>

        <div className="NavTagsContainer">
        <ul id="NavTags" className="NavTags">
            <li class="tag"><NavLink activeClassName="activeTag" activeStyle={{color: "#3495CA"}} exact to="/">Inicio</NavLink></li>
            <li class="tag"><NavLink activeClassName="activeTag" activeStyle={{color: "#3495CA"}} exact to="/nosotros">Nosotros</NavLink></li>
            <li class="tag"><NavLink activeClassName="activeTag" activeStyle={{color: "#3495CA"}} exact to="/destinos">Destinos</NavLink></li>
            <li class="tag"><NavLink activeClassName="activeTag" activeStyle={{color: "#3495CA"}} exact to="/agencias">Registro Agencias</NavLink></li>
            <li class="tag"><NavLink activeClassName="activeTag" activeStyle={{color: "#3495CA"}} exact to="/contacto">Contacto</NavLink></li>
        </ul>
        </div>

        <div classNam="SocialIcons">
        <ul className="IconTags">
            <li><a target="_blank" href="https://www.facebook.com/Info-Center-Operadora-Mayorista-102966134525422">
                <img src={FB} height="80" alt=""></img></a></li>
            <li><a target="_blank" href="https://www.instagram.com/info_center_operadora/?hl=es-la">
                <img src={IG} height="80" alt=""></img></a></li>
            <li><a target="_blank" href="http://www.smarthotel.com.mx/">
                <img src={SH} height="80" alt=""></img></a></li>
            <li><a href="/ifconline">
                <img src={IFCO} height="80" alt=""></img></a></li>
        </ul>

        </div>

        
    </div>
    )
}