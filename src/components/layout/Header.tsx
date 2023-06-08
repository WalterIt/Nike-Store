import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  const [navState, setNavState] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const onCartToggle = () => {
    setOpenCart(true);
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => window.removeEventListener("scroll", onNavScroll);
  }, []);

  return (
    <header
      className={
        !navState
          ? `absolute top-7 left-0 right-0  z-50`
          : `fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme  `
      }
    >
      <nav className="flex justify-between items-center nike-container text-white">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className={`w-16 h-auto ${navState && "filter brightness-0 "} `}
          />
        </div>
        <ul className="flex justify-center items-center gap-2">
          <li className="grid items-center  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 icon-style ${
                navState && "text-slate-900 transition-all duration-300 "
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </li>
          <li className="grid items-center  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 icon-style ${
                navState && "text-slate-900 transition-all duration-300 "
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </li>
          <li className="grid items-center  ">
            <button
              type="button"
              className="border-none outline-none active:scale-110 transition-all duration-300 relative "
              onClick={onCartToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 icon-style ${
                  navState && "text-slate-900 transition-all duration-300 "
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <div
                className={`absolute top-4 right-0  w-4 h-4 text-[0.65rem] leading-tight font-medium  rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                  navState
                    ? "bg-slate-900 text-slate-100 shadow shadow-slate-900"
                    : "bg-slate-100 text-slate-900 shadow shadow-slate-100"
                } `}
              >
                0
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
