import './Tech.css'
import PageTitle from '../../Layouts/PageTitle';
import ApiServices from '../../../ApiServices/ApiServices';
import { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import { toast } from 'react-toastify';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';
export default function Tech() {
    const [tech, setTechnology] = useState([])
    const [filter, setFilter] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [tech1, setTech] = useState({})
    const [isOpen, setIsOpen] = useState(false)
    const LIMIT = 4
    useEffect(() => {
        fetchTechnology()
    }, [currentPage])
    useEffect(() => {
        setCurrentPage(1)
    }, [filter])
    const fetchTechnology = () => {
        let formData = { limit: LIMIT, currentPage: currentPage,status:true }
       
        ApiServices.techAll(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    setTechnology(res.data.data)
                    setTotalPages(res.data.total)
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
        <>
            <PageTitle>Technologies</PageTitle>

                            <div className="container-fluid">
                                <div className="row">
                           
                {tech?.map((ele, index) => {
                    return (
                        <> 
                                 <div className="col md-6"> 
                                
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={ele.thumbnail} className="card-img-top img-fluid rounded-circle mx-auto" alt="..." style={{height:"200px", width:"200px"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{ele.name}</h5>
                                   
                                   <Link className="btn btn-info" to={"/developer/projects/"+ele._id}>Show Projects
                                   </Link>
                                </div>
                            </div>
                            </div>
                            
                            
                        </>
                    )
                })}


            </div>
            </div>
        
        </>
    )
}