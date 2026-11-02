"use client";

import { useState } from "react";
import Link from "next/link";

const menuSections = [
    {
        title: "OUR BRANDS",
        links: [
            "Honda Autos",
            "Acura Autos",
            "Honda Powersports",
            "Honda Power Equipment",
            "Honda Engines",
            "Honda Marine",
            "HondaJet",
            "Honda Motocompacto",
            "Honda Home Electrification",
            "Honda Global",
            "Honda Hydrogen",
        ],
    },
    {
        title: "ABOUT US",
        links: [
            "Honda x Team USA",
            "The Power of Dreams",
            "Mobility",
            "Environment",
            "Community",
            "Safety",
            "History",
            "Operations",
            "Careers",
        ],
    },
    {
        title: "RACING",
        links: ["Auto Racing", "Motorcycle Racing"],
    },
    {
        title: "RECALLS",
        links: [
            "Honda Recalls",
            "Acura Recalls",
            "Powersports Recalls",
            "Power Equipment Recalls",
            "Marine Recalls",
            "Engines Recalls",
        ],
    },
    {
        title: "SERVICES",
        links: [
            "Honda Financial Services",
            "Acura Financial Services",
            "MyGarage",
            "Shop Parts and Accessories",
        ],
    },
];

export default function Menu() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    return (
        <nav
            id="navbar-menu"
            aria-label="Main menu"
            className="absolute left-0 top-full z-50 max-h-[calc(100vh-4rem)] w-full overflow-y-auto bg-black p-4 text-white"
        >
            <ul className="flex flex-col">
                <li className="border-b border-gray-700">
                    <Link href="/" className="block py-3 hover:text-gray-300">
                        HOME
                    </Link>
                </li>
                {menuSections.map(({ title, links }) => {
                    const isOpen = openSection === title;
                    const sectionId = `navbar-menu-${title.toLowerCase().replaceAll(" ", "-")}`;

                    return (
                        <li key={title} className="border-b border-gray-700">
                            <button
                                type="button"
                                aria-expanded={isOpen}
                                aria-controls={sectionId}
                                onClick={() => setOpenSection(isOpen ? null : title)}
                                className="flex w-full items-center gap-3 py-3 text-left hover:text-gray-300"
                            >
                                <span aria-hidden="true" className="w-4 text-center text-xl leading-none">
                                    {isOpen ? "−" : "+"}
                                </span>
                                <span>{title}</span>
                            </button>
                            {isOpen && (
                                <ul id={sectionId} className="flex flex-col pb-2 pl-7">
                                    {links.map((label) => (
                                        <li key={label}>
                                            <Link
                                                href="#"
                                                className="block py-2 text-gray-300 hover:text-white"
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
