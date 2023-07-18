import React from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setSHowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id == activeID);

  return (
    <div className="h-full w-full fixed ">
      <div className=""></div>
    </div>
  );
};

export default Modal;
