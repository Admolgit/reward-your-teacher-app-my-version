import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ConfigType {

}

export const apiGet = (path:string, conf = {}, auth = "admin") => {
    const config:any = {
      ...conf,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    if (!auth) {
      config.headers = {};
    }
    return axios.get(`${process.env.REACT_APP_BASE_URL}${path}`, config);
  };
  
  export const apiPost = (path:string, data:any, { headers, ...conf }:any, auth = true) :any => {
    const Authorization = auth && `Bearer ${localStorage.getItem("token")}`;
    
    const config = {
      ...conf,
      headers: {
        Authorization,
        ...(headers ? headers : {}),
      },
    };
    
    return axios.post(`${process.env.REACT_APP_BASE_URL}${path}`, data, config);
    // return axios.post(`http://localhost:3000/v1${path}`, data, config);
  };
  
  export const apiPut = (path:string, data:any, conf = {}) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      ...conf,
    };
    return axios.put(`${process.env.REACT_APP_BASE_URL}${path}`, data, config);
  };
  
  export const apiPatch = (path:string, data:any, conf = {}) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      ...conf,
    };
    return axios.patch(`${process.env.REACT_APP_BASE_URL}${path}`, data, config);
  };
  
  export const apiDelete = (path:string, conf = {}) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      ...conf,
    };
    return axios.delete(`${process.env.REACT_APP_BASE_URL}${path}`, config);
  };