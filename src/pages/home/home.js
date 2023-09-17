import { Navbar } from "../../components/navbar"
import style from "./style.module.css"
import back1 from "../../assets/images/back1.svg"
import back2 from "../../assets/images/back2.svg"
import back3 from "../../assets/images/back3.svg"
import girl from  "../../assets/images/girl.svg"

export const Home = ()=>{
  return(
    <div>
      <Navbar/>
      <div className = {style.hero}>
        <div className = {style.background}>
          <img className = {style.backimg1} src = {back1}/>
          <img className = {style.backimg2} src = {back2}/>
          <img className = {style.backimg3} src = {back3}/>
          <img className = {style.girl} src = {girl}/>

        </div>


      </div>
      
    </div>
  )
}