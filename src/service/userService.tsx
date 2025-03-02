   import axios from "axios";
   
   
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