'use client';

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
  name: string;
  status: string;
  deadline: string;
  createdAt: string;
};

export const statusColorMap: Record<string, string> = {
  ACTIVE: 'bg-green-100 text-green-800',
  OPEN: 'bg-green-100 text-green-800',
  CLOSED: 'bg-red-100 text-red-800',
  REJECTED: 'bg-yellow-300 text-gray-800',
  PENDING: 'bg-yellow-100 text-yellow-800',
};

export const statusLabelMap: Record<string, string> = {
  ACTIVE: 'Đang mở',
  CLOSED: 'Đã đóng',
  REJECTED: 'Bị từ chối',
  PENDING: 'Đang chờ duyệt',
};
