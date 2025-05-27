import './Bid.css'
import PageTitle from '../../Layout/PageTitle';
import ApiServices from '../../../ApiServices/ApiServices';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
export default function ViewBidding() {
    const [bid, setBid] = useState([])
    const { projectId } = useParams()
    const [activeId, setActiveId] = useState(null)
    useEffect(() => {
        fetchBid()
    }, [projectId])

    const fetchBid = () => {
        let formData = { projectId: projectId }

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
    function setStatus(id, projectId) {
        Swal.fire({
            title: `You are about to accept the bid`,
            text: "You wont be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes accept It!!"
        }).then((result) => {
            if (result.isConfirmed) {

                let status = 2

                let formData = { _id: id, projectId: projectId, status: status }
                ApiServices.bidStatus(formData)
                    .then((res) => {
                        if (res.data.success) {
                            toast.success(res.data.message)
                            fetchBid()
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
    const isBidAccepted = bid.some(item => item.status === 2);

    return (
        <>
            <PageTitle>Bids</PageTitle>


            <div className="container my-3">

                <div className="row justify-content-center gy-4 history">
                    <div className="col-md-10 table-responsive">
                        <table className="table table-hover  table-striped table  custom-table">
                            <thead className="table-primary">
                                <tr>
                                    <th>S.NO</th>
                                    <th>Name</th>
                                    <th>Bid Amount</th>
                                    <th>Duration</th>
                                    <th>Details</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bid?.map((ele, index) => {
                                    return (
                                        <>
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    {ele.addedById.name}
                                                </td>
                                                <td >{ele.bidAmount}</td>
                                                <td>

                                                    {ele.duration}

                                                </td>
                                                <td>
                                                    {ele.details}
                                                </td>
                                                    
                                                        <td>
                                                            {(ele.status === 2 || (!isBidAccepted && (ele.status === 1 || ele.status === 3))) ? (
                                                                <button className="btn">
                                                                    <Switch
                                                                        checked={ele.status === 2}
                                                                        onChange={() => setStatus(ele._id, ele.projectId)}
                                                                    />
                                                                </button>
                                                            ) : (
                                                                <p>...</p> // You can replace this with something like "Not available"
                                                            )}
                                                        </td>






                                                        <td>
                                                            <div className="button">
                                                                {Number(ele.status) === 2 && ele.projectId && ele.projectId._id ? (
                                                                    <Link
                                                                        className="btn btn-primary btn-sm"
                                                                        to={`/client/upload/${ele.projectId._id}/${ele.bidAmount}/${ele._id}`}
                                                                    >
                                                                        Show Tasks
                                                                    </Link>
                                                                ) : (
                                                                    <p>N/A</p>
                                                                )}
                                                            </div>
                                                        </td>


                                                    </tr>
                                                </>
                                                )
                                })}
                                            </tbody>
                                        </table >
                    </div>
                    </div>
                </div>

            </>
            )
}