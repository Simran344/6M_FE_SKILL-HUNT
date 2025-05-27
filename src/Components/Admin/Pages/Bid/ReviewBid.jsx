
import PageTitle from '../../Layout/PageTitle';
import ApiServices from '../../../ApiServices/ApiServices';
import { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import Swal from "sweetalert2";

export default function ReviewBid() {
    const [bid, setBid] = useState([])
    const [filter, setFilter] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
   
   
    const LIMIT = 4
    useEffect(() => {
        fetchBid()
    },[currentPage])
    useEffect(()=>{
        setCurrentPage(1)
    },[filter])
    const fetchBid = () => {
        let formData = { limit: LIMIT, currentPage: currentPage }
        if (filter) {
            formData.status = filter
        }
        ApiServices.bidAll(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    setBid(res.data.bidData)
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
            <PageTitle>Bids</PageTitle>


            <div className="container my-3">
                <div className="row justify-content-between my-2">
                    <div className="col-2 ms-5 mx-auto" style={{ paddingLeft: "70px" }}>
                        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                            <option value="">All</option>
                            <option value={2}>Accepted</option>
                            <option value={3}>Rejected</option>
                        </select>
                    </div>
                    
                </div>
                <div className="row justify-content-center gy-4">
                    <div className="col-md-10 table-responsive">
                        <table className="table table-hover  table-striped">
                            <thead className="table-primary">
                                <tr>
                                    <th>S.NO</th>
                                    <th>Name</th>
                                    <th>Bid Amount</th>
                                    <th>Duration</th>
                                    <th>Project Name</th>
                                    <th>Status</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {bid?.map((ele, index) => {
                                    return (
                                        <>
                                            <tr key={index}>
                                                <td>{((currentPage - 1) * LIMIT) + index + 1}</td>
                                                <td>
                                                            {ele.addedById.name}
                                                        </td>
                                                        <td >{ele.bidAmount}</td>
                                                        <td>

                                                            {ele.duration}

                                                        </td>
                                                        <td>
                                                            {ele.projectId.title}
                                                        </td>
                                                        <td style={{color:ele.status==2?"green":"red"}}>
                                                            {ele.status==2?"accepted":"Rejected"}
                                                        </td>
                                                        </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                            <tfoot className="foot">
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