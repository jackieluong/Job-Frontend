import ChatService from '@/services/chatService';
import { create } from 'zustand';
import { useAuth } from './userStore';
import { User } from 'lucide-react';

export type User = { id: number; name: string, role: string };

export type Conversation = {
  id: number;
  lastMessage: string;
  lastUpdated: string;
  user: User
}



type ChatState = {
  
  conversations: Conversation[];
  addConversation: (user: User, curUserID: number) => void;
  fetchConversations: (userId: number) => Promise<void>;
  // getChatHistory: (userId1: number, userId2: number) => Promise<void>;
  
};


export const useChatStore = create<ChatState>((set) => ({
 conversations: [],

  // Fetch users from API and update Zustand state
  fetchConversations: async (userId: number) => {
    try {
      
      const conversationData = await ChatService.fetchAllConversations(userId).then((response) => response.data);

      set((state) => {
        
        
        return {...state, conversations: conversationData};
      });

    } catch (error) {
      console.error('Failed to fetch users:', error);
      // alert(error.message);
    }
  },



  // addUser: (user) =>
  //   set((state) => {
  //     if (!state.users.some((u) => u.id === user.id)) {
  //       return { users: [...state.users, user] };
  //     }
  //     return state;
  //   }),

  // addConversation : (user, curUserID) => {  

  //     set((state) => async () => {
  //       if(state.conversations.some((conversation) => conversation.user.id === user.id)) return state;
  //       const data = await ChatService.createNewConversation(curUserID, user.id).then((response) => response.data);

  //       return {...state, conversations: [...state.conversations, {id: data.id, lastMessage: data.lastMessage, lastUpdated: data.lastUpdated, user: user}]}; 
  //     });
  // },
  
  addConversation: async (user, curUserID) => {  
    try {
      // Prevent duplicate conversation
      const conversationState =  useChatStore.getState().conversations;
      console.log("conversationState", conversationState);
      if(conversationState.some((conversation) => conversation.user.id === user.id)) return;
  
      // Fetch data
      const data = await ChatService.createNewConversation(curUserID, user.id).then((response) => response.data);
  
      // Update state after fetching data
      set((state) => ({
        ...state,
        conversations: [...state.conversations, { 
          id: data.id, 
          lastMessage: data.lastMessage, 
          lastUpdated: data.lastUpdated, 
          user: user
        }]
      }));
      
    } catch (error) {
      console.error("Error creating conversation:", error);
    }
  },
  
    
}));


export const useChat = () => {
  const {conversations, addConversation, fetchConversations} = useChatStore();

  
  return{
    conversations,
    addConversation,
    fetchConversations
  }
}