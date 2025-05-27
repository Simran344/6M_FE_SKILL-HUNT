import React from "react";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import { motion } from "framer-motion";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { RsvpTwoTone } from "@mui/icons-material";
import ApiServices from "../ApiServices/ApiServices";

export default function Log(){
  let [email,setEmail]=useState("")
  const changeEmail=(event)=>{
    setEmail(event.target.value)
  }
  let [password,setPassword]=useState("")
  const changePassword=(event)=>{
    setPassword(event.target.value)
  }
  const [load,setLoad]=useState(false)
  const nav = useNavigate()

  const submitForm=(e)=>{
    e.preventDefault()
    setLoad(true)
    let data={email:email,password:password}
    ApiServices.login(data)
    .then((res)=>{
      if(res.data.success){
          toast.success(res.data?.message)
          sessionStorage.setItem("token",res.data?.token)
          sessionStorage.setItem("name",res.data?.data?.name)
          sessionStorage.setItem("userId",res.data?.data?._id)
          if(res.data?.data?.userType==1){
            nav("/admin")
          }
          else if(res.data?.data?.userType==2){
              nav("/client/dashboards")
          }
          else{
            nav("/developer/dashboard1")
          }
        }
        else{
          toast.error(res.data?.message)
        }
    })
  
    .catch((error)=>{
      toast.error(error?.message)
    })
    setTimeout(()=>{
      setLoad(false)
      setEmail("")
      setPassword("")
      
    },1500)}
  return (
    <div className="b2">
    <motion.div 
    initial={{rotateY:180,opacity:0}}
    animate={{rotateY:0,opacity:1}}
    transition={{duration:2.0}}
    className="login-container" id="bord">
       <div className="loader-wrapper">
       <PulseLoader color="rgba(0,123,255,0.8)" loading={load}></PulseLoader></div>
      <div className={`login-box ${load==true && "d-none"}`}>
        <div className="login-icon"><i className="bi bi-box-arrow-in-right"></i></div>
        <h2>Sign in with email</h2>

        <form onSubmit={submitForm}>
         
          <div className="form-floating">
          <input type="email" className="form-control" id="subject"  placeholder="Email" onChange={changeEmail} value={email} required />
          <label htmlFor="subject">Email</label>
          </div>
          <div className="form-floating">
          <input type="password"  className="form-control" id="password" placeholder="Password" onChange={changePassword} value={password} required />
          <label htmlFor="password">Password</label>
          </div>
          <div className="forgot-section">
            <Link to="/register">Register...</Link>
          </div>

          <button type="submit" className="b1">Login</button>
        </form>

       

        
      </div>
    </motion.div>
    </div>
   
  );
};

