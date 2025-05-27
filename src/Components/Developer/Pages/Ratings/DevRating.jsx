import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ApiServices from "../../../ApiServices/ApiServices";

export default function DevRating() {

  const [developerId, setDeveloperId] = useState();
  const [error,setError]=useState("")
  const[rating,setRating]=useState({})

  useEffect(() => {
     fetchDev()
    
  }, []);
  useEffect(()=>{
    if(!!developerId){
     fetchRating()
    }
  },[developerId])
  const fetchDev=()=>{
    let _id=sessionStorage.getItem("userId") 
    let formData={userId:_id}
    ApiServices.devSingle(formData)
    .then((res)=>{
        console.log(res);
        
        if(res.data.success){
            toast.success(res.data.message)
            console.log(res.data.data);
            console.log(res.data.data._id);
            
            setDeveloperId(res.data.data._id)
        }
        else{
            toast.error(res.data.message)
        }
    })
   .catch((err)=>{
       toast.error(err.message)
   })
    
  }
  const fetchRating = () => {
        let formData={developerId:developerId}
        ApiServices.ratingSingle(formData)
         
        .then((res)=>{
                if(res.data.success){
                  toast.success(res.data.message)
                  setRating(res.data.data)
                }
                else{
                  toast.error(res.data.message)
                }
          })
          .catch((err)=>{
            toast.error(err.message)
          })
        }

  const renderStars = (rating) => {
    const fullStars = Math.round(rating);
    return (
      <div style={{ color: "gold" }}>
        {'★'.repeat(fullStars)}{'☆'.repeat(5 - fullStars)}
      </div>
    );
  };
  
  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
          <h4 className="text-primary">Rating Details</h4>
        </div>

        
           
          <div className="row g-4 justify-content-center text-center">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="service-item bg-light rounded">
                <div className="service-img">
                  <img
                    src={rating?.developerId?.photo}
                    className="img-fluid w-100 rounded-top"
                    alt=""
                    style={{ aspectRatio: "16/9", height: "200px", width: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <p className="mb-2">Client - {rating?.addedById?.name || "Unknown"}</p>
                    {renderStars(rating?.developerId?.ratings)}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}