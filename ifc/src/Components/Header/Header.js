import React, {useState,useRef} from 'react'
import Logo from '../Assets/LOGO.svg'
import FB from '../Assets/FB.svg'
import IG from '../Assets/IG.svg'
import SH from '../Assets/SH.svg'
import IFCO from '../Assets/IFConline.svg'
import menu from '../Assets/menu.svg'
import fb2 from '../Assets/fb1.svg'
import ins2 from '../Assets/ins2.svg'
import smt2 from '../Assets/smt2.svg'
import ifc2 from '../Assets/ifc2.svg'
import {NavLink} from "react-router-dom";

import style from "./style.css"

export function Header(){
    const [navShow, showNav] = useState(false);
    const refNav = useRef(null);

    const triggerNav =()=>{
        refNav.current.classList.toggle('open');
    }
    
    return(
    <div className="NavContainer">
        <div className="logoContainer">
        <a className="logo" href="/" ><img src={Logo} alt=""></img></a>
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
                <img src={FB} alt=""></img></a></li>
            <li><a target="_blank" href="https://www.instagram.com/info_center_operadora/?hl=es-la">
                <img src={IG} alt=""></img></a></li>
            <li><a target="_blank" href="http://www.smarthotel.com.mx/">
                <img src={SH} alt=""></img></a></li>
            <li><a href="/ifconline">
                <img src={IFCO} alt=""></img></a></li>
        </ul>

        </div>

        <div className="menuTrigger">
            <button onClick={()=>triggerNav()}><img src={menu} alt=""></img></button>
        </div>

        <div className="mobile-nav" ref={refNav}>
            <ul className="mobile-tags">
                <li><NavLink exact to="/">Inicio</NavLink></li>
                <li><NavLink exact to="/nosotros">Nosotros</NavLink></li>
                <li><NavLink exact to="/destinos">Destinos</NavLink></li>
                <li><NavLink exact to="/agencias">Registro agencias</NavLink></li>
                <li><NavLink exact to="/contacto">Contacto</NavLink></li>

                <li><a target="_blank" href="https://www.facebook.com/Info-Center-Operadora-Mayorista-102966134525422">
                    <img src={fb2} alt=""></img>Facebook</a></li>
                <li><a target="_blank" href="https://www.instagram.com/info_center_operadora/?hl=es-la">
                    <img src={ins2} alt=""></img>Instagram</a></li>
                <li><a target="_blank" href="http://www.smarthotel.com.mx/"><img src={smt2} alt="">
                    </img>SmartHotel</a></li>
                <li><a href="/ifconline">
                    <img src={ifc2} alt=""></img>IFCOnline</a></li>
            </ul>
        </div>      
    </div>
    )
}

export default Header;