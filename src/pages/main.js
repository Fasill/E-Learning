import {Home} from "./home/home"
import {PopularCourses} from "./popularCourses/popularCourses"
import {CertificationCourses} from "./popularCourses/CertificationCourses"
export const Main = ()=>{
  return(
    <div>
      <Home/>
      <PopularCourses/>
      <CertificationCourses/>

    </div>
  )
}