import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Vision from '../components/Vision'


const HomePage = ()=>{

 return(
  <>
   <section className="p-4 p-sm-5 mt-5">
    <Hero />
    <Vision isHome={true} />
   </section>
  </>
 )
};

export default HomePage;
