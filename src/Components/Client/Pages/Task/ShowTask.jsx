import PageTitle from '../../Layout/PageTitle';
import ApiServices from '../../../ApiServices/ApiServices';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./App.css"
export default function ShowTask() {
    const [task, setTask] = useState([])
    const{projectId,bidAmount,bidId}=useParams()
    useEffect(() => {
        fetchTask()
    }, [projectId])

    const fetchTask = () => {
       
        let formData = {projectId:projectId }

        ApiServices.uploadAll(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    setTask(res.data.data)
                   
                }
                else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }
    function paymenthandler(_id){
        console.log("_id is",_id);
        let formData = {
            _id:_id
        }
        ApiServices.bidPay(formData)
        .then((res)=>{
                console.log("res is ",res);
                var order = res.data.order
                const options = {
                    key: "rzp_test_81m41n13O8OvjC",
                    amount: order.bidAmount,
                    currency: "INR",
                    name: "Acme Corp",
                    description: "Test Transaction",
                    image: "https://example.com/your_logo",
                    order_id: order.id,
        
        
                    handler: function (response) {
                      console.log("✅ Payment Success:", response);
                      toast.success("Payment Successful!");
                      // setLoading(false);
                      // fetchRequests();
                    },
                    prefill: {
                      name: "Simran",
                      email: "simran@gmail.com",
                      contact: "1234567890"
                    },
                    theme: {
                      color: "#3399cc"
                    }
                  };
                  const rzp1 = new window.Razorpay(options);
                  rzp1.on("payment.failed", function (response) {
                    // setLoading(false);
                    toast.error(response.error.description || "Payment failed");
                  });
        
        
                  rzp1.open();
        
                
        })
        .catch((err)=>{
                    console.log("err",err);
                    
        })
        
    }
    return (
        <>
            <PageTitle>Upload Project</PageTitle>


            <div className=" my-3">

                <div className="row justify-content-center gy-4 history m-5">
                    <div className="col table-responsive">
                        <table className="table table-hover  table-striped table">
                            <thead className="table-primary">
                                <tr>
                                    <th>S.NO</th>
                                     <th>Project Name</th>
                                    <th>Client Name</th>
                                    <th>Developer Name</th>
                                    <th>Attachments</th>
                                    <th>Bid Amount</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {task?.map((ele, index) => {
                                    return (
                                        <>
                                            <tr key={index}>
                                                <td>{ index + 1}</td>
                                                 <td>
                                                    {ele.projectId.title}
                                                </td>
                                                <td>
                                                    {ele.clientId.name}
                                                </td>
                                                <td>
                                                    {ele.addedById.name}
                                                </td>
                                                <td style={{color:"blue"}}>{ele.attachments}</td>
                                                <td>

                                                    {bidAmount}

                                                </td>
                                               
                                                <td>
                                                    <div className="btns" style={{ display: "flex" }}>
                                                        <button className="btn btn-outline-dark me-3" onClick={()=>{paymenthandler(bidId)}}>Pay</button>
                                                       <Link className="btn btn-info" to={"/client/ratings/"+ele.addedById._id+"/"+ele.clientId._id+"/"+ele.projectId._id}>Add Ratings</Link>
                                                       
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                           
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}