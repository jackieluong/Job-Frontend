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

export const posts: Post[] = [
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

const statusColorMap: Record<string, string> = {
  OPEN: 'bg-green-100 text-green-800',
  CLOSED: 'bg-red-100 text-red-800',
  REJECTED: 'bg-yellow-300 text-gray-800',
  PENDING: 'bg-yellow-100 text-yellow-800',
};

const statusLabelMap: Record<string, string> = {
  OPEN: 'Đang mở',
  CLOSED: 'Đã đóng',
  REJECTED: 'Bị từ chối',
  PENDING: 'Đang chờ duyệt',
};
export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: 'title',
    header: 'Tiêu đề bài đăng',
    // cell: ({ row }) => <div className="font-medium flex-grow">{row.getValue("title")}</div>,
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        <div className="font-medium min-w-[200px] max-w-[500px] break-words">
          {row.getValue('title')}
        </div>
        <div className="flex flex-col lg:flex lg:flex-row  gap-2 ">
          <Link
            href="#"
            className="text-sm text-gray-500 lg:pr-2 lg:border-r-2"
          >
            Sửa tin
          </Link>
          <Link
            href={`/recruiter/post/${row.original.id}`}
            className="text-sm text-gray-500 lg:pr-2 lg:border-r-2"
          >
            Xem chi tiết
          </Link>
          <Link
            href={{
              pathname: `/recruiter/post/${row.original.id}`,
              query: { activeTab: 1 },
            }}
            className="text-sm text-gray-500 "
          >
            Xem danh sách CV
          </Link>
        </div>
      </div>
    ),
    // maxSize: 300,
    // minSize: 200,
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="flex items-center justify-start"
      >
        Ngày tạo <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="pl-2">{row.getValue('createdAt')}</div>,
  },
  {
    accessorKey: 'deadline',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="flex items-center justify-start"
      >
        Hạn nộp <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="pl-2">{row.getValue('deadline')}</div>,
  },
  {
    accessorKey: 'status',
    header: 'Trạng thái',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <Badge
          className={`px-3 py-1 rounded-full ${statusColorMap[status] || 'bg-gray-100 text-gray-800'}`}
        >
          {statusLabelMap[status] || status}
        </Badge>
      );
    },
  },
];
