import React, { useState } from "react";
import { Navbar } from "flowbite-react";
const Header = ({ themeChange, open, handleClick }) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar
      fluid
      rounded
      className="leading-[80px] sticky top-0 left-0
    z-[99]  bg-gradient-to-r from-teal-200 to-teal-500 shadow-md dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700"
    >
      <Navbar.Brand href="#">
        <div className="flex items-center gap-[10px] ">
          <span
            className="w-[40px] h-[40px] bg-primaryColor dark:bg-primaryColorDark  text-white text-[16px] font-[500]
            rounded-full flex items-center justify-center
            "
          >
            E
          </span>
          <div className="leading-[20px]">
            <h2 className="text-xl text-smallTextColor dark:text-smallTextColorDark font-[600]">
              Ehtesham
            </h2>
            <p className="text-smallTextColor dark:text-smallTextColorDark text-[16px] font-[500] ">
              Personal
            </p>
          </div>
        </div>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="flex item-center gap-4 justify-between">
          <button
            onClick={() => themeChange()}
            className="flex items-center flex-row gap-2 text-smallTextColor dark:text-smallTextColorDark font-[600] border border-solid
             border-smallTextColor dark:border-smallTextColorDark py-2 px-4 rounded-[8px] max-h-[48px] hover:bg-smallTextColor  dark:hover:bg-[#e5de44]
              hover:text-white dark:hover:text-smallTextColor hover:font-[500] ease-in duration-300 overflow-hidden"
          >
            {open ? (
              <i className="ri-sun-line "></i>
            ) : (
              <i className="ri-moon-clear-fill"></i>
            )}
          </button>
          {/* <button
            className="flex items-center flex-row gap-2 text-smallTextColor dark:text-smallTextColorDark font-[600] border border-solid
             border-smallTextColor dark:border-smallTextColorDark py-2 px-4 rounded-[8px] max-h-[48px] hover:bg-smallTextColor  dark:hover:bg-smallTextColorDark
              hover:text-white  dark:hover:text-smallTextColor hover:font-[500] ease-in duration-300 "
          >
            <i className="ri-send-plane-line"></i> Let's Talk
          </button> */}
          <Navbar.Toggle />
        </div>
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          onClick={handleClick}
          href="#about"
          className="text-smallTextColor dark:text-smallTextColorDark font-[800] text-[17px] md:mr-10"
        >
          About
        </Navbar.Link>
        <Navbar.Link
          onClick={handleClick}
          href="#services"
          className="text-smallTextColor dark:text-smallTextColorDark font-[800] text-[17px] md:mr-10"
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          onClick={handleClick}
          href="#portfolio"
          className="text-smallTextColor dark:text-smallTextColorDark font-[800] text-[17px] md:mr-10"
        >
          Portfolio
        </Navbar.Link>
        <Navbar.Link
          onClick={handleClick}
          href="#contact"
          className="text-smallTextColor dark:text-smallTextColorDark font-[800] text-[17px] md:mr-10"
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;














// const [menuOpen, setMenuOpen] = useState(false);
// const handleToggle = () => {
//   setMenuOpen(!menuOpen);
// };

// const handleLinkClick = () => {
//   setMenuOpen(false);
// };
// <nav className="leading-[80px] sticky top-0 left-0 z-[99] bg-gradient-to-r from-teal-200 to-teal-500 shadow-md dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700">
//   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
//     <a href="#" className="flex items-center">
//       {/* <img src={Mylogo} className="h-8 mr-3" alt="Flowbite Logo" /> */}
//       <div className="flex items-center gap-[10px] ">
//         <span className="w-[40px] h-[40px] bg-primaryColor dark:bg-primaryColorDark text-white text-[16px] font-[500] rounded-full flex items-center justify-center">
//           E
//         </span>
//         <div className="leading-[20px]">
//           <h2 className="text-xl text-smallTextColor dark:text-smallTextColorDark font-[600]">
//             Ehtesham
//           </h2>
//           <p className="text-smallTextColor dark:text-smallTextColorDark text-[16px] font-[500]">
//             Personal
//           </p>
//         </div>
//       </div>
//     </a>
//     <div className="flex md:order-2 gap-4">
//       <button
//         onClick={() => themeChange()}
//         className="flex items-center flex-row gap-2 text-smallTextColor dark:text-smallTextColorDark font-[600] border border-solid
//      border-smallTextColor dark:border-smallTextColorDark py-2 px-4 rounded-[8px] max-h-[48px] hover:bg-smallTextColor dark:hover:bg-[#e5de44]
//      hover:text-white dark:hover:text-smallTextColor hover:font-[500] ease-in duration-300 overflow-hidden"
//       >
//         {open ? (
//           <i className="ri-sun-line "></i>
//         ) : (
//           <i className="ri-moon-clear-fill"></i>
//         )}
//       </button>
//       <button
//         type="button"
//         onClick={handleToggle} // Toggle the menuOpen state on click
//         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//         aria-controls="navbar-cta"
//         aria-expanded={menuOpen} // Use the 'menuOpen' state for aria-expanded
//       >
//         {/* <span className="sr-only">Open main menu</span> */}
//         <svg
//           className="w-5 h-5"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 17 14"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M1 1h15M1 7h15M1 13h15"
//           />
//         </svg>
//       </button>
//     </div>
//     <div
//       className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
//         menuOpen ? "block" : "hidden"
//       }`}
//       id="navbar-cta"
//     >
//       <ul className="flex flex-col font-medium md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
//         <li>
//           <a
//             onClick={() => {
//               handleLinkClick();
//               handleClick(); // Call the original onClick function for the link
//             }}
//             href="#about"
//             className="text-smallTextColor dark:text-smallTextColorDark font-[800] text-[17px] md:mr-10"
//             aria-current="page"
//           >
//             About
//           </a>
//         </li>
//         <li>
//           <a
//             onClick={() => {
//               handleLinkClick();
//               handleClick(); // Call the original onClick function for the link
//             }}
//             href="#services"
//             className="text-smallTextColor dark:text-smallTextColorDark font-[800] text-[17px] md:mr-10"
//           >
//             Services
//           </a>
//         </li>
//         <li>
//           <a
//             onClick={() => {
//               handleLinkClick();
//               handleClick(); // Call the original onClick function for the link
//             }}
//             href="#portfolio"
//             className="text-smallTextColor dark:text-smallTextColorDark font-[800] text-[17px] md:mr-10"
//           >
//             Portfolio
//           </a>
//         </li>
//         <li>
//           <a
//             onClick={() => {
//               handleLinkClick();
//               handleClick(); // Call the original onClick function for the link
//             }}
//             href="#contact"
//             className="text-smallTextColor dark:text-smallTextColorDark font-[800] text-[17px] md:mr-10"
//           >
//             Contact
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
