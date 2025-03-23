import React from "react";
import Link from "next/link"; // Use Next.js Link for navigation

export default function RecruiterNav() {
  return (
    <nav>
      <ul className="container mx-auto flex items-center justify-center gap-6 py-4">
        {navLinks.map(({ href, label }, index) => (
          <li key={index}>
            <Link
              href={href}
              className="text-gray-700 hover:text-blue-600 transition font-medium px-4 py-2"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Navigation links array
const navLinks = [
  { href: "/recruiter/post/create", label: "Đăng tin" },
  { href: "/recruiter/post/list", label: "Quản lý tin" },
  { href: "#", label: "Tìm hồ sơ" },
  { href: "#", label: "Danh sách ứng viên" },
  { href: "#", label: "Tài khoản" },
];
