
import Link from "next/link";
import React from "react";
interface DropdownItem {
  name: string;
  href?: string; // Made optional for actions like logout
 icon: React.ReactNode;
 onClick?: () => void; // Added click handler
}

interface DropdownMenuProps {
  items: DropdownItem[];
    isActive: boolean; // ✅ Khai báo isActive
    onItemClick?: (item: DropdownItem) => void; //  Handles item clicks
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, isActive }) => {
  // console.log("Dropdown active?", isActive); // Debug xem có đúng không

  return (
 <ul
  className={`absolute left-0 top-full mt-4 min-w-[400px] max-w-[800px] max-h-[88vh]
  bg-white rounded-lg border shadow-lg p-2 flex flex-wrap gap-2 z-50
  opacity-0 invisible translate-y-[-10px] transition-all duration-300 ease-in-out 
  ${isActive ? "opacity-100 visible translate-y-0" : ""}`}
>
  {items.map((dropdown, idx) => (
    <li
      key={idx}
      className="flex items-center px-4 py-2 hover:bg-gray-100 flex-1 md:basis-1/2 min-w-[50%]"
      onClick={() => {
        if(dropdown.onClick){
          dropdown.onClick();
        }
      }}
    >
      {dropdown.icon}
      <Link href={dropdown.href} className="ml-3 text-gray-800">
        {dropdown.name}
      </Link>
    </li>
  ))}
</ul>

  );
};

export default DropdownMenu;
