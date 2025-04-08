import axiosInstance from "@/config/axiosConfig";

import  { AxiosError } from "axios";
   
   
export const fetchCompanyDetail = async (id: number) => {
  
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/companies/${id}`);
      
      return response.data; // Trả về dữ liệu
    } catch (error: AxiosError | any) {
        
        throw new Error(error.response.data.message);
    }
   
};
