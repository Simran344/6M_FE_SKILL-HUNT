import PageTitle from '../../Layout/PageTitle';
import ApiServices from '../../../ApiServices/ApiServices';
import { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import Swal from "sweetalert2";

export default function ViewRating() {
    const [rating, setRating] = useState([])
    
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
   
   
    const LIMIT = 4
    useEffect(() => {
        fetchRating()
    },[currentPage])
    
    const fetchRating = () => {
        let formData = { limit: LIMIT, currentPage: currentPage }
        
        ApiServices.ratingAll(formData)
            .then((res) => {
                console.log("API response:", res.data); 
                if (res?.data?.success) {
                    toast.success(res.data.message)
                    setRating(res.data.ratingData)
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
   
    
    
   console.log(rating)
    return (
        <>
            <PageTitle>Ratings</PageTitle>


            <div className="container my-3">
                
                <div className="row justify-content-center gy-4">
                    <div className="col-md-10 table-responsive">
                        <table className="table table-hover  table-striped">
                            <thead className="table-primary">
                                <tr>
                                    <th>S.NO</th>
                                    <th>Developer  Name</th>
                                    <th>Ratings</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {rating?.map((ele, index) => {
                                    return (
                                        <>
                                            <tr key={index}>
                                                <td>{((currentPage - 1) * LIMIT) + index + 1}</td>
                                                <td>
                                                            {ele?.developerId?.userId.name}
                                                        </td>
                                                        <td>{ele.developerId.ratings}</td>

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