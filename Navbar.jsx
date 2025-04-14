import {Link} from 'react-router-dom'



const Navbar = ()=>{

 return(
  <>
   <section>
    <nav className="navbar navbar-expand-sm border-bottom py-1 px-3">
     <Link to="/" className="navbar-brand w-20"> <img src="img/lifting_together_trans.png" className="w-30-sm w-70" /><span className="d-none d-sm-inline-block ff-josefin-sans fw-bolder">LIFTING TOGETHER</span></Link>

     <div className="collapse navbar-collapse">
      <div className="ms-auto navbar-nav gap-3">
      <Link to="/" className="nav-item text-black">Home</Link>
      <Link to="/about" className="nav-item text-black">About</Link>
      <Link to="/contact" className="nav-item text-black">Contact</Link>
      <Link to="/contact" className="nav-item text-black">Donate</Link>
      </div>
     </div>
    </nav>
   </section>
  </>
 )
};

export default Navbar;
