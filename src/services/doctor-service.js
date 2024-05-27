
import { myAxios } from "./helper";

export const doctorSignup=(doctor)=>{
    return myAxios.post('api/v1/doctors/signup',doctor).then((response)=>response.data);
}

export const doctorLogin=(loginDetails)=>{
    return myAxios.post('api/v1/doctors/login',loginDetails).then((response)=>response.data);
}