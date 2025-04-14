import AuthService from '@/services/authService';
import { useRouter } from 'next/navigation';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
export type UserInfo = {
  id: number | null;
  name: string | null;
  email: string | null;
  role: string | null;
};
type UserState = {
  user: UserInfo | null;
  
  isAuthenticated: boolean;
  // login: (email: string, password: string) => Promise<boolean>;
  setUser: (user: UserInfo) => void;
  logout: () => void;
};

const initialUserInfo: UserInfo = {
  id: null,
  name: null,
  email: null,
  role: null,
};

const useUserStore = create<UserState>()(
  

  // persist(
  (set) => ({
    user: null,
    
    isAuthenticated: false,

    // login: async (email: string, password: string) => {
    //   try {
    //     const responseData = await AuthService.login({ email, password }).then(
    //       (response) => response.data,
    //     );
    //     console.log(responseData);
    //     const loginUser: UserInfo = {
    //       id: responseData.user.id,
    //       name: responseData.user.name,
    //       email: responseData.user.email,
    //       role: responseData.user.role,
    //     };
    //     console.log("Login user: " , loginUser);
    //     set((state) => ({
    //       ...state,
    //       user: loginUser,

    //       isAuthenticated: true,
    //     }));

        
    //     localStorage.setItem(
    //       'accessToken',
    //       JSON.stringify(responseData.accessToken),
    //     );
    //     localStorage.setItem('user', JSON.stringify(responseData.user));
    //     return true;
    //   } catch (error) {
    //     alert(error.message);
    //     return false;
    //   }
    // },

    setUser: (loginUser: UserInfo) =>
      set((state) => ({
        ...state,
        user: loginUser,
        isAuthenticated: true,
      })),

    logout: () => {
      
      set((state) => ({
        ...state,
        user: initialUserInfo,

        isAuthenticated: false,
      }));

      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      
    },
  }),
  // {
  //     name: "user",
  //     storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  //     partialize: (state) => ({ accessToken: state.accessToken }),
  // }
  // );
);

if (typeof window !== 'undefined') {
  const savedUser = localStorage.getItem('user');

  if (savedUser) {
    const parsedUser = JSON.parse(savedUser);
    useUserStore.setState({ user: parsedUser, isAuthenticated: true });
  }
}
export const useAuth = () => {
  const { user, isAuthenticated, logout, setUser } = useUserStore();
  return {
    user,
    setUser,
    isAuthenticated,
    logout,
  };
};
