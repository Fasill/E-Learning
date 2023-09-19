import style from "./style.module.css"
import img1 from  '../../assets/images/udemy.svg'
import img2 from  '../../assets/images/khan_Academy.svg'
import img3 from  '../../assets/images/cloud_Academy.svg'
import img4 from  '../../assets/images/coursera.svg'

export const Partnership = ()=>{
  return(
    <div className={style.allPartnership}>
      <div className={style.udemy}>
        <img src={img1}/>
      </div>
      <div className={style.khan_Academy}>
        <img src={img2}/>
      </div>
      <div className={style.cloud_Academy}>
        <img src={img3}/>
      </div>
      <div className={style.coursera}>
        <img src={img4}/>
      </div>

    </div>
  )
}