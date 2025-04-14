import {Link} from 'react-router-dom'
import {useRef, useEffect} from 'react'


const Vision = ({isHome = false})=>{


 return(
  <>
   <section className="">
    <h2 className="ff-rubik text-center text-uppercase py-4 mfs-8 pt-5">Vision and Mission</h2>
    <img src="img/womanandchild.jpg" className="w-100"  />
    <div className="opacity-75 py-4">We envision a world where all women and children can enjoy their social, economic, cultural and political rights. We want to help build societies based on social justice and fair distribution of power and resources for women, children and their families, where all women children are protected from harm and discrimination.<Link to="/about"><i className="text-danger d-inline-block mfs-2 mx-2" >{isHome? 'Readmore': ''}</i></Link>
</div>

   <video 
  width="100%" 
  height="auto"
  controls
  poster="img/our_mission.jpg"
>
     <source src="vid/Our_mission.mp4" type="video/mp4" />
  Your browser does not support the video tag.
    </video>
   </section> 
  </>
 )
}

export default Vision;
