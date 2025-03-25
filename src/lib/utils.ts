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
