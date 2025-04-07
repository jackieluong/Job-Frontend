// export interface JobPostingInfo {
//   id?: string;
//   title: string;
//   industry: string;
//     province: string;
//     district: string;
//   jobType: string;
//   description: string;
//     salaryFrom: number;
//     salaryTo: number;
//     deadline: string;
//     gender: string;
//     level: string;
//     quantity: number;
//     experience: number;
//     education: string;
//     createdAt: string;
//     updatedAt: string;
//     status: "OPEN" | "PENDING" | "CLOSED" | "REJECTED";
//     view?: number;
// }

export interface JobPostingInfo {
  id?: string;
  name: string;
  city: string[]; // List of cities
  skills?: string[]; // Optional list of skills
  salaryFrom: number;
  salaryTo: number; // Optional max salary
  quantity: number; // Number of applicants
  jobType: "FULL_TIME" | "PART_TIME" | "REMOTE" | "HYBRID"; // Enum mapping JobTypeEnum
  level: "INTERN" | "FRESHER" | "JUNIOR" |  "MIDDLE" | "SENIOR"; // Enum mapping LevelEnum
  educationLevel: "NONE" | "COLLEGE" | "BACHELOR" | "MASTER" | "HIGHER"; // Enum mapping
  yearOfExperience: number;
  description: string;
  deadline: string; // Converted from Instant
  jobStatus: "OPEN" | "PENDING" | "CLOSED" | "REJECTED"; // Enum mapping JobStatusEnum
  companyId: number;
  industry: string;
  genderRequire: string;
  detail: string;
  
}

export interface JobDetail {
  id: string;
  name: string;
  city: string[]; // List of cities
  skills?: string[]; // Optional list of skills
  salaryFrom: number;
  salaryTo: number; // Optional max salary
  quantity: number; // Number of applicants
  jobType: "FULL_TIME" | "PART_TIME" | "REMOTE" | "HYBRID"; // Enum mapping JobTypeEnum
  level: "INTERN" | "FRESHER" | "JUNIOR" |  "MIDDLE" | "SENIOR"; // Enum mapping LevelEnum
  educationLevel: "NONE" | "COLLEGE" | "BACHELOR" | "MASTER" | "HIGHER"; // Enum mapping
  yearOfExperience: number;
  description: string;
  deadline: string; // Converted from Instant
  jobStatus: "OPEN" | "PENDING" | "CLOSED" | "REJECTED"; // Enum mapping JobStatusEnum
  companyId: number;
  industry: string;
  genderRequire: string;
  detail: string;
  createdAt: string;
  updatedAt: string;
  view?: number;
}


export interface CV {
  id: string;
  userName: string;
  email: string;
  role?: string;
  jobName: string;
  resume: string;
  applyStatus: string;
  createdAt: string;
  updatedAt: string;
  updatedBy?: string;
  jobId?: string;
  coverLetter?: string;
}