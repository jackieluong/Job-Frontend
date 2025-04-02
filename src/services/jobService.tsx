import axiosInstance from "@/config/axiosConfig";
import { JobPostingInfo } from "@/lib/interface";
import axios, { AxiosError } from "axios";
   
   
export const createJob = async (jobInfo: JobPostingInfo) => {
  
    try {
        const response = await axiosInstance.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs`, 
            jobInfo
        );
      
      return response.data; // Trả về dữ liệu
    } catch (error: AxiosError | any) {
        
        throw new Error(error.response.data.message);
    }
   
};

export const getJobDetailById = async (id: number) => {
  
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/${id}`);
      console.log("data: ", response.data); // In dữ liệu trả về từ API
      return response.data; // Trả về dữ liệu
    } catch (error: AxiosError | any) {
        
        throw new Error(error.response.data.message);
    }
   
};


export const getPostByCompany = async (companyId: number, postStatus: string | null, currentPage: number, 
    pageSize: number, sortBy: string, ascending: boolean) => {
    
    if(postStatus === "ALL"){
            postStatus = null;
    }
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/company/post`, 
            {
                params: {
                    companyId: companyId,
                    currentPage: currentPage,
                    pageSize: pageSize,
                    sortBy: sortBy,
                    ascending: ascending,
                    postStatus: postStatus
                }
            }
        );
      
      return response.data; // Trả về dữ liệu
    } catch (error: AxiosError | any) {
        
        throw new Error(error.response.data.message);
    }
   
};


export const updateJobPostStatus = async (jobId: number, jobStatus: string) => {
  
    try {
        const response = await axiosInstance.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/status`,{
            jobId: jobId,
            jobStatus: jobStatus
        });
      
      return response.data; // Trả về dữ liệu
    } catch (error: AxiosError | any) {
        
        throw new Error(error.response.data.message);
    }
   
};
