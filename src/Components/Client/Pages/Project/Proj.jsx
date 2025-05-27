import React, { useState, useEffect } from 'react';
import './Project.css';
import PageTitle from '../../Layout/PageTitle';
import ApiServices from '../../../ApiServices/ApiServices';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
const Proj = () => {
  const [projects, setProjects] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const LIMIT = 4;

  useEffect(() => {
    fetchProjects();
  }, [currentPage]);

  const fetchProjects = () => {
    let addedById=sessionStorage.getItem("userId")
    let formData={addedById:addedById}
    ApiServices.projAll(formData)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          setProjects(res.data.projectData || []);
          setTotal(res.data.total || 0);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <> 
      <PageTitle>Projects</PageTitle>
      
     <div className="accordion container mt-5 mb-5" id="accordionExample">
      {projects.map((el, index) => (
        <div className="accordion-item">
          <h2 className="accordion-header">
            <a
              className="accordion-button collapsed p-0"
            
              data-bs-toggle="collapse"
              data-bs-target={`#collpase${index}`}
              aria-expanded="false"
              aria-controls={`collpase${index}`}
            >
              <img
                    src={el.attachments || ''}
                    alt="Logo"
                    className="logo img-fluid"
                    style={{ height: "100px", width: "100px" }}
                  />
                  <h3>{el.title}</h3>
                  <h3 className="time">{el.createdAt.substr(0,10).replace("3",index+1)}</h3>
            </a>
          </h2>
          <div
        id={`collpase${index}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
              <div className="row align-items-center">
                <div className="col">
                  <p><strong>Title:</strong> {el.title}</p>
                   <p><strong>Client Name: </strong>
                            {el?.addedById?.name}</p>
                            <p><strong>Description: </strong>
                            {el?.description}</p>
                            <p><strong>Budget: </strong>
                            {el?.budget}</p>
                            <p><strong>Duration: </strong>
                            {el?.duration}</p>
                            <span><strong>Attachments: </strong></span>
                            <span style={{color:"blue"}}>{el.attachments}</span>
                
                </div>
              </div>
              <div className="row align-items-center mt-4">
                       <div className="col">
                        <Link className="btn btn-success me-3" to={"/client/proj/"+el._id}>Update
                        </Link>
                        <button className="btn btn-outline-danger gap-4" >Status</button>
                        <Link to={"/client/viewBid/"+el._id} className="btn btn-info ms-3">View Bids</Link>
                        
                      </div>
                      </div>
        </div>
      </div>
    </div>
      ))}
    </div>
            
     
    </>
  );
};

export default Proj;
