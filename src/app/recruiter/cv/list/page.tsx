"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CV } from '@/lib/interface';
import { ArrowUpDown, Clock, Mail, Search } from "lucide-react";
import React, { useRef, useState } from 'react';
import CVDialog, { CVDialogRef } from '../../post/[id]/CVDialog';
import { DataTable } from '../../post/list/dataTable';
import { Select, SelectContent, SelectItem, SelectSeparator, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import { CVStatusOptions } from '@/data/options';
import { statusColorMap, statusLabelMap } from '@/data/map';
import Link from 'next/link';

const cvsData: CV[] = [
    {
      id: "100",
      name: "John Doe",
      email: "johndoe@example.com",
      jobTitle: "Product Owner (Domain: Core Bank/Core Finance Hoặc Xử Lý Nợ",
      jobId: "1",
        role:"APPLICANT",
      url: "https://cdn.prod.website-files.com/6551c9f17224e2b0e729fba4/65d581a5dca4b054b6980098_Budapest.jpg",
      status: "PENDING",
      coverLetter:"Hello cover letter",
      createdAt: "2025-03-20T10:00:00Z",
      updatedAt: "2025-03-21T12:00:00Z",
    },
    {
      id: "222",
      name: "Jane Smith",
      email: "janesmith@example.com",
      role:"APPLICANT",
      url: "https://www.topcv.vn/vi/mau-cv-tham-vong.webp?v=3.0",
      coverLetter:"Hello cover letter",
      jobTitle: "Software Engineer",
      jobId: "2",
      status: "APPROVED",
      createdAt: "2025-03-19T09:30:00Z",
      updatedAt: "2025-03-22T08:45:00Z",
    },
    {
      id: "34",
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
      role:"APPLICANT",
      url: "https://example.com/cv3.pdf",
      coverLetter:"Hello cover letter",
      jobTitle: "Software Engineer",
      jobId: "2",
      status: "REJECTED",
      createdAt: "2025-03-18T14:15:00Z",
      updatedAt: "2025-03-22T14:00:00Z",
    },
    {
      id: "44",
      name: "Michael Brown",
      email: "michaelbrown@example.com",
      role:"APPLICANT",
      url: "https://example.com/cv4.pdf",
      coverLetter:"Hello cover letter",
       jobTitle: "Software Engineer",
      jobId: "2",
      status: "REVIEWED",
      createdAt: "2025-03-17T11:10:00Z",
      updatedAt: "2025-03-21T09:20:00Z",
    },
    {
      id: "54",
      name: "Sophia Wilson",
      email: "sophiawilson@example.com",
      role:"APPLICANT",
      url: "https://example.com/cv5.pdf",
      status: "PENDING",
       jobTitle: "Software Engineer",
      jobId: "2",
      createdAt: "2025-03-21T15:40:00Z",
      updatedAt: "2025-03-22T10:30:00Z",
    },
    {
        id: "64",
        name: "Alice Johnson",
        email: "alicejohnson@example.com",
        role:"APPLICANT",
        url: "https://example.com/cv3.pdf",
         jobTitle: "Software Engineer",
      jobId: "2",
        status: "REJECTED",
        createdAt: "2025-03-18T14:15:00Z",
        updatedAt: "2025-03-22T14:00:00Z",
      },
      {
        id: "74",
        name: "Alice Johnson",
        email: "alicejohnson@example.com",
        role:"APPLICANT",
        url: "https://example.com/cv3.pdf",
        jobTitle: "Software Engineer",
        jobId: "5",
        status: "REJECTED",
        createdAt: "2025-03-18T14:15:00Z",
        updatedAt: "2025-03-22T14:00:00Z",
      },
  ];
  const defaultOption = CVStatusOptions[0].value;
export default function Page() {

        const searchKeyword = useRef<string>('');
        const [cvStatus, setCvStatus] = useState<string>(defaultOption);
        const [currentPage, setCurrentPage] = useState(0); // Track the current page
        const [pageSize, setPageSize] = React.useState(5); // Store page 
        const [cvs, setCvs] = useState<CV[]>(cvsData);
    

        // const handleSearchClick = (keyword: string) => {
        //     keyword = keyword.trim();
        //   console.log(keyword);
        //   setSearchKeyword(keyword);
        //   setCurrentPage(0);
        //   const filteredCvs = cvsData.filter((cv) =>
        //     cv.name.toLowerCase().includes(keyword.toLowerCase()) ||
        //     cv.jobTitle.toLowerCase().includes(keyword.toLowerCase())
        // );
        // console.log(filteredCvs);
        // setCvs(filteredCvs);
        // }
        

        
        const handleSearchClick = () => {
         const keyword = searchKeyword.current.trim();
          console.log(keyword);
          
          setCurrentPage(0);
          const filteredCvs = cvsData.filter((cv) =>
            cv.name.toLowerCase().includes(keyword.toLowerCase()) ||
            cv.jobTitle.toLowerCase().includes(keyword.toLowerCase())
        );
        
        setCvs(filteredCvs);
        }
        const handleCVStatusChange = (value: string) => {
          setCvStatus(value);
          setCurrentPage(0);
        }
        const handleChangeStatus = (cv: CV, newStatus: string) =>{
          
          setCvs((prevCvs) =>
            prevCvs.map((item) =>
              item.id === cv.id ? { ...item, status: newStatus } : item
            )
          );
        }
    
        const handleClickViewCV = (cv: CV) => {
          if(cv.status === "PENDING"){
            handleChangeStatus(cv, "REVIEWED");
          }
          
          cvDialogRef.current?.openDialog(cv);
    
        }
        // const [selectedCV, setSelectedCV] = useState<CV | null>(null);
        const cvDialogRef = useRef<CVDialogRef>(null);
    
        
     const columns: ColumnDef<CV>[] = [
            
            {
              accessorKey: "jobTitle",
              header: ({ column }) => (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                  className="flex items-center justify-start !pl-0 "
                >
                  Vị trí <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              ),
              cell: ({ row }) => (
                
                  <Link href={`/recruiter/post/${row.original.jobId}`} className="font-medium break-words  ">
                    {row.getValue("jobTitle")}
                  </Link>
                
          
              ),
            },
            {
              accessorKey: "name",
              header: ({ column }) => (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                  className="flex items-center justify-start !pl-0"
                >
                  Ứng viên <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              ),
              cell: ({ row }) => (
                  <div className="font-medium ">
                    {row.getValue("name")}
                  </div>
                
              ),
            },
            {
              accessorKey: "email",
              header: "Thông tin liên hệ",
              cell: ({ row }) => (
                
                  <div className="flex gap-2 break-words ">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className=''>{row.getValue("email")}</span>
                    
                  </div>
                
                
              ),
            },
            {
              accessorKey: "createdAt",
              header: ({ column }) => (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                  className="flex items-center justify-start"
                >
                  Ngày tạo <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              ),
              cell: ({ row }) => 
              <div className="pl-2 flex gap-2">
                <Clock className="h-4 w-4 text-gray-400" />
                {formatDate(row.getValue("createdAt"))}
                </div>,
            },
            {
              accessorKey: "status",
              header: "Trạng thái",
              cell: ({ row }) => {
                const status = row.getValue("status") as string;
                return (
                  <Badge className={`py-1 rounded-full flex justify-center whitespace-nowrap  ${statusColorMap[status] || "bg-gray-100 text-gray-800"}`}>
                    {statusLabelMap[status] || status}
                  </Badge>
                );
              },
              size: 300
            },
            {
              header: "Thao tác",
              cell: ({ row }) => {
                return (
                  <div className="flex gap-2">
                    
                      <Button size="sm" variant="outline" onClick={() => handleClickViewCV(row.original)}>Xem</Button>
                
                    <Button 
                      size="sm" 
              
                      className="bg-green-400 text-white hover:bg-green-600"
                      onClick={() => handleChangeStatus(row.original, "APPROVED")}
                    >
                      Chấp nhận
                    </Button>
                    <Button 
                      size="sm" 
                      variant="destructive" 
                      className="bg-red-500 text-white hover:bg-red-600"
                      onClick={() => handleChangeStatus(row.original, "REJECTED")}
                    >
                      Từ chối
                    </Button>
                  </div>
                );
              },
            },
          ];
          
        const data = cvs.filter((cv) => {
            if (cvStatus === defaultOption) {
              return true;
            }
            return cv.status === cvStatus;
        })
    

    return (
        <div className='lg:mx-auto w-full lg:w-3/4'>
            <Card>
                <CardHeader className='flex flex-col lg:flex-row items-center gap-4 lg:gap-52'>
                    <CardTitle>Danh sách CV</CardTitle>
                    {/* Search Section */}
                    <div className='flex gap-4 items-center whitespace-nowrap flex-1'>
                        <span className="text-base text-gray-800">Nhập từ khóa</span>
                        <div className="relative flex-1 ">
                            <Button onClick={() => handleSearchClick()} variant="ghost" className="py-0 px-1  absolute hover:bg-blue-200  top-1/2 -translate-y-1/2 w-10 h-13 text-gray-400" >
                            <Search className='w-10 h-10'/>
                            </Button>
                            
                            <Input onChange={(e) => searchKeyword.current = e.target.value} className="pl-10 pr-3 h-[50px] text-sm rounded-xl" placeholder="Tìm kiếm vị trí, tên ứng viên..." />
                        </div>
                    </div>
                </CardHeader>
                
            </Card>

            <Card className="mt-4">
        <CardHeader>
          <div className="flex items-center w-1/4">
            <Select
              name="option"
              defaultValue={defaultOption}
              onValueChange={(value) => handleCVStatusChange(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Trạng thái bài đăng" />
              </SelectTrigger>
              <SelectContent>
                {CVStatusOptions.map((cvStatus, index) => (
                  <SelectItem key={index} value={cvStatus.value}>
                    {cvStatus.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} 
          total={cvs.length} currentPage={currentPage} 
          onPageChange={setCurrentPage} pageSize={pageSize} onPageSizeChange={setPageSize}
        />
        </CardContent>
      </Card>


      {/* CV Preview Dialog */}

      <CVDialog ref={cvDialogRef}></CVDialog>
        </div>
    );
}
