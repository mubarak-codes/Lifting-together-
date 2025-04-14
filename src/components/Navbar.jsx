import {Link} from 'react-router-dom'



const Navbar = ()=>{

 return(
  <>
   <section>
    <nav className="navbar navbar-expand-sm border-bottom py-1 px-3">
     <Link to="/" className="navbar-brand w-20"> <img src="img/lifting_together_trans.png" className="w-30-sm w-70" /><span className="d-none d-sm-inline-block ff-josefin-sans fw-bolder">LIFTING TOGETHER</span></Link>

     <i class="fa-solid fa-bars mfs-6 d-sm-none click-grow" data-bs-toggle="collapse" data-bs-target="#nav"></i>
     <div className="collapse navbar-collapse ms-auto" id="nav">
      <div className="ms-auto navbar-nav gap-3 mfs-3">
      <Link to="/" className="nav-item text-black ms-auto click-fade">Home</Link>
      <Link to="/about" className="nav-item text-black ms-auto click-fade">About</Link>
      <Link to="/contact" className="nav-item text-black ms-auto click-fade">Contact</Link>
      <Link to="/contact" className="nav-item text-black ms-auto click-fade">Donate</Link>
      </div>
     </div>
    </nav>
   </section>
  </>
 )
};

export default Navbar;
