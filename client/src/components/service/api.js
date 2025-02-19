import axios from "axios";

const url = "http://localhost:8000";

const axiosJWT=axios;

axiosJWT.defaults.headers = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${url}/login`, data);
  } catch (error) {
    console.log("error while calling login API: ", error);
    return error.response;
  }
};

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${url}/signup`, data);
  } catch (error) {
    console.log("error while calling Signup API: ", error);
  }
};

export const verifyToken = async () => {
  try {
    const response = await axiosJWT.post(`${url}/verify`, "");
    if (response.status===200) return true;
  } catch (err) {
    return false;
  }
}; 

export const logout = async () => {
  try {
    const response = await axiosJWT.post(`${url}/logout`, "");
    if (response.status === 200) return true;
  } catch (err) {
    return false;
  }
};


export const getUsersList=async()=>{
  try{
    const response = await axiosJWT.get(`${url}/getUsers`); 
    if (response.status === 200) return response.data;
  } catch (err) {
    return false;
  }
}

export const getUserInfo=async(id)=>{
  try{
    const response = await axiosJWT.get(`${url}/getUserInfo/${id}`); 
    if (response.status === 200) return response.data;
  } catch (err) {
    return false;
  }
}


export const getOrders=async(id)=>{
  const response=await axiosJWT.get(`${url}/getOrders/${id}`);
  // console.log(response)
 if(response.status===200) return response.data;
}


export const addProducts=async(product)=>{
  const response=await axiosJWT.post(`${url}/addProduct`,product);
  // console.log(response)
 if(response.status===200) return response.data;
}

export const getProducts=async()=>{
  const response=await axiosJWT.get(`${url}/getProducts`);
  // console.log(response)
 if(response.status===200) return response.data;
}

export const deleteProduct=async(productId)=>{
  const response=await axiosJWT.delete(`${url}/deleteProduct/${productId}`);
  // console.log(response)
 if(response.status===200) return true;
}
