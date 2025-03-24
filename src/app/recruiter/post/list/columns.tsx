// "use client"

// import { Button } from "@/components/ui/button"
// import { ColumnDef } from "@tanstack/react-table"
// import { ArrowUpDown } from "lucide-react"
// import React from "react"

// export type Post = {
//     id: string,
//     title: string,
//     status: string,
//     deadline: string,
//     createdAt: string,
// }

// export const posts: Post[] = [
//     {
//         id: '1',
//         title: 'Frontend Developer',
//         status: 'Open',
//         deadline: '2025-04-15',
//         createdAt: '2025-03-20',
//     },
//     {
//         id: '2',
//         title: 'Backend Engineer',
//         status: 'Closed',
//         deadline: '2025-03-10',
//         createdAt: '2025-02-25',
//     },
//     {
//         id: '3',
//         title: 'UI/UX Designer',
//         status: 'Open',
//         deadline: '2025-04-20',
//         createdAt: '2025-03-18',
//     },
//     {
//         id: '4',
//         title: 'DevOps Engineer',
//         status: 'Pending',
//         deadline: '2025-04-05',
//         createdAt: '2025-03-15',
//     },
//     {
//         id: '5',
//         title: 'Full Stack Developer',
//         status: 'Open',
//         deadline: '2025-04-25',
//         createdAt: '2025-03-22',
//     },
// ]

// export const columns: ColumnDef<Post>[] = [
// //   {
// //     accessorKey: "id",
// //     header: "ID",
// //   },
//   {
//     accessorKey: "title",
//     header: "Tiêu đề bài đăng",
//   },

//   {
//     accessorKey: "createdAt",
//     header: ({ column }) => {
//         return (
//             <div className="text-left">
//           <Button

//             variant="ghost"
//             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//           >
//             Ngày tạo
//             <ArrowUpDown className="ml-2 h-4 w-4" />
//           </Button>
//           </div>
//         )
//       },
//       cell: ({ row }) => {
//         const createdAt = (row.getValue("createdAt"))

//         return <div className="text-left font-medium">{createdAt}</div>
//       }
//   },
//   {
//     accessorKey: "deadline",
//     header: ({ column }) => {
//         return (
//           <Button
//             variant="ghost"
//             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//           >
//             Hạn nộp
//             <ArrowUpDown className="ml-2 h-4 w-4" />
//           </Button>
//         )
//       },
//   },
//   {
//     accessorKey: "status",
//     header: "Trạng thái",

//   },

// ]
'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import {Switch} from '@/components/ui/switch';
export const initPosts: Post[] = [
  {
    id: '1',
    title:
      'SENIOR FRONTEND /BACKEND / FULLSTACK DEVELOPER ( ReactJS, TypeScript, NodeJS, LARAVEL) ',
    status: 'OPEN',
    deadline: '2025-04-15',
    createdAt: '2025-03-20',
  },
  {
    id: '2',
    title: 'Backend Engineer',
    status: 'CLOSED',
    deadline: '2025-03-10',
    createdAt: '2025-02-25',
  },
  {
    id: '3',
    title: 'UI/UX Designer',
    status: 'PENDING',
    deadline: '2025-04-20',
    createdAt: '2025-03-18',
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    status: 'OPEN',
    deadline: '2025-04-05',
    createdAt: '2025-03-15',
  },
  {
    id: '5',
    title: 'Full Stack Developer',
    status: 'REJECTED',
    deadline: '2025-04-25',
    createdAt: '2025-03-22',
  },
  {
    id: '1',
    title:
      'SENIOR FRONTEND /BACKEND / FULLSTACK DEVELOPER ( ReactJS, TypeScript, NodeJS, LARAVEL) ',
    status: 'OPEN',
    deadline: '2025-04-15',
    createdAt: '2025-03-20',
  },
  {
    id: '1',
    title:
      'SENIOR FRONTEND /BACKEND / FULLSTACK DEVELOPER ( ReactJS, TypeScript, NodeJS, LARAVEL) ',
    status: 'OPEN',
    deadline: '2025-04-15',
    createdAt: '2025-03-20',
  },
  {
    id: '1',
    title:
      'SENIOR FRONTEND /BACKEND / FULLSTACK DEVELOPER ( ReactJS, TypeScript, NodeJS, LARAVEL) ',
    status: 'OPEN',
    deadline: '2025-04-15',
    createdAt: '2025-03-20',
  },
  {
    id: '1',
    title:
      'SENIOR FRONTEND /BACKEND / FULLSTACK DEVELOPER ( ReactJS, TypeScript, NodeJS, LARAVEL) ',
    status: 'OPEN',
    deadline: '2025-04-15',
    createdAt: '2025-03-20',
  },
];

export type Post = {
  id: string;
  title: string;
  status: string;
  deadline: string;
  createdAt: string;
};

export const statusColorMap: Record<string, string> = {
  OPEN: 'bg-green-100 text-green-800',
  CLOSED: 'bg-red-100 text-red-800',
  REJECTED: 'bg-yellow-300 text-gray-800',
  PENDING: 'bg-yellow-100 text-yellow-800',
};

export const statusLabelMap: Record<string, string> = {
  OPEN: 'Đang mở',
  CLOSED: 'Đã đóng',
  REJECTED: 'Bị từ chối',
  PENDING: 'Đang chờ duyệt',
};
