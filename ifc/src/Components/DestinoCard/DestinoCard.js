import React from 'react'
import mas from '../Assets/mas.svg'

import style from './style.css'

export default (props)=>{
    return(
        <div className="cardContainer">
            <a>
                <img className="imgCard" src={props.cardImg}/>
                
                <div className="infoContainer">

                <div className="text">
                <h2>{props.destino}</h2>

                <div className="price">
                    {/* <h6>Desde: </h6>
                    <h1>{props.precio}</h1> */}
                </div>             
                </div>
                </div> 
            </a>
        </div>
    )
}