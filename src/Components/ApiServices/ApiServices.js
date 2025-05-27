import axios from "axios";
const BASE_URL="https://6-m-be-skill-hunt-auvz.vercel.app"

class ApiServices{
    getToken(){
        let x={
            headers:{
            
            Authorization:sessionStorage.getItem("token")
        }

    }
    return x
}
   login(formData){
    return axios.post(BASE_URL+"/api/user/login",formData)
}
   techAdd(formData){
    return axios.post(BASE_URL+"/admin/technology/add",formData,this.getToken())
   }
   techAll(formData){
    return axios.post(BASE_URL+"/api/tech/all",formData,this.getToken())
   }
   techStatus(formData){
    return axios.post(BASE_URL+"/admin/technology/status",formData,this.getToken())
   }
   techSingle(formData){
    return axios.post(BASE_URL+"/api/tech/single",formData,this.getToken())
   }
   techUpdate(formData){
    return axios.post(BASE_URL+"/admin/technology/update",formData,this.getToken())
   }
   enquiryAdd(formData){
    return axios.post(BASE_URL+"/api/enquiry/add",formData,this.getToken())
   }
   enquiryAll(formData){
    return axios.post(BASE_URL+"/admin/enquiry/all",formData,this.getToken())
   }
   clientAll(formData){
     return axios.post(BASE_URL+"/api/client/all",formData,this.getToken())
   }
   clientStatus(formData){
    return axios.post(BASE_URL+"/admin/client/status",formData,this.getToken())
   }
   clientSingle(formData){
    return axios.post(BASE_URL+"/api/client/single",formData,this.getToken())
   }
   clientUpdate(formData){
    return axios.post(BASE_URL+"/client/update",formData,this.getToken())
   }
   devAll(formData){
    return axios.post(BASE_URL+"/api/developer/all",formData,this.getToken())
   }
   devUpdate(formData){
    return axios.post(BASE_URL+"/dev/update",formData,this.getToken())
   }
   devStatus(formData){
      return axios.post(BASE_URL+"/admin/developer/status",formData,this.getToken())
   }
   devSingle(formData){
    return axios.post(BASE_URL+"/api/developer/single",formData,this.getToken())
   }
   projectAdd(formData){
    return axios.post(BASE_URL+"/client/project/add",formData,this.getToken())
   }
   projAll(formData){
    return axios.post(BASE_URL+"/api/project/all",formData,this.getToken())
   }
   projSingle(formData){
    return axios.post(BASE_URL+"/api/project/single",formData,this.getToken())
   }
   projUpdate(formData){
    return axios.post(BASE_URL+"/client/project/update",formData,this.getToken())
   }
   bidAdd(formData){
    return axios.post(BASE_URL+"/dev/bid/add",formData,this.getToken())
   }
   bidAll(formData){
    return axios.post(BASE_URL+"/api/bid/all",formData,this.getToken())
   }
   bidStatus(formData){
    return axios.post(BASE_URL+"/client/bid/changeStatus",formData,this.getToken())
   }
   uploadAdd(formData){
    return axios.post(BASE_URL+"/dev/upload/add",formData,this.getToken())
   }
   uploadAll(formData){
    return axios.post(BASE_URL+"/client/upload/all",formData,this.getToken())
   }
   bidPay(formData){
    return axios.post(BASE_URL+"/client/bid/pay",formData,this.getToken())
   }
   ratingAdd(formData){
    return axios.post(BASE_URL+"/client/rating/add",formData,this.getToken())
   }
   ratingAll(formData){
    return axios.post(BASE_URL+"/api/rating/all",formData,this.getToken())
   }
   ratingSingle(formData){
    return axios.post(BASE_URL+"/dev/rating/single", formData,this.getToken())
   }
}
export default new ApiServices
     