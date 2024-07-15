import React from "react";
import { testimonials } from "@/utils/data";
import Image from "next/image";
import { userServiceImg } from "@/public/assets";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
export type CommentType = {
  title: string;
  description: string;
};
function TestimonialComments() {
  return (
    <div className="hidden  lg:grid grid-cols-3 gap-2 ">
      {testimonials.map((item: CommentType, index) => {
        return (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex   text-sm gap-2">
                <div className="grid grid-rows-2">
                  <Image
                    className="row-start-1"
                    src={userServiceImg}
                    width={50}
                    height={50}
                    alt={item.title}
                  />
                </div>
                <p className="w-50%">{item.title}</p>
              </CardTitle>
            </CardHeader>

            <CardContent className="-mt-10">{item.description}</CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default TestimonialComments;
