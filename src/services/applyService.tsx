import axiosInstance from "@/config/axiosConfig";

import  { AxiosError } from "axios";
   
export const getCVByJob = async (jobId: number, applyStatus: string | null, currentPage: number, 
    pageSize: number, sortBy: string, ascending: boolean) => {
    
    if(applyStatus === "ALL"){
        applyStatus = null;
    }
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/apply/job`, 
            {
                params: {
                    jobId: jobId,
                    currentPage: currentPage,
                    pageSize: pageSize,
                    sortBy: sortBy,
                    ascending: ascending,
                    applyStatus: applyStatus
                }
            }
        );
      
      return response.data; // Trả về dữ liệu
    } catch (error: AxiosError | any) {
        
        throw new Error(error.response.data.message);
    }
   
};

export const getCVByCompany = async (companyId: number, keyword: string | null, applyStatus: string | null, currentPage: number, 
    pageSize: number, sortBy: string, ascending: boolean) => {
    
    if(applyStatus === "ALL"){
        applyStatus = null;
    }
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/apply/company`, 
            {
                params: {
                    companyId: companyId,
                    currentPage: currentPage,
                    pageSize: pageSize,
                    sortBy: sortBy,
                    ascending: ascending,
                    applyStatus: applyStatus,
                    keyword: keyword
                }
            }
        );
      
      return response.data; // Trả về dữ liệu
    } catch (error: AxiosError | any) {
        
        throw new Error(error.response.data.message);
    }
   
};



export const updateCVStatus = async (resumeId: number, applyStatus: string) => {
  
    try {
        const response = await axiosInstance.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/apply/update`, 
            {
                resumeId: resumeId,
                applyStatus: applyStatus
            }
        );
      
      return response.data; // Trả về dữ liệu
    } catch (error: AxiosError | any) {
        
        throw new Error(error.response.data.message);
    }
   
};