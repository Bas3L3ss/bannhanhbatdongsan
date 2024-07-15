import * as React from "react";

import {
  Carousel as ShacdnCarousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "@/components/ui/carousel";
import { testimonials } from "@/utils/data";
import { userServiceImg } from "@/public/assets";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CommentType } from "./TestimonialComments";
import Image from "next/image";

const Carousel = () => {
  return (
    <ShacdnCarousel className="lg:hidden block w-full">
      <CarouselContent>
        {testimonials.map((item: CommentType, index) => {
          return (
            <CarouselItem key={index}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex text-sm gap-2">
                    <div className="grid grid-rows-2">
                      <Image
                        className="row-start-1"
                        src={userServiceImg}
                        width={50}
                        height={50}
                        alt={item.title}
                      />
                    </div>
                    <p className=" md:text-xl text-lg ">{item.title}</p>
                  </CardTitle>
                </CardHeader>

                <CardContent className="-mt-10">{item.description}</CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute  -left-[12px]" />
      <CarouselNext className="absolute  -right-[12px]" />
    </ShacdnCarousel>
  );
};
export default Carousel;
