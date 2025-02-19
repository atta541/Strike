// import React from "react";
// import Link from "next/link"; // ✅ Correct import
// import { Search } from "lucide-react"; // ✅ Correct import

// function Navbar() {
//     return (
//         <nav className="bg-[#1F1F21] text-white h-16 flex items-center justify-between px-4 sm:px-8">

//             {/* Center Section - Navigation Links */}
//             <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2">
//                 <ul className="flex gap-4 sm:gap-8 text-sm sm:text-lg font-medium">
//                     <li className="cursor-pointer hover:text-gray-400">New</li>

//                     <li className="cursor-pointer hover:text-gray-400">
//                         <Link href="/men">Men</Link> {/* ✅ Fixed */}
//                     </li>

//                     <li className="cursor-pointer hover:text-gray-400"><Link href="/men">Women</Link></li>
//                     <li className="cursor-pointer hover:text-gray-400"><Link href="/men">Kids</Link></li>
//                     <li className="cursor-pointer hover:text-gray-400"><Link href="/men">Jordan</Link></li>
//                 </ul>
//             </div>

//             {/* Right Section - Search Bar with Icon */}
//             <div className="relative ml-auto mr-4 sm:mr-8"> {/* Adjusted margin-right */}
//                 <input
//                     type="text"
//                     placeholder="Search"
//                     className="pl-8 pr-3 py-1 sm:pl-10 sm:pr-4 sm:py-2 rounded-full bg-black text-white outline-none w-32 sm:w-48 h-8 sm:h-9 text-sm"
//                 />
//                 <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react"; // Added Menu and X icons for mobile toggle

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#1F1F21] text-white h-16 flex items-center justify-between px-4 sm:px-8 relative">
      {/* Hamburger Menu Icon for Mobile */}
      <div className="sm:hidden cursor-pointer" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </div>

      {/* Center Section - Navigation Links */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } sm:flex absolute sm:static top-16 left-0 w-full sm:w-auto bg-[#1F1F21] sm:bg-transparent z-10`}
      >
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm sm:text-lg font-medium p-4 sm:p-0 " >
          <li className="cursor-pointer hover:text-gray-400">New</li>
          <li className="cursor-pointer hover:text-gray-400">
            <Link href="/men">Men</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <Link href="/men">Women</Link>
            
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <Link href="/men">Kids</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <Link href="/men">Jordan</Link>
          </li>
        </ul>
      </div>

      {/* Right Section - Search Bar with Icon */}
      <div className="relative ml-auto mr-4 sm:mr-8">
        <input
          type="text"
          placeholder="Search"
          className="pl-8 pr-3 py-1 sm:pl-10 sm:pr-4 sm:py-2 rounded-full bg-black text-white outline-none w-32 sm:w-48 h-8 sm:h-9 text-sm"
        />
        <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
      </div>
    </nav>
  );
}

export default Navbar;
