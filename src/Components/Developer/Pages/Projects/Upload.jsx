import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import ApiServices from "../../../ApiServices/ApiServices"
import "./Upload.css"
import PageTitle from "../../Layouts/PageTitle"
import { PulseLoader } from "react-spinners"
import Swal from "sweetalert2"
import { toast } from "react-toastify"
export default function Upload(){
       const[remarks,setRemarks]=useState("")
       const[attachments,setAttachmentsName]=useState("")
       const[attach,setAttach]=useState({})
       const{projectId,clientId}=useParams()
       useEffect(()=>{
           
       
       },[projectId,clientId])
       
     function changeAttachFile(e){
        setAttachmentsName(e.target.value)
        setAttach(e.target.files[0])
     }
     const handleSubmit=(e)=>{
        e.preventDefault()
         
        let formData=new FormData()
        formData.append("clientId",clientId)
        formData.append("projectId",projectId)
        formData.append("attachments",attach)
        formData.append("remarks",remarks)
        
        ApiServices.uploadAdd(formData)
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
    
return(
    
   <>
 <PageTitle children="Upload Project"/>
    <div className="upd">
      <div className="upload mt-5 mb-5">
        <h1 style={{color:"skyblue"}}>Upload Task</h1>

        <form onSubmit={handleSubmit}>
         
           <div className="form-floating">
            <textarea type="text" value={remarks} onChange={(e)=>{setRemarks(e.target.value)}} placeholder="Remarks" className="form-control" id="remarks"/>
            <label htmlFor="remarks">remarks: </label>
        </div>
          <div className="form-floating">
            <input type="file" value={attachments} onChange={changeAttachFile} placeholder="Attach File" className="form-control" id="file"/>
            <label htmlFor="file">Attach File: </label>
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