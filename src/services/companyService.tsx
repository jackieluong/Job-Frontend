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

export const getJobsOfCompany  = async (id: number) => {
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/company`, {
            params: { companyId: id }
        });
        console.log("data job: ", response.data)
        return response.data
    } catch (error: AxiosError | any) {
        throw new Error(error.response.data.message) 
    }
}

export const getStatusFollowCompany = async (companyId: number) => {
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/follow/company/check`,
            { params: { companyId } }
        )
        console.log('data: ', response.data)
        return response.data
    } catch (error: AxiosError | any) {
        throw new Error(error.response.data.message)
    }
}

export const followCompany = async (companyId: number) => {
    try {
        const response = await axiosInstance.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/follow/company`,
            { companyId }
        )
        console.log('data: ', response.data)
        return response.data
    } catch (error: AxiosError | any) {
        throw new Error(error.response.data.message)
    }
}

export const unFollowCompany = async (companyId: number) => {
    try {
        const response = await axiosInstance.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/follow/company`,
            { companyId }
        )
        console.log('data un: ', response.data)
        return response.data
    } catch (error: AxiosError | any) {
        throw new Error(error.response.data.message)
    }
}