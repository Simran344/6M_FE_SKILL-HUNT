import PageTitle from '../../Layouts/PageTitle';
import ApiServices from '../../../ApiServices/ApiServices';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
export default function RejectBid() {
    const [bid, setBid] = useState([])
   
    const LIMIT = 4
    useEffect(() => {
        fetchBid()
    },)

    const fetchBid = () => {
        let status = 3
         let addedById=sessionStorage.getItem("userId")
        let formData = { status: status, limit: LIMIT, currentPage: currentPage,addedById:addedById }

        ApiServices.bidAll(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    setBid(res.data.bidData)
                   
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
            <PageTitle>Rejected Bids</PageTitle>

             <div className="container my-3 mx-auto justify-content-center">

                <div className="row justify-content-center gy-4 history-container ">
                        <div className="col"> 
                                
                            <div className="card mx-auto justify-content-center" style={{ width: "28rem" }}>
                                {bid.length>0?
                                bid?.map((ele, index) => (
                                    <>
                                <img src={ele?.projectId?.attachments} className="card-img-top img-fluid rounded-circle mx-auto" alt="..." style={{height:"200px", width:"200px"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Client Name: {ele?.clientId?.name}</h5>
                                    <h5 className="card-title">Project: {ele?.projectId?.title}</h5>
                                    <h5 className="card-title">Budget: {ele?.bidAmount}</h5>
                                    <h5 className="card-title">Duration: {ele?.duration}</h5>
                                   
                                   
                                    
                                </div>
                                </>
                                ))
                                : <div style={{color:"skyblue", textAlign:"center", fontSize:"50px"}}>"No Bid Rejected"</div>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            

        </>
    )
}                          