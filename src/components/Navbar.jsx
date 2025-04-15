import {Link} from 'react-router-dom'



const Navbar = ()=>{

 return(
  <>
   <section className="fixed-top">
    <nav className="navbar navbar-expand-sm border-bottom py-1 px-3 bg-white">
     <Link to="/" className="navbar-brand w-20"> <img src="img/lifting_together_trans.png" className="w-30-sm w-70" /><span className="d-none d-sm-inline-block ff-josefin-sans fw-bolder">LIFTING TOGETHER</span></Link>

     <i class="fa-solid fa-bars mfs-6 d-sm-none click-grow navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#nav"></i>
     <div className="offcanvas offcanvas-end w-100 " id="nav">
      <div className="offcanvas-header border-bottom">
      <h3 className="offcanvas-title ff-josefin-sans fw-bolder">LIFTING TOGETHER</h3> 
       <i class="fa-solid fa-xmark ms-auto mfs-8 fw-ligter" data-bs-dismiss="offcanvas"></i>
      </div>
      <div className=" navbar-nav gap-3 mfs-3 offcanvas-body">
      <Link to="/" className="nav-item text-black click-fade">Home</Link>
      <Link to="/about" className="nav-item text-black click-fade">About</Link>
      <Link to="/contact" className="nav-item text-black click-fade">Contact</Link>
      <Link to="/contact" className="nav-item text-black click-fade">Donate</Link>
      </div>
     </div>
    </nav>
   </section>
  </>
 )
};

export default Navbar;
