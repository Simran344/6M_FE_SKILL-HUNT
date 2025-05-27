import Modal from "react-modal";
import { useState } from "react";
import { toast } from "react-toastify";

export default function DevBidding(){
    const[isOpen1,setSt1]=useState(false)
   
    const customStyles = {
      content: {
        top: '55%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minheight: '38%',
     
        
  
  
  
  
      }}
      function model1(){
        setSt1(true)
      }
      function setBtn(){
        setSt1(false)
        toast.success(("Send successfully"),{
          position:"bottom-right"
        })
      }
    return(
        <>
            <div className="container-fluid blog py-5">
                <div className="container py-5">
                  <div className="row g-4 justify-content-center">
                    <div
                      className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div
                        className="blog-item bg-light rounded p-4"
                        style={{ backgroundImage: "url(/assets/img/bg.png)" }}
                      >
                        <div className="mb-4">
                          <h4 className="text-primary mb-2">Skill Hunt</h4>
                          <div className="d-flex justify-content-between">
                            <p className="mb-0">
                              <span className="text-dark fw-bold">Submission</span> Apr 14, 2025
                            </p>
                            <p className="mb-0">
                              <span className="text-dark fw-bold">Client</span> Mark D. Brock
                            </p>
                          </div>
                        </div>
                        <div className="project-img">
                          <img
                            src="/assets/img/skill.png"
                            className="img-fluid w-100 rounded"
                            alt="Image"
                            style={{aspectRatio:"16/9", height:"250px", width:"100%", objectFit:"cover"}}
                          />
                          <div className="blog-plus-icon">
                            <a
                              href="/assets/img/skill.png" target="_self"
                              data-lightbox="skill"
                              className="btn btn-primary btn-md-square rounded-pill"
                            >
                              <i className="fas fa-plus fa-1x" />
                            </a>
                          </div>
                        </div>
                        <div className="my-4">
                          <span>
                            Create website where client and developer can interact through real time chat.
                          </span>
                          <h5 className="mt-2">Amount: Rs 2000</h5>
                        </div>
                        <button className="btn">
                          <a
                              className="btn btn-primary btn-md-square rounded-pill"
                           >
                              <i className="fas fa-plus fa-1x" onClick={()=>{model1()}} />
                            </a>
                          </button>
                        <button className="btn btn-primary rounded-pill py-2 px-4 me-2" onClick={()=>{toast.success(("Bid Accepted"),{position:"bottom-right"})}}>
                          Accept
                        </button>
                        <button className="btn btn-primary rounded-pill py-2 px-4" onClick={()=>{toast.error(("Bid Rejected"),{position:"bottom-right"})}}>
                          Reject
                        </button>
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div
                        className="blog-item bg-light rounded p-4"
                        style={{ backgroundImage: "url(/assets/img/bg.png)" }}
                      >
                        <div className="mb-4">
                          <h4 className="text-primary mb-2">Fitness</h4>
                          <div className="d-flex justify-content-between">
                            <p className="mb-0">
                              <span className="text-dark fw-bold">Submission</span> Apr 10, 2025
                            </p>
                            <p className="mb-0">
                              <span className="text-dark fw-bold">Client</span> Mark D. Henry
                            </p>
                          </div>
                        </div>
                        <div className="project-img">
                          <img
                            src="/assets/img/gym.png"
                            className="img-fluid w-100 rounded"
                            alt="Image"
                            style={{aspectRatio:"16/9", height:"250px", width:"100%", objectFit:"cover"}}
                          />
                          <div className="blog-plus-icon">
                          <a
                              href="/assets/img/gym.png" target="_self"
                              data-lightbox="gym"
                              className="btn btn-primary btn-md-square rounded-pill"
                            >
                              <i className="fas fa-plus fa-1x" />
                            </a>
                          </div>
                        </div>
                        <div className="my-4">
                          <span>
                            Create website where all details & users can join gym named fitness .
                          </span>
                          <h5 className="mt-2">Amount: Rs 2000</h5>
                        </div>
                        <button className="btn">
                          <a
                              className="btn btn-primary btn-md-square rounded-pill"
                           >
                              <i className="fas fa-plus fa-1x" onClick={()=>{setSt1(true)}}/>
                            </a>
                          </button>
                        <button className="btn btn-primary rounded-pill py-2 px-4 me-2" onClick={()=>{toast.success(("Bid Accepted"),{position:"bottom-right"})}}>
                          Accept
                        </button>
                        <button className="btn btn-primary rounded-pill py-2 px-4" onClick={()=>{toast.error(("Bid Rejected"),{position:"bottom-right"})}}>
                          Reject
                        </button>
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div
                        className="blog-item bg-light rounded p-4"
                        style={{ backgroundImage: "url(/assets/img/bg.png)" }}
                      >
                        <div className="mb-4">
                          <h4 className="text-primary mb-2">Travel Guide</h4>
                          <div className="d-flex justify-content-between">
                            <p className="mb-0">
                              <span className="text-dark fw-bold">Submission</span> Apr 15, 2025
                            </p>
                            <p className="mb-0">
                              <span className="text-dark fw-bold">Client</span> Mark Liana
                            </p>
                          </div>
                        </div>
                        <div className="project-img">
                          <img
                            src="/assets/img/travel.png"
                            className="img-fluid w-100 rounded"
                            alt="Image"
                            style={{aspectRatio:"16/9", height:"250px", width:"100%", objectFit:"cover"}}
                          />
                          <div className="blog-plus-icon">
                          <a
                              href="/assets/img/travel.png" target="_self"
                              data-lightbox="travel"
                              className="btn btn-primary btn-md-square rounded-pill"
                            >
                              <i className="fas fa-plus fa-1x" />
                            </a>
                          </div>
                        </div>
                        <div className="my-4">
                          <span>
                            Create website where all details of places are given.
                          </span>
                          <h5 className="mt-2">Amount: Rs 1500</h5>
                        </div>
                        <button className="btn">
                          <a
                              className="btn btn-primary btn-md-square rounded-pill"
                           >
                              <i className="fas fa-plus fa-1x" onClick={()=>setSt1(true)}/>
                            </a>
                          </button>
                        <button className="btn btn-primary rounded-pill py-2 px-4 me-2" onClick={()=>{toast.success(("Bid Accepted"),{position:"bottom-right"})}}>
                          Accept
                        </button>
                        <button className="btn btn-primary rounded-pill py-2 px-4" onClick={()=>{toast.error(("Bid Rejected"),{position:"bottom-right"})}}>
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <Modal isOpen={isOpen1} style={customStyles} backdrop={false}>
                <button onClick={() => {setSt1(false)}} className="btn-close position-absolute top-0 end-0"></button>
                  <div className="container-fluid">
                    
                        <div className="form-group">
                        <label>Title:</label>
                        <input type="text" placeholder="Enter title of project" className="me-5"/>
                        </div>
                      
                     
                        <div className="form-group">
                            <label>Description:</label>
                             <textarea name="message" rows="5" cols="30" className="me-5" style={{marginRight:"80px"}}/>
                      </div>
                      
                       <div className="form-group">
                            <label>Amount</label>
                            <input type="number" placeholder="Enter amount" className="me-5"/>
                      </div>
                      
                     
                      <div className="form-group">
                            <label>Deadline:</label>
                            <input type="date"  placeholder="date" className="me-5"/>
                      </div>
                    
                  </div>
                  <button className="btn" style={{ backgroundColor: "rgb(25,31,52)", color: "white", marginLeft: "200px" }} onClick={() =>setBtn() }>Send</button>
                </Modal>
        </>
    )
}