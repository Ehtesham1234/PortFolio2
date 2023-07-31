import React from "react";
import heroImg from "../../assets/images/frontenImg.png";
import Resume from "../../assets/Cv/Resume_Ehtesham_Usman.pdf";
import CountUp from "react-countup";
const Hero = ({ handleClick }) => {
  return (
    <section className="pt-0 " id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* :::::::::: HERO LEFT CONTENT :::::::::: */}

          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor dark:text-headingColorDark font-[600] text-[16px]"
            >
              Hello Welcome
            </h5>
            <h1
              className="text-headingColor dark:text-headingColorDark font-[800] text-[1.8rem] sm:text-[48px] loading-[35px] sm:loading-[46px] mt-5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              I'm Ehtesham Usman <br /> Frontend Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href={Resume} download>
                <button
                  className="bg-primaryColor dark:bg-primaryColorDark text-white dark:text-black font-[500] flex items-center 
                gap-2 hover:bg-headingColor  dark:hover:bg-headingColorDark ease-in duration-300
                py-2 px-4 rounded-[8px]"
                >
                  <i className="ri-mail-line"></i>
                  Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                onClick={handleClick}
                className="text-smallTextColor dark:text-smallTextColorDark font-[600] text-[16px]
               border-b border-solid border-smallTextColor dark:border-smallTextColorDark "
              >
                See Portfolio
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor dark:text-headingColorDark mt-14 font-[500] text-[15px]
                leading-7 sm:pl-14 sm:pr-10 "
            >
              <span className="">
                <i className="ri-apps-2-line"></i>
              </span>
              “Hi” I'm Ehtesham Usman. A Passionate Self Taught Front-End React
              Developer based in Asansol, India.
            </p>
            <div className="flex item-center gap-9 mt-14 flex-wrap">
              <span className="text-smallTextColor dark:text-smallTextColorDark text-[20px] font-[600]">
                Follow me:
              </span>
              <span className="">
                <a
                  href="https://github.com/Ehtesham1234"
                  target="_blank"
                  className="text-smallTextColor dark:text-smallTextColorDark text-[20px] font-[600]"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span className="">
                <a
                  href="https://www.linkedin.com/in/ehtesham-usman-aa41a022b/"
                  target="_blank"
                  className="text-smallTextColor dark:text-smallTextColorDark text-[20px] font-[600]"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span className="">
                <a
                  href="#instagram"
                  className="text-smallTextColor dark:text-smallTextColorDark text-[20px] font-[600]"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
            </div>
            <div className="flex item-center gap-9 mt-14 flex-wrap">
              <span className="text-smallTextColor dark:text-smallTextColorDark text-[20px] font-[600]">
                My Skills:
              </span>
              <span className="gap-2 dark:text-white">
                HTML :
                <a
                  href="#"
                  className="text-smallTextColor dark:text-headingColorDark text-[20px] font-[600]"
                >
                  <i className="ri-html5-fill"></i>
                </a>
              </span>
              <span className="gap-2  dark:text-white">
                CSS :
                <a
                  href="#"
                  className="text-smallTextColor dark:text-headingColorDark text-[20px] font-[600]"
                >
                  <i className="ri-css3-fill"></i>
                </a>
              </span>
              <span className="gap-2  dark:text-white">
                JAVASCRIPT :
                <a
                  href="#"
                  className="text-smallTextColor dark:text-headingColorDark text-[20px] font-[600]"
                >
                  <i className="ri-javascript-line "></i>
                </a>
              </span>
              <span className="gap-2  dark:text-white">
                REACT JS :
                <a
                  href="#"
                  className="text-smallTextColor dark:text-headingColorDark text-[20px] font-[600]"
                >
                  <i className="ri-reactjs-line"></i>
                </a>
              </span>
            </div>
            {/* Yaha per follow me ka trah skills bol kar uska aage skills rahega */}
          </div>
          {/* :::::::::: HERO LEFT END :::::::::: */}
          {/* :::::::::: HERO IMG :::::::::: */}

          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex item-center justify-center">
              {/* apna image jub dalenge to yeh add kerna hoga bg-primaryColor dark:bg-primaryColorDark rounded-[90px]  ya img tag mein dal ker thora bht hange hoga  className=" bg-primaryColor dark:bg-primaryColorDark rounded-[120px] p-4"*/}
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/* :::::::::: HERO IMG END :::::::::: */}
          {/* :::::::::: HERO CONTENT RIGHT :::::::::: */}

          <div
            className="md:basis-1/5 flex justify-between text-center mt-18 flex-wrap gap-3 md:mt-0 
          md:flex-col md:justify-end md:text-end items-center "
          >
            <div className="mb-10 px-20 xs:px-0">
              <h2 className="text-headingColor dark:text-headingColorDark font-[700] text-[32px]">
                <CountUp start={0} end={1} duration={2} suffix="*" />
              </h2>
              <h4 className="text-headingColor dark:text-headingColorDark font-[600] text-[32px]">
                Year of Experiance
              </h4>
            </div>
            <div className="mb-10 px-[7rem] xs:px-0">
              <h2 className="text-headingColor dark:text-headingColorDark font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor dark:text-headingColorDark font-[600] text-[32px]">
                Succes Rate
              </h4>
            </div>{" "}
            <div className="mb-10 px-20 xs:px-0">
              <h2 className="text-headingColor dark:text-headingColorDark font-[700] text-[32px]">
                <CountUp start={0} end={30} duration={2} suffix="*" />
              </h2>
              <h4 className="text-headingColor dark:text-headingColorDark font-[600] text-[32px]">
                Project Completed
              </h4>
            </div>
          </div>
          {/* :::::::::: HERO CONTENT RIGHT END :::::::::: */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
