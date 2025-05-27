import Header from "./Header"
import {Outlet, useLocation} from "react-router-dom"
import Footer from "./Footer"
import { useEffect } from "react"
export default function Masters(){
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