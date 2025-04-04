import { Value } from "@radix-ui/react-select";

export const CVStatusOptions = [
    { value: "ALL", label: "Tất cả" },
    { value: "PENDING", label: "Chờ duyệt" },
    { value: "ACCEPTED", label: "Duyệt" },
    { value: "REJECTED", label: "Từ chối" },
    {value: "SEEN", label: "Đã xem" },
]
export const postStatusOptions = [
    { value: "ALL", label: "Tất cả" },
    { value: "CLOSED", label: "Đã đóng" },
    { value: "ACTIVE", label: "Đang mở" },
    { value: "REJECTED", label: "Bị từ chối" },
    { value: "PENDING", label: "Đang chờ duyệt" },
  ]
//   export const salaryOptions = [
//     { minSalary: null, maxSalary: null, label: "Tất cả mức lương" },
//     { minSalary: 0, maxSalary: 10e6, label: "Dưới 10 triệu" },
//     { minSalary: 10e6, maxSalary: 15e6, label: '10 - 15 triệu' },
//     { minSalary: 15e6, maxSalary: 20e6, label: '15 - 20 triệu' },
//     { minSalary: 20e6, maxSalary: 30e6, label: '20 - 30 triệu' },
//     { minSalary: 30e6, maxSalary: Number.MAX_VALUE, label: 'Trên 30 triệu' },


    
// ];

export const salaryOptions = [
    { value: "-1", label: "Tất cả mức lương" },
    { value: "0-10e6", label: "Dưới 10 triệu" },
    { value: "10e6-15e6", label: "10 - 15 triệu" },
    { value: "15e6-20e6", label: "15 - 20 triệu" },
    { value: "20e6-30e6", label: "20 - 30 triệu" },
    { value: "30e6-10e10", label: "Trên 30 triệu" },
];

export const experienceRangeOptions = [
    { value: "-1", label: "Tất cả kinh nghiệm" },
    { value: "0-1", label: "Dưới 1 năm" },
    { value: "1-2", label: "1 - 2 năm" },
    { value: "2-3", label: "2 - 3 năm" },
    { value: "3-5", label: "3 - 5 năm" },
    { value: "5-100", label: "Trên 5 năm" },
    // { value: "10-Number.MAX_VALUE", label: "Trên 10 năm" },
];

  export const levelOptions = [
    {value: "INTERN", label: "Thực tập sinh"},
    {value: "FRESHER", label: "Mới tốt nghiệp"},
    {value: "MIDDLE", label: "Nhân viên"},
    {value: "SENIOR", label: "Quản lý"},
]

export const jobTypeOptions = [
    { value: "FULL_TIME", label: "Full Time" },
    { value: "PART_TIME", label: "Part Time" },
    { value: "REMOTE", label: "Remote" },
    { value: "HYBRID", label: "Hybrid" },
  ];

  export const genderOption = [
    { value: "MALE", label: "Nam" },
    { value: "FEMALE", label: "Nữ" },
    {value:"ANY", label:"Không yêu cầu"}
  ];

  export const experienceOption = [
    { value: "0", label: "Không yêu cầu kinh nghiem" },
    { value: "0.5", label: "Dưới 1 năm" },
    { value: "1", label: "1 năm" },
    { value: "2", label: "2 năm" },
    { value: "3", label: "3 năm" },
    { value: "4", label: "4 năm" },
    { value: "5", label: "5 năm" },
  ]

  export const educationOption = [
    { value: "NONE", label: "Không yêu cầu" },
    {value: "COLLEGE", label: "Cao đẳng" },
    { value: "BACHELOR", label: "Cử nhân" },
    { value: "MASTER", label: "Thạc sĩ" },
    { value: "HIGHER", label: "Tiến sĩ" },
  ];

  export const industryOptions = [
    {
        value: "IT",
        label: "Công nghệ thông tin",
    },
    {
        value: "SALES",
        label: "Bán hàng",
    },
    {
        value: "MARKETING",
        label: "Tiếp thị",
    },
    {
        value: "CONSTRUCTION",
        label: "Xây dựng",
    },
    {
        value: "FINANCE",
        label: "Tài chính",
    },
    {
        value: "HEALTHCARE",
        label: "Chăm sóc sức khỏe",
    },
    {
        value: "EDUCATION",
        label: "Giáo dục",
    },
    {
        value: "MANUFACTURING",
        label: "Sản xuất",
    },
    {
        value: "HOSPITALITY",
        label: "Dịch vụ khách sạn",
    },
    {
        value: "LEGAL",
        label: "Luật pháp",
    },
    {
        value: "ENTERTAINMENT",
        label: "Giải trí",
    },
    {
        value: "REAL_ESTATE",
        label: "Bất động sản",
    },
    {
        value: "TRANSPORTATION",
        label: "Vận tải",
    },
    {
        value: "RETAIL",
        label: "Bán lẻ",
    },
    {
        value: "ENERGY",
        label: "Năng lượng",
    },
    {
        value: "AGRICULTURE",
        label: "Nông nghiệp",
    },
    {
        value: "OTHER",
        label: "Khác",
    }
];

export const provinceOptions = [
    { value: "Hà Nội", label: "Hà Nội" },
    { value: "Hồ Chí Minh", label: "Hồ Chí Minh" },
    { value: "Đà Nẵng", label: "Đà Nẵng" },
    { value: "Hải Phòng", label: "Hải Phòng" },
    { value: "Nha Trang", label: "Nha Trang" },
    { value: "Vũng Tàu", label: "Vũng Tàu" },
    { value: "Cần Thơ", label: "Cần Thơ" },
    { value: "Huế", label: "Huế" },
    { value: "Bình Dương", label: "Bình Dương" },
    { value: "Bình Phước", label: "Bình Phước" },
    { value: "Bắc Ninh", label: "Bắc Ninh" },
    { value: "Bắc Giang", label: "Bắc Giang" },
    { value: "Lào Cai", label: "Lào Cai" },
    { value: "Lâm Đồng", label: "Lâm Đồng" },
    { value: "Quảng Ninh", label: "Quảng Ninh" },
    { value: "Thanh Hóa", label: "Thanh Hóa" },
    { value: "Nghệ An", label: "Nghệ An" },
    { value: "Đồng Nai", label: "Đồng Nai" },
    { value: "An Giang", label: "An Giang" },
    { value: "Kiên Giang", label: "Kiên Giang" },
    { value: "Sóc Trăng", label: "Sóc Trăng" },
    { value: "Hà Giang", label: "Hà Giang" },
    { value: "Hòa Bình", label: "Hòa Bình" },
    { value: "Tây Ninh", label: "Tây Ninh" }
];
