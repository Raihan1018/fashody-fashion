import React, { useEffect, useRef, useState } from "react";
import { FaHeart, FaLinkedin } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Header = () => {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const activeLink = "underline text-green-500 font-semibold";
  const normalLink = "hover:text-green-500 transition-colors";

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDesktopOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setDesktopOpen(false);
    setMobileProductOpen(false);
  };

  return (
    <div className="sticky top-0 z-[100] w-full bg-base-100/90 backdrop-blur-md border-b border-base-200">
      <div className="navbar container mx-auto max-w-screen-xl px-4">
        {/* LEFT SIDE: Logo & Mobile Toggle */}
        <div className="flex-none">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              ☰
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-64 p-2 shadow z-[1]"
            >
              <li>
                <NavLink
                  to="/our-groups"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  onClick={closeAll}
                >
                  Our Groups
                </NavLink>
              </li>
              <li>
                <div className="flex justify-between items-center w-full">
                  <NavLink
                    to="/product-services"
                    onClick={closeAll}
                    className={({ isActive }) =>
                      `flex-1 ${isActive ? activeLink : normalLink}`
                    }
                  >
                    Product & Services
                  </NavLink>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileProductOpen(!mobileProductOpen);
                    }}
                    className="p-2"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileProductOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                {mobileProductOpen && (
                  <ul className="bg-base-200 rounded-lg p-2 mt-2 space-y-1">
                    <li>
                      <NavLink to="/web" onClick={closeAll}>
                        Web Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/app" onClick={closeAll}>
                        App Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/ai" onClick={closeAll}>
                        AI Solutions
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink
                  to="/global-location"
                  onClick={closeAll}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Global Location
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/newsfeed"
                  onClick={closeAll}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  News Feed
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={closeAll}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-2xl font-black px-2 text-green-600"
          >
            <img className="w-20" src= {logo} alt="Fashody Fashion" />
          </Link>
        </div>

        {/* CENTER-LEFT: Desktop Menu */}
        <div className="flex-1 hidden lg:flex justify-start ml-4">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <NavLink
                to="/our-groups"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Our Groups
              </NavLink>
            </li>
            <li
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to="/product-services"
                className={({ isActive }) =>
                  `flex items-center gap-1 px-3 py-2 rounded-md ${desktopOpen || isActive ? "bg-base-200" : ""} ${isActive ? "text-green-500 font-bold" : ""}`
                }
              >
                Product & Services
                <svg
                  className={`w-3 h-3 transition-transform ${desktopOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </NavLink>
              {desktopOpen && (
                <div className="absolute left-0 top-full pt-2 w-[450px]">
                  <div className="card bg-base-100 shadow-2xl border border-base-200 p-4 grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-bold border-b mb-2 pb-1">
                        Development
                      </h3>
                      <ul className="text-sm space-y-1">
                        <li>
                          <NavLink
                            to="/web"
                            onClick={closeAll}
                            className="hover:text-green-500 block p-1"
                          >
                            Web Development
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/app"
                            onClick={closeAll}
                            className="hover:text-green-500 block p-1"
                          >
                            App Development
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold border-b mb-2 pb-1">
                        Solutions
                      </h3>
                      <ul className="text-sm space-y-1">
                        <li>
                          <NavLink
                            to="/ai"
                            onClick={closeAll}
                            className="hover:text-green-500 block p-1"
                          >
                            AI & ML
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/cloud"
                            onClick={closeAll}
                            className="hover:text-green-500 block p-1"
                          >
                            Cloud Services
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <NavLink
                to="/our-promise"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Our Promise
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/global-location"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Global Location
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/newsfeed"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                News Feed
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE: Search & Icons */}
        <div className="flex-none flex items-center gap-4">
          <label className="input input-sm input-bordered hidden sm:flex items-center gap-2">
            <input
              type="text"
              className="grow w-24 focus:w-40 transition-all"
              placeholder="Search"
            />
            <svg
              className="h-4 w-4 opacity-70"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
            </svg>
          </label>
          <div className="flex items-center gap-3 text-xl">
            <FaHeart className="cursor-pointer hover:text-red-500 transition-colors" />
            <FaLinkedin className="cursor-pointer hover:text-blue-600 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
