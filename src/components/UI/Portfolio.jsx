import React, { useState, useEffect } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortFolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHAndler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  useEffect(() => {
    if (selectTab == "all") {
      setPortFolios(data);
    }
    if (selectTab == "web-design") {
      const filteredData = portfolios.filter(
        (item) => item.category === "Web Design"
      );
      setPortFolios(filteredData);
    }
    if (selectTab == "ux-design") {
      const filteredData = portfolios.filter((item) => item.category === "Ux");
      setPortFolios(filteredData);
    }
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb--7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My Recent Projects
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-smallTextColor border border-solid border-smallTextColor 
            py-2 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("web-design")}
              className="text-smallTextColor border border-solid border-smallTextColor 
            py-2 px-4 rounded-[8px]"
            >
              Web Design
            </button>
            <button
              //   onClick={() => setSelectTab("ux-design")}
              className="text-smallTextColor border border-solid border-smallTextColor 
            py-2 px-4 rounded-[8px]"
            >
              Ux Design
            </button>
            {/* Yeh ux design ka jagha backend hoga aur web ka jagha frontend . yeh data portfolio,js mein hai
            Ux wala per click ker ne per deta udh raha isliye button k niche se setSelectTab hada diye ab not click hoga baad mein apne se 
            data ka structure bana ker backend hoja ga iske jagha */}
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolios.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              deta-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img src={portfolio.imgUrl} alt="" className="rounded-[8px] " />
              </figure>
              <div
                className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 lest-0 z-[5]
                hidden group-hover:block "
              >
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHAndler(portfolio.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] 
                  font-[500] ease-in duration-200"
                  >
                    See details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] 
                  font-[500] ease-in duration-200"
            >
              Load More
            </button>
          )}
        </div>
      </div>
      {showModal && <Modal setSHowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Portfolio;
