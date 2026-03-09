"use client";

import React, { useState } from "react";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    return (
        <div className="hidden md:inline-flex flex-1 h-10 relative">
            <input
                type="text"
                placeholder="Search products here..."
                className="w-full h-full border-2 border-primary px-4 rounded-2xl over outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
                <RiCloseLine onClick={() => setSearch('')} className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200" />
            )}
            <span className="w-10 h-10 bg-primary/80 rounded-r-2xl inline-flex items-center justify-center text-white absolute top-0 right-0 border border-primary hover:bg-primary duration-200 cursor-pointer">
                <RiSearchLine />
            </span>

        </div>
    );
};

export default SearchInput;
