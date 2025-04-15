import {useNavigate} from 'react-router-dom';


const ContactPage = ()=>{

 return(
  <>
   <section className="p-4 p-sm-5 mt-5">
    <h1 className="ff-rubik mt-3 mb-4">Contact</h1>
    <div className="mb-3">To contact the orgsnisation, email us:</div>
    <a href="mailto:letlifttogether@gmail.com" className="mb-4 btn btn-danger rounded-3 click-grow click-fade px-3 py-2">
     Email us
    </a>

    <div className="mb-3">To donate, email us</div>
    <a href="mailto:letlifttogether@gmail.com" className="btn btn-danger rounded-3 click-grow click-fade px-3 py-2">
     Donate
    </a>
   </section>
  </>
 )
};

export default ContactPage;
