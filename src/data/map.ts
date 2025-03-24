// Status mappings for colors & labels
export const statusColorMap: Record<string, string> = {
    APPROVED: "bg-green-100 text-green-800",
    REJECTED: "bg-red-400 text-gray-800",
    PENDING: "bg-yellow-100 text-yellow-800",
    REVIEWED: "bg-blue-100 text-blue-800",
  };
  
export  const statusLabelMap: Record<string, string> = {
    APPROVED: "Đã chấp nhận",
    REVIEWED: "Đã xem",
    REJECTED: "Từ chối",
    PENDING: "Đang chờ duyệt",
  };