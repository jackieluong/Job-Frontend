import ChatService from '@/services/chatService';
import { create } from 'zustand';
import { useAuth } from './userStore';
import { User } from 'lucide-react';

export type User = { id: string; name: string, role: string };

type ChatState = {
  users: User[];
  addUser: (user: User) => void;
  fetchUsersHaveChat: (userId: number) => Promise<void>;
  // getChatHistory: (userId1: number, userId2: number) => Promise<void>;
};

export const useChatStore = create<ChatState>((set) => ({
  users: [
    // { id: "1", name: 'Nguyen Van A', role: "APPLICANT" },
    // { id: "2", name: 'Tran Thi B',  role: "APPLICANT" },
    // { id: "5", name: 'Le Van C',  role: "COMPANY" },
  ],

  // Fetch users from API and update Zustand state
  fetchUsersHaveChat: async (userId: number) => {
    try {
      
      const userData = await ChatService.fetchAllChatUsers(userId).then((response) => response.data);

      set((state) => {
        // Merge API users with existing users, avoiding duplicates
        const mergedUsers = [...state.users];
  
        userData.forEach((user: User) => {
          if (!mergedUsers.some((u) => u.id === user.id)) {
            mergedUsers.push(user);
          }
        });
  
        return {...state, users: mergedUsers };
      });

    } catch (error) {
      console.error('Failed to fetch users:', error);
      // alert(error.message);
    }
  },



  addUser: (user) =>
    set((state) => {
      if (!state.users.some((u) => u.id === user.id)) {
        return { users: [...state.users, user] };
      }
      return state;
    }),
    
}));


export const useChat = () => {
  const {users, addUser, fetchUsersHaveChat} = useChatStore();

  
  return{
    users,
    addUser,
    fetchUsersHaveChat
  }
}