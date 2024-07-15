import React from "react";
import { benefits2_flower, benefits2_leaf } from "@/utils/data";
import Image from "next/image";
type BenefitsType = {
  icon: string;
  description: string;
};
function ContactDetails() {
  return (
    <div>
      <p className="font-bold text-center text-2xl mb-7">
        Quy đổi <span className="text-red-500 font-bold"> LỢI ÍCH </span> thành{" "}
        <span className="text-red-500 font-bold"> GIÁ TRỊ</span> thực tế
      </p>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-9">
          {benefits2_leaf.map((item: BenefitsType, index) => {
            return (
              <div
                className=" sm:h-[88px] h-[130px] text-center bg-blue-800 p-5 relative "
                key={index}
              >
                <span className="absolute w-8 aspect-square bg-blue-400 rounded-full grid place-content-center -top-3.5 left-[50%] -translate-x-[50%]">
                  <Image src={item.icon} width={13} alt={item.description} />
                </span>
                <p className="font-bold text-white sm:text-base text-sm ">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-9">
          {benefits2_flower.map((item: BenefitsType, index) => {
            return (
              <div
                className=" sm:h-[88px]
                h-[130px] text-center bg-blue-800 p-5 relative "
                key={index}
              >
                <span className="absolute w-8 aspect-square bg-blue-400 rounded-full grid place-content-center -top-3.5 left-[50%] -translate-x-[50%]">
                  <Image src={item.icon} width={13} alt={item.description} />
                </span>
                <p className="font-bold text-white sm:text-base text-sm ">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
