import { virtues } from "@/utils/data";
import Image from "next/image";
import { check2Svg } from "@/public/assets/svg";

function TeamTitle() {
  return (
    <div className="sm:block  sm:px-0 px-2  ">
      <div className="font-bold text-blue-950 lg:text-4xl sm:text-3xl sm:gap-0 gap-2 text-xl mb-5 sm:block flex">
        <p>ĐỘI NGŨ</p>
        <p>NHÂN VIÊN</p>
        <p>ONEBE LAND</p>
      </div>
      <div className="grid grid-cols-2 sm:flex sm:flex-col sm:gap-2 gap-1 ">
        {virtues.map((item: string, index) => {
          return (
            <div key={index} className="flex sm:gap-2 gap-1   items-center">
              <Image src={check2Svg} width={35} alt={item} />
              <p className="sm:text-xl text-sm font-bold text-blue-900">
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamTitle;
