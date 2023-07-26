import React, { useState } from "react";
import { Navbar } from "flowbite-react";
const Header = ({ themeChange, open }) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const targetAttr = e.target.getAttribute("href");
  //   const location = document.querySelector(targetAttr).offsetTop;
  //   window.scrollTo({
  //     top: location - 80,
  //     left: 0,
  //   });
  // };

  // const handleMenu = () => {
  //   setMenuOpen((prev) => !prev);
  //   console.log("It is me");
  // };

  // return (
  // <header
  //   className="w-full h-[80px]  leading-[80px] flex items-center sticky top-0 left-0
  //  z-[99]  bg-white shadow-sm dark:bg-[#212121]"
  // >
  //   <div className="container ">
  //     <div className="flex items-center justify-between ">
  //       {/* ::::::::::::: LOGO  :::::::::::: */}
  // <div className="flex items-center gap-[10px] ">
  //   <span
  //     className="w-[35px] h-[35px] bg-primaryColor dark:bg-primaryColorDark  text-white text-[16px] font-[500]
  //   rounded-full flex items-center justify-center
  //   "
  //   >
  //     E
  //   </span>
  //   <div className="leading-[20px]">
  //     <h2 className="text-xl text-smallTextColor dark:text-smallTextColorDark font-[700]">
  //       Ehtesham
  //     </h2>
  //     <p className="text-smallTextColor dark:text-smallTextColorDark text-[16px] font-[500] ">
  //       Personal
  //     </p>
  //   </div>
  // </div>
  //       {/* :::::::::: LOGO END  ::::::::::: */}
  //       {/* :::::::::: MENU START ::::::::::: */}
  //       <div className=" md:flex hidden ">
  //         <ul className={`md:flex md:items-center md:gap-10 md:flex-row `}>
  //           <li>
  //             <a
  //               onClick={handleClick}
  //               className="text-smallTextColor dark:text-smallTextColorDark font-[600] "
  //               href="#about"
  //             >
  //               About
  //             </a>
  //           </li>
  //           <li>
  //             <a
  //               onClick={handleClick}
  //               className="text-smallTextColor dark:text-smallTextColorDark font-[600] "
  //               href="#services"
  //             >
  //               Services
  //             </a>
  //           </li>
  //           <li>
  //             <a
  //               onClick={handleClick}
  //               className="text-smallTextColor dark:text-smallTextColorDark font-[600] "
  //               href="#portfolio"
  //             >
  //               Portfolio
  //             </a>
  //           </li>
  //           <li>
  //             <a
  //               onClick={handleClick}
  //               className="text-smallTextColor dark:text-smallTextColorDark font-[600] "
  //               href="#contact"
  //             >
  //               Contact
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //       {/* :::::::::: MENU END  :::::::::::  */}

  //       {/*  :::::::::: MENU RIGHT  :::::::::::  */}

  //       <div className="flex item-center gap-4 justify-between">
  // <button
  //   onClick={() => themeChange()}
  //   className="flex items-center flex-row gap-2 text-smallTextColor dark:text-smallTextColorDark font-[600] border border-solid
  //  border-smallTextColor dark:border-smallTextColorDark py-2 px-4 rounded-[8px] max-h-[48px] hover:bg-smallTextColor  dark:hover:bg-smallTextColorDark
  //   hover:text-white dark:hover:text-smallTextColor hover:font-[500] ease-in duration-300 overflow-hidden"
  // >
  //   {open ? (
  //     <i className="ri-sun-line "></i>
  //   ) : (
  //     <i className="ri-moon-clear-fill"></i>
  //   )}
  // </button>
  // <button
  //   className="flex items-center flex-row gap-2 text-smallTextColor dark:text-smallTextColorDark font-[600] border border-solid
  //  border-smallTextColor dark:border-smallTextColorDark py-2 px-4 rounded-[8px] max-h-[48px] hover:bg-smallTextColor  dark:hover:bg-smallTextColorDark
  //   hover:text-white  dark:hover:text-smallTextColor hover:font-[500] ease-in duration-300 "
  // >
  //   <i className="ri-send-plane-line"></i> Let's Talk
  // </button>
  // <button
  //   onClick={() => handleMenu()}
  //   className=" text-2xl text-smallTextColor dark:text-smallTextColorDark md:hidden cursor-pointer"
  // >
  //   {menuOpen ? (
  //     <i className="ri-menu-fold-line"></i>
  //   ) : (
  //     <i className="ri-menu-line"></i>
  //   )}
  // </button>
  //       </div>
  //       {/*  :::::::::: MENU END  :::::::::::  */}
  //     </div>
  //   </div>
  // </header>
  //   );
  // };

  // export default Header;

  return (
    <Navbar
      fluid
      rounded
      className="leading-[80px] sticky top-0 left-0
    z-[99]  bg-[#ffffff] shadow-md dark:bg-[#050505]"
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
             border-smallTextColor dark:border-smallTextColorDark py-2 px-4 rounded-[8px] max-h-[48px] hover:bg-smallTextColor  dark:hover:bg-smallTextColorDark
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
          href="#about"
          className="text-smallTextColor dark:text-smallTextColorDark font-[800] text-[17px] md:mr-10"
        >
          About
        </Navbar.Link>
        <Navbar.Link
          href="#services"
          className="text-smallTextColor dark:text-smallTextColorDark font-[800] text-[17px] md:mr-10"
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          href="#portfolio"
          className="text-smallTextColor dark:text-smallTextColorDark font-[800] text-[17px] md:mr-10"
        >
          Portfolio
        </Navbar.Link>
        <Navbar.Link
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
