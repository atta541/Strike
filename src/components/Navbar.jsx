import React from "react";
import Link from "next/link"; // ✅ Correct import
import { Search } from "lucide-react"; // ✅ Correct import

function Navbar() {
    return (
        <nav className="bg-[#1F1F21] text-white h-16 flex items-center justify-between px-4 sm:px-8">

            {/* Center Section - Navigation Links */}
            <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2">
                <ul className="flex gap-4 sm:gap-8 text-sm sm:text-lg font-medium">
                    <li className="cursor-pointer hover:text-gray-400">New</li>

                    <li className="cursor-pointer hover:text-gray-400">
                        <Link href="/men">Men</Link> {/* ✅ Fixed */}
                    </li>

                    <li className="cursor-pointer hover:text-gray-400"><Link href="/men">Women</Link></li>
                    <li className="cursor-pointer hover:text-gray-400"><Link href="/men">Kids</Link></li>
                    <li className="cursor-pointer hover:text-gray-400"><Link href="/men">Jordan</Link></li>
                </ul>
            </div>

            {/* Right Section - Search Bar with Icon */}
            <div className="relative ml-auto mr-4 sm:mr-8"> {/* Adjusted margin-right */}
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
