import axiosInstance from '@/config/axiosConfig';
import { AxiosError } from 'axios';


class ChatService {
  static async fetchAllChatUsers(userId: number) {
    try {
      const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/chat`,{
        params:{
          userId: userId
        }
      }
      );
      console.log(response);
      return response.data;
    } catch (error: AxiosError | any) {
      throw new Error(error.response.data.message);
    }
  }

  static async fetchChatHistory(userID1: number, userID2: number) {
    try {
      const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/chat/history`,{
        params:{
          userID1: userID1,
          userID2: userID2
        }
      }
      );

      return response.data;
    } catch (error: AxiosError | any) {
      throw new Error(error.response.data.message);
    }
  }
}

export default ChatService;
