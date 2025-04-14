   import axiosInstance from "@/config/axiosConfig";
import axios, { AxiosError } from "axios";
   
   
export const loginUser = async (data) => {
  console.log("data12345abc", data); // In dữ liệu trước khi gửi yêu cầu
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/sign-in`,
    data,
    {
      withCredentials: true, // Đảm bảo gửi cookie nếu có
    }
  );
  console.log("dataabc", res.data); // In dữ liệu trả về từ API
  return res.data; // Trả về dữ liệu
};

class UserService {
  static async getAllUsers() {
    try {
      const response = await axiosInstance.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/accounts`);

      return response.data;
  } catch (error: AxiosError | any) {
      
      throw new Error(error.response.data.message);
  }
  }

  
}

export default UserService