import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function displayVNDCurrency(value: number) {
  return value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })
}

export function displayVNDWithPostfix(value: number) {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1).replace(/\.0$/, "")} tỷ`;
  } else if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")} triệu`;
  } else if (value >= 100_000) {
    return `${(value / 100_000).toFixed(1).replace(/\.0$/, "")} trăm nghìn`;
  } else {
    return value.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  }
}

export const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(dateString));
};


export function formatDateTime(isoString: string): string {
  const date = new Date(isoString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convert 24h to 12h format

  return `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
}


export function getNumOfDaysInPast(timestamp: string): number {
  const givenDate = new Date(timestamp);
  const today = new Date();

  // Normalize both dates to midnight for accurate full-day comparison
  today.setHours(0, 0, 0, 0);
  givenDate.setHours(0, 0, 0, 0);

  // Calculate the difference in days
  const diffInMs = today.getTime() - givenDate.getTime();
  const daysDiff = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  // If the date is in the future, return 0
  return daysDiff > 0 ? daysDiff : 0;
}

// Function to format the time difference as "X days/weeks/years ago"
export function timeAgo(timestamp: string): string {
  const givenDate = new Date(timestamp);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - givenDate.getTime()) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds} giây trước`;
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes} phút trước`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} giờ trước`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays} ngày trước`;

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) return `${diffInWeeks} tuần trước`;

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths} tháng trước`;

  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears} năm trước`;
}
