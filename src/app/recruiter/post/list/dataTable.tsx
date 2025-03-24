"use client"
import React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DataTablePagination } from "./dataTablePagination"
import page from "./page"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[],
  total?: number
  currentPage?: number;
  onPageChange?: (page: number) => void;
  pageSize?: number
  onPageSizeChange?: (pageSize: number) => void
}

export function DataTable<TData, TValue>({ columns, data, total, currentPage, onPageChange, pageSize, onPageSizeChange }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      pagination: {
        pageIndex: currentPage || 0,
        pageSize: pageSize || 5
      }
    },
    manualPagination: false
  })

  return (
    <div className="rounded-md border">
      <Table className="">
        <TableHeader className="h-[70px]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow  key={headerGroup.id} >
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}  >
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter className="w-full">
          <span className="text-left text-gray-500 pl-4 pt-5 mb-3 min-w-full block">Showing  {data.length} of {total} results. </span>
     <DataTablePagination table={table} curPage={currentPage} onPageChange={onPageChange}
     pageSize={pageSize} onPageSizeChange={onPageSizeChange}
     />
     </TableFooter>
      </Table>
      
    </div>
  )
}
