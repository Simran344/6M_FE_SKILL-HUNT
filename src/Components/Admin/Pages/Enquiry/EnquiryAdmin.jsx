
import PageTitle from '../../Layout/PageTitle';
import ApiServices from '../../../ApiServices/ApiServices';
import { useEffect,useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import { toast } from 'react-toastify';

export default function EnquiryAdmin(){
    const[enquiry,setEnquiry]=useState([])
    const[currentPage,setCurrentPage]=useState(1)
    const[totalPages,setTotalPages]=useState()
    const LIMIT=4
    useEffect(()=>{
        fetchEnquiry()
    },[currentPage])
    const fetchEnquiry=()=>{
        let formData={limit:LIMIT,currentPage:currentPage}
       
        ApiServices.enquiryAll(formData)
        .then((res)=>{
            if(res.data.success){
                toast.success(res.data.message)
                setEnquiry(res.data.data)
                setTotalPages(res.data.total)
            }
            else{
                toast.error(res.data.message)
            }
        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }
    

    return(
        <>
        <PageTitle>Enquiry</PageTitle>
        <div className="container my-3">
                
                <div className="row justify-content-center gy-4">
                    <div className="col-md-10 table-responsive">
                        <table className="table table-striped">
                            <thead className="table-primary">
                                <tr>
                                    <th>S.NO</th>
                                    <th>Document</th>
                                    <th>Issue</th>
                                    <th>Message</th>
                                </tr>
                            </thead>  
                            <tbody>
                               {enquiry.map((ele,index)=>{
                                return(
                                    <>
                                   <tr key={index}>
                                    <td>{((currentPage-1)*LIMIT)+index+1}</td>
                                       <td>
                                        <img src={ele.attachFile} style={{width:"100px",height:"100px"}}/>
                                       </td>
                                       <td >{ele.issue}</td>
                                       <td>{ele.message}</td>
                                   </tr>
                                   </>
                                )
                               })} 
                               </tbody>
                               <tfoot>
                                <tr>
                                    <td colSpan={4}>
                                        <ResponsivePagination
                                         current={currentPage}
                                         total={Math.ceil(totalPages/LIMIT)}
                                         onPageChange={setCurrentPage}/>
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