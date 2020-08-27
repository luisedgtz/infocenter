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
                <h5>CONMUTADOR</h5>

                <div className="tell">
                    <img src={ConIcon}></img>
                    <h3>(81) 8379 4343</h3>
                </div>
            </div>

            <div className="Contact">
                <h5>WHATSAPP</h5>
                <div className="tell">
                    <a target="_blank" href="https://wa.me/528118255896"><img src={WAIcon}></img></a>
                    <h3>(81) 1825 5896</h3>
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