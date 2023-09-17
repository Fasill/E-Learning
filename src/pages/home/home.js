import { Navbar } from "../../components/navbar/navbar"
import style from "./style.module.css"
import back1 from "../../assets/images/back1.svg"
import back2 from "../../assets/images/back2.svg"
import back3 from "../../assets/images/back3.svg"
import girl from  "../../assets/images/girl.svg"
import search from "../../assets/images/search.svg" 

export const Home = ()=>{

  return(
    <div className={style.allHome}>
      <Navbar/>
      <div className = {style.hero}>
        <div className = {style.background}>
          <img className = {style.backimg1} src = {back1}/>
          <img className = {style.backimg2} src = {back2}/>
          <img className = {style.backimg3} src = {back3}/>
          <img className = {style.girl} src = {girl}/>

        </div>
        <div className = {style.tittles}>
          <div className = {style.search}>
            <input type = "text" placeholder={`Search for courses `} />
                 <img src = {search} /> 

          </div>
            <h1>Explore what professionals like you are  learning the most</h1>
          <button>Visit Courses</button>

        </div>


      </div>
      
    </div>
  )
}