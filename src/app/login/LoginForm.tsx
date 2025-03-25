'use client';

import { useEffect } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useMutationHooks } from '@/Hooks/useMutationHooks';
import * as UserService from '@/services/userService';
import { useRouter } from 'next/navigation';
import AuthService from '@/services/authService';
import { useAuth } from '@/store/userStore';

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

  const { login } = useAuth();

  // useEffect(() => {
  //   if (isSuccess && data?.status === "OK") {
  //     alert("Đăng nhập thành công!");
  //     router.push("/home");
  //   } else if (isError) {
  //     alert("Đăng nhập thất bại: " + (error as any)?.message || "Lỗi không xác định!");
  //   }
  // }, [isSuccess, isError]);
  const isPending = false;
  const onSubmit = async (formData: any) => {
    // mutation.mutate(formData);
    const isSuccess = await login(formData.email, formData.password);
    if (isSuccess == true) {
      alert('Đăng nhập thành công!');
      router.push('/home');
    } else {
      return;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-green-600">
        Chào mừng bạn đã quay trở lại
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email không được để trống' })}
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
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 mt-4 rounded-md"
        >
          {isPending ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </button>
      </form>

      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-red-500 text-white py-2 rounded-md">
          Google
        </button>
        <button className="flex-1 bg-blue-600 text-white py-2 rounded-md">
          Facebook
        </button>
        <button className="flex-1 bg-blue-800 text-white py-2 rounded-md">
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
  );
}
