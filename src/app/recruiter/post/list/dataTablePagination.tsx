// // import { Table } from "@tanstack/react-table";
// // import React from "react";
// // import {
// //   Pagination,
// //   PaginationContent,
// //   PaginationItem,
// //   PaginationPrevious,
// //   PaginationNext,
// //   PaginationEllipsis,
// //   PaginationLink,
// // } from "@/components/ui/pagination";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";

// // interface DataTablePaginationProps<TData> {
// //   table: Table<TData>;
// // }

// // export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
// //   const pageCount = table.getPageCount();
// //   const currentPage = table.getState().pagination.pageIndex;
// //   const pageSize = table.getState().pagination.pageSize;
  
// //   return (
// //     <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-10 gap-4">
// //       {/* Rows per page selection */}
// //       <div className="flex items-center space-x-2">
// //         <span className="text-sm font-medium">Rows per page:</span>
// //         <Select
// //           value={`${pageSize}`}
// //           onValueChange={(value) => table.setPageSize(Number(value))}
// //         >
// //           <SelectTrigger className="h-8 w-[80px]">
// //             <SelectValue placeholder={pageSize} />
// //           </SelectTrigger>
// //           <SelectContent side="top">
// //             {[5,10, 20, 30, 50, 100].map((size) => (
// //               <SelectItem key={size} value={`${size}`}>
// //                 {size}
// //               </SelectItem>
// //             ))}
// //           </SelectContent>
// //         </Select>
// //       </div>

// //       {/* Pagination controls */}
// //       <Pagination>
// //         <PaginationContent>
// //           <PaginationItem>
// //             <PaginationPrevious
// //               onClick={() => table.previousPage()}
// //               {...table.getCanPreviousPage() ? }
// //             />
// //           </PaginationItem>

// //           {/* Page numbers */}
// //           {Array.from({ length: pageCount }, (_, i) => i).map((page) => (
// //             <PaginationItem key={page}>
// //               <PaginationLink
// //                 isActive={page === currentPage}
// //                 onClick={() => table.setPageIndex(page)}
// //               >
// //                 {page + 1}
// //               </PaginationLink>
// //             </PaginationItem>
// //           ))}

// //           {pageCount > 5 && <PaginationEllipsis />}

// //           <PaginationItem>
// //             <PaginationNext
// //               onClick={() => table.nextPage()}
// //               disabled={!table.getCanNextPage()}
// //             />
// //           </PaginationItem>
// //         </PaginationContent>
// //       </Pagination>
// //     </div>
// //   );
// // }


// import { Table } from "@tanstack/react-table";
// import React from "react";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationPrevious,
//   PaginationNext,
//   PaginationEllipsis,
//   PaginationLink,
// } from "@/components/ui/pagination";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { cn } from "@/lib/utils"; // Utility for conditional classes

// interface DataTablePaginationProps<TData> {
//   table: Table<TData>;
//   curPage?: number
//   onPageChange?: (page: number) => void
// }

// export function DataTablePagination<TData>({ table, curPage, onPageChange }: DataTablePaginationProps<TData>) {
//   const pageCount = table.getPageCount();
//   // const currentPage = table.getState().pagination.pageIndex;
//   const currentPage = curPage;
//   const pageSize = table.getState().pagination.pageSize;
  
//   return (
//     <div className=" flex flex-col gap-4 md:flex-row md:items-center md:justify-between pb-5 w-full flex-grow">
//       {/* Rows per page selection */}
//       <div className="flex items-center gap-2 pl-4">
//         <span className="text-sm font-medium">Rows per page:</span>
//         <Select
//           value={`${pageSize}`}
//           onValueChange={(value) => table.setPageSize(Number(value))}
//         >
//           <SelectTrigger className="h-8 w-[80px]">
//             <SelectValue placeholder={pageSize} />
//           </SelectTrigger>
//           <SelectContent side="top">
//             {[5,10, 20, 30, 50, 100].map((size) => (
//               <SelectItem key={size} value={`${size}`}>
//                 {size}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Pagination controls */}
//       <Pagination className="mx-4 max-w-1/2">
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious
//               onClick={() => table.previousPage()}
//               className={cn(!table.getCanPreviousPage() && "pointer-events-none opacity-50")}
//             />
//           </PaginationItem>

//           {/* Page numbers */}
//           {Array.from({ length: pageCount }, (_, i) => i).map((page) => (
//             <PaginationItem key={page}>
//               <PaginationLink
//                 isActive={page === currentPage}
//                 onClick={() => table.setPageIndex(page)}
//               >
//                 {page + 1}
//               </PaginationLink>
//             </PaginationItem>
//           ))}

//           {pageCount > 5 && <PaginationEllipsis />}

//           <PaginationItem>
//             <PaginationNext
//               onClick={() => table.nextPage()}
//               className={cn(!table.getCanNextPage() && "pointer-events-none opacity-50")}
//             />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   );
// }

import { Table } from "@tanstack/react-table";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils"; // Utility for conditional classes

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  curPage?: number;
  onPageChange?: (page: number) => void;
}

export function DataTablePagination<TData>({ table, curPage = 0, onPageChange }: DataTablePaginationProps<TData>) {
  const pageCount = table.getPageCount();
  const currentPage = curPage;
  const pageSize = table.getState().pagination.pageSize;
  
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between pb-5 w-full flex-grow">
      {/* Rows per page selection */}
      <div className="flex items-center gap-2 pl-4">
        <span className="text-sm font-medium">Rows per page:</span>
        <Select
          value={`${pageSize}`}
          onValueChange={(value) => table.setPageSize(Number(value))}
        >
          <SelectTrigger className="h-8 w-[80px]">
            <SelectValue placeholder={pageSize} />
          </SelectTrigger>
          <SelectContent side="top">
            {[5, 10, 20, 30, 50, 100].map((size) => (
              <SelectItem key={size} value={`${size}`}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Pagination controls */}
      <Pagination className="mx-4 max-w-1/2">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => onPageChange && onPageChange(currentPage - 1)}
              className={cn(currentPage === 0 && "pointer-events-none opacity-50")}
              // disabled={currentPage === 0}
            />
          </PaginationItem>

          {/* Page numbers */}
          {Array.from({ length: pageCount }, (_, i) => i).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => onPageChange && onPageChange(page)}
              >
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {pageCount > 5 && <PaginationEllipsis />}

          <PaginationItem>
            <PaginationNext
              onClick={() => onPageChange && onPageChange(currentPage + 1)}
              className={cn(currentPage >= pageCount - 1 && "pointer-events-none opacity-50")}
            
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
