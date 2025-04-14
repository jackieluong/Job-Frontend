import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

type PaginationProps = {
    // Define your props here
    pageCount: number;
    currentPage: number;
    onPageChange: (page: number) => void;
};

export default function Pagination({pageCount, currentPage, onPageChange}: PaginationProps) {

    const handlePageChange = (newPage: number) => {
        if(newPage >= 0 && newPage < pageCount) {
            onPageChange(newPage);
        }
    }
    return (
        <div className="flex justify-center items-center gap-4 mt-6">
        {/* Previous Page Button */}
        <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
            className={`p-2 border rounded-full ${
                currentPage === 0 ? "text-gray-400 cursor-not-allowed" : "hover:bg-green-500  text-green-500 hover:text-white cursor-pointer"
            }`}
        >
            <ChevronLeft className= 'hover:text-white' size={20} />
        </button>

        {/* Page Info */}
        <span className="text-lg font-medium">
            <span className='text-green-500'>{currentPage + 1}</span>  <span className='text-gray-400'> / {pageCount}</span>
        </span>

        {/* Next Page Button */}
        <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pageCount}
            className={`p-2 border rounded-full ${
                currentPage >= pageCount - 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-green-500 text-green-500 hover:text-white cursor-pointer"
            }`}
        >
            <ChevronRight className='' size={20} />
        </button>
    </div>
    );
}