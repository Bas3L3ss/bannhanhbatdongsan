import React from "react";
import Container from "./global/Container";
import ContactDetails from "./contact/ContactDetails";
import ContactFormContainer from "./contact/ContactFormContainer";
import Image from "next/image";

function Contact() {
  return (
    <div className="relative bg-sky-100">
      <Container>
        <p className="font-bold text-3xl text-center mb-6">
          Hãy liên hệ với Onebe Land ngay hôm nay !
        </p>
        <div className="flex flex-col lg:flex-row gap-6">
          <ContactFormContainer />
          <ContactDetails />
        </div>
      </Container>
      <Image src="" alt="square" />
    </div>
  );
}

export default Contact;
