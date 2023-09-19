import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./style.module.css"
import React, {Component} from "react";
import Slider from "react-slick";
// Import Swiper styles
import 'swiper/css';

import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.png"
import img3 from "../../assets/images/img3.png"
import img4 from "../../assets/images/img4.png"
import img5 from "../../assets/images/img5.png"
import img6 from "../../assets/images/img6.png"
import nike from "../../assets/images/nike.svg"
import plus from "../../assets/images/plus.svg"
import miniLogo1 from "../../assets/images/complogo1.svg"
import miniLogo2 from "../../assets/images/complogo2.svg"
import starts from "../../assets/images/starts.svg"
export const Swip = ()=>{


    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      // variableWidth: true,
      autoPlay: true,
     
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
       
      ]
    };
  return(
    <div className={style.sliderContainer}>
    <Slider className={style.customSlider} {...settings}>
    <div className = {style.card} >
      <div className = {style.inCard}>
      
      <div><div className={style.RedBadge} >Popular</div>
      <img src = {img1} /></div>

        <div className={style.hateta}>
          <div className = {style.cardTittle}>
            <div>
              <h1>Unconscious Bias</h1>
              <p>Duration : 25mins</p>
            </div>
      
            <button ><img src = {plus}/></button>
          </div>
        <p className = {`${style.pOut} ${style.price}`}>$15.90</p> 
        <img className={style.pOut} src = {miniLogo2}/>
        <div className={style.rating}><img className={style.pOut} src = {starts}/><p>(15,600)</p>
        </div>
        <button className = {style.buyBtn}>Buy Now</button>
      </div>
      </div>

    </div>
    <div className = {style.card} >
      <div className = {style.inCard}>
       <div><div className={style.RedBadge} >Best Seller</div>
       <img src = {img2} /></div>
       <div className={style.hateta}>
       <div className = {style.cardTittle}><div><h1>Unconscious Bias</h1>
       <p>Duration : 25mins</p></div>
       
        <button ><img src = {plus}/></button>
        </div>
          <p className = {`${style.pOut} ${style.price}`}>$15.90</p> 
       
        <img className={style.pOut} src = {miniLogo2}/>
        <div className={style.rating}><img className={style.pOut} src = {starts}/><p>(15,600)</p></div>
        <button className = {style.buyBtn}>Buy Now</button>
    </div></div></div>
    <div className = {style.card} >
      <div className = {style.inCard}>
      <div><div className={style.RedBadge} >Best Seller</div>
       <img src = {img3} /></div>
       <div className={style.hateta}>
       <div className = {style.cardTittle}><div><h1>Unconscious Bias</h1>
       <p>Duration : 25mins</p></div>
       
        <button ><img src = {plus}/></button>
        </div>
          <p className = {`${style.pOut} ${style.price}`}>$15.90</p> 
       
        <img className={style.pOut} src = {miniLogo2}/>
        <div className={style.rating}><img className={style.pOut} src = {starts}/><p>(15,600)</p></div>
        <button className = {style.buyBtn}>Buy Now</button>
    </div></div></div>
    <div className = {style.card} >
      <div className = {style.inCard}>
      <div><div className={style.RedBadge} >Best Seller</div>
       <img src = {img4} /></div>
       <div className={style.hateta}>
       <div className = {style.cardTittle}><div><h1>Unconscious Bias</h1>
       <p>Duration : 25mins</p></div>
       
        <button ><img src = {plus}/></button>
        </div>
          <p className = {`${style.pOut} ${style.price}`}>$15.90</p> 
       
        <img className={style.pOut} src = {miniLogo2}/>
        <div className={style.rating}><img className={style.pOut} src = {starts}/><p>(15,600)</p></div>
        <button className = {style.buyBtn}>Buy Now</button>
    </div></div></div>
    <div className = {style.card} >
      <div className = {style.inCard}>
      <div><div className={style.RedBadge} >Best Seller</div>
       <img src = {img5} /></div>
       <div className={style.hateta}>
       <div className = {style.cardTittle}><div><h1>Unconscious Bias</h1>
       <p>Duration : 25mins</p></div>
       
        <button ><img src = {plus}/></button>
        </div>
          <p className = {`${style.pOut} ${style.price}`}>$15.90</p> 
       
        <img className={style.pOut} src = {miniLogo1}/>
        <div className={style.rating}><img className={style.pOut} src = {starts}/><p>(15,600)</p></div>
        <button className = {style.buyBtn}>Buy Now</button>
    </div></div></div>
    <div className = {style.card} >
      <div className = {style.inCard}>
      <div><div className={style.RedBadge} >Best Seller</div>
       <img src = {img6} /></div>
       <div className={style.hateta}>
       <div className = {style.cardTittle}><div><h1>Unconscious Bias</h1>
       <p>Duration : 25mins</p></div>
       
        <button ><img src = {plus}/></button>
        </div>
          <p className = {`${style.pOut} ${style.price}`}>$15.90</p> 
       
        <img className={style.pOut} src = {miniLogo1}/>
        <div className={style.rating}><img className={style.pOut} src = {starts}/><p>(15,600)</p></div>
        <button className = {style.buyBtn}>Buy Now</button>
    </div></div></div>
  </Slider>
    </div>

    )
}