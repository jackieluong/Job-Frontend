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


export const searchJobs = async (currentPage: number, pageSize: number, sortBy: string, ascending: boolean, keyword: string, jobType: string,
    industry: string, level: string, minExperience: number, maxExperience: number, minSalary: number, maxSalary: number, cities: string[]
) => {
    
    console.log("Cities ", cities);
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/search`,{
            params: {
                currentPage: currentPage,
                pageSize: pageSize,
                sortBy: sortBy,
                ascending: ascending,
                keyword: keyword,
                jobType: jobType,
                industry: industry,
                level: level,
                minExperience: minExperience,
                maxExperience: maxExperience,
                minSalary: minSalary,
                maxSalary: maxSalary,
                cities: cities
            }
        });
      
      return response.data; // Trả về dữ liệu
    } catch (error: AxiosError | any) {
        
        throw new Error(error.response.data.message);
    }
   
};

// export const saveJob = async (jobId: number) => {
  
//     try {
//         const response = await axiosInstance.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/save`,null ,{
//             params: {
//                 jobId: jobId
//             }
//         });
      
//       return response.data; // Trả về dữ liệu
//     } catch (error: AxiosError | any) {
        
//         throw new Error(error.response.data.message);
//     }
   
// };

export const saveJob = async (jobId: number) => {
  
    try {
        const response = await axiosInstance.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/save`,null ,{
            params: {
                jobId: jobId
            }
        });
      console.log('data job save: ', response.data)
      return response.data; // Trả về dữ liệu
    } catch (error: AxiosError | any) {
        
        throw new Error(error.response.data.message);
    }
   
};


export const getJobDetailByIdNew = async (id: number) => {
  
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/detail/${id}`);
    
      console.log("data: ", response.data); // In dữ liệu trả về từ API
      return response.data; // Trả về dữ liệu
    } catch (error: AxiosError | any) {
        
        throw new Error(error.response.data.message);
    }
   
};


export const getJobRelatedlById = async (id: number) => {
  
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/${id}/related`);
    
      console.log("data: ", response.data); // In dữ liệu trả về từ API
      return response.data; // Trả về dữ liệu
    } catch (error: AxiosError | any) {
        
        throw new Error(error.response.data.message);
    }
   
};

export const getSaveJob = async ({ currentPage, pageSize, sortBy, ascending, }
  : {
  currentPage: number;
  pageSize: number;
  sortBy: string;
  ascending: string;
}) => {
  try {
    const response = await axiosInstance.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/save`,
      {
        params: {
          currentPage,
          pageSize,
          sortBy,
          ascending,
        },
      }
    );
    console.log("data get save job: ", response.data);
    return response.data;
  } catch (error: AxiosError | any) {
    throw new Error(error.response.data.message);
  }
};



export const getApplyJob = async (jobId: number, currentPage: number, pageSize: number, sortBy: string, ascending: string, applyStatus: string) => {
  
  try {
    const response = await axiosInstance.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/apply/job`,
      {
        params: {
          jobId,
          currentPage,
          pageSize,
          sortBy,
          ascending,
          ...(applyStatus && { applyStatus }),
        },
      }
    );
  
    console.log("data: ", response.data); // In dữ liệu trả về từ API
    return response.data; // Trả về dữ liệu
  } catch (error: AxiosError | any) {
      
      throw new Error(error.response.data.message);
  }
 
};


export const deleteSaveJob = async (jobId: number) => {
  
  try {
    const response = await axiosInstance.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/save`,
      {
        params: {
          jobId: jobId
        },
      }
    );
    console.log("data: ", response.data); // In dữ liệu trả về từ API
    return response.data; // Trả về dữ liệu
  } catch (error: AxiosError | any) {
      
      throw new Error(error.response.data.message);
  }
 
};