"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DataTable } from './dataTable';
import { columns, posts } from './columns';
import Link from 'next/link';

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
    { value: "OPEN", label: "Đang mở" },
    { value: "REJECTED", label: "Bị từ chối" },
    { value: "PENDING", label: "Đang chờ duyệt" },
  ]
  
type pageProps = {
    // Define your props here
};


const defaultOption = "ALL";
export default function page(props: pageProps) {

    const [postStatus, setPostStatus] = useState<string>(defaultOption);

    const data = posts.filter((post) => {
        if (postStatus === defaultOption) {
          return true;
        }
        return post.status === postStatus;
    })
    return (
        <div className='mx-auto w-3/4'>
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
                <DataTable columns={ columns } data={data} total={posts.length} />
                </CardContent>
            </Card>
        </div>
    );
}