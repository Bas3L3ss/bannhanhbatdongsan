import Image from "next/image";
import React from "react";
import { teamImg } from "@/public/assets";

function TeamDetails() {
  return (
    <div className=" bg-blue-600 xl:h-[520px] xl:w-[590px] p-4 ">
      <Image
        className=" w-full h-full"
        src={teamImg}
        width={300}
        alt="các thành viên"
      />
    </div>
  );
}

export default TeamDetails;
