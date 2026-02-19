import React, { useEffect, useRef, useState } from "react";
import { FaHeart, FaLinkedin, FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CustomNavLink } from "../../CustomNavLink/CustomNavLink";
import { RiShoppingCartFill } from "react-icons/ri";

const Header = () => {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const activeLink = "text-green-600 font-bold border-b-2 border-green-600";
  const normalLink =
    "text-gray-700 hover:text-green-500 transition-all duration-300";

  const groupedSubmenu = (submenu) => {
    return submenu.reduce((acc, item) => {
      (acc[item.group] = acc[item.group] || []).push(item);
      return acc;
    }, {});
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDesktopOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDesktopOpen(false), 200);
  };

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="navbar container mx-auto max-w-screen-xl px-4 flex justify-between items-center h-20">
        {/* 1. LEFT: Mobile Menu & Logo */}
        <div className="flex items-center gap-1 md:gap-4">
          <div className="dropdown lg:hidden">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle min-h-0 h-10 w-10"
            >
              <FaBars className="text-xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-white rounded-box w-72 border border-gray-100"
            >
              {CustomNavLink.map((link) => (
                <li key={link.path} className="py-1">
                  {link.submenu ? (
                    <details>
                      <summary className="font-semibold text-lg">
                        {link.name}
                      </summary>
                      <ul className="pl-4 mt-2 space-y-2 border-l-2 border-green-100">
                        {link.submenu.map((sub) => (
                          <li key={sub.path}>
                            <NavLink to={sub.path}>{sub.name}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <NavLink to={link.path} className="text-lg">
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/"
            className="transition-transform hover:scale-105 shrink-0"
          >
            <img
              className="w-12 sm:w-16 md:w-20"
              src={logo}
              alt="Fashody Logo"
            />
          </Link>
        </div>

        {/* 2. CENTER: Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-8 uppercase text-xs tracking-widest font-medium">
            {CustomNavLink.map((link) => (
              <li
                key={link.path}
                className="relative py-4"
                onMouseEnter={link.submenu ? handleMouseEnter : null}
                onMouseLeave={link.submenu ? handleMouseLeave : null}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `pb-1 ${isActive ? activeLink : normalLink}`
                  }
                >
                  {link.name}
                </NavLink>

                {link.submenu && desktopOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[600px] animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="bg-white shadow-2xl border border-gray-100 rounded-xl p-8 grid grid-cols-3 gap-8">
                      {Object.entries(groupedSubmenu(link.submenu)).map(
                        ([groupName, items]) => (
                          <div key={groupName}>
                            <h3 className="text-green-600 font-bold text-[10px] mb-4 border-b pb-2 tracking-tighter uppercase">
                              {groupName}
                            </h3>
                            <ul className="space-y-3">
                              {items.map((sub) => (
                                <li key={sub.path}>
                                  <Link
                                    to={sub.path}
                                    className="text-gray-500 hover:text-black hover:translate-x-1 transition-all block normal-case text-sm"
                                  >
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* 3. RIGHT: Utilities (Visible on ALL devices) */}
        <div className="flex items-center gap-2 sm:gap-5">
          {/* Search Bar - Responsive width */}
          <div className="flex items-center bg-gray-100 px-2 sm:px-3 py-1.5 rounded-full border border-transparent focus-within:border-green-300 focus-within:bg-white transition-all">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-xs sm:text-sm w-16 sm:w-24 md:w-32 lg:w-40 focus:w-24 sm:focus:w-48 transition-all"
            />
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Icons */}
          <div className="relative cursor-pointer group shrink-0">
            <RiShoppingCartFill className="text-lg sm:text-xl text-gray-700 group-hover:text-red-500 transition-colors" />
            <span className="absolute -top-1.5 -right-1.5 bg-green-500 text-white text-[8px] sm:text-[10px] w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </div>

          <Link
            to="https://linkedin.com"
            target="_blank"
            className="hidden sm:block shrink-0"
          >
            <FaLinkedin className="text-lg sm:text-xl  text-blue-600 transition-colors hover:sca" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
