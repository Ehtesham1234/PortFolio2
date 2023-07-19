import React from "react";

const Header = ({ themeChange, open }) => {
  // const headerRef = useRef(null);
  // const menuRef = useRef(null);

  // const stickyHeaderFunc = () => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.classList.add("sticky__header");
  //     } else {
  //       headerRef.current.classList.remove("sticky__header");
  //     }
  //   });
  // };

  // const handleClick = (e) => {
  //   e.preventDefault;
  //   const targetAttr = e.target.getAttribute("href");
  //   const location = document.querySelector(targetAttr).offsetTop;
  //   window -
  //     scrollTop({
  //       top: location - 80,
  //       left: 0,
  //     });
  // };

  // useEffect(() => {
  //   stickyHeaderFunc();
  //   return window.removeEventListener("scroll", stickyHeaderFunc);
  // }, []);

  // const toggleMenu = () => {
  //   menuRef.current.classList.toggle("show__menu");
  // };

  return (
    <header
      // ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ::::::::::::: LOGO  :::::::::::: */}
          <div className="flex items-center gap-[10px] ">
            <span
              className="w-[35px] h-[35px] bg-primaryColor dark:bg-primaryColorDark  text-white text-[16px] font-[500]
            rounded-full flex items-center justify-center
            "
            >
              E
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor dark:text-smallTextColorDark font-[700]">
                Ehtesham
              </h2>
              <p className="text-smallTextColor dark:text-smallTextColorDark text-[16px] font-[500] ">
                Personal
              </p>
            </div>
          </div>
          {/* :::::::::: LOGO END  ::::::::::: */}
          {/* :::::::::: MENU START ::::::::::: */}
          <div
            className="menu"
            // ref={menuRef} onClick={toggleMenu}
          >
            <ul className="flex items-center gap-10">
              <li>
                <a
                  // onClick={handleClick}
                  className="text-smallTextColor dark:text-smallTextColorDark font-[600] "
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  // onClick={handleClick}
                  className="text-smallTextColor dark:text-smallTextColorDark font-[600] "
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  // onClick={handleClick}
                  className="text-smallTextColor dark:text-smallTextColorDark font-[600] "
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  // onClick={handleClick}
                  className="text-smallTextColor dark:text-smallTextColorDark font-[600] "
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* :::::::::: MENU END  :::::::::::  */}

          {/*  :::::::::: MENU RIGHT  :::::::::::  */}

          <div className="flex item-center gap-4 justify-between">
            <button
              onClick={() => themeChange()}
              className="flex items-center flex-row gap-2 text-smallTextColor dark:text-smallTextColorDark font-[600] border border-solid
             border-smallTextColor dark:border-smallTextColorDark py-2 px-4 rounded-[8px] max-h-[48px] hover:bg-smallTextColor  dark:hover:bg-smallTextColorDark
              hover:text-white dark:hover:text-smallTextColor hover:font-[500] ease-in duration-300 overflow-hidden"
            >
              {open ? "LightMode" : "DarkMode"}
            </button>
            <button
              className="flex items-center flex-row gap-2 text-smallTextColor dark:text-smallTextColorDark font-[600] border border-solid
             border-smallTextColor dark:border-smallTextColorDark py-2 px-4 rounded-[8px] max-h-[48px] hover:bg-smallTextColor  dark:hover:bg-smallTextColorDark
              hover:text-white  dark:hover:text-smallTextColor hover:font-[500] ease-in duration-300 "
            >
              <i className="ri-send-plane-line"></i> Let's Talk
            </button>
            <span
              // onClick={toggleMenu}
              className=" text-2xl text-smallTextColor dark:text-smallTextColorDark md:hidden cursor-pointer"
            >
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
