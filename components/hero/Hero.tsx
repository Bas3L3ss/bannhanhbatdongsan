import React from "react";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import CustomForm from "../form/CustomForm";

function Hero() {
  return (
    <div>
      <HeroTitle />
      <div className="flex flex-col md:flex-row">
        <HeroDescription />
        <CustomForm />
      </div>
    </div>
  );
}

export default Hero;
