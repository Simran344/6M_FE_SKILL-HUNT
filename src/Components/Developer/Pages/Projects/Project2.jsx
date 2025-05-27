import { useState,useEffect } from "react";
import ApiServices from "../../../ApiServices/ApiServices";
import { toast } from "react-toastify";
import "./Project.css"
import { Link, useParams } from "react-router-dom";
export default function Project() {
       const[proj,setProj]=useState([])
       const{techId}=useParams() 
       useEffect(()=>{
           fetchProject()
       },[])
    
        useEffect(() => {
  if (proj.length > 0) {
    if(!techId){
    $('.project-carousel').owlCarousel('destroy');

    $('.project-carousel').owlCarousel({
      loop: proj.length > 3,
      margin: 20,
      nav: true,
      dots: true,
      responsive: {
        0: { items: 1 },
        768: { items: Math.min(proj.length, 2) },
        1024: { items: Math.min(proj.length, 3) }
      }
    });}else{
        $('.project-carousel').owlCarousel('destroy');

    $('.project-carousel').owlCarousel({
      loop: proj.length > 3,
      margin: 20,
      nav: true,
      dots: true,
      responsive: {
        0: { items: 1 },
        768: { items: Math.min(proj.length, 2) }
      }
    })
    }
  }
}, [proj, techId]);

  
       const fetchProject=()=>{
             let formData = {}
              if(!!techId){
               formData.technologyId=techId
              }
                     
                     ApiServices.projAll(formData)
                         .then((res) => {
                             if (res.data.success) {
                                 toast.success(res.data.message)
                                 setProj(res.data.projectData)
                                 
                             }
                             else {
                                 toast.error(res.data.message)
                             }
                         })
                         .catch((err) => {
                             toast.error(err.message)
                         })
       }
    
    return (
        <main className="main">
            <div className="container-fluid project pt-5">
                <div className="container pt-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 800 }}>
                        <h4 className="text-primary">Our Projects</h4>
                        <h1 className="display-4">Explore Our Latest Projects</h1>
                    </div>

                    <div className="project-carousel owl-carousel wow fadeInUp" data-wow-delay="0.1s">
                        {proj.map((el, index) => (
                            <div key={index} className="project-item h-100 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="project-img">
                                    <img src={el?.attachments} className="img-fluid  rounded" alt="Project Logo" style={{aspectRatio:"16/9", height:"450px", width:"100%", objectFit:"cover"}}/>
                                </div>
                                <div className="project-content bg-light rounded p-4">
                                    <div className="project-content-inner">
                                    <div className="project-icon mb-3">
                                        <i className={el?.i}/>
                                    </div>
                                        <p className=" fs-5 mb-3 h4">{el?.title} (Client : {el?.addedById?.name}) </p>
                                        
                                        <p><strong>Duration:</strong> {el?.duration}</p>
                                        <p><strong>Bid Amount:</strong> {el?.budget}</p>
                                        <p><strong>Deadline:</strong>{el.createdAt.substr(0,10).replace("3",index+1)}</p>
                                        <Link className="btn btn-info" to={"/developer/addBid/"+el._id+"/"+el.addedById._id}>Bid</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
               
            </div>
        </main>
    );
}