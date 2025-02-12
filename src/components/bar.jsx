import React from 'react';

const Bar = () => {
    return (
        <main className="flex flex-row justify-between items-center px-4 sm:px-8 lg:px-12 h-8 bg-[#111111] text-white text-sm sm:text-base">
            {/* Left Section */}
            <div className="flex flex-row items-center gap-2 sm:gap-4">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold italic tracking-wider text-[#ffffff]">
                    Strike
                </h1>
            </div>

            {/* Right Section */}
            <div className="flex flex-row items-center gap-2 sm:gap-4">
                <h1 className="cursor-pointer hover:underline hidden sm:inline">Find a store</h1>
                <span className="hidden sm:inline">|</span>
                <h1 className="cursor-pointer hover:underline">Help</h1>
                <span className="hidden sm:inline">|</span>
                <h1 className="cursor-pointer hover:underline">Join us</h1>
                <span className="hidden sm:inline">|</span>
                <h1 className="cursor-pointer hover:underline">Sign in</h1>
            </div>
        </main>
    );
};

export default Bar;