import React from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setSHowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id == activeID);

  return (
    <div className="h-full w-full fixed top-10 left-0 z-10 bg-headingColor bg-opacity-40 ">
      <div
        className="w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px]
      transform -translate-x-1/2 -translate-y-1/2 p-5"
      >
        <div className=" h-[50%]">
          <figure>
            <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
          </figure>
        </div>
        <div className="">
          <h2 className="text-2xl text-headingColor font-[700] my-5">
            {portfolio.title}
          </h2>
          <p className="text-[15px] leading-7 text-smallTextColor">
            {portfolio.description}
          </p>
          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-18px] text-[600]">
              Tecgnologies:
            </h4>

            {portfolio.technologies.map((item, idx) => (
              <span
                key={idx}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px]
              leading-0"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex  gap-2">
            <a href={portfolio.siteUrl} target="_blank" className="">
              <button
                className="bg-primaryColor text-white py-1 px-4 my-8 rounded-[8px] font-[500]
           hover:bg-headingColor ease-in duration-300 "
              >
                Live Site
              </button>
            </a>
            <a href={portfolio.gitUrl} target="_blank" className="">
              <button
                className="bg-primaryColor text-white py-1 px-4 my-8 rounded-[8px] font-[500]
           hover:bg-headingColor ease-in duration-300 "
              >
                Git Repo
              </button>
            </a>
          </div>
        </div>
        <button
          onClick={() => setSHowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem]
        text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer "
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
