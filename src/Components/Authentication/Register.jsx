import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css"
import ApiServices from '../ApiServices/ApiServices';
import { toast } from 'react-toastify';
import Select from "react-select"
const Register = () => {
  const [countries, setCountries] = useState([]);
  const [type, setType] = useState("")
  const [techId, setTechId] = useState([])
  const [techArr, setTechArr] = useState([])
  const handleType = (e) => {
    setType(e.target.value)
  }
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [photo, setPhoto] = useState(null)
  const [photoName, setPhotoName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [country, setCountry] = useState("")
  const [address, setAddress] = useState("")
  const [contact, setContact] = useState("")
  const [technology, setTechnology] = useState("")
  const nav = useNavigate()
  useEffect(() => {
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
    fetchTech()
  }, []);
  const fetchTech = () => {
    let formData = {}
    ApiServices.techAll(formData)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message)
          setTechArr(res.data.data)
        }
        else {
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }
  const techOptions = techArr.map((ele, index) => ({
    value: ele._id,
    label: ele.name
  }))
 
  const changePhoto = (e) => {
    setPhotoName(e.target.value)
    setPhoto(e.target.files[0])
  }
  const handleForm = (e) => {
    e.preventDefault()
    if (type === "client") {
      let formData = new FormData()
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("userType", 2)
      formData.append("photo", photo);
      formData.append("companyName", companyName);
      formData.append("country", country);
      formData.append("address", address);
      formData.append("contact", contact);
      axios.post("http://localhost:5000/client/client/register", formData)
      .then((res)=>{
        if(res.data.success){
          toast.success(res.data.message)
          nav("/login")
        }
        else{
          toast.error(res.data.message)
        }
      })
      .catch((err)=>{
        toast.error(err.message)
      })
    }
    else if (type === "developer") {
      let formData = new FormData()
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("userType", 3);
      formData.append("photo", photo);
      formData.append("contact", contact);
      const tech=techId.map((ele)=>(ele.value))
      tech.forEach((id)=>{
        formData.append("technologyId",id)
      })
            
      
      axios.post("http://localhost:5000/dev/dev/register", formData)
      .then((res)=>{
        if(res.data.success){
          toast.success(res.data.message)
          nav("/login")
        }
        else{
          toast.error(res.data.message)
        }
      })
      .catch((err)=>{
        toast.error(err.message)
      })
    }
    
  }

  return (
    <div className="back">
      <div className={`full $ {type==="client" || type==="developer" ? "top-align":"center-align"}`}>
        <div className="container main">
          <div className="left"></div>
          <div className="right">
            <h2>Registration</h2>
            <form className="forms" onSubmit={handleForm}>
              <div className="form-floating">
                <input type="text" required="" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter your name" className="form-control" id="name" />
                <label htmlFor="name">Name: </label>
              </div>
              <div className="form-floating">
                <input type="email" pattern="/^[a-zA-Z0-9/_/./-]+/@+[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/" required="" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email" className="form-control" id="email" />
                <label htmlFor="email">Email: </label>
              </div>
              <div className="form-floating">
                <input type="password" minLength={2} required="" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password" className="form-control" id="password" />
                <label htmlFor="password">Password: </label>
              </div>
              <div className="form-floating">
                <select value={type} required="" onChange={handleType} className="form-control mt-2" id="userType" style={{ backgroundColor: "white" }}>
                  <option value="" disabled>--Please select--</option>
                  <option value="client">Client</option>
                  <option value="developer">Developer</option>
                </select>
                <label htmlFor="userType">UserType:</label>
              </div>
              {type === "client" && (
                <div>
                  <div className="form-floating">
                    <input type="file" value={photoName} onChange={changePhoto} placeholder="Upload image" className="form-control" id="image" />
                    <label htmlFor="image">Upload image: </label>
                  </div>
                  <div className="form-floating">
                    <input type="text" required="" value={companyName} onChange={(e) => { setCompanyName(e.target.value) }} placeholder="Company Name" className="form-control" id="name" />
                    <label htmlFor="name">Company Name: </label>
                  </div>
                  <div className="form-floating">
                    <input type="tel" required="" value={contact} onChange={(e) => { setContact(e.target.value) }} placeholder="Enter your contact number" className="form-control" id="contact" />
                    <label htmlFor="contact">Contact: </label>
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
                    <input type="text" required="" value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder="Enter your address" className="form-control" id="address" />
                    <label htmlFor="address">Address: </label>
                  </div>
                </div>
              )}
              {type === "developer" && (
                <div>
                  <div className="form-floating">
                    <input type="file" value={photoName} onChange={changePhoto} placeholder="Upload image" className="form-control" id="image" />
                    <label htmlFor="image">Upload image: </label>
                  </div>
                  <div className="form-floating">
                    <Select
                      isMulti
                      options={techOptions}         // populated from backend
                      value={techId}
                      onChange={(selectedOptions)=>{
                              setTechId(selectedOptions)
                      }}
                      placeholder="Select technologies..."
                      
                      />
                      
                </div>
                  <div className="form-floating">
                    <input type="tel" required="" value={contact} onChange={(e) => { setContact(e.target.value) }} placeholder="Enter your contact number" className="form-control" id="contact" />
                    <label htmlFor="contact">Contact: </label>
                  </div>

                </div>
              )}
              <div className="button-container">
                <span className="signin-link">
                  Already have an account? <Link to="/login">Log in</Link>
                </span>
                <button className="next" type="submit">Next</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
