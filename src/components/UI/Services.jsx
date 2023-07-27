import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";

const Services = () => {
  return (
    <section className="" id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor dark:text-headingColorDark font-[800] text-[2.4rem ] mb-5">
            What do i help
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor dark:text-headingColorDark   font-[500] text-[16px] leading-7">
            A dedicated Front-end Developer based in Asansol, India. <br></br>
            As a Junior Front-End Developer.I possess an impressive arsenal of
            skills in Html, Css, JavaScript, React, Redux,Tailwind, and Mui. I
            excel in developing and maintaining responsive websites that offer a
            smooth user experience. My expertise lies in crafting dynamic,
            engaging interfaces through writing clean and optimized code and
            utilizing cutting-edge development tools and techniques. I am also a
            team player who thrives in collaborating with cross-functional teams
            to produce outstanding web applications
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* :::::::::: Vertical line running through middle  ::::::::::: */}
              <div
                className="hidden absolute w-1 sm:block bg-indigo-300 dark:bg-orange-300 h-full left-1/2 
              transform -translate-x-1/2"
              ></div>
              {/* :::::::::: Left Card ::::::::::: */}
              <div className=" mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white dark:bg-black p-4 rounded shadow group hover:bg-primaryColor dark:hover:bg-primaryColorDark
                         cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor dark:text-primaryColorDark font-[700] mb-3 group-hover:text-white dark:group-hover:text-black
                            group-hover:font-[600] text-xl "
                        >
                          Frontend Development
                        </h3>
                        <p
                          className="text-[15px] text-smallTextColor dark:text-smallTextColorDark group-hover:text-white dark:group-hover:text-black
                          group-hover:font-[600] leading-7"
                        >
                          As a frontend developer, I create the user interface
                          of websites and applications using HTML, CSS,
                          JavaScript and Reactjs. I design and code the visual
                          elements that users interact with to create responsive
                          and interactive web pages. My goal is to create
                          user-friendly interfaces that are easy to navigate and
                          visually appealing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor dark:bg-primaryColorDark border-white dark:border-black border-4 w-10 h-10 absolute
                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0
                  item-center justify-center "
                  >
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* :::::::::: Right Card ::::::::::: */}
              <div className=" mt-6 sm:mt-0 sm:mb-12 overflow-hidden ">
                <div className="flex items-center flex-col sm:flex-row ">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-offset
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white dark:bg-black p-4 rounded shadow group hover:bg-primaryColor
                        dark:hover:bg-primaryColorDark cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor dark:text-primaryColorDark font-[700] mb-3 group-hover:text-white
                           dark:group-hover:text-black group-hover:font-[600] text-xl "
                        >
                          Backend Development
                        </h3>
                        <p
                          className="text-[15px] text-smallTextColor dark:text-smallTextColorDark group-hover:text-white
                          dark:group-hover:text-black group-hover:font-[600] leading-7"
                        >
                          As a backend developer, I create server-side logic and
                          have experience in creating REST APIs for CRUD
                          operations. My goal is to create efficient and
                          scalable backend systems.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor dark:bg-primaryColorDark border-white dark:border-black border-4 w-10 h-10 absolute
                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0
                  item-center justify-center "
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* :::::::::: Left Card ::::::::::: */}
              <div className=" mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row ">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="bg-white dark:bg-black p-4 rounded shadow group hover:bg-primaryColor
                        dark:hover:bg-primaryColorDark cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor dark:text-primaryColorDark font-[700] mb-3 group-hover:text-white
                          dark:group-hover:text-black  group-hover:font-[600] text-xl "
                        >
                          Full Stack Development
                        </h3>
                        <p
                          className="text-[15px] text-smallTextColor dark:text-smallTextColorDark group-hover:text-white
                          dark:group-hover:text-black group-hover:font-[600] leading-7"
                        >
                          As a full stack developer, I work on both frontend and
                          backend development. I am currently working on an
                          e-commerce app, designing and implementing the entire
                          stack. My goal is to create a seamless shopping
                          experience for customers using my skills in MERN
                          Stack.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor dark:bg-primaryColorDark border-white dark:border-black border-4 w-10 h-10 absolute
                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0
                  item-center justify-center "
                  >
                    <figure>
                      <img src={uiImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

{
  /* :::::::::: Right Card ::::::::::: */
}
{
  /* <div className=" mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className="bg-white  dark:bg-black p-4 rounded shadow group hover:bg-primaryColor
                       dark:hover:bg-primaryColorDark  cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor dark:text-primaryColorDark font-[700] mb-3 group-hover:text-white
                           dark:group-hover:text-black group-hover:font-[600] text-xl "
                        >
                          App Development
                        </h3>
                        <p
                          className="text-[15px] text-smallTextColor dark:text-smallTextColorDark group-hover:text-white
                          dark:group-hover:text-black  group-hover:font-[600] leading-7"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Facilis ad magnam, earum ea iure esse?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor dark:bg-primaryColorDark border-white dark:border-black border-4 w-10 h-10 absolute
                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0
                  item-center justify-center "
                  >
                    <figure>
                      <img src={appsImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div> */
}
