import React from 'react'

import ConIcon from '../Assets/conmuter.svg'
import WAIcon from '../Assets/whatsapp.svg'

import style from './style.css'

export default (props)=>{
    return(
        <footer id="footer">
        <div className="FooterContainer">
            <h4>Carlos Salazar 2420. Monterrey, N.L.</h4>

            <div className="Contact">
                <img src={ConIcon} height="60"></img>
                <div className="tel">
                    <h5>CONMUTADOR</h5>
                    <h3>(81) 8379 4343</h3>
                </div>
            </div>

            <div className="Contact">
                <a href="https://wa.me/528118255896"><img src={WAIcon} height="60"></img></a>
                <div className="tel">
                    <h5>WHATSAPP</h5>
                    <h3>(81) 8379 4343</h3>
                </div>
            </div>


        </div>

        <p className="Aviso">Info Center Operadora Mayorista 2019. Todos los derechos reservados. Consulta nuestro     
        <a target="_blank" 
        href="https://1712964e-c949-4ffa-a2ce-8b6857fe9999.filesusr.com/ugd/a67d74_bfdaa4b66192418eb5c420ba24f4a8eb.pdf"
        > Aviso de privacidad</a>
        </p>
        </footer>
    )
}