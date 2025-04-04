import { industryOptions } from "./options";

// Status mappings for colors & labels
export const statusColorMap: Record<string, string> = {
    APPROVED: "bg-green-100 text-green-800",
    ACTIVE: "bg-green-100 text-green-800",
    REJECTED: "bg-red-400 text-gray-800",
    PENDING: "bg-yellow-100 text-yellow-800",
    REVIEWED: "bg-blue-100 text-blue-800",
  };
  
  export const roleColorMap: Record<string, string> = {
    ADMIN: "bg-green-300 text-green-800 p-2 rounded-xl text-sm",
    COMPANY: "bg-gray-400 text-gray-800 p-2 rounded-xl text-sm",
    // APPLICANT: "bg-yellow-100 text-yellow-800",
    USER: "bg-blue-400 text-blue-800 p-2 rounded-xl text-sm",
  };
  



export const CVStatusLabelMap: Record<string, string> = {
    ACCEPTED: "Đã chấp nhận",
    SEEN: "Đã xem",
    REJECTED: "Từ chối",
    PENDING: "Đang chờ duyệt",
  };

// Status mappings for colors & labels
export const CVStatusColorMap: Record<string, string> = {
  ACCEPTED: 'bg-green-100 text-green-800',
  REJECTED: 'bg-red-400 text-gray-800',
  PENDING: 'bg-yellow-100 text-yellow-800',
  SEEN: 'bg-blue-100 text-blue-800',
};

// Create a map where the key is the value and the value is the label
export const industryMap: Record<string, string> = industryOptions.reduce((map, { value, label }) => {
  map[value] = label;
  return map;
}, {} as Record<string, string>);
