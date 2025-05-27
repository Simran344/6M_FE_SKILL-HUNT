
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiServices from "../../../ApiServices/ApiServices";
import PageTitle from "../../Layout/PageTitle";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import "./Project1.css"

export default function EditProj(){
    const[budget,setBudget]=useState()
    const[duration,setDuration]=useState()
    
       const{_id}=useParams()
       const nav=useNavigate()
       useEffect(()=>{
            fetchUpdate()
       },[_id])

       const fetchUpdate=()=>{
            let formData={_id:_id}
            ApiServices.projSingle(formData)
            .then((res)=>{
                if(res.data.success){
                    toast.success(res.data.message)
                    setBudget(res.data.data.budget)
                    setDuration(res.data.data.duration)
                }
                else{
                    toast.error(res.data.message)
                }
            })
            .catch((err)=>{
                toast.error(err.message)
            })
       }
        const setImages=(e)=>{
        setImageName(e.target.value)
        setImage(e.target.files[0])
        }
        const handleSubmit=(e)=>{
            e.preventDefault()
        let formData=new FormData()
        formData.append("_id",_id)
        formData.append("budget",budget)
        
        formData.append("duration",duration)
        
        ApiServices.projUpdate(formData)
        .then((res)=>{
            if(res?.data.success){
                toast.success(res?.data.message)
                nav("/client/projects")
            }
            else{
                toast.error(res.data.message)
            }
        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }
    return(
        <>
        <PageTitle children="Enquiry Form"/>
            <div className="enq">
              
           
              <div className="enquiry">
                <h1 style={{color:"skyblue"}}>Update</h1>
        
                <form onSubmit={handleSubmit}>
                 
                  <div className="form-floating">
                    <input type="text" className="form-control" id="subject"  placeholder="Budget" onChange={(e)=>{setBudget(e.target.value)}} value={budget} required/>
                    <label htmlFor="subject">Budget:</label>
                  </div>
                 <div className="form-floating">
                    <input type="text" className="form-control" id="subject1"  placeholder="Budget" onChange={(e)=>{setDuration(e.target.value)}} value={duration} required/>
                    <label htmlFor="subject1">Duration:</label>
                  </div>
                  
               
                    <div className="button-group">
                        <button type="submit" className="bu">Submit</button>
                    </div>
                </form>
        
              </div>
            </div>
           </>
        
    )
}