import React from "react";

function BenefitsTitle() {
  return (
    <div className="flex flex-col items-center">
      <h1 className=" lg:text-[35px] md:text-[26px] text-xl   font-bold mb-6">
        Vì sao bạn nên hợp tác cùng Onebe Land
      </h1>
      <div className="relative line bg-blue-400 h-[1.9px] sm:w-[35%] w-[80%]">
        <div className="absolute translate-y-[-50%] -translate-x-[ 50%]   left-[50%] bg-slate-100 w-10 h-10 grid place-content-center">
          <div className="dot h-3 w-3  "></div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsTitle;
