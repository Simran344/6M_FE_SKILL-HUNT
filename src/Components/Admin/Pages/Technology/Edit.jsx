import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiServices from "../../../ApiServices/ApiServices";
import PageTitle from "../../Layout/PageTitle";
import { toast } from "react-toastify";
export default function Edit(){
    const[tech,setTech]=useState()
    const[imageName,setImageName]=useState(null)
    const[image,setImage]=useState({})
       const{_id}=useParams()
       const nav=useNavigate()
       useEffect(()=>{
            fetchUpdate()
       },[_id])

       const fetchUpdate=()=>{
            let formData={_id:_id}
            ApiServices.techSingle(formData)
            .then((res)=>{
                if(res.data.success){
                    toast.success(res.data.message)
                    setTech(res.data.data.name)
                    setImage(res.data.data.thumbnail)
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
        const handleForm=(e)=>{
            e.preventDefault()
        let formData=new FormData()
        formData.append("_id",_id)
        formData.append("name",tech)
        if(!!image){
        formData.append("thumbnail",image)
        }
        ApiServices.techUpdate(formData)
        .then((res)=>{
            if(res?.data.success){
                toast.success(res?.data.message)
                nav("/admin/manage")
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
             <PageTitle children="Update Technology"/>
                <div className="App">
            
                  {/* Add Form */}
                  <form onSubmit={handleForm}>
                  <div className="form-box">
                    <h3>Update</h3>
                    <div className="form-group">
                      <label>Name:</label>
                    <input value={tech} onChange={(e) => setTech(e.target.value)} required />
                    </div>
                    <br />
                    <div className="form-group">
                    <label>Thumbnail: </label>
                    <input type="file" value={imageName} onChange={setImages} required/>
                    </div>
                    <br />
                    
                    <button className="btn btn-primary" type="submit">Save</button>
                  </div>
                  </form>
                </div>
        </>

       )
}