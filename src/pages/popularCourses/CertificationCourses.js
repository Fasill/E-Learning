import style from "./style.module.css"
import { Partnership } from "../../components/Partnership/Partnership"
import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.png"
import img3 from "../../assets/images/img3.png"
import img4 from "../../assets/images/img4.png"
import img5 from "../../assets/images/img5.png"
import img6 from "../../assets/images/img6.png"

import {Swip} from "../../components/swiper/swip"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, {Component} from "react";
import Slider from "react-slick";

export const CertificationCourses = ()=>{
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  } 

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
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
    <div className={style.AllPage}>
      <div className={style.PopularCouses}>
        <div className={style.header}>
          <h1 className={style.secondHeader}>
          Certifications Courses
          </h1>
          <div className={style.filtering}>
            <button className={style.proBtn} >Professional Courses</button>
            <div>
              <label for="myCheckbox">This is a checkbox:</label>
             <input type="checkbox" id="myCheckbox" name="myCheckbox"/>
            </div>
            <div>
              <label for="myCheckbox">This is a checkbox:</label>
             <input type="checkbox" id="myCheckbox" name="myCheckbox"/>
            </div>
            <div className={style.sort}>
              <p>Sort:</p>
              <button>Low To High</button>
            </div>
          </div>
        </div>
      </div> 
      <Swip/>
    </div>
  )
}