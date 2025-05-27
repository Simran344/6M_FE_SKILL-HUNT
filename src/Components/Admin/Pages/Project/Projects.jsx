
import PageTitle from '../../Layout/PageTitle';
import ApiServices from '../../../ApiServices/ApiServices';
import { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Switch from "react-switch"
import Swal from "sweetalert2";
import Modal from "react-modal"
export default function Manage() {
    const [project, setProject] = useState([])
    const [filter, setFilter] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [proj1, setProj] = useState({})
    const [isOpen, setIsOpen] = useState(false)
    const LIMIT = 3
    useEffect(() => {
        fetchProject()
    },[currentPage])
    useEffect(()=>{
        setCurrentPage(1)
    },[filter])
    const fetchProject = () => {
        let formData = { limit: LIMIT, currentPage: currentPage }
        if (filter) {
            formData.status = filter
        }
        ApiServices.projAll(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    setProject(res.data.projectData)
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
    const customStyles = {
        content: {
            top: '55%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            minheight: '38%',
        }
    }
    
    function singles(id) {
        let formData = { _id: id }
        ApiServices.projSingle(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    setProj(res.data.data)
                    setIsOpen(true)

                }
                else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }
    function setCancel() {
        setIsOpen(false)
    }

    return (
        <>
            <PageTitle>Show Projects</PageTitle>


            <div className="container my-3">
                <div className="row justify-content-between my-2">
                    <div className="col-2 ms-5 mx-auto" style={{ paddingLeft: "70px" }}>
                        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                            <option value="">All</option>
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                        </select>
                    </div>
                    
                </div>
                <div className={`row justify-content-center gy-4' ${isOpen==true && "d-none"}`}>
                    <div className="col-md-10 table-responsive">
                        <table className="table table-hover  table-striped">
                            <thead className={`table-primary ${isOpen==true  && "d-none"}`}>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Project Name</th>
                                    <th>Client Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {project?.map((ele, index) => {
                                    return (
                                        <>
                                            <tr key={index}>
                                                <td>{((currentPage - 1) * LIMIT) + index + 1}</td>
                                                
                                                <td >{ele.title}</td>
                                                <td>{ele.addedById.name}</td>
                                                <td>
                                                   
                                                    <button className="btn btn-info ms-2" onClick={() => { singles(ele._id) }}>
                                                        <i className="bi  bi-eye"></i>
                                                    </button>
                                                    <button className="btn">
                                                        <Switch checked={ele.status} />
                                                    </button>

                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                            <tfoot className={`foot ${isOpen == true && "d-none"}`}>
                                <tr>
                                    <td colSpan={4}>
                                        <ResponsivePagination
                                            current={currentPage}
                                            total={Math.ceil(totalPages / LIMIT)}
                                            onPageChange={setCurrentPage} />
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} style={customStyles}>

                    <div className="container-fluid mx-auto">
       
                    <div className="row justify-content-center">
                        <div className="col md-6 mx-auto">
                            <span>Attachments:</span>
                            <span style={{color:"blue"}}>{proj1?.attachments}</span>
                            <br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col md-6">
                            <br/>
                            <span>Client Name:</span>
                            {proj1?.addedById?.name}
                            <br/>
                            <span>Project Name:</span>
                            {proj1?.title}
                            <br/>
                            <span>Description:</span>
                            {proj1?.description}
                            <br/>
                            <span>Budget:</span>
                            {proj1?.budget}
                            <br/>
                            <span>Duration:</span>
                            {proj1?.duration}
                        </div>
                    </div>
                    </div>
                <br/>
                <button className="btn btn-info" style={{ marginLeft: "250px" }} onClick={() => {
                    setCancel()
                }}>Cancel
                </button>
                
            </Modal>
        </>
    )
}