import React from "react";
import "./Rating.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import PageTitle from "../../Layout/PageTitle";
import axios from "axios";
import ApiServices from "../../../ApiServices/ApiServices";

export default function Rating(){
    const [rating, setRating] = useState();
    const{developerId,clientId,projectId}=useParams()
    useEffect(()=>{

    },[projectId])
    const handleSubmit=(e)=>{
      e.preventDefault()
      let formData={developerId:developerId,addedById:clientId,projectId:projectId,rating:rating}
      ApiServices.ratingAdd(formData)
      .then((res)=>{
        if(res.data.success){
          toast.success(res.data.message)
        }
        else{
          toast.error(res.data.message)
        }
      })
      .catch((err)=>{
        toast.error(err.message)
      })
    }
            
   
  return (
    <>
    <PageTitle children="Rating"/>
    <div className="rat">
      <div className="ratings">
        <h1 style={{color:"skyblue"}}>Rating Form</h1>

        <form onSubmit={handleSubmit}>
         
          <div className="form-floating">
            <input type="number" min="1" max="5" value={rating} onChange={(e) => {const value = Number(e.target.value); if (value >= 1 && value <= 5) {setRating(value);} else if (e.target.value === '') {setRating('');
    }
  }} className="form-control" id="rating"  placeholder="Rating" required />
            <label htmlFor="subject">Rating:</label>
          </div>
          
          
       
            <div className="button-group">
                <button type="submit" className="bu">Submit</button>
            </div>
        </form>

      </div>
    </div>
   </>
  );
}
