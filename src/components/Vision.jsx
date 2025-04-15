import {Link, useNavigate, useLocation} from 'react-router-dom'
import {useRef, useEffect} from 'react'


const Vision = ({isHome = false})=>{
 let navigate = useNavigate();
 let location = useLocation();

 useEffect(()=>{
  window.scrollTo(0,0)
 }, [location])

 return(
  <>
   <section className="">
    <h2 className="ff-rubik text-center text-uppercase pb-4 mfs-8 mt-5">Vision and Mission</h2>
    <img src="img/womanandchild.jpg" className="w-100"  />
    <div className="opacity-75 py-4">We envision a world where all women and children can enjoy their social, economic, cultural and political rights. We want to help build societies based on social justice and fair distribution of power and resources for women, children and their families, where all women children are protected from harm and discrimination.<Link to="/about"><i className="text-danger d-inline-block mfs-2 mx-2">{isHome? 'Readmore': ''}</i></Link></div>

   <video 
  width="100%" 
  height="auto"
  controls
  poster="img/our_mission.jpg"
>
     <source src="vid/Our_mission.mp4" type="video/mp4" />
  Your browser does not support the video tag.
    </video>
    <div className="row justify-content-center">
     <button className="text-center bg-danger click-grow click-fade rounded-2 py-2 mt-4 text-white mw-25 w-20-sm" onClick={()=>{navigate("/contact")}}> Donate</button>
    </div>

    <h3 className="ff-rubik text-center mt-5 mb-4">{isHome? '': 'Our Focus Areas:' }</h3>
    <div className="opacity-75">{isHome? '': <div>We believe that education, healthcare, and economic empowerment are intricately linked, forming the foundation for a life of dignity, self-sufficiency, and fulfillment.
By providing access to quality education, we empower women and children to acquire skills, knowledge, and critical thinking abilities necessary to navigate the complexities of life. Education unlocks doors to better healthcare, economic opportunities, and informed decision-making.
However, education alone is not enough. Access to healthcare services, including nutrition, wellness, and medical care, is essential for women and children to thrive. Healthy individuals are more likely to pursue educational and economic opportunities, breaking cycles of poverty and vulnerability.
     Economic empowerment is the crucial third pillar, enabling women to secure stable incomes, build assets, and make informed financial decisions. By providing job training, entrepreneurship support, and financial literacy, we help women create better futures for themselves and their families.<br /><br/>
     <span className="fw-bold">Our holistic approach recognizes that these three pillars are:</span><br />
     - Education informs healthcare choices and economic opportunities.<br />
     - Healthcare enables individuals to pursue education and economic goals.< br />
     - Economic empowerment provides the stability to invest in education and healthcare.<br /><br />
     <span className="fw-bold">By addressing these interconnected needs,we creates a comprehensive support system that empowers women and children to:</span><br />
     - Break cycles of poverty and inequality<br />
     - Build resilience and self-sufficiency<br />
     - Thrive in their communities<br />
     Together, we can unlock the potential of women and children, fostering a brighter, more equitable future for all.</div>}</div>

    {isHome? '': <video 
     width="100%" 
     height="auto"
     controls
     poster="img/Feeding.jpg"
     className="mt-4"
>
     <source src="vid/Feeding_orphan_kids_in_Africa_Uganda(360p).mp4" type="video/mp4" />
  Your browser does not support the video tag.
    </video>}


    <h4 className="ff-rubik text-center mt-5 mb-4">{isHome? '': 'Get Involve'}</h4>
    <div className="opacity-75">{isHome? '': 'Join us in our mission to empower women and children. Volunteer, donate, or spread the word.'}</div>
    <div className="row justify-content-center">{isHome? '':  <button className="text-center bg-danger click-grow click-fade rounded-2 py-2 mt-4 mb-4 text-white mw-25 w-20-sm" onClick={()=>{navigate("/contact")}}> Donate</button>}</div>

   </section> 
  </>
 )
}

export default Vision;
