import React from "react";
import "./Project1.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { showLoader, hideLoader } from "../../../Admin/redux/action/Loaderaction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import PageTitle from "../../Layout/PageTitle";

import ApiServices from "../../../ApiServices/ApiServices";

export default function AddProj(){
    const [technology, setTechnology]=useState([])
    const[tech,setTech]=useState("")
    const[title,setTitle]=useState("")
    const[budget,setBudget]=useState("")
    const[duration,setDuration]=useState("")
    const[description,setDescription]=useState("")
   
    const [attachFile, setAttachFile]=useState(null)
    const [attachfileName, setAttachFileName]=useState("")
    const load=useSelector((state)=>state.loaderReducer.load)
    const dispatch=useDispatch()
    useEffect(()=>{
        fetchTech()
    },[])
    const fetchTech=()=>{
        let formData={}
        ApiServices.techAll(formData)
        .then((res)=>{
            if(res.data.success){
                setTechnology(res.data.data)
            }
        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }
    const nav = useNavigate()
    const changeAttachFile=(e)=>{
        setAttachFileName(e.target.value)
        setAttachFile(e.target.files[0])
      }
    
    const handleSubmit =(e) => {
        e.preventDefault()
        dispatch(showLoader())
        const formData = new FormData()
        formData.append("technologyId",tech);
        formData.append("title",title);
        formData.append("description",description);
        formData.append("attachments",attachFile)
        formData.append("budget",budget)
        formData.append("duration",duration)
        ApiServices.projectAdd(formData)
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
          dispatch(hideLoader())
          setTech("")
          setTitle("")
          setBudget("")
          setDuration("")
          setDescription("")
          setAttachFile("")
          setAttachFileName("")
        },1000)}
              
            
   
  return (
    <>
    <PageTitle children="Project"/>
    <div className="p">
       <div className="maina">
       <PulseLoader color="hsla(211, 100.00%, 50.00%, 0.80)" loading={load}></PulseLoader></div>
      <div className={`adpro ${load==true && "d-none"} mt-5 mb-5`}>
        <h1 style={{color:"skyblue"}}>Add Project</h1>

        <form onSubmit={handleSubmit}>
         
          <div className="form-floating">
            <input type="text" className="form-control" id="title"  placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}} value={title} required />
            <label htmlFor="title">Title:</label>
          </div>
          <div className="form-floating">
            <textarea  rows={5} cols={30} type="text" className="form-control" id="description" placeholder="description" onChange={(e)=>{setDescription(e.target.value)}} value={description} required >
            </textarea>
            <label htmlFor="description">Description:</label>
          </div>
          <br/>
          <div className="form-floating">
            <select value={tech} className="form-control" onChange={(e)=>{setTech(e.target.value)}}>
               <option value="">Select Technology</option>
                {technology.map((ele,index)=>{
                    return(
                        <option value={ele._id}>{ele.name}</option>
                    )
                })}
            </select>
          </div>
        
         <div className="form-floating">
            <input type="number" className="form-control" id="budget"  placeholder="Budget" onChange={(e)=>{setBudget(e.target.value)}} value={budget} required />
            <label htmlFor="budget">Budget:</label>
          </div>
            <div className="form-floating">
            <input type="text" className="form-control" id="duration"  placeholder="Duration" onChange={(e)=>{setDuration(e.target.value)}} value={duration} required />
            <label htmlFor="duration">Duration:</label>
          </div>
           <div className="form-floating">
            <input type="file" value={attachfileName} onChange={changeAttachFile} placeholder="Attach File" className="form-control" id="file"/>
            <label htmlFor="file">Attach File: </label>
        </div>
            <div className="button-group">
                <button type="submit" className="bu">Add</button>
            </div>
        </form>

      </div>
    </div>
   </>
  );
}
