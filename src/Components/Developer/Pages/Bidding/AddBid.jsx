import "./AddBid.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import { useState ,useEffect} from "react";
import { PulseLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PageTitle from "../../Layouts/PageTitle";
import ApiServices from "../../../ApiServices/ApiServices";

export default function AddBid(){
    
   
    
    const [amount, setAmount]=useState("")
    const [details, setDetails]=useState("")
    const [duration, setDuration]=useState("")
    const [attachFile, setAttachFile]=useState(null)
    const [attachfileName, setAttachFileName]=useState("")
    const [load,setLoad]=useState(false)
    const{projectId,clientId}=useParams()
    const nav = useNavigate()
    const changeAttachFile=(e)=>{
        setAttachFileName(e.target.value)
        setAttachFile(e.target.files[0])
      }
    useEffect(()=>{
      
    },[projectId,clientId])

   
    
    const handleSubmit =(e) => {
        e.preventDefault()
        
        const formData = new FormData()
        formData.append("clientId",clientId);
        formData.append("projectId",projectId);
        formData.append("poc",attachFile);
        formData.append("duration",duration)
        formData.append("details",details)
        formData.append("bidAmount",amount)

        ApiServices.bidAdd(formData)
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
    <PageTitle children="Bidding"/>
    <div className="bid ">
      <div className={`bids ${load==true && "d-none"} mt-5 mb-5`}>
        <h1 style={{color:"skyblue"}}>Bid Form</h1>

        <form onSubmit={handleSubmit}>
         
         
          <div className="form-floating">
            <input type="number" className="form-control" id="amount" placeholder="Bid Amount" onChange={(e)=>{setAmount(e.target.value)}} value={amount} required min={0}/>
            <label htmlFor="amount">Bid Amount:</label>
          </div>
          <div className="form-floating">
            <input type="file" value={attachfileName} onChange={changeAttachFile} placeholder="Attach File" className="form-control" id="file"/>
            <label htmlFor="file">POC: </label>
        </div>
        <div className="form-floating">
            <textarea type="text" className="form-control" id="details" placeholder="Details" onChange={(e)=>{setDetails(e.target.value)}} value={details} required rows={4} cols={50}></textarea>
            <label htmlFor="details">Details:</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" id="duration" placeholder="Duration" onChange={(e)=>{setDuration(e.target.value)}} value={duration} required />
            <label htmlFor="duration">Duration:</label>
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
