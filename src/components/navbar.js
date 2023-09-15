import style from "./navbar.module.css"
import img1 from  '../assets/images/logo.svg'
import img2 from  '../assets/images/list.svg'

export const Navbar = ()=>{
  return(
    <div className={style.allNav}>
        
      <div className={style.logo} ><img src= {img1}/><h1>E-Learn</h1></div>

      <ul className={style.allUl}>
        <li className={style.firstLi} ><a hrf = "/">Home</a></li>
        <li className={style.firstLi} ><a hrf = "/">Features</a></li>
        <li className={style.firstLi} ><a hrf = "/">How It Works</a></li>
        <li className={style.firstLi} ><a hrf = "/">About Us</a></li>
        <li className={style.firstLi} ><a hrf = "/">Testimponial</a></li>
        <li className={style.firstLi} ><a hrf = "/">Blog</a></li>

      
      </ul>
      <button>Get the App</button>
      <div className={style.list}>
        <img src={img2}/>
      </div>
    </div>
  )
}