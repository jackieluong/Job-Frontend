import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CV, JobDetail, JobPostingInfo } from '@/lib/interface';
import React, { useEffect, useRef, useState } from 'react';
import { DataTable } from '../list/dataTable';
import { CVStatusOptions } from '@/data/options';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Clock, Loader2, Mail } from 'lucide-react';

import Link from 'next/link';

import { formatDate } from '@/lib/utils';
import CVDialog, { CVDialogRef } from './CVDialog';
import page from './page';
import { getCVByJob, updateCVStatus } from '@/services/applyService';
import { CVStatusColorMap, CVStatusLabelMap } from '@/data/map';
import { CVStatus, JobStatus } from '@/lib/enums';



// Date formatter

type CVListTabProps = {
  // Define your props here
  job: JobDetail;
};

const defaultOption = CVStatusOptions[0].value;

export default function CVListTab({ job }: CVListTabProps) {
  const cvsData: CV[] = [
    {
      id: '7',
      name: 'John Doe',
      email: 'johndoe@example.com',
      jobTitle: job.title,
      role: 'APPLICANT',
      url: 'https://cdn.prod.website-files.com/6551c9f17224e2b0e729fba4/65d581a5dca4b054b6980098_Budapest.jpg',
      status: 'PENDING',
      createdAt: '2025-03-20T10:00:00Z',
      updatedAt: '2025-03-21T12:00:00Z',
    },
    {
      id: '25',
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      role: 'APPLICANT',
      url: 'https://www.topcv.vn/vi/mau-cv-tham-vong.webp?v=3.0',
      jobTitle: job.title,
      status: 'APPROVED',
      createdAt: '2025-03-19T09:30:00Z',
      updatedAt: '2025-03-22T08:45:00Z',
    },
    {
      id: '36',
      name: 'Alice Johnson',
      email: 'alicejohnson@example.com',
      url: 'https://example.com/cv3.pdf',
      jobTitle: job.title,
      role: 'APPLICANT',
      status: 'REJECTED',
      createdAt: '2025-03-18T14:15:00Z',
      updatedAt: '2025-03-22T14:00:00Z',
    },
    {
      id: '47',
      name: 'Michael Brown',
      email: 'michaelbrown@example.com',
      url: 'https://example.com/cv4.pdf',
      jobTitle: job.title,
      role: 'COMPANY',
      status: 'REVIEWED',
      createdAt: '2025-03-17T11:10:00Z',
      updatedAt: '2025-03-21T09:20:00Z',
    },
    {
      id: '56',
      name: 'Sophia Wilson',
      email: 'sophiawilson@example.com',
      url: 'https://example.com/cv5.pdf',
      status: 'PENDING',
      role: 'ADMIN',
      jobTitle: job.title,
      createdAt: '2025-03-21T15:40:00Z',
      updatedAt: '2025-03-22T10:30:00Z',
    },
    {
      id: '62',
      name: 'Alice Johnson',
      email: 'alicejohnson@example.com',
      url: 'https://example.com/cv3.pdf',
      jobTitle: job.title,
      status: 'REJECTED',
      role: 'ADMIN',
      createdAt: '2025-03-18T14:15:00Z',
      updatedAt: '2025-03-22T14:00:00Z',
    },
    {
      id: '7',
      name: 'Alice Johnson',
      email: 'alicejohnson@example.com',
      url: 'https://example.com/cv3.pdf',
      jobTitle: job.title,
      role: 'APPLICANT',
      status: 'REJECTED',
      createdAt: '2025-03-18T14:15:00Z',
      updatedAt: '2025-03-22T14:00:00Z',
    },
  ];
  const [cvStatus, setCvStatus] = useState<string>(defaultOption);
  const [currentPage, setCurrentPage] = useState(0); // Track the current page
  const [pageSize, setPageSize] = React.useState(5); // Store page
  const [cvs, setCvs] = useState<CV[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const totalCVs = useRef<number>(0);
  const pageCount = useRef<number>(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        if (!job) return;
        const data = await getCVByJob(Number.parseInt(job.id), cvStatus, currentPage + 1, pageSize, null, null,
        );

        totalCVs.current = data.totalElement;
        pageCount.current = data.totalPage;
        setCvs(data.data);

      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
    setIsLoading(false);
  }, [currentPage, pageSize, job, cvStatus]);

  const handleCVStatusChange = (value: string) => {
    setCvStatus(value);
    setCurrentPage(0);
  };
  const handleChangeStatus = async (cv: CV, newStatus: string) => {
    setCvs((prevCvs) =>
      prevCvs.map((item) =>
        item.id == cv.id ? { ...item, applyStatus: newStatus } : item,
      ),
    );

    const res = await updateCVStatus(Number.parseInt(cv.id), newStatus);
    
    
  };

  const handleClickViewCV = (cv: CV) => {
    if (cv.applyStatus === CVStatus.PENDING) {
      handleChangeStatus(cv, CVStatus.SEEN);
    }
    console.log(cv);
    cvDialogRef.current?.openDialog(cv);
  };
  // const [selectedCV, setSelectedCV] = useState<CV | null>(null);
  const cvDialogRef = useRef<CVDialogRef>(null);

  const columns: ColumnDef<CV>[] = [
    {
      accessorKey: 'jobName',
      header: 'Vị trí',
      cell: ({ row }) => (
        <div className="font-medium break-words ">
          {row.original.jobName}
        </div>
      ),
    },
    {
      accessorKey: 'name',
      header: 'Ứng viên',
      cell: ({ row }) => (
        <div className="font-medium ">{row.original.userName}</div>
      ),
    },
    {
      accessorKey: 'email',
      header: 'Thông tin liên hệ',
      cell: ({ row }) => (
        <div className="flex gap-2 break-words ">
          <Mail className="h-4 w-4 text-gray-400" />
          <span className="">{row.getValue('email')}</span>
        </div>
      ),
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
      cell: ({ row }) => (
        <div className="pl-2 flex gap-2">
          <Clock className="h-4 w-4 text-gray-400" />
          {formatDate(row.getValue('createdAt'))}
        </div>
      ),
    },
    {
      accessorKey: 'status',
      header: 'Trạng thái',
      cell: ({ row }) => {
        const status = row.original.applyStatus as string;
        return (
          <Badge
            className={`py-1 rounded-full flex justify-center whitespace-nowrap  ${CVStatusColorMap[status] || 'bg-gray-100 text-gray-800'}`}
          >
            {CVStatusLabelMap[status] || status}
          </Badge>
        );
      },
      size: 300,
    },
    {
      header: 'Thao tác',
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleClickViewCV(row.original)}
            >
              Xem
            </Button>

            <Button
              size="sm"
              className="bg-green-400 text-white hover:bg-green-600"
              onClick={() => handleChangeStatus(row.original, CVStatus.ACCEPTED)}
            >
              Chấp nhận
            </Button>
            <Button
              size="sm"
              variant="destructive"
              className="bg-red-500 text-white hover:bg-red-600"
              onClick={() => handleChangeStatus(row.original, CVStatus.REJECTED)}
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
    return cv.applyStatus === cvStatus;
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

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
          <DataTable
            columns={columns}
            data={data}
            total={totalCVs.current}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            pageSize={pageSize}
            onPageSizeChange={setPageSize}
            pageCount={pageCount.current}
          />
        </CardContent>
      </Card>

      {/* CV Preview Dialog */}

      <CVDialog ref={cvDialogRef}></CVDialog>
    </div>
  );
}
