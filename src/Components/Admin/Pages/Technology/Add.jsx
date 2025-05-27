import React, { useState } from 'react';
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import PageTitle from '../../Layout/PageTitle';
import ApiServices from '../../../ApiServices/ApiServices';
function Add() {
  
  const [title, setTitle] = useState('');
  const [logo, setLogo] = useState({});
  const[logoName,setLogoName]=useState("")
  
  const handleAdd = () => {
    
    let formData=new FormData()
    formData.append("name",title)
    formData.append("thumbnail",logo)
    ApiServices.techAdd(formData)
    .then((res)=>{
      if(res.data.success){
        toast.success(res.data.message)
      }
      else{
        toast.error(res.data.message)
      }
    })
    .catch((error)=>{
          toast.error(error?.message)
        })
    
  };

 
  const setImage=(e)=>{
    setLogoName(e.target.value)
    setLogo(e.target.files[0])
  }


  return (
    <>
    <PageTitle children="Add and Manage Technology"/>
    <div className="App">

      {/* Add Form */}
      <div className="form-box">
        <h3>Add</h3>
        <div className="form-group">
          <label>Name:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <br />
        <div className="form-group">
        <label>Thumbnail: </label>
        <input type="file" value={logoName} onChange={setImage} required/>
        </div>
        <br />
        
        <button className="btn btn-primary" onClick={handleAdd}>Add</button>
      </div>
    </div>
    </>
    )

}

export default Add;