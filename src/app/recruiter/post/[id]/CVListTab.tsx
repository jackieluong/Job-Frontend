import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CV, JobPostingInfo } from '@/lib/interface';
import React, { useRef, useState } from 'react';
import { DataTable } from '../list/dataTable';
import { CVStatusOptions } from '@/data/options';


import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { formatDate } from '@/lib/utils';
import CVDialog, { CVDialogRef } from './CVDialog';

export type CV = {
  id: string;
  jobTitle: string;
  status: string;
  name: string;
  createdAt: string;
};

// Status mappings for colors & labels
const statusColorMap: Record<string, string> = {
  APPROVED: "bg-green-100 text-green-800",
  REJECTED: "bg-red-400 text-gray-800",
  PENDING: "bg-yellow-100 text-yellow-800",
  REVIEWED: "bg-blue-100 text-blue-800",
};

const statusLabelMap: Record<string, string> = {
  APPROVED: "Đã chấp nhận",
  REVIEWED: "Đã xem",
  REJECTED: "Từ chối",
  PENDING: "Đang chờ duyệt",
};

// Date formatter


type CVListTabProps = {
  // Define your props here
  job: JobPostingInfo;
};

const defaultOption = CVStatusOptions[0].value;


export default function CVListTab({ job }: CVListTabProps) {
    const cvsData: CV[] = [
        {
          id: "1",
          name: "John Doe",
          email: "johndoe@example.com",
          jobTitle: job.title,
          url: "https://cdn.prod.website-files.com/6551c9f17224e2b0e729fba4/65d581a5dca4b054b6980098_Budapest.jpg",
          status: "PENDING",
          createdAt: "2025-03-20T10:00:00Z",
          updatedAt: "2025-03-21T12:00:00Z",
        },
        {
          id: "2",
          name: "Jane Smith",
          email: "janesmith@example.com",
          url: "https://www.topcv.vn/vi/mau-cv-tham-vong.webp?v=3.0",
          jobTitle: job.title,
          status: "APPROVED",
          createdAt: "2025-03-19T09:30:00Z",
          updatedAt: "2025-03-22T08:45:00Z",
        },
        {
          id: "3",
          name: "Alice Johnson",
          email: "alicejohnson@example.com",
          url: "https://example.com/cv3.pdf",
          jobTitle: job.title,
          status: "REJECTED",
          createdAt: "2025-03-18T14:15:00Z",
          updatedAt: "2025-03-22T14:00:00Z",
        },
        {
          id: "4",
          name: "Michael Brown",
          email: "michaelbrown@example.com",
          url: "https://example.com/cv4.pdf",
          jobTitle: job.title,
          status: "REVIEWED",
          createdAt: "2025-03-17T11:10:00Z",
          updatedAt: "2025-03-21T09:20:00Z",
        },
        {
          id: "5",
          name: "Sophia Wilson",
          email: "sophiawilson@example.com",
          url: "https://example.com/cv5.pdf",
          status: "PENDING",
          jobTitle: job.title,
          createdAt: "2025-03-21T15:40:00Z",
          updatedAt: "2025-03-22T10:30:00Z",
        },
        {
            id: "6",
            name: "Alice Johnson",
            email: "alicejohnson@example.com",
            url: "https://example.com/cv3.pdf",
            jobTitle: job.title,
            status: "REJECTED",
            createdAt: "2025-03-18T14:15:00Z",
            updatedAt: "2025-03-22T14:00:00Z",
          },
          {
            id: "7",
            name: "Alice Johnson",
            email: "alicejohnson@example.com",
            url: "https://example.com/cv3.pdf",
            jobTitle: job.title,
            status: "REJECTED",
            createdAt: "2025-03-18T14:15:00Z",
            updatedAt: "2025-03-22T14:00:00Z",
          },
      ];
    const [cvStatus, setCvStatus] = useState<string>(defaultOption);
    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    
    const [cvs, setCvs] = useState<CV[]>(cvsData);

    const handleCVStatusChange = (value: string) => {
      setCvStatus(value);
      setCurrentPage(1);
    }
    const handleChangeStatus = (cv: CV, newStatus: string) =>{
      console.log(cv);
      setCvs((prevCvs) =>
        prevCvs.map((item) =>
          item.id === cv.id ? { ...item, status: newStatus } : item
        )
      );
    }
    // const [selectedCV, setSelectedCV] = useState<CV | null>(null);
    const cvDialogRef = useRef<CVDialogRef>(null);

    
 const columns: ColumnDef<CV>[] = [
        {
          accessorKey: "name",
          header: "Ứng viên",
          cell: ({ row }) => (
              <div className="font-medium ">
                {row.getValue("name")}
              </div>
            
          ),
        },
        {
          accessorKey: "jobTitle",
          header: "Vị trí",
          cell: ({ row }) => (
            
              <div className=" break-words ">
                {row.getValue("jobTitle")}
              </div>
            
      
          ),
        },
        
        {
          accessorKey: "email",
          header: "Thông tin liên hệ",
          cell: ({ row }) => (
            <div className="flex flex-col gap-1">
              <div className=" break-words ">
                {row.getValue("email")}
              </div>
            
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
          cell: ({ row }) => <div className="pl-2">{formatDate(row.getValue("createdAt"))}</div>,
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
                
                  <Button size="sm" variant="outline" onClick={() => cvDialogRef.current?.openDialog(row.original)}>Xem</Button>
            
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

    console.log("Rerender")
  return (
    <div>
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
          <DataTable columns={columns} data={data} total={cvs.length} currentPage={currentPage} onPageChange={setCurrentPage} />
        </CardContent>
      </Card>


      {/* CV Preview Dialog */}
      {/* <Dialog >
        <DialogContent className="max-w-4xl h-[90vh] overflow-auto">
          <DialogHeader className="flex flex-col items-center gap-4 lg:flex lg:flex-row lg:gap-51">
            <DialogTitle>Chi tiết CV</DialogTitle>
            <Link href={selectedCV ? selectedCV.url : "#"}><Button>Tải về</Button> </Link>
            </DialogHeader>
            <DialogDescription>
              <div className="flex flex-col gap-4 lg:flex lg:flex-row lg:gap-24">
                <div className='flex flex-col gap-4'>
                <p><strong>Ứng viên:</strong> {selectedCV?.name}</p>
                <p><strong>Email:</strong> {selectedCV?.email}</p>
                <p><strong>Ngày tạo:</strong> {selectedCV ? formatDate(selectedCV.createdAt) : ""}</p>
                </div>
                <div className='flex flex-col gap-4'>
                <p><strong>Vị trí:</strong> {selectedCV?.jobTitle}</p>
                <p><strong>Trạng thái:</strong> {statusLabelMap[selectedCV?.status || ""]}</p>
                
                </div>
                
                
              </div>
            </DialogDescription>
          

          
          {selectedCV?.url ? (
            <iframe
              src={selectedCV.url}
              className="w-full h-[60vh] border rounded-md"
              title="CV Preview"
            ></iframe>
          ) : (
            <p className="text-gray-500 text-center">Không có CV để hiển thị.</p>
          )}
        </DialogContent>
      </Dialog> */}
      <CVDialog ref={cvDialogRef}></CVDialog>
    </div>
  );
}
