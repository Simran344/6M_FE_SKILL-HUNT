
import "./Enquiry.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PageTitle from "../../Layouts/PageTitle";
import ApiServices from "../../../ApiServices/ApiServices";

export default function Enquirys(){
    const [issue, setIssue]=useState("")
    const [message, setMessage]=useState("")
    const [attachFile, setAttachFile]=useState(null)
    const [attachfileName, setAttachFileName]=useState("")
    const [load,setLoad]=useState(false)
    const nav = useNavigate()
    const changeAttachFile=(e)=>{
        setAttachFileName(e.target.value)
        setAttachFile(e.target.files[0])
      }
    
    const handleSubmit =(e) => {
        e.preventDefault()
        setLoad(true)
        const formData = new FormData()
        formData.append("issue",issue);
        formData.append("message",message);
        formData.append("attachFile",attachFile);
        ApiServices.enquiryAdd(formData)
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
             
        setTimeout(()=>{
          setLoad(false)
          setIssue("")
          setMessage("")
          setAttachFile("")
          setAttachFileName("")
        },1000)}
              
            
   
  return (
    <>
    <PageTitle children="Enquiry Form"/>
    <div className="enq">
       <div className="maina">
       <PulseLoader color="hsla(211, 100.00%, 50.00%, 0.80)" loading={load}></PulseLoader></div>
      <div className={`enquiry ${load==true && "d-none"}`}>
        <h1 style={{color:"skyblue"}}>Enquiry Form</h1>

        <form onSubmit={handleSubmit}>
         
          <div className="form-floating">
            <input type="issue" className="form-control" id="subject"  placeholder="Issue" onChange={(e)=>{setIssue(e.target.value)}} value={issue} required />
            <label htmlFor="subject">Issue:</label>
          </div>
          <div className="form-floating">
            <textarea type="message" className="form-control" id="message" placeholder="Message" onChange={(e)=>{setMessage(e.target.value)}} value={message} required >
            </textarea>
            <label htmlFor="message">Message:</label>
          </div>
          <div className="form-floating">
            <input type="file" value={attachfileName} onChange={changeAttachFile} placeholder="Attach File" className="form-control" id="file"/>
            <label htmlFor="file">Attach File: </label>
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
