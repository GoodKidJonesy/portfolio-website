import React, { useEffect } from "react";
import PortfolioCard from "../components/PortfolioCard";
import { portfolioProjects } from "../constants/Portfolio-Projects";

const Portfolio = () => {
  //useEffect to animate on load
  useEffect(() => {
    const portfolioContainer = document.getElementById("portfolioContainer");
    if (portfolioContainer) {
      setTimeout(() => {
        portfolioContainer.classList.remove("scale-0");
        portfolioContainer.classList.remove("opacity-0");
        portfolioContainer.classList.remove("-translate-y-1/2");
      }, 100);
    }
  }, []);

  return (
    <div
      id="portfolioContainer"
      className="w-full h-full pt-16 md:pt-0 flex items-center justify-center scale-0 duration-1000 ease-in-out opacity-0 -translate-y-1/2"
    >
      <div className="w-11/12 md:w-4/6 h-full md:mt-0 md:h-3/5 grid grid-cols-1 md:grid-cols-3 gap-12 md:auto-rows-fr overflow-y-scroll overflow-x-visible md:overflow-visible">
        {portfolioProjects.map((project, index) => {
          return (
            <div className="w-full h-56 md:h-auto flex justify-center" key={index}>
              <div className="w-11/12">
                <PortfolioCard project={project} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
