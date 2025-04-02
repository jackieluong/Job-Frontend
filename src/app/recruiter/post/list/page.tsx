"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useEffect, useRef, useState } from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DataTable } from './dataTable';
import {  initPosts, Post, statusColorMap, statusLabelMap } from './columns';
import Link from 'next/link';
import { ColumnDef } from '@tanstack/react-table';
import { Switch } from '@/components/ui/switch';
import { ArrowUpDown, Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { pages } from 'next/dist/build/templates/app-page';
import * as JobService from "@/services/jobService";
import { useAuth } from '@/store/userStore';
import { formatDate } from '@/lib/utils';
  // const jobPostings = [
  //   {
  //     title: "Frontend Developer",
  //     status: "Open",
  //     deadline: "2025-04-15",
  //     createdAt: "2025-03-20",
  //   },
  //   {
  //     title: "Backend Engineer",
  //     status: "Closed",
  //     deadline: "2025-03-10",
  //     createdAt: "2025-02-25",
  //   },
  //   {
  //     title: "UI/UX Designer",
  //     status: "Open",
  //     deadline: "2025-04-20",
  //     createdAt: "2025-03-18",
  //   },
  //   {
  //     title: "DevOps Engineer",
  //     status: "Pending",
  //     deadline: "2025-04-05",
  //     createdAt: "2025-03-15",
  //   },
  //   {
  //     title: "Full Stack Developer",
  //     status: "Open",
  //     deadline: "2025-04-25",
  //     createdAt: "2025-03-22",
  //   },
  // ];
  
  
  const postStatusOptions = [
    { value: "ALL", label: "Tất cả" },
    { value: "CLOSED", label: "Đã đóng" },
    { value: "ACTIVE", label: "Đang mở" },
    { value: "REJECTED", label: "Bị từ chối" },
    { value: "PENDING", label: "Đang chờ duyệt" },
  ]
  
type pageProps = {
    // Define your props here
};


const defaultOption = "ALL";
export default function page(props: pageProps) {

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>(initPosts);
    const [postStatus, setPostStatus] = useState<string | null>(defaultOption);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    
    const totalPosts = useRef<number>(0);
    const pageCount = useRef<number>(0);

    const{user}  = useAuth();


    useEffect(() => {
      const fetchPosts = async () => {
        try {
          setIsLoading(true);
          if(!user) return;
          const data = await JobService.getPostByCompany(user.id || -1, postStatus, currentPage+1, pageSize, null, null );
          
          totalPosts.current = data.totalElement;
          pageCount.current = data.totalPage
          setPosts(data.data);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      }

      fetchPosts();
      setIsLoading(false);
    },[currentPage, pageSize, user, postStatus])

    // const data = posts.filter((post) => {
    //     if (postStatus === defaultOption) {
    //       return true;
    //     }
    //     return post.status === postStatus;
    // })
    // const data = posts;
    
    const handleSwitchStatus = async (post: Post, newStatus: string) =>{
      console.log("Switch status", newStatus);
      if (post.status === "REJECTED" || post.status === "PENDING") return;
      setPosts(prevPosts => 
        prevPosts.map(p => 
          p.id === post.id ? { ...p, status: newStatus } : p
        )
      );
      await JobService.updateJobPostStatus(Number.parseInt(post.id), newStatus);

    }
    const columns: ColumnDef<Post>[] = [
      {
        accessorKey: 'name',
        header: 'Tiêu đề bài đăng',
        // cell: ({ row }) => <div className="font-medium flex-grow">{row.getValue("title")}</div>,
        cell: ({ row }) => (
          <div className="flex flex-col gap-1">
            <div className="font-medium min-w-[200px] max-w-[500px] break-words">
              {row.original.name }
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
    
        header: "Mở/Đóng tin",
        cell: ({ row }) =>  {
          const status = row.original.status;
          const isDisabled = status === "PENDING" || status === "REJECTED";
          
         return (
        <Switch 
        checked={status  === "ACTIVE"} 
        disabled={isDisabled}
        onCheckedChange={(checked) => handleSwitchStatus(row.original, checked ? "ACTIVE" : "CLOSED")}
        className={isDisabled ? "opacity-50 cursor-not-allowed" : ""}
        > </Switch>)
        }
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
        cell: ({ row }) => <div className="pl-2">{formatDate( row.getValue('createdAt'))}</div>,
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
        cell: ({ row }) => <div className="pl-2">{formatDate(row.getValue('deadline'))}</div>,
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
    
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
        </div>
      );
    }
    return (
      <div className='lg:mx-auto w-full lg:w-3/4'>
            
            <Card className='border-b-2'>
                <CardHeader className='flex flex-row justify-between'>
                    <CardTitle className='flex items-center'>Quản lý bài đăng</CardTitle>
                    <div>
                    <Button variant="default" size="lg"><Link href="/recruiter/post/create"> Tạo bài đăng</Link></Button>
                    </div>
                </CardHeader>
            </Card>

            <Card className='mt-4'>
                <CardHeader>
                    <div className='flex items-center w-1/4'>
                    <Select name='option' defaultValue={defaultOption} onValueChange={(value) => setPostStatus(value)}  >
          <SelectTrigger>
            <SelectValue placeholder="Trạng thái bài đăng" />
          </SelectTrigger>
          <SelectContent>
            {postStatusOptions.map((postStatus, index) => (
              <SelectItem key={index} value={postStatus.value}>
                {postStatus.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
                    </div>
                </CardHeader>
                <CardContent>
                <DataTable columns={ columns } data={posts} total={totalPosts.current} 
                currentPage={currentPage} onPageChange={setCurrentPage}
                pageSize={pageSize} onPageSizeChange={setPageSize}
                pageCount={pageCount.current}
                />
                </CardContent>
            </Card>
        </div>
    );
}