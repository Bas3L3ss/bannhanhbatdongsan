import React from "react";
import Container from "./global/Container";
import Image from "next/image";
import { address } from "@/utils/data";
import { footerImg } from "@/public/assets";
import { IconType } from "react-icons/lib";
import { Separator } from "./ui/separator";

type AddressType = {
  icon: IconType;
  description: string;
};

function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <div className="bg-white text-amber-700">
      <Container>
        <div className="flex lg:flex-row flex-col">
          <div className="flex flex-1 flex-col  ">
            <h1 className="font-bold text-5xl mb-3">
              CÔNG TY TNHH ONEBE VIỆT NAM
            </h1>
            {address.map((item: AddressType, index: number) => {
              return (
                <div key={index} className="flex mb-2 gap-2">
                  <item.icon />
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
          <Separator className="h-[0.2px] sm:hidden block mt-3" />
          <Image
            src={footerImg}
            className="sm:w-[300px] w-full "
            alt="Logo"
            width={300}
          />
        </div>
        <Separator className="h-[0.2px] lg:mt-5 bg-yellow-300" />
        <p className="font-bold text-sm text-center mt-3">
          ©{thisYear} Allrights reserved bannhanhnhadatsieutoc.com
        </p>
      </Container>
    </div>
  );
}

export default Footer;
