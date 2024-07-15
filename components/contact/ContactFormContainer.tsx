import React from "react";
import CustomForm from "../form/CustomForm";

function ContactFormContainer() {
  return (
    <div>
      <CustomForm />
      <ul className="text-[16px]">
        <li>
          <p>
            ● Để có sự chuẩn bị tốt nhất cho chiến dịch marketing thì chúng tôi
            phải chốt hợp đồng trước ngày 25 mỗi tháng.
          </p>
        </li>
        <li>
          <p>
            ● Do số lượng đăng kí đang chờ rất đông nên tháng này chúng tôi chỉ
            còn đúng 2 chỉ tiêu cuối cùng, mong Anh/Chị thông cảm chốt nhanh cho
            kịp kế hoạch.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default ContactFormContainer;
