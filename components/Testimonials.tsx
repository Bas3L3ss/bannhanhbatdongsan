import React from "react";
import TestimonialComments from "./Testimonials/TestimonialComments";
import TestimonialsTitle from "./Testimonials/TestimonialsTitle";
import Container from "./global/Container";
import Carousel from "./Testimonials/Carousel";

function Testimonials() {
  return (
    <div className="bg-service-texture ">
      <Container>
        <TestimonialsTitle />
        <TestimonialComments />
        <Carousel />
      </Container>
    </div>
  );
}

export default Testimonials;
