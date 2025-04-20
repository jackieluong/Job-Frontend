'use client';
import AuthService from '@/services/authService';
import { useAuth, UserInfo } from '@/store/userStore';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

type AuthCallBackProps = {
  // Define your props here
};

export default function AuthCallBack(props: AuthCallBackProps) {
  const { setUser } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    const handleCallBack = async () => {
        const queryParams = new URLSearchParams(window.location.search);
        const token = queryParams.get('token');

        if(token){
            localStorage.setItem('accessToken', JSON.stringify(token));
        }
        
        try {
        const responseData = await AuthService.handleAuthCallBack().then(
          (response) => response.data,
        );

        const loginUser: UserInfo = {
          id: responseData.user.id,
          name: responseData.user.name,
          email: responseData.user.email,
          role: responseData.user.role,
        };
        console.log('Login user: ', loginUser);

        setUser(loginUser);

        localStorage.setItem(
          'accessToken',
          JSON.stringify(responseData.accessToken),
        );
        localStorage.setItem('user', JSON.stringify(responseData.user));

        alert('Đăng nhập thành công!');

        if (responseData.user.role === 'COMPANY') {
          router.push('/recruiter');
        } else if (responseData.user.role === 'ADMIN') {
          router.push('/admin');
        } else {
          router.push('/home');
        }
      } catch (error: any) {
        alert(error?.data?.message || error?.message || 'Đăng nhập thất bại!');
      }
    };

    handleCallBack();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-2">Redirecting...</h1>
    </div>
  );
}
