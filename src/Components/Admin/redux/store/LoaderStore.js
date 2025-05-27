import { configureStore } from "@reduxjs/toolkit";
import LoaderReducer from "../reducer/LoaderReducer";


const Store=configureStore({
    reducer:{
        loaderReducer:LoaderReducer,
    }
})
export default Store;