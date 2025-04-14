import axiosInstance from "@/config/axiosConfig";

import  { AxiosError } from "axios";
   
   
export const fetchNotifications = async () => {
  
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/notifications/user`);
      
      return response.data; // Trả về dữ liệu
    } catch (error: AxiosError | any) {
        
        throw new Error(error.response.data.message);
    }
   
};
