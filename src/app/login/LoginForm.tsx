'use client';

import { useEffect } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useMutationHooks } from '@/Hooks/useMutationHooks';
import * as UserService from '@/services/userService';
import { useRouter } from 'next/navigation';
import AuthService from '@/services/authService';
import { useAuth, UserInfo } from '@/store/userStore';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';

export default function AuthForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const mutation = useMutationHooks((data) => AuthService.login(data) );
  // const { data, isPending, isSuccess, isError, error } = mutation;

  // console.log(mutation.data);

  // const { login } = useAuth();

  // useEffect(() => {
  //   if (isSuccess && data?.status === "OK") {
  //     alert("Đăng nhập thành công!");
  //     router.push("/home");
  //   } else if (isError) {
  //     alert("Đăng nhập thất bại: " + (error as any)?.message || "Lỗi không xác định!");
  //   }
  // }, [isSuccess, isError]);
  const isPending = false;
  const { setUser } = useAuth();
  const onSubmit = async (formData: any) => {
    // mutation.mutate(formData);
    try {
      const responseData = await AuthService.login(formData).then(
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

      toast.success('Đăng nhập thành công!', {
        position: 'top-center',
      });

      if (responseData.user.role === 'COMPANY') {
        router.push('/recruiter');
      } else if (responseData.user.role === 'ADMIN') {
        router.push('/admin');
      } else {
        router.push('/home');
      }
    } catch (error: any) {
      toast.error(
        error?.data?.message || error?.message || 'Đăng nhập thất bại!',
        {
          position: 'top-center',
        },
      );
    }
  };

  const handleGoogleLogin = async () => {
    try {
      window.location.href = `${process.env.NEXT_PUBLIC_GOOGLE_AUTHORIZATION_URL}`;
    } catch (error) {
      console.error('Google login error:', error);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* Form login */}
      <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
        <div className="max-w-md w-full p-6">
          <h2 className="text-2xl font-bold text-center text-green-600">
            Chào mừng bạn đã quay trở lại
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email không được để trống',
                })}
                className="mt-1 w-full px-3 py-2 border rounded-md"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium">Mật khẩu</label>
              <input
                type="password"
                {...register('password', {
                  required: 'Mật khẩu không được để trống',
                })}
                className="mt-1 w-full px-3 py-2 border rounded-md"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="default"
              className="w-full text-white py-2 mt-4 rounded-md"
            >
              {isPending ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </Button>
          </form>

          <div className="flex gap-2 mt-4">
            <button
              className="flex-1 bg-red-500 text-white py-2 rounded-md"
              onClick={handleGoogleLogin}
            >
              Google
            </button>
            <button className="flex-1 bg-green-600 text-white py-2 rounded-md">
              Facebook
            </button>
            <button className="flex-1 bg-green-800 text-white py-2 rounded-md">
              LinkedIn
            </button>
          </div>

          <p className="text-center mt-4 text-sm">
            Bạn chưa có tài khoản?{' '}
            <a href="/register" className="text-green-600">
              Đăng ký ngay
            </a>
          </p>
        </div>

        {/* Ảnh kế bên form, cao bằng form */}
        <div className="w-68 h-auto">
          <img
            src="/assets/loginpage.png"
            alt="Login"
            className="h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
