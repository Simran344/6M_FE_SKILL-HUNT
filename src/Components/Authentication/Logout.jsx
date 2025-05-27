import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 
export default function Logout(){
   
    const[isOpen,setIsOpen]=useState(true)
    function setLogin(){
        setIsOpen(false)
      }
 
    
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
    const nav=useNavigate()
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
        

    return(
        <>
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