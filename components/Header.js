"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";

const links = [
  {
    href: "/products",
    label: "Products",
    hasDropdown: true
  }
];

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <div className="w-full relative">
      <header className="container mx-auto px-4 py-3">
        <div className=" ">
          <nav className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <div className="flex lg:flex-1">
              <Link
                className="flex items-center gap-2"
                href="/"
                title="Lnkbase.com homepage"
              >
                {/* <Image
                  src={logo}
                  alt="Lnkbase logo"
                  className="w-8"
                  priority={true}
                  width={32}
                  height={32}
                /> */}
                <span className="font-bold text-3xl text-gray-900">Lnkbase</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="p-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-16 6h16"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:gap-8">
              {links.map((link) => (
                <div key={link.href} className="relative group">
                  {/* <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 py-2 text-[15px] font-medium text-gray-700 hover:text-gray-900"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <svg
                        className="w-4 h-4 ml-0.5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link> */}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex lg:gap-6 lg:items-center">
              {/* <Link
                href="/login"
                className="text-[15px] font-medium text-gray-700 hover:text-gray-900"
              >
                Log in
              </Link> */}
              <Link
                href="/get-started"
                className="inline-flex items-center px-4 py-2 text-[15px] font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get started
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#FFF3D1]">
          <div className="bg-white">
            <div className="flex items-center justify-between p-6 border-b">
              <Link href="/" className="flex items-center gap-2">
                {/* <Image
                  src={logo}
                  alt="Lnkbase logo"
                  className="w-8"
                  width={32}
                  height={32}
                /> */}
                <span className="font-bold text-x3 font-sans font-bold">Lnkbase</span>
              </Link>
              <button
                type="button"
                className="p-2 text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-gray-900 flex items-center justify-between"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
              <div className="mt-8 space-y-4">
                <Link
                  href="/login"
                  className="block w-full px-4 py-2 text-center text-[15px] font-medium text-gray-700 hover:text-gray-900 bg-gray-50 rounded-lg"
                >
                  Log in
                </Link>
                <Link
                  href="/get-started"
                  className="block w-full px-4 py-2 text-center text-[15px] font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;