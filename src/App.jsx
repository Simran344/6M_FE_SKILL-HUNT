
import './App.css'
import About from './Components/Developer/Pages/Others/About'
import Contact from './Components/Developer/Pages/Others/Contact'

import{BrowserRouter, Route, Routes} from "react-router-dom"

import Services from './Components/Developer/Pages/Others/Services'
import Layout from './Components/Developer/Layouts/Layout'
import Logout from './Components/Authentication/Logout'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Log from './Components/Authentication/Log'
import Dashboard from "./Components/Admin/Pages/Dashboard/Dashboard"
import Master from "./Components/Admin/Layout/Master"
import Client from "./Components/Admin/Pages/User/Client/Client"
import Singles from './Components/Admin/Pages/User/Client/Singles'
import Dev from "./Components/Admin/Pages/User/Developer/Dev";
import Singl from './Components/Admin/Pages/User/Developer/Singl'
import Projects from "./Components/Admin/Pages/Project/Projects";
import ReviewBid from './Components/Admin/Pages/Bid/ReviewBid'
/*import Bid from "./Components/Admin/Pages/Bidding/Bid"*/
import Add from './Components/Admin/Pages/Technology/Add'
import Manage from './Components/Admin/Pages/Technology/Manage'
import Single from './Components/Admin/Pages/Technology/Single'
import EnquiryAdmin from './Components/Admin/Pages/Enquiry/EnquiryAdmin'
import Update from './Components/Admin/Pages/Technology/Edit'
import Masters from './Components/Client/Layout/Masters'
import Bio from './Components/Client/Pages/Bio/Bio'
import Dashboards from './Components/Client/Pages/Dashboard/Dashboards'
import AddProj from './Components/Client/Pages/Project/AddProj'

import Proj from './Components/Client/Pages/Project/Proj'
import Enquiry from './Components/Client/Pages/Enquiry/Enquiry'
import Register from './Components/Authentication/Register'
import Bi from './Components/Developer/Pages/BIO/Bi'
import Dashboard1 from './Components/Developer/Pages/Dash/Dashboard1'
import ViewBidding from './Components/Client/Pages/Bidding/ViewBidding'
import Project2 from './Components/Developer/Pages/Projects/Project2'
import Canva from './Components/Developer/Pages/Chats/Chats'
import Chatcanva from './Components/Client/Pages/Chat/Chatcanva'
import ClientBidding from './Components/Client/Pages/Bidding/ClientBidding'
import Enquirys from './Components/Developer/Pages/Enquiry/Enquirys'
import DevBidding from './Components/Developer/Pages/Bidding/DevBidding'
import Tech from './Components/Developer/Pages/Technology/Tech'
import EditProj from './Components/Client/Pages/Project/EditProj'
import Upload from './Components/Developer/Pages/Projects/Upload'
import AddBid from './Components/Developer/Pages/Bidding/AddBid'
import AcceptedBid from './Components/Developer/Pages/Bidding/AcceptedBid'
import RejectBid from './Components/Developer/Pages/Bidding/RejectBid'
import ShowTask from './Components/Client/Pages/Task/ShowTask'
import Chats from './Components/Developer/Pages/Chats/Chats'
import Rating from './Components/Client/Pages/Ratings/Rating'
import ViewRating from './Components/Admin/Pages/Ratings/ViewRating'
import DevRating from './Components/Developer/Pages/Ratings/DevRating'
function App() {
  
    return(
   <>
    <BrowserRouter>
    
    <Routes>
    
     <Route path="/admin" element={<Master/>}>
        <Route path="/admin" element={<Dashboard/>}/>
        <Route path="/admin/user" element={<Client/>}/>
        <Route path="/admin/dev" element={<Dev/>}/>
        
        <Route path="/admin/log" element={<Logout/>}/>
        <Route path="/admin/add" element={<Add/>}/>
        <Route path="/admin/manage" element={<Manage/>}/>
       
        <Route path="/admin/update/:_id" element={<Update/>}/>
        <Route path="/admin/enquiry" element={<EnquiryAdmin/>}/>
        <Route path="/admin/project" element={<Projects/>}/>
        <Route path="/admin/bid" element={<ReviewBid/>}/>
        <Route path="/admin/rating" element={<ViewRating/>}/>
     </Route>
     <Route path="/login" element={<Log/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/admin/client/single/:_id" element={<Singles/>}/>
     <Route path="/admin/dev/single/:_id" element={<Singl/>}/>
     <Route path="/admin/single/:_id" element={<Single/>}/>
     <Route path="/client" element={<Masters/>}>
        
        <Route path="/client/bio" element={<Bio/>}/>
        
        <Route path="/client/add/project" element={<AddProj/>}/>
        <Route path="/client/projects" element={<Proj/>}/>
        <Route path="/client/proj/:_id" element={<EditProj/>}/>
        <Route path="/client/enquiry" element={<Enquiry/>}/>
        <Route path="/client/viewBid/:projectId" element={<ViewBidding/>}/>
        <Route path="/client/contact" element={<Contact/>}/>
        <Route path="/client/dashboards" element={<Dashboards/>}/>
         <Route path="/client/upload/:projectId/:bidAmount/:bidId" element={<ShowTask/>}/>
         <Route path="/client/ratings/:developerId/:clientId/:projectId" element={<Rating/>}/>
         <Route path="/client/chat" element={<Chatcanva/>}/>     
     </Route>
     <Route path="/" element={<About/>}/>

     <Route path="/developer" element={<Layout/>}>
        
        <Route path="/developer/enquirys" element={<Enquirys/>}/>
        <Route path="/developer/chats" element={<Chats/>}/>
        <Route path="/developer/upload/:projectId/:clientId" element={<Upload/>}/>
        <Route path="/developer/projects" element={<Project2/>}/>
        <Route path="/developer/projects/:techId" element={<Project2/>}/>
        <Route path="/developer/contact" element={<Contact/>}/>
        <Route path="/developer/bidding" element={<DevBidding/>}/>
        <Route path="/developer/dashboard1" element={<Dashboard1/>}/>
        <Route path="/developer/tech" element={<Tech/>}/>
        <Route path="/developer/addbid/:projectId/:clientId" element={<AddBid/>}/>
        <Route path="/developer/acceptedBid" element={<AcceptedBid/>}/>
         <Route path="/developer/rejectBid" element={<RejectBid/>}/>
         <Route path="/developer/upload/:projectId/:bidAmount" element={<ShowTask/>}/>
         <Route path="/developer/bio" element={<Bi/>}/>
         <Route path="/developer/rating" element={<DevRating/>}/>
    </Route>

    <Route path="/services" element={<Services/>}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  )
}

export default App
