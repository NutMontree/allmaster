"use client";
import { navLinks } from "@/app/api/navlink";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLink from "./Navigation/NavLink";
import Image from "next/image";

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const sideMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sideMenuRef.current &&
      !sideMenuRef.current.contains(event.target as Node)
    ) {
      setNavbarOpen(false);
    }
  };

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleScroll]);

  const isHomepage = pathname === "/";

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-500 ease-in-out ${
        sticky ? "top-4 px-4 sm:px-8" : "top-0 px-0"
      }`}
    >
      <nav
        className={`container mx-auto max-w-7xl flex items-center justify-between transition-all duration-500 ${
          sticky
            ? " dark:bg-transparent backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] rounded-[2.5rem] py-3 px-8 border border-white/20 dark:border-zinc-700/30"
            : "bg-transparent py-6 px-6 border-transparent"
        }`}
      >
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="group block relative transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/images/header/dark-logo.svg"
              alt="logo"
              width={140}
              height={50}
              className={`${
                isHomepage
                  ? sticky
                    ? "block dark:hidden"
                    : "hidden"
                  : "block dark:hidden"
              }`}
            />
            <Image
              src="/images/header/logo.svg"
              alt="logo"
              width={140}
              height={50}
              className={`${
                isHomepage
                  ? sticky
                    ? "hidden dark:block"
                    : "block"
                  : "dark:block hidden"
              }`}
            />
          </Link>
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-3 lg:gap-6">
          {/* Desktop Contact - พรีเมียมขึ้นด้วยการใช้สีทอง */}
          <div className="hidden lg:flex items-center gap-4 mr-2 border-r border-gray-200 dark:border-zinc-800 pr-6">
            <Link
              href="tel:0855953326"
              className={`group flex items-center gap-2 text-sm font-bold tracking-tight transition-all ${
                isHomepage && !sticky
                  ? "text-white"
                  : "text-zinc-900 dark:text-white"
              } hover:text-[#EFBF04] dark:hover:text-[#EFBF04]`}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EFBF04]/10 group-hover:bg-[#EFBF04] transition-colors duration-300">
                <Icon
                  icon="ph:phone-fill"
                  className="text-[#EFBF04] group-hover:text-white"
                  width={18}
                />
              </div>
              085-595-3326
            </Link>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-zinc-800 ${
              isHomepage && !sticky
                ? "text-white"
                : "text-zinc-900 dark:text-white"
            }`}
          >
            <Icon
              icon={
                theme === "dark"
                  ? "solar:sun-2-bold-duotone"
                  : "solar:moon-stars-bold-duotone"
              }
              width={28}
            />
          </button>

          {/* Modern Menu Button */}
          <button
            onClick={() => setNavbarOpen(true)}
            className={`group flex items-center gap-2 pl-2 pr-5 py-2 rounded-full font-black text-xs tracking-widest transition-all duration-300 ${
              isHomepage && !sticky
                ? "bg-white text-zinc-900 hover:bg-[#EFBF04] hover:text-white"
                : "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-[#EFBF04] dark:hover:bg-[#EFBF04] dark:hover:text-white"
            } shadow-lg hover:shadow-[#EFBF04]/30`}
          >
            <div
              className={`p-2 rounded-full ${
                isHomepage && !sticky
                  ? "bg-zinc-100"
                  : "bg-white/10 dark:bg-zinc-100"
              } group-hover:rotate-90 transition-transform duration-500`}
            >
              <Icon icon="ph:dots-nine-bold" width={20} />
            </div>
            MENU
          </button>
        </div>
      </nav>

      {/* Side Menu Overlay */}
      <div
        className={`fixed inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity duration-500 ${
          navbarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } z-[60]`}
        onClick={() => setNavbarOpen(false)}
      />

      {/* Side Menu Drawer - ออกแบบให้เหมือน Mobile App พรีเมียม */}
      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-full w-full max-w-[450px] bg-white dark:bg-[#080808] z-[70] shadow-2xl transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="flex flex-col h-full p-8 sm:p-12">
          {/* Close Header */}
          <div className="flex items-center justify-between mb-16">
            <span className="text-[#EFBF04] font-black tracking-tighter text-xl italic underline decoration-2 underline-offset-8">
              ALLM MASTER
            </span>
            <button
              onClick={() => setNavbarOpen(false)}
              className="group p-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              <Icon
                icon="ph:x-bold"
                width={24}
                className="group-hover:rotate-90 transition-transform duration-300"
              />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-grow">
            <div className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.3em] mb-6">
              Navigation
            </div>
            <ul className="space-y-4">
              {navLinks.map((item, index) => (
                <div key={index} className="group">
                  <NavLink item={item} onClick={() => setNavbarOpen(false)} />
                </div>
              ))}
            </ul>

            {/* Auth Actions ใน Side Menu */}
            <div className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-900">
              <Link
                href="/signin"
                className="py-4 text-center text-sm font-bold border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
              >
                SIGN IN
              </Link>
              <Link
                href="/price-estimation"
                className="py-4 text-center text-sm font-bold bg-[#EFBF04] text-white rounded-2xl shadow-lg shadow-[#EFBF04]/20 hover:scale-[1.03] active:scale-95 transition-all"
              >
                GET STARTED
              </Link>
            </div>
          </nav>

          {/* Contact Details Footer */}
          <div className="mt-auto pt-8">
            <div className="flex flex-col gap-4">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">
                  Connect with us
                </p>
                <Link
                  href="mailto:Nutmontree29@gmail.com"
                  className="text-lg font-medium text-zinc-800 dark:text-zinc-200 hover:text-[#EFBF04] transition-colors"
                >
                  Nutmontree29@gmail.com
                </Link>
              </div>
              <div className="flex gap-4">
                {[
                  "facebook-logo-fill",
                  "instagram-logo-fill",
                  "line-segments-fill",
                ].map((icon, i) => (
                  <button
                    key={i}
                    className="w-10 h-10 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 rounded-full hover:bg-[#EFBF04] hover:text-white transition-all duration-300"
                  >
                    <Icon icon={`ph:${icon}`} width={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
