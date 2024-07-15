import React from "react";

function HeroDescription() {
  return (
    <div className="">
      <div className="sm:gap-0 gap-2 text-nowrap flex flex-col sm:flex-row items-center   ">
        <p className=" lg:mr-5 mr-3  shake font-bold text-red-600  lg:text-4xl md:text-3xl text-3xl  inline-block">
          ĐỀN TIỀN
        </p>
        <p className=" sm:flex-col  flex  content-center  font-bold lg:text-3xl md:text-lg text-lg ">
          Nếu không bán được
        </p>
      </div>
      <p className="mt-5 text-xl">
        Theo lẽ thường , tâm lý Ai cũng nghĩ{" "}
        <span className="font-bold">BÁN NHANH</span> là phải{" "}
        <span className="font-bold"> BÁN RẺ</span>. Nhưng chúng tôi{" "}
        <span className="font-bold"> NGHĨ KHÁC </span> và{" "}
        <span className="font-bold"> LÀM NGƯỢC LẠI </span>, đó là sẽ{" "}
        <span className="font-bold">
          {" "}
          ”BÁN NHANH HƠN – GIÁ CAO HƠN – NHÀN HẠ HƠN”.{" "}
        </span>
      </p>
    </div>
  );
}

export default HeroDescription;
