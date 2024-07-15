import React from "react";
import TestimonialComments from "./Testimonials/TestimonialComments";
import TestimonialsTitle from "./Testimonials/TestimonialsTitle";
import Container from "./global/Container";

function Testimonials() {
  return (
    <div className="bg-service-texture ">
      <Container>
        <TestimonialsTitle />
        <TestimonialComments />
      </Container>
    </div>
  );
}

export default Testimonials;
