import React from "react";
import { Separator } from "../ui/separator";

function TestimonialsTitle() {
  return (
    <div className="text-white flex flex-col items-center">
      <p className="text-3xl font-semibold">
        HƠN 3.500 KHÁCH HÀNG SỬ DỤNG DỊCH VỤ
      </p>
      <p>Nếu bạn còn băn khoăn, hãy xem họ nhận được gì từ Onebe Land.</p>
      <Separator className="hidden md:block bg-orange-500 w-[20%] mt-4 h-[2px] " />
    </div>
  );
}

export default TestimonialsTitle;
