import axiosInstance from "@/config/axiosConfig";
<<<<<<< HEAD
import axios, { AxiosError } from "axios";
   
export const getCompanyDetailById = async (id: number) => {
  
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/companies/${id}`);
    
      console.log("data id : ", response.data); // In dữ liệu trả về từ API
=======

import  { AxiosError } from "axios";
   
   
export const fetchCompanyDetail = async (id: number) => {
  
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/companies/${id}`);
      
>>>>>>> 90d2a926a6a7ebf28c60e12b7611060659c5a253
      return response.data; // Trả về dữ liệu
    } catch (error: AxiosError | any) {
        
        throw new Error(error.response.data.message);
    }
   
};
<<<<<<< HEAD

export const getJobsOfCompany  = async (id: number) => {
    try {
        // const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/company/${id}`)
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/company`, {
            params: { companyId: id }
        });
        console.log("data job: ", response.data)
        return response.data
    } catch (error: AxiosError | any) {
        throw new Error(error.response.data.message) 
    }

}
=======
>>>>>>> 90d2a926a6a7ebf28c60e12b7611060659c5a253
