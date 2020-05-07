import React from 'react'
import Logo from './Assets/LOGO.svg'
import FB from './Assets/FB.svg'
import IG from './Assets/IG.svg'
import SH from './Assets/SH.svg'
import IFCO from './Assets/IFConline.svg'

export default (props)=>{
    
    return(
    <div className="NavContainer">
        <div className="logoContainer">
        <a classname="logo" href="/" ><img style={{margin: 20}} src={Logo} height="60" alt=""></img></a>
        </div>

        <div className="NavTagsContainer">
        <ul className="NavTags">
            <li><a href="/">Nosotros</a></li>
            <li><a href="/">Destinos</a></li>
            <li><a href="/">Registro Agencias</a></li>
            <li><a href="/">Contacto</a></li>
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
            <li><a href="/">
                <img src={IFCO} height="80" alt=""></img></a></li>
        </ul>

        </div>

        
    </div>
    )

}