import { Link, useLocation } from "react-router-dom";
import Modal from "react-modal"
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
export default function Header() {
  let loc = useLocation();
  let path = loc.pathname;
  const [isOpen, setIsOpen] = useState(false)


  const nav = useNavigate();
  const customStyles = {
    content: {
      top: '55%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '30%',
      boxShadow: "3px 3px 10px rgba(0,0,0,0.3)"


    }
  };
  function setLog() {

    Swal.fire({
      title: 'Logged Out',
      text: 'You have been successfully logged out.',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect to login page
        nav('/login');
      }
    });
    setIsOpen(false)


  }
  function setLogin() {
    setIsOpen(false)
    nav("/login")
  }
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid topbar px-0 d-none d-lg-block">

        <div className="container px-0">
          <div className="row gx-0 align-items-center" style={{ height: 45 }}>
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <Link to="#" className="text-muted me-4">
                  <i className="fas fa-map-marker-alt text-primary me-2" />
                  Find A Location
                </Link>
                <Link to="#" className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2" />
                  +01234567890
                </Link>
                <Link to="#" className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2" />
                  Example@gmail.com
                </Link>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <Link
                  to="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-facebook-f text-white" />
                </Link>
                <Link
                  to="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-twitter text-white" />
                </Link>
                <Link
                  to="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-instagram text-white" />
                </Link>
                <Link
                  to="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-0"
                >
                  <i className="fab fa-linkedin-in text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar & Hero Start */}
      <div className="container-fluid sticky-top px-0">
        <div
          className="position-absolute bg-dark"
          style={{ left: 0, top: 0, width: "100%", height: "100%" }}
        ></div>
        <div className="container px-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4" >
            <Link to="/" className="navbar-brand p-0">
              <h1 className="text-primary m-0">
                <i className="fas fa-donate me-3" />
                Skill Hunt
              </h1>
              {/* <img src="img/logo.png" alt="Logo"> */}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
              <div className="navbar-nav py-0 ms-auto" >
                <Link to="/developer/dashboard1" className={`nav-item nav-link ${path == "/developer/dashboard1" && "active"}`} style={{ transform: "translateX(-5px)" }}>
                  Dashboard
                </Link>
                
               
                 <Link to="/developer/tech" className={`nav-item nav-link ${path == "/developer/tech" && "active"}`} style={{ transform: "translateX(-5px)" }}>
                 Technologies
                </Link>
                <Link to="/developer/projects" className={`nav-item nav-link ${path == "/developer/projects" && "active"}`} style={{ transform: "translateX(-5px)" }}>
                  Project Management
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                   Bidding
                  </Link>
                <div className="dropdown-menu profile-menu">
                    <Link to="/developer/acceptedBid" className={`dropdown-item ${path=="/developer/acceptBid" && "active"}`}>
                    Accepted Bids
                    </Link>
                    <Link to="/developer/rejectBid" className={`dropdown-item ${path=="/developer/rejectBid" && "active"}`}>
                     Rejected Bids
                    </Link>
                  
                    </div>
                    </div>
                 <Link to="/developer/rating" className={`nav-item nav-link ${path == "/developer/rating" && "active"}`} style={{ transform: "translateX(-5px)" }}>
                  View Rating
                </Link>   
                <Link to="/developer/enquirys" className={`nav-item nav-link ${path == "/developer/enquirys" && "active"}`} style={{ transform: "translateX(-5px)" }}>
                  Enquiry
                </Link>
                {/*<Link to="/developer/contact" className={`nav-item nav-link ${path=="/developer/contact" && "active"}`} style={{transform:"translateX(-10px)"}}>
                 Contact
                </Link>*/}

              </div>
              <div className="d-flex align-items-center flex-nowrap pt-xl-0">

                {/*<Link to="/developer/chats" className={`bi bi-chat-dots data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ${path=="/developer/chats" && "active"} me-3`} style={{fontSize:"30px"}} >
                  </Link>*/}
               
                <Link to="/developer/chats" className="me-3" style={{ fontSize: "30px" }}>
                  <span
                    className="bi bi-chat-dots"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                  </span>

                </Link>



                {/*<div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="bi bi-person-circle"
                    style={{ fontSize: "30px" }}
                  >

                  </Link>
                  <div className="dropdown-menu m-0">
                    <Link to="/admin/blog" className={`dropdown-item ${path == "/blog" && "active"}`}>
                      Edit Profile
                    </Link>
                    <Link to="/admin/log" className={`dropdown-item ${path == "/log" && "active"}`}>
                      Logout
                    </Link>

                  </div>
                </div>*/}
                <div className="nav-item dropdown profile-dropdown">
                  <Link to="#" className="profile-icon">
                    <i className="bi bi-person-circle" style={{ fontSize: "30px" }}></i>
                  </Link>

                  <div className="dropdown-menu profile-menu ">
                    <Link to="/developer/bio" className={`dropdown-item ${path === "/developer/bio" ? "active" : ""}`}>
                      Edit Profile
                    </Link>
                    <Link to="/admin/log" className={`dropdown-item ${path === "/log" ? "active" : ""}`}>
                      Logout
                    </Link>
                  </div>
                </div>


              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar & Hero End */}
      {/* Modal Search Start */}
      <div
        className="modal fade"
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h4 className="modal-title mb-0" id="exampleModalLabel">
                Search by keyword
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input
                  type="search"
                  className="form-control p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" className="input-group-text p-3">
                  <i className="fa fa-search" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Search End */}

      <Modal isOpen={isOpen} style={customStyles}>

        <h2 className="mt-4 mx-auto ms-3">Logout Confirmation</h2>
        <p className="text-center">Are you sure you want to logout?</p>


        <div className="d-flex justify-content-center">

          <button className="btn btn-primary mx-auto b3" onClick={setLog}>Confirm</button>
          <button className="btn btn-outline-primary me-3 b3" onClick={setLogin}>Cancel</button>

        </div>

      </Modal>
    </>
  )
}