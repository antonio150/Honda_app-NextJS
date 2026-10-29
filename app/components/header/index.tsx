"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const headerItems = [
  { src: "/img/header/HondaAutosLogo.svg", label: "Honda Autos" },
  { src: "/img/header/AcuraLogo.svg", label: "Acura Autos" },
  { src: "/img/header/PowersportsLogo.svg", label: "Powersports" },
  { src: "/img/header/PowerEquipmentLogo.svg", label: "Power Equipement" },
  { src: "/img/header/EnginesLogo.svg", label: "Engines" },
  { src: "/img/header/HondaJetLogo.svg", label: "Honda Jet" },
  { src: "/img/header/FinancialServicesLogo.svg", label: "Financial Services" },
  { src: "/img/header/MarineLogo.svg", label: "Marine" },
  { src: "/img/header/HondaRacingLogo.svg", label: "Honda Racing" },
];

export default function Header() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const updateScrollState = () => {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    const maxScrollLeft = element.scrollWidth - element.clientWidth;

    setShowLeftArrow(element.scrollLeft > 0);
    setShowRightArrow(element.scrollLeft < maxScrollLeft - 1);
  };

  useEffect(() => {
    updateScrollState();

    const element = scrollRef.current;

    if (!element) {
      return;
    }

    const handleScroll = () => updateScrollState();
    const handleResize = () => updateScrollState();

    element.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      element.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollBy = (direction: "left" | "right") => {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    const amount = Math.max(element.clientWidth * 0.8, 120);
    element.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <header className="border-b border-gray-200 bg-black">
      <div className="flex items-center  gap-2 py-2">
        {showLeftArrow && (
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy("left")}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-black bg-black text-sm font-bold text-white transition-opacity hover:opacity-80"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
            >
              <path
                d="m15 18-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        <div className="flex-1 overflow-hidden ">
          <div
            ref={scrollRef}
            className="hide-scrollbar flex items-center justify-center gap-1 overflow-x-auto scroll-smooth whitespace-nowrap"
          >
            {headerItems.map((item) => (
              <div key={item.label} className="flex shrink-0 items-center gap-2 px-3 py-1">
                <Image src={item.src} alt={item.label} width={15} height={15} />
                <a href="#" className="text-xs text-white">
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        </div>

        {showRightArrow && (
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy("right")}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-black bg-black text-sm font-bold text-white transition-opacity hover:opacity-80"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
            >
              <path
                d="m9 18 6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </header>
  );
}
