import React from 'react'

import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import img6 from '../Assets/img6.jpg'
import img7 from '../Assets/img7.jpg'

import pdf1 from '../Assets/Itr1.pdf'
import pdf2 from '../Assets/Itr2.jpg'
import pdf3 from '../Assets/Itr3.jpg'
import pdf4 from '../Assets/Itr4.pdf'
import pdf5 from '../Assets/Itr5.jpg'
import pdf6 from '../Assets/Itr6.pdf'
import pdf7 from '../Assets/Itr7.jpg'




export function Carousel(){
    return(
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="10000" data-pause="hover">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>

        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href={pdf1} target="_blank"><img src={img1} class="d-block w-100" alt="..."/></a>
          </div>
          <div class="carousel-item">
            <a href={pdf2} target="_blank"><img src={img2} class="d-block w-100" alt="..."/></a>
          </div>
          <div class="carousel-item">
            <a href={pdf3} target="_blank"><img src={img3} class="d-block w-100" alt="..."/></a>
          </div>
          <div class="carousel-item">
            <a href={pdf4} target="_blank"><img src={img4} class="d-block w-100" alt="..."/></a>
          </div>
          <div class="carousel-item">
            <a href={pdf5} target="_blank"><img src={img5} class="d-block w-100" alt="..."/></a>
          </div>
          <div class="carousel-item">
            <a href={pdf6} target="_blank"><img src={img6} class="d-block w-100" alt="..."/></a>
          </div>
          <div class="carousel-item">
            <a href={pdf7} target="_blank"><img src={img7} class="d-block w-100" alt="..."/></a>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    )
}

export default Carousel;