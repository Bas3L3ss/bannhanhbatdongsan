import { Benefits } from "@/utils/data";
import Image from "next/image";
import { ReactSVG } from "react";

type BenefitType = { icon: string; description: string; title: string };

function BenefitsDetails() {
  console.log();
  return (
    <div className="grid grid-cols-1 lg:text-left text-center lg:grid-cols-3 mt-10 gap-4 ">
      {Benefits.map((benefit: BenefitType, index: number) => {
        return (
          <div key={index}>
            <Image
              className="mx-auto mb-3"
              src={benefit.icon}
              width={50}
              alt=""
            />
            <h1 className="font-bold text-xl mb-3">{benefit.title}</h1>
            <p className="text-lg">{benefit.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BenefitsDetails;
