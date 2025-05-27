import { useState,useEffect } from "react"
import ApiServices from "../../../ApiServices/ApiServices"
import "./Bio.css"
import PageTitle from "../../Layout/PageTitle"
import { PulseLoader } from "react-spinners"
import Swal from "sweetalert2"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
export default function Bio(){
       const[company,setCompanyName]=useState("")
       const[contact,setContact]=useState("")
       const[address,setAddress]=useState("")
       const[countries,setCountries]=useState([])
       const[country,setCountry]=useState("")
       const[picName,setPicName]=useState("")
       const[pic,setPic]=useState({})
       const nav=useNavigate()
       useEffect(()=>{
            fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const countryNames = data
          .map((country) => country.name.common)
          .sort();
        setCountries(countryNames);
      })
      .catch((error) => {
        console.log("Error fetching countries:", error);
      });
        fetchClient()
       },[])
       function fetchClient(){
           let _id=sessionStorage.getItem("userId")
           let formData={userId:_id}
           ApiServices.clientSingle(formData)
           .then((res)=>{
               if(res.data.success){
                toast.success(res.data.message)
                setContact(res.data.data.contact)
                setCompanyName(res.data.data.companyName)
                setAddress(res.data.data.address)
                setCountry(res.data.data.country)
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
        formData.append("country",country)
        formData.append("companyName",company)
        if(pic){
            formData.append("photo",pic)
        }
        formData.append("contact",contact)
        formData.append("address",address)
        ApiServices.clientUpdate(formData)
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
    <div className="pro1">
      <div className="profile1 mt-5 mb-5">
        <h1 style={{color:"skyblue"}}>Update Profile</h1>

        <form onSubmit={handleSubmit}>
         
          <div className="form-floating">
            <input type="text" className="form-control" id="name"  placeholder="company Name" onChange={(e)=>{setCompanyName(e.target.value)}} value={company} />
            <label htmlFor="name">company Name:</label>
          </div>
          <div className="form-floating">
            <select
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="form-control"
                      id="country"
                      style={{ backgroundColor: "white" }}
                    >
                      <option value="">-- Select a Country --</option>
                      {countries.map((cname) => (
                        <option key={cname} value={cname}>
                          {cname}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="country">Country: </label>
            
          </div>
          <div className="form-floating">
            <input type="file" value={picName} onChange={changeAttachFile} placeholder="Attach File" className="form-control" id="file"/>
            <label htmlFor="file">Attach File: </label>
        </div>
         <div className="form-floating">
            <input type="tel" value={contact} onChange={(e)=>{setContact(e.target.value)}} placeholder="Contact" className="form-control" id="Contact"/>
            <label htmlFor="Contact">Contact: </label>
        </div>
        <div className="form-floating">
            <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder="Address" className="form-control" id="address"/>
            <label htmlFor="address">Address: </label>
        </div>
        
       
            <div className="button-group">
                <button type="submit" className="bu" onClick={()=>nav("/client/dashboards")}>Submit</button>
            </div>
        </form>

     
    </div>
    </div>
    </>
)
}