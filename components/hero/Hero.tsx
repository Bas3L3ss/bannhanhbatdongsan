import React from "react";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import CustomForm from "../form/CustomForm";
import Container from "../global/Container";

function Hero() {
  return (
    <div className=" text-white bg-hero-texture ">
      <Container className="  flex flex-col gap-10   ">
        <HeroTitle />
        <div className="grid  gap-3   grid-cols-1 md:grid-cols-2">
          <HeroDescription />
          <CustomForm />
        </div>
      </Container>
    </div>
  );
}

export default Hero;
