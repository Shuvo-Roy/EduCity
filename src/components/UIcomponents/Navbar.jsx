import React, { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import teacher from "../../pages/teacher/teacher.json";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [istoggleItem, setToggleItem] = useState(false);
  const [isMenuSticky, setIsMenuSticky] = useState(false);

  // sticky menu bar when scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsMenuSticky(true);
      } else {
        setIsMenuSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //navigations items
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Courses", path: "courses" },
    { link: "Teacher", path: "teachers" },
    { link: "Pricing", path: "pricing" },
    { link: "About Us", path: "aboutus" },
  ];

  ////user items
  const toggleItem = () => {
    setToggleItem(!istoggleItem);
    console.log("clicked");
  };

  return (
    <header className="w-full top-0 left-0 right-0 bg-white z-50 sticky">
      <nav
        className={`py-2 w-10/12 m-auto ${
          isMenuSticky ? "top-0 left-0 right-0 duration-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8 p-2">
          <Link to={"/"} className="flex items-center justify-center space-x-3">
            <img src="/src/assets/logo.gif" className="w-20 h-20" />
            <h2 className="text-2xl font-semibold text-orangeOp">EduCity</h2>
          </Link>
          {/** nav items for large devices */}
          <ul className="md:flex md:space-x-4 lg:space-x-8 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                key={path}
                className="block text-xl  text-textColor hover:text-Orange active:text-Orange"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/** button for large devices */}

          {/* <div className="space-x-4 invisible md:visible lg:visible xl:visible lg:flex items-center">
            <a
              href="/login"
              className=" lg:flex items-center text-textColor hover:text-orangeOp text-xl font-semibold"
            >
              Login
            </a>
            <Link to={"/signup"}>
              <button className="text-textColor py-2 px-4 transition-all duration-300 rounded bg-Orange hover:bg-orangeOp text-xl font-semibold">
                Sign up
              </button>
            </Link>
          </div> */}
          <div className="">
            <div
              onClick={toggleItem}
              className="p-1 border border-orangeOp rounded-full "
            >
              <img src={teacher[1].image} className="w-14 h-14 rounded-full" />
            </div>

            <div
              className={` ${
                istoggleItem
                  ? "bg-white text-base list-none divide-y divide-gray-100 rounded shadow absolute"
                  : "hidden"
              }`}
            >
              <div className="px-4 py-3">
                <span className="block text-xl">{teacher[1].name}</span>
                <span className="block text-sm font-medium text-gray-900 truncate">
                  email.com
                </span>
              </div>
              <ul className="py-1">
                <li>
                  <Link to={"/teacher/dash"}
                    className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Earnings
                  </a>
                </li>
                <li className="flex items-center justify-center">
                  <button
                    href="#"
                    className="text-sm bg-red text-gray-700 px-4 py-2 rounded"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/** menu button for large devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:text-emerald-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-red" />
              ) : (
                <FaBars className="h-6 w-6 text-brandPrimary" />
              )}
            </button>
          </div>
        </div>
        {/** nav item for responsive */}
        <div
          className={`space-y-4 px-4 py-2 w-10/12 m-auto mt-28 bg-bgBack border rounded ${
            isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              offset={-100}
              key={path}
              className="block text-base  text-textColor hover:text-gray-700 first:font-medium"
            >
              {link}
            </Link>
          ))}

          <div className="space-x-4 items-center">
            <a
              href="/login"
              className="lg:flex items-center text-textColor hover:text-orangeOp text-xl font-semibold"
            >
              Login
            </a>
            <Link to={"/signup"}>
              <button className="text-textColor py-2 px-4 transition-all duration-300 rounded bg-Orange hover:bg-orangeOp text-xl font-semibold">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
