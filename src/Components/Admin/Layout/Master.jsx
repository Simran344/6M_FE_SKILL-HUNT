import { useEffect } from "react"
import Footer from "./Footer"
import Header from "./Header"
import {Outlet, useLocation} from "react-router-dom"
export default function Master(){
    const {pathName} = useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathName])
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}