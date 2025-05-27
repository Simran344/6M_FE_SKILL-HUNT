import './App.css'
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
    const [tech, setTechnology] = useState([])
    const [filter, setFilter] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [tech1, setTech] = useState({})
    const [isOpen, setIsOpen] = useState(false)
    const LIMIT = 2
    useEffect(() => {
        fetchTechnology()
    },[currentPage])
    useEffect(()=>{
        setCurrentPage(1)
    },[filter])
    const fetchTechnology = () => {
        let formData = { limit: LIMIT, currentPage: currentPage }
        if (filter) {
            formData.status = filter
        }
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
    function setStatus(techId, status) {

        Swal.fire({
            title: `You are about to ${status ? "disable" : "enable"} status`,
            text: "You wont be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes Update It!!"
        }).then((result) => {
            if (result.isConfirmed) {
                let formData = { _id: techId, status: !status }


                ApiServices.techStatus(formData)
                    .then((res) => {
                        if (res.data.success) {
                            toast.success(res.data.message)
                            fetchTechnology()
                        }
                        else {
                            toast.error(res.data.message)
                        }
                    })
                    .catch((err) => {
                        toast.error(err.message)
                    })
            }
        })
    }
    function singles(id) {
        let formData = { _id: id }
        ApiServices.techSingle(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    setTech(res.data.data)
                    setIsOpen(true)

                }
                else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error(err.messahe)
            })
    }
    function setCancel() {
        setIsOpen(false)
    }

    return (
        <>
            <PageTitle>Show Technologies</PageTitle>


            <div className="container my-3">
                <div className="row justify-content-between my-2">
                    <div className="col-2 ms-5 mx-auto" style={{ paddingLeft: "70px" }}>
                        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                            <option value="">All</option>
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                        </select>
                    </div>
                    <div className="col-2 btn btn-outline mt-1 me-5">
                        <Link to="/admin/add">
                            Add+
                        </Link>
                    </div>
                </div>
                <div className="row justify-content-center gy-4">
                    <div className="col-md-10 table-responsive">
                        <table className="table table-hover  table-striped">
                            <thead className={`table-primary ${isOpen==true  && "d-none"}`}>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Logo</th>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tech.map((ele, index) => {
                                    return (
                                        <>
                                            <tr key={index}>
                                                <td>{((currentPage - 1) * LIMIT) + index + 1}</td>
                                                <td>
                                                    <img src={ele.thumbnail} style={{ width: "100px", height: "100px" }} />
                                                </td>
                                                <td >{ele.name}</td>
                                                <td>
                                                    <Link to={"/admin/update/" + ele._id} className="btn btn-outline-success">
                                                        <i className="bi bi-pencil-square"></i>
                                                    </Link>
                                                    <button className="btn btn-info ms-2" onClick={() => { singles(ele._id) }}>
                                                        <i className="bi  bi-eye"></i>
                                                    </button>
                                                    <button className="btn">
                                                        <Switch checked={ele.status} onChange={() => { setStatus(ele._id, ele.status) }} />
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

                    <div className="container-fluid">
       
                    <div className="row justify-content-center">
                        <div className="col md-6 mx-auto">
                            <img src={tech1.thumbnail} style={{ height: "250px", width: "200px" }} />
                            <br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col md-6">
                            <br/>
                            <span>TechnologyName:</span>
                            {tech1.name}
                        </div>
                    </div>
                    </div>
                <br/>
                <button className="btn btn-info" style={{ marginLeft: "70px" }} onClick={() => {
                    setCancel()
                }}>Cancel
                </button>
                
            </Modal>
        </>
    )
}