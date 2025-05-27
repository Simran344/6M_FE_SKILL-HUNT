import { Link, useLocation } from "react-router-dom";
import Modal from "react-modal"
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import {People, Translate} from "@mui/icons-material"

import Swal from "sweetalert2"; 
export default function Header(){
    let loc = useLocation();
    let path = loc.pathname;
    const[isOpen,setIsOpen]=useState(false)
   
 
    const nav=useNavigate();
    const customStyles = {
      content: {
        top: '55%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height:'30%',
        boxShadow:"3px 3px 10px rgba(0,0,0,0.3)"
       
       
      }
    };
    function setLog(){
     
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
    function setLogin(){
      setIsOpen(false)
      nav("/login")
    }
    return(
        <>
      
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
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <Link to="/client/dashboards" className={`nav-item nav-link ${path=="/client/dashboards" && "active"} `} style={{transform:"translateX(-5px)"}}>
                 Dashboard
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                   Project Management
                  </Link>
                <div className="dropdown-menu profile-menu">
                    <Link to="/client/add/project" className={`dropdown-item ${path=="/client/add/project" && "active"}`}>
                    Add Project
                    </Link>
                    <Link to="/client/projects" className={`dropdown-item ${path=="/client/projects" && "active"}`}>
                     Manage
                    </Link>
                  
                    </div>
                    </div>
                 
               
                <Link to="/client/enquiry" className={`nav-item nav-link ${path=="/client/enquiry" && "active"}`} style={{transform:"translateX(-10px)"}}>
                  Enquiry
                </Link>
                
                <Link to="/client/chat" className="me-3" style={{ fontSize: "30px" }}>
                  <span
                    className="bi bi-chat-dots"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                  </span>

                </Link>
              </div>
              <div className="d-flex align-items-center flex-nowrap pt-xl-0">
               
                <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="bi bi-person-circle"
                 style={{fontSize:"30px"}}
                >
                
                </Link>
                <div className="dropdown-menu profile-menu">
                    <Link to="/client/bio" className={`dropdown-item ${path=="/client/bio" && "active"}`}>
                     Edit Profile
                    </Link>
                    <Link to="/admin/log" className={`dropdown-item ${path=="/log" && "active"}`}>
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