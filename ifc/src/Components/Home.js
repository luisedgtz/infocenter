import React from 'react'
import Carousel from './Carousel'
import DestinoCard from './DestinoCard'

import card1 from './Assets/card1.jpg'
import card2 from './Assets/card2.jpg'
import card3 from './Assets/card3.jpg'
import card4 from './Assets/card4.jpg'
import card5 from './Assets/card5.jpg'
import card6 from './Assets/card6.jpg'
import card7 from './Assets/card7.jpg'
import card8 from './Assets/card8.jpg'



export default (props)=>{
    return(
        <div className="carouselContainer">
            <Carousel></Carousel>

            <div className="cards1">
                <div className="cards">
                <DestinoCard cardImg={card1} destino="Las Vegas" precio="$229"></DestinoCard>
                <DestinoCard cardImg={card2} destino="Europa" precio="$229"></DestinoCard>
                <DestinoCard cardImg={card3} destino="Nacionales" precio="$229"></DestinoCard>
                <DestinoCard cardImg={card4} destino="Canadá" precio="$229"></DestinoCard>
                </div>

                <div className="cards">
                <DestinoCard cardImg={card5} destino="Playas Nacionales" precio="$229"></DestinoCard>
                <DestinoCard cardImg={card6} destino="Sudamérica" precio="$229"></DestinoCard>
                <DestinoCard cardImg={card7} destino="Medio Oriente" precio="$229"></DestinoCard>
                <DestinoCard cardImg={card8} destino="Asia" precio="$229"></DestinoCard>              
                </div>

            </div>
            
            
        </div>
    )
}