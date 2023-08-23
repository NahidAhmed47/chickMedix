import React from "react";
import sliderImg from "../../../assets/slider-1.jpg";
import BtnPrimary from "../../../components/btn/BtnPrimary";

const HomeBanner = () => {
  return (
    <div
      className="min-h-[60vh] md:h-screen w-screen bg-no-repeat bg-center md:bg-cover "
      style={{ backgroundImage: `url(${sliderImg})` }}
    >
      <div className="flex items-center justify-center w-full h-full" style={{backgroundColor:' transparent',
    backgroundImage: 'linear-gradient(180deg, #00000073 47%, #000000 100%)',
    opacity: '0.86'}}> 
        <div className="text-center">
          <h1 className="text-xl md:text-3xl lg:text-7xl text-white font-extrabold font-mono">
            Poultry Farming
          </h1>
          <p className="text-[#EDECD8] font-medium text-sm lg:text-base py-4 md:py-6 max-w-[651px]">
            All of our chickens are grown by the Soanes family and their farming
            neighbours on farms in and around the Yorkshire Wolds.
          </p>
          <BtnPrimary>Discover More</BtnPrimary>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;