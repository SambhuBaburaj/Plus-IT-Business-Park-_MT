import axios from "axios"
const baseURL=process.env.REACT_APP_BASEURL

const Instance=axios.create({baseURL})


Instance.interceptors.request.use(
(config)=>
{


    const token = localStorage.getItem("Userdata");
  
    if (token) {
      config.headers['x-access-token'] = token;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
    console.log(error);
  }

)





export default Instance
