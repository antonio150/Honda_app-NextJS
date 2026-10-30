"use client";

import Image from "next/image";
import { useState } from "react";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <div className="w-full">
            <nav className="flex items-center justify-between bg-white text-black p-2">
                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                    className="flex items-center gap-2"
                >
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                        {menuOpen ? (
                            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        )}
                    </svg>
                    <span>Menu</span>
                </button>
                <div className="flex items-center">

                    <Image src={"/img/navbar/Honda_logo_v2.svg"} alt={"Honda logo"} width={90} height={90} />
                    <div className="w-[1px] h-[50px] bg-black mx-2 "></div>
                    <Image  src={"/img/navbar/Olympics_logo.svg"} alt={"Olympics logo"} width={90} height={90} />
                </div>
                <div className="flex items-center gap-2">
                    About us
                    <button
                        type="button"
                        aria-label={searchOpen ? "Close search" : "Open search"}
                        aria-expanded={searchOpen}
                        aria-controls={searchOpen ? "navbar-search" : undefined}
                        onClick={() => setSearchOpen((open) => !open)}
                        className="flex h-8 w-8 items-center justify-center"
                    >
                        {searchOpen ? (
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                                <circle cx="10.8" cy="10.8" r="6.3" stroke="currentColor" strokeWidth="2" />
                                <path d="m15.5 15.5 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
            {searchOpen && (
                <form
                    id="navbar-search"
                    role="search"
                    className="flex w-full items-center border-t border-gray-200 bg-white"
                >
                    <input
                        type="search"
                        name="q"
                        aria-label="Search"
                        placeholder="Search"
                        className="min-w-0 flex-1 px-4 py-3 text-black outline-none"
                    />
                    <button
                        type="submit"
                        className="shrink-0 px-4 py-3 font-semibold text-black"
                    >
                        SEARCH &gt;
                    </button>
                </form>
            )}
        </div>
    );
}