// 'use client';

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useRouter } from 'next/navigation';
// import { postRegister } from '@/services/userService'; // ✅ dùng đúng tên hàm export default
// import toast from 'react-hot-toast';
// import { Button } from '@/components/ui/button';

// export default function Page() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const router = useRouter();

//   const onSubmit = async (formData: any) => {
//     try {
//       const response = await postRegister(formData); // ✅ Gọi đúng
//       if (response?.status === 'CREATED') {
//         toast.success('Đăng ký thành công! Vui lòng đăng nhập.', {
//           position: 'top-center',
//         });
//         router.push('/login');
//       } else {
//         toast.error(response?.data?.message || 'Đăng ký thất bại!', {
//           position: 'top-center',
//         });
//       }
//     } catch (error: any) {
//       toast.error(error?.response?.data?.message || error.message || 'Lỗi khi đăng ký!', {
//         position: 'top-center',
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="max-w-md w-full p-6">
//           <h2 className="text-2xl font-bold text-center text-green-600">
//             Tạo tài khoản mới
//           </h2>
//           <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
//             <div>
//               <label className="block text-sm font-medium">Tên</label>
//               <input
//                 type="text"
//                 {...register('name', { required: 'Tên không được để trống' })}
//                 className="mt-1 w-full px-3 py-2 border rounded-md"
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-sm">{errors.name.message}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Email</label>
//               <input
//                 type="email"
//                 {...register('email', { required: 'Email không được để trống' })}
//                 className="mt-1 w-full px-3 py-2 border rounded-md"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm">{errors.email.message}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Mật khẩu</label>
//               <input
//                 type="password"
//                 {...register('password', { required: 'Mật khẩu không được để trống' })}
//                 className="mt-1 w-full px-3 py-2 border rounded-md"
//               />
//               {errors.password && (
//                 <p className="text-red-500 text-sm">{errors.password.message}</p>
//               )}
//             </div>

//             <Button type="submit" variant="default" className="w-full text-white py-2">
//               Đăng ký
//             </Button>
//           </form>

//           <p className="text-center mt-4 text-sm">
//             Bạn đã có tài khoản?{' '}
//             <a href="/login" className="text-green-600">
//               Đăng nhập
//             </a>
//           </p>
//         </div>

//         <div className="w-68 h-auto">
//           <img src="/assets/loginpage.png" alt="Register" className="h-full object-contain" />
//         </div>
//       </div>
//     </div>
//   );
// }





'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { postRegister } from '@/services/userService'; // ✅ dùng đúng tên hàm export default
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (formData: any) => {
    try {
      const response = await postRegister(formData); // ✅ Gọi đúng
      if (response?.status === 'CREATED') {
        toast.success('Đăng ký thành công! Vui lòng đăng nhập.', {
          position: 'top-center',
        });
        router.push('/login');
      } else {
        toast.error(response?.data?.message || 'Đăng ký thất bại!', {
          position: 'top-center',
        });
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message || 'Lỗi khi đăng ký!', {
        position: 'top-center',
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {/* Form login */}
      <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
        <div className="max-w-md w-full p-6">
          <h2 className="text-2xl font-bold text-center text-green-600">
            Tạo tài khoản mới
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium">Tên</label>
              <input
                type="text"
                {...register('name', { required: 'Tên không được để trống' })}
                className="mt-1 w-full px-3 py-2 border rounded-md"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

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

            <div>
              <label className="block text-sm font-medium">Mật khẩu</label>
              <input
                type="password"
                {...register('password', { required: 'Mật khẩu không được để trống' })}
                className="mt-1 w-full px-3 py-2 border rounded-md"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            <Button type="submit" variant="default" className="w-full text-white py-2">
              Đăng ký
            </Button>
          </form>

          <p className="text-center mt-4 text-sm">
            Bạn đã có tài khoản?{' '}
            <a href="/login" className="text-green-600">
              Đăng nhập
            </a>
          </p>
        </div>

        {/* Ảnh kế bên form, cao bằng form */}
        <div className="w-98 ">
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
