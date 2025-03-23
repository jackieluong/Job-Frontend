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
