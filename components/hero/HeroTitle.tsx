import React from "react";

function HeroTitle() {
  return (
    <div className=" flex flex-col gap-1 content-center justify-center">
      <h3 className=" lg:text-[40px] md:text-[30px] sm:text-[22px] text-[20px] rounded-lg font-bold mx-auto inline-block text-center bg-blue-900 text-white lg:px-12 md:px-10 sm:px-8 px-5     py-2 lg:py-4  ">
        Giải pháp bán nhanh BĐS trong 7 ngày
      </h3>
      <p className="text-center lg:text-[25px] md:text-[20px] text-sm   font-bold italic">
        Onebe Land chỉ nhận bán bất động sản giá trị từ 2 tỷ trở lên
      </p>
    </div>
  );
}

export default HeroTitle;
