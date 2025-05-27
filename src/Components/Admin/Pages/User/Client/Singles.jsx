import { useEffect,useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import ApiServices from "../../../../ApiServices/ApiServices";
import PageTitle from "../../../Layout/PageTitle";
import { toast } from 'react-toastify';
export default function Singles(){
      const{_id}=useParams()
      const nav=useNavigate()
      const[client,setClient]=useState({})
      useEffect(()=>{
         fetchSingle()
      },[_id])

      const fetchSingle=()=>{
           let formData={_id:_id}
           ApiServices.clientSingle(formData)
           .then((res)=>{
                if(res.data.success){
                    toast.success(res.data.message)
                    setClient(res.data.data)
                    
                    console.log(res.data.data)
                }
                else{
                    toast.error(res.data.message)
                }
           })
           .catch((err)=>{
            toast.error(err.message)
           })
      }
      function setCancel(){
          nav("/admin/user")
      }
      return(
        <>
        
        <div className="container-fluid service py-5" style={{marginRight:"auto" }}>
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 800 }}
        >
          <div className="row g-4 justify-content-center text-center">
            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item bg-light rounded w-150" style={{ width: "350px" }}>
                <div className="service-img">
                  {client.photo ? (
                    <img
                      src={client.photo}
                      className="img-fluid w-100 rounded-top"
                      alt="User"
                      style={{aspectRatio:"16/9", height:"230px", width:"100%", objectFit:"cover"}}
                    />
                  ) : (
                    <p>No Image Available</p>
                  )}
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner ms-3">
                    <span className="ms-1">Name:{client?.userId?.name || "N/A"}</span>
                    <br/>
                    <span className="ms-1">Email:{client?.userId?.email || "N/A"}</span>
                    <br/>
                    <span className="ms-1">Contact:{client.contact || "N/A"}</span>
                    <br/>
                    <span className="ms-1">Country:{client.country || "N/A"}</span>
                    <br/>
                    <span className="ms-1">Company Name:{client.companyName|| "N/A"}</span>
                    <br/>
                    <br/>
                    <button className="btn btn-light rounded-pill py-2 px-4" onClick={()=>{setCancel()}} >
                                  Cancel
                                </button>
                                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
      )
}