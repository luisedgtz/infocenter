import React from 'react'
import ill1 from '../Assets/abousUsImg.svg'

import style from './style.css'

export default (props)=>{
    return(
        <div className="aboutUs">
            <img className="illustrationAbout" src={ill1} height="500"/>

            <div className="aboutUsText">
                <h1>¿Quiénes somos?</h1>
                <p>Somos una empresa con mas de 15 años de experiencia, capaces de operar cualquier experiencia de viaje alrededor del mundo. Contamos con alianzas comerciales con los mejores operadores a nivel mundial, lo que nos permite comprometernos a ofrecerte un servicio de la más alta calidad a los mejores precios del mercado, para que tu viaje sea una experiencia inolvidable.   Somos tu Agencia de Confianza.</p>
            </div>
        </div>
    )
}