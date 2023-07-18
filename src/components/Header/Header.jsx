import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ::::::::::::: LOGO  :::::::::::: */}
          <div className="flex items-center gap-[10px] ">
            <span
              className="w-[35px] h-[35px] bg-primaryColor text-white text-[16px] font-[500]
            rounded-full flex items-center justify-center
            "
            >
              E
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                Ehtesham
              </h2>
              <p className="text-smallTextColor text-[16px] font-[500] ">
                Personal
              </p>
            </div>
          </div>
          {/* :::::::::: LOGO END  ::::::::::: */}
          {/* :::::::::: MENU START ::::::::::: */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-smallTextColor font-[600] " href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600] " href="#services">
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor font-[600] "
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600] " href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* :::::::::: MENU END  :::::::::::  */}

          {/*  :::::::::: MENU RIGHT  :::::::::::  */}

          <div className="flex item-center gap-4">
            <button
              className="flex items-center flex-row gap-2 text-smallTextColor font-[600] border border-solid
             border-smallTextColor py-2 px-4 rounded-[8px] max-h-[48px] hover:bg-smallTextColor
              hover:text-white hover:font-[500] ease-in duration-300 overflow-hidden"
            >
              <i className="ri-send-plane-line"></i> Let's Talk
            </button>
            <span className=" text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i className="ri-menu-line"></i>
            </span>
          </div>
          {/*  :::::::::: MENU END  :::::::::::  */}
        </div>
      </div>
    </header>
  );
};

export default Header;
