export interface JobPostingInfo {
  id?: string;
  title: string;
  industry: string;
    province: string;
    district: string;
  jobType: string;
  description: string;
    salaryFrom: number;
    salaryTo: number;
    deadline: string;
    gender: string;
    level: string;
    quantity: number;
    experience: number;
    education: string;
    createdAt: string;
    updatedAt: string;
    status: "OPEN" | "PENDING" | "CLOSED" | "REJECTED";
    view?: number;
}


export interface CV {
  id: string;
  name: string;
  email: string;
  jobTitle: string;
  url: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}