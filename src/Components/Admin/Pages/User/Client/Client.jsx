import './styles.css'
import PageTitle from '../../../Layout/PageTitle';
import ApiServices from '../../../../ApiServices/ApiServices';
import { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import { PulseLoader } from "react-spinners"
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { showLoader, hideLoader } from "../../../redux/action/Loaderaction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';
import Switch from "react-switch"
export default function Client() {
    const [client, setClient] = useState([])
    const [filter, setFilter] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const load = useSelector((state) => state.loaderReducer.load)
    const dispatch = useDispatch()
    const LIMIT = 3
    useEffect(() => {
        fetchClient()
    }, [currentPage])
    useEffect(() => {
        setCurrentPage(1)
        // fetchClient()
    }, [filter])
    const fetchClient = () => {
        dispatch(showLoader())
        let formData = { limit: LIMIT, currentPage: currentPage }
        if (filter) {
            formData.status = filter
        }
        ApiServices.clientAll(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    setClient(res.data.data)
                    setTotalPages(res.data.total)
                }
                else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error(err.message)
            })
        setTimeout(() => {
            dispatch(hideLoader())
        }, 1000)
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


                ApiServices.clientStatus(formData)
                    .then((res) => {
                        if (res.data.success) {
                            toast.success(res.data.message)
                            fetchClient()
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
    return (
        <>
            <PageTitle>Client</PageTitle>
            <div className="loader-wrapper">
                <PulseLoader color="rgba(0,123,255,0.8)" loading={load}></PulseLoader></div>
            <div className={`container my-3 ${load == true && "d-none"}`}>
                <div className="row justify-content-between my-2">
                    <div className="col-2 ms-5" style={{paddingLeft:"70px"}}>
                        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                            <option value="">All</option>
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                        </select>
                    </div>
                    <div className="col-2 btn btn-outline mt-1 me-5">
                        <Link to="/register">
                            Add+
                        </Link>
                    </div>
                </div>
                <div className="row justify-content-center gy-4">
                    <div className="col-md-10 table-responsive">
                        <table className="table table-striped">
                            <thead className="table-primary">
                                <tr>
                                    <th>S.NO</th>
                                    <th>PIC</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {client.map((ele, index) => {
                                    return (
                                        <>
                                            <tr key={index}>
                                                <td>{((currentPage - 1) * LIMIT) + index + 1}</td>
                                                <td>
                                                    <img src={ele.photo} style={{ width: "100px", height: "100px" }} />
                                                </td>
                                                <td >{ele.userId.name}</td>
                                                <td>{ele.address}</td>
                                                <td>
                                                    <Link to={"/admin/client/single/" + ele.userId._id} className="btn btn-info ms-2">
                                                        <i className="bi bi-eye"></i>
                                                    </Link>
                                                    <button className="btn">
                                                        <Switch checked={ele.status} onChange={() => { setStatus(ele.userId, ele.status) }} />
                                                    </button>

                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={6}>
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
        </>
    )
}
