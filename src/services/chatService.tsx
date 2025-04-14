import axiosInstance from '@/config/axiosConfig';
import { AxiosError } from 'axios';


class ChatService {
  static async fetchAllConversations(userId: number) {
    try {
      const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/conversation`,{
        params:{
          userId: userId
        }
      }
      );
      console.log(response.data);
      return response.data;
    } catch (error: AxiosError | any) {
      throw new Error(error.response.data.message);
    }
  }

  static async fetchChatHistory(conversationId: number) {
    try {
      const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/chat/history`,{
        params:{
          conversationId: conversationId
        }
      }
      );

      return response.data;
    } catch (error: AxiosError | any) {
      throw new Error(error.response.data.message);
    }
  }

  static async fetchUsersByKeyword(keyword: string) {
    try {
      const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/accounts/search`,{
        params:{
          name: keyword
        }
      }
      );
      
      return response.data;
    } catch (error: AxiosError | any) {
      throw new Error(error.response.data.message);
    }
  }

  static async createNewConversation(userId1: number, userId2: number) {
    try {
      const response = await axiosInstance.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/conversation`,{
       user1_ID: userId1,
       user2_ID: userId2
      }
      );
      
      return response.data;
    } catch (error: AxiosError | any) {
      throw new Error(error.response.data.message);
    }
  }
}

export default ChatService;
