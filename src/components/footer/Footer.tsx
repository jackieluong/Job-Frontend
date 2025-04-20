import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`bg-slate-100 border-t border-slate-200 pt-10 pb-6 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section with Logo and main links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold text-green-600">TOP<span className="text-blue-600">CV</span></h2>
            </div>
            <p className="text-gray-600 mb-6">
              Nền tảng tuyển dụng hàng đầu Việt Nam, kết nối ứng viên với hàng nghìn công việc phù hợp từ các công ty uy tín.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/topcv" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/topcv" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/company/topcv" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com/topcv" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/topcv" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Candidates */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-800">Dành cho ứng viên</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/jobs" className="text-gray-600 hover:text-green-600">Tìm việc làm</Link>
              </li>
              <li>
                <Link href="/create-cv" className="text-gray-600 hover:text-green-600">Tạo CV online</Link>
              </li>
              <li>
                <Link href="/career-advice" className="text-gray-600 hover:text-green-600">Cẩm nang nghề nghiệp</Link>
              </li>
              <li>
                <Link href="/salary" className="text-gray-600 hover:text-green-600">Tra cứu lương</Link>
              </li>
              <li>
                <Link href="/companies" className="text-gray-600 hover:text-green-600">Khám phá công ty</Link>
              </li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-800">Dành cho nhà tuyển dụng</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/employer/post-job" className="text-gray-600 hover:text-green-600">Đăng tin tuyển dụng</Link>
              </li>
              <li>
                <Link href="/employer/search-candidates" className="text-gray-600 hover:text-green-600">Tìm hồ sơ ứng viên</Link>
              </li>
              <li>
                <Link href="/employer/pricing" className="text-gray-600 hover:text-green-600">Bảng giá dịch vụ</Link>
              </li>
              <li>
                <Link href="/employer/products" className="text-gray-600 hover:text-green-600">Sản phẩm dịch vụ</Link>
              </li>
              <li>
                <Link href="/employer/login" className="text-gray-600 hover:text-green-600">Đăng nhập nhà tuyển dụng</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-800">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-green-600 flex-shrink-0" />
                <span className="text-gray-600">Tòa nhà Sun Wah, 115 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-green-600 flex-shrink-0" />
                <span className="text-gray-600">(+84) 28 3333 9999</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-green-600 flex-shrink-0" />
                <a href="mailto:contact@topcv.vn" className="text-gray-600 hover:text-green-600">contact@topcv.vn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Mobile Apps */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-medium mb-2 text-gray-800">Tải ứng dụng TOPCV</h3>
              <div className="flex space-x-2">
                <a href="#" className="block">
                  <img src="/api/placeholder/140/42" alt="App Store" className="h-10" />
                </a>
                <a href="#" className="block">
                  <img src="/api/placeholder/140/42" alt="Google Play" className="h-10" />
                </a>
              </div>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-medium mb-2 text-gray-800">Chứng nhận</h3>
              <div className="flex space-x-4">
                <img src="/api/placeholder/40/40" alt="ISO Certified" className="h-10" />
                <img src="/api/placeholder/40/40" alt="DMCA Protected" className="h-10" />
              </div>
            </div>

            {/* Languages */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-medium mb-2 text-gray-800">Ngôn ngữ</h3>
              <div className="flex space-x-2">
                <button className="px-2 py-1 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
                  Tiếng Việt
                </button>
                <button className="px-2 py-1 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
                  English
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="border-t border-gray-200 mt-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">
                &copy; {currentYear} TOPCV. Tất cả quyền được bảo lưu.
              </p>
            </div>
            <div className="md:text-right">
              <ul className="flex flex-wrap gap-4 md:justify-end">
                <li>
                  <Link href="/terms" className="text-sm text-gray-600 hover:text-green-600">Điều khoản sử dụng</Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-gray-600 hover:text-green-600">Chính sách bảo mật</Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-sm text-gray-600 hover:text-green-600">Chính sách cookie</Link>
                </li>
                <li>
                  <Link href="/help" className="text-sm text-gray-600 hover:text-green-600">Trợ giúp</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}