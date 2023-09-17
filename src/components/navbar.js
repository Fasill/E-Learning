import style from "./navbar.module.css"
import img1 from  '../assets/images/cart.svg'
import img2 from  '../assets/images/list.svg'

export const Navbar = ()=>{
  return(
    <div className={style.allNav}>
        
      <div className={style.logo} ><h1>CourseMania</h1></div>

      <ul className={style.allUl}>
        <li className={style.firstLi} ><a hrf = "/">Home</a></li>
        <li className={style.firstLi} ><a hrf = "/">About</a></li>
        <li className={style.firstLi} ><a hrf = "/">Courses</a></li>
        <li className={style.firstLi} ><a hrf = "/">Tutors</a></li>
        <li className={style.firstLi} ><a hrf = "/">Contact</a></li>

      
      </ul>

      <div className = {style.loginNregister}>
        <a href = "/">Login</a>
        <button>Register</button>
        <div className = {style.cart}>
          <p className =  {style.cartVal}>1</p>
          <img src = {img1}/>  
        </div>
        
      </div>
      <div className={style.list}>
        <img src={img2}/>
      </div>
    </div>
  )
}