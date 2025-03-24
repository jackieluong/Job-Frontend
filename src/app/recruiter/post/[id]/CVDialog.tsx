// import React from 'react';
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Button } from '@/components/ui/button';
// import { CV } from '@/lib/interface';
// import { formatDate } from '@/lib/utils';

// type CVDialogProps = {
//     // Define your props here
//     cv: CV;
// };
// const statusLabelMap: Record<string, string> = {
//     APPROVED: "Đã chấp nhận",
//     REVIEWED: "Đã xem",
//     REJECTED: "Bị từ chối",
//     PENDING: "Đang chờ duyệt",
//   };
// export default function CVDialog({cv}: CVDialogProps) {
//     return (
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button size="sm" variant="outline">Xem</Button>
//           </DialogTrigger>
//           <DialogContent className="max-w-4xl h-[80vh]">
//             <DialogHeader>
//               <DialogTitle>Chi tiết CV</DialogTitle>
//               <DialogDescription>
//                 <div className="space-y-2">
//                   <p><strong>Ứng viên:</strong> {cv.name}</p>
//                   <p><strong>Email:</strong> {cv.email}</p>
//                   <p><strong>Vị trí:</strong> {cv.jobTitle}</p>
//                   <p><strong>Trạng thái:</strong> {statusLabelMap[cv.status]}</p>
//                   <p><strong>Ngày tạo:</strong> {formatDate(cv.createdAt)}</p>
//                 </div>
//               </DialogDescription>
//             </DialogHeader>

//             {/* CV Preview (iframe) */}
//             {cv.url ? (
//               <iframe
//                 src={cv.url}
//                 className="w-full h-[60vh] border rounded-md"
//                 title="CV Preview"
//               ></iframe>
//             ) : (
//               <p className="text-gray-500 text-center">Không có CV để hiển thị.</p>
//             )}
//           </DialogContent>
//         </Dialog>
//       );
// }

import { forwardRef, useImperativeHandle, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import React from 'react';
import { CV } from '@/lib/interface';
import { Span } from 'next/dist/trace';
// export type CV = {
//   id: string;
//   name: string;
//   email: string;
//   createdAt: string;
//   url?: string;
// };
const statusLabelMap: Record<string, string> = {
  APPROVED: 'Đã chấp nhận',
  REVIEWED: 'Đã xem',
  REJECTED: 'Bị từ chối',
  PENDING: 'Đang chờ duyệt',
};

export type CVDialogRef = {
  openDialog: (cv: CV) => void;
};

const CVDialog = forwardRef<CVDialogRef, {}>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCV, setSelectedCV] = useState<CV | null>(null);

  // Expose `openDialog` method to parent
  useImperativeHandle(ref, () => ({
    openDialog: (cv: CV) => {
      setSelectedCV(cv);
      setIsOpen(true);
    },
  }));

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} >
      <DialogContent className="max-w-4xl h-[90vh] overflow-auto">
        <DialogHeader className="flex flex-col items-center gap-4 lg:flex lg:flex-row lg:gap-60">
          <DialogTitle>Chi tiết CV</DialogTitle>
          <Link href={selectedCV ? selectedCV.url : '#'}>
            <Button>Tải về</Button>{' '}
          </Link>
        </DialogHeader>
        {/* <DialogContent> */}
          <div className="flex flex-col gap-4 lg:flex lg:flex-row lg:gap-24 mb-3">
            <div className="flex flex-col gap-4">
              <div>
                <strong>Ứng viên:</strong> {selectedCV?.name}
              </div>
              <div>
                <strong>Email:</strong> {selectedCV?.email}
              </div>
              <div>
                <strong>Ngày tạo:</strong>{' '}
                {selectedCV ? formatDate(selectedCV.createdAt) : ''}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <strong>Vị trí:</strong> {selectedCV?.jobTitle}
              </div>
              <div>
                <strong>Trạng thái:</strong>{' '}
                {statusLabelMap[selectedCV?.status || '']}
              </div>
            </div>
          </div>

          {selectedCV?.coverLetter && (
            <>
              <div>
                <strong> Thư giới thiệu</strong>
              </div>
              <div className="border p-4 mx-auto w-full h-40 rounded-md overflow-auto bg-white">
                <textarea
                  className="w-full h-full resize-none bg-transparent border-none outline-none text-sm text-gray-700"
                  readOnly
                  value={selectedCV?.coverLetter || ''}
                />
              </div>
            </>
          )}
        {/* </DialogContent> */}

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
    </Dialog>
  );
});

CVDialog.displayName = 'CVDialog'; // Required for debugging in React DevTools
export default CVDialog;
