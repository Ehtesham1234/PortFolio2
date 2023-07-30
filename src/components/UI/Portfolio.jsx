import React, { useState, useEffect } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
  // const [nextItems, setNextItems] = useState(6);
  // const [originalData, setOriginalData] = useState(data); // Store the original data here
  // const [portfolios, setPortFolios] = useState(data);
  // const [selectTab, setSelectTab] = useState("all");
  // const [showModal, setShowModal] = useState(false);
  // const [activeID, setActiveID] = useState(null);

  // const loadMoreHandler = () => {
  //   setNextItems((prev) => prev + 3);
  // };

  // const showModalHAndler = (id) => {
  //   setShowModal(true);
  //   setActiveID(id);
  // };

  // useEffect(() => {
  //   if (selectTab === "all") {
  //     setPortFolios(originalData); // Reset the filtered data to the original data when "All" is selected
  //   } else {
  //     const filteredData = originalData.filter(
  //       (item) => item.category === selectTab
  //     );
  //     setPortFolios(filteredData);
  //   }
  // }, [selectTab, originalData]);
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
    if (selectTab === "all") {
      setPortFolios(data); // Reset the filtered data to the original data when "All" is selected
    } else {
      const filteredData = data.filter((item) => item.category === selectTab);
      setPortFolios(filteredData);
    }
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb--7 sm:mb-0">
            <h3 className="text-headingColor dark:text-headingColorDark text-[2rem] font-[700]">
              My Recent Projects
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-smallTextColor dark:text-smallTextColorDark border border-solid border-smallTextColor dark:border-smallTextColorDark
            py-2 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("Front End")}
              className="text-smallTextColor dark:text-smallTextColorDark border border-solid border-smallTextColor dark:border-smallTextColorDark
            py-2 px-4 rounded-[8px]"
            >
              FrontEnd
            </button>
            <button
              onClick={() => setSelectTab("Backend")}
              className="text-smallTextColor dark:text-smallTextColorDark  border border-solid border-smallTextColor dark:border-smallTextColorDark
            py-2 px-4 rounded-[8px]"
            >
              Backend
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolios.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              deta-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1] "
            >
              <figure>
                <img
                  src={portfolio.imgUrl}
                  alt=""
                  className="rounded-[8px]  h-full object-cover "
                />
              </figure>
              <div
                className="w-full h-full bg-primaryColor dark:bg-primaryColorDark bg-opacity-40 dark:bg-opacity-40 absolute top-0 lest-0 z-[5]
                hidden group-hover:block "
              >
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHAndler(portfolio.id)}
                    className="text-white dark:text-black  bg-headingColor dark:bg-headingColorDark hover:bg-smallTextColor dark:hover:bg-smallTextColorDark py-2 px-4 rounded-[8px] 
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
              className="text-white dark:text-black bg-primaryColor dark:bg-primaryColorDark hover:bg-headingColor dark:hover:bg-headingColorDark  py-2 px-4 rounded-[8px] 
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
