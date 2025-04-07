import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropDown';
import { User } from '@/store/chatStore';
import React from 'react';

type userdropDownProps = {
  // Define your props here
  searchUsers: User[];
};

export default function SearchDropDown({ searchUsers }: userdropDownProps) {
  //   return (
  //     <div>
  //       {/* Dropdown List for Searched Users */}
  //       { searchUsers.length > 0  ? (
  //         <div className="absolute z-10 w-full bg-white shadow-md mt-2 rounded-md border border-gray-200 max-h-48 overflow-auto">
  //           {searchUsers.map((user) => (
  //             <div
  //               key={user.id}
  //               className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between"
  //               onClick={() => handleUserSelect(user)}
  //             >
  //               <span>{user.name}</span>
  //               <span className="text-gray-500 text-sm">{user.role}</span>
  //             </div>
  //           ))}
  //         </div>
  //       )
  //       :
  //       <div className="absolute z-10 w-full bg-white shadow-md mt-2 rounded-md border border-gray-200 max-h-48 overflow-auto">
  //         <div className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between">
  //           <span> Không tìm thấy người dìmg</span>
  //         </div>
  //       </div>
  //     }
  //     </div>
  //   );
  return (
    <DropdownMenu open>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
