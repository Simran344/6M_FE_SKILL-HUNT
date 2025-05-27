import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <>
{/* Footer Start */}
<div className="container-fluid footer py-3 wow fadeIn" data-wow-delay="0.2s">
<div className="container py-3" >
          <div className="row g-5 ">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-row ms-5">
                <h4 className="text-white mb-5 me-4 mx-auto">Explore:</h4>
                <Link to="#">
                </Link>
                <span>
                <Link to="/developer/dashboard1" className="me-5">
                  Dashboard
                </Link>
                </span>
                <Link to="/developer/bidding" className="me-5" style={{marginLeft:"60px"}}>
                Bidding
                </Link>
                <Link to="/developer/projects" className="me-5" style={{marginLeft:"60px"}}>
                  Project
                </Link>
                
                <Link to="/developer/history" className="me-5" style={{marginLeft:"70px"}}>
                   History
                </Link>
                <Link to="/developer/enquiry" className="me-5" style={{marginLeft:"70px"}}>
                  Enquiry
                </Link>
                <Link to="/developer/chats" className="me-5" style={{marginLeft:"70px"}}>
                   Chats
                </Link>
                
               
                
              </div>
            </div>
            </div>
            <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-row ms-5">
                <h4 className="text-white mb-0">Contact Info</h4>
                <Link to="">
                        Rama Mandi,Jalandhar
                 
                </Link>
                <Link to="" style={{marginLeft:"40px"}}>
                  <i className="fas fa-envelope me-5" /> purva@example.com
                </Link>
                <Link to="" style={{marginLeft:"40px"}}>
                  <i className="fas fa-envelope me-5" /> simran@example.com
                </Link>
                <Link to="" style={{marginLeft:"40px"}}>
                  <i className="fas fa-phone me-5" />
                  <pre>+91 62398-33648</pre> 
                </Link>
                <Link to="" className="mb-3"style={{marginLeft:"40px"}} >
                  <i className="fas fa-print me-5" /> 
                  <pre>+91 98153-84556</pre>
                </Link>
               
              </div>
   

              
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body">
                <a href="#" className="border-bottom text-primary">
                  <i className="fas fa-copyright text-light me-2" />
                  Skill Hunt
                </a>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-body">
              {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
              {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
              {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
              Designed By{" "}
              <Link
                className="border-bottom text-primary"
                to="https://htmlcodex.com"
              >
                Purva & Simran
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="fa fa-arrow-up" />
      </a> 
    </>
    
    
    )
}
    