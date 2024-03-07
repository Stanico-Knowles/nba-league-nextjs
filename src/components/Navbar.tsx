"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shrink-0 bg-gray-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link href={"/"} className="flex flex-row items-center">
            <Image
              src={"/logo.svg"}
              alt="Logo with player fading away"
              width={50}
              height={50}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-8">
          <a href="/teams" className="text-white font-medium tracking-wider">
            Teams
          </a>
          <a href="#" className="text-white font-medium tracking-wider">
            Schedule
          </a>
          <a href="#" className="text-white font-medium tracking-wider">
            News
          </a>
          <a href="#" className="text-white font-medium tracking-wider">
            Favorite Team
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-gray-800 p-4 z-40 space-y-6">
            <a href="/teams" className="block text-white text-lg font-medium mb-2 tracking-wide">
              Teams
            </a>
            <a href="#" className="block text-white text-lg font-medium mb-2 tracking-wide">
              Schedule
            </a>
            <a href="#" className="block text-white text-lg font-medium mb-2 tracking-wide">
              News
            </a>
            <a href="#" className="block text-white text-lg font-medium mb-2 tracking-wide">
              Favorite Team
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
