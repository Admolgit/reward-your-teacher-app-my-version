import axios from "axios";

export const auth={
    login: async (data: any)=>{
        const url = "http://localhost:3000/v1/auth/login";
        const res = await axios.post(url, data)
        console.log(res.data.token)
    }
}