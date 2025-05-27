import { useState,useEffect } from "react"
import ApiServices from "../../../ApiServices/ApiServices"
import "./Bio.css"
import PageTitle from "../../Layouts/PageTitle"
import { PulseLoader } from "react-spinners"
import Swal from "sweetalert2"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
export default function Bi(){
       
       const[contact,setContact]=useState("")
       const[picName,setPicName]=useState("") 
       const[pic,setPic]=useState({})
       const nav=useNavigate()
       useEffect(()=>{
           fetchDev()
       },[])
      function fetchDev(){
           let _id=sessionStorage.getItem("userId")
           let formData={userId:_id}
           ApiServices.devSingle(formData)
           .then((res)=>{
               if(res.data.success){
                toast.success(res.data.message)
                setContact(res.data.data.contact)
                 setPic(res.data.data.photo)
               }
           })
           .catch((res)=>{
               toast.error(err.message)
           })
       }
      
     function changeAttachFile(e){
        setPicName(e.target.value)
        setPic(e.target.files[0])
     }
     const handleSubmit=(e)=>{
        e.preventDefault()
         Swal.fire({
                    title: `Are you sure you want to update the profile`,
                    text: "You wont be able to revert this!",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes Update It!!"
                }).then((result) => {
                    if (result.isConfirmed) {
        let formData=new FormData()
       
        if(pic){
            formData.append("photo",pic)
        }
        formData.append("contact",contact)
        
        ApiServices.devUpdate(formData)
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
})
     }
return(
    
   <>
 <PageTitle children="Profile"/>
    <div className="bio">
      <div className="update mt-5 mb-5">
        <h1 style={{color:"skyblue"}}>Update Profile</h1>

        <form onSubmit={handleSubmit}>
         
         
          <div className="form-floating">
            <input type="file" value={picName} onChange={changeAttachFile} placeholder="Attach File" className="form-control" id="file"/>
            <label htmlFor="file">Attach File: </label>
        </div>
         <div className="form-floating">
            <input type="tel" value={contact} onChange={(e)=>{setContact(e.target.value)}} placeholder="Contact" className="form-control" id="Contact"/>
            <label htmlFor="Contact">Contact: </label>
        </div>
       
        
       
            <div className="button-group">
                <button type="submit" className="bu" onClick={()=>nav("/developer/dashboard1")}>Submit</button>
            </div>
        </form>

     
    </div>
    </div>
    </>
)
}