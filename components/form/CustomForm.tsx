"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormSelect from "./FormSelect";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormInput from "./FormInput";
import { Form } from "../ui/form";
import { Button } from "../ui/button";

import { time, places } from "@/utils/data";
import Link from "next/link";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "../ui/use-toast";
import { revalidatePath } from "next/cache";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Xin hãy nhập đầy đủ họ và tên.",
  }),
  telephone: z.string().min(10, {
    message: "Số điện thoại không hợp lệ (nhập đủ 10 số).",
  }),
  province: z.string({
    required_error: "Vui lòng chọn một tỉnh thành để bán.",
  }),
  time: z.string({
    required_error: "Vui lòng chọn thời gian bán.",
  }),
  price: z
    .string({
      required_error: "Vui lòng chọn số tiền bán bán.",
    })
    .refine(
      (value) => {
        const numValue = parseFloat(value);
        return !isNaN(numValue);
      },
      {
        message: "Vui lòng nhập giá hợp lệ.",
      }
    )
    .transform((value) => parseFloat(value)) // Transform string to number if valid
    .refine((value) => value >= 5, {
      message: "Chúng tôi chỉ nhận bán trên 5 tỷ",
    }),
});

function CustomForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      username: "",
      telephone: "",
      province: undefined,
      time: undefined,
      price: undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    const message = `Họ và Tên: ${data.username}\n
Số Điện Thoại: ${data.telephone}\n
Tỉnh: ${data.province}\n
Giá: ${data.price}\n
Thời gian bán: ${data.time}`;
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: data.username,
          to_name: "Võ Huỳnh Giao",
          to_email: "lienhechudautuduan@gmail.com",
          message: message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      )
      .then(
        () => {
          setLoading(false);
          toast({
            title: "Đăng ký thành công",
            description: "Khách hàng vui lòng chờ đợi chúng tôi liên lạc",
          });

          form.reset();
        },
        (error) => {
          setLoading(false);
          console.error(error);
        }
      );
  };

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <CardHeader>
            <CardTitle>LIÊN HỆ NGAY ĐỂ ĐƯỢC TƯ VẤN</CardTitle>
          </CardHeader>

          <CardContent>
            <FormInput
              type="text"
              control={form.control}
              placeholder="Họ và tên"
              name="username"
            />
          </CardContent>

          <CardContent>
            <FormInput
              control={form.control}
              placeholder="Nhập số điện thoại"
              type="tel"
              name="telephone"
            />
          </CardContent>

          <CardContent>
            <FormSelect
              control={form.control}
              name="province"
              data={places}
              placeholder="Tỉnh thành"
            />
          </CardContent>
          <CardContent>
            <FormSelect
              control={form.control}
              name="time"
              data={time}
              placeholder="thời gian bán"
            />
          </CardContent>
          <CardContent>
            <FormInput
              type="number"
              placeholder="Giá bán mong muốn (chỉ nhận bán trên 5 tỷ)"
              control={form.control}
              name="price"
            />
          </CardContent>
          <CardFooter className=" flex flex-col">
            <Button
              className="w-full font-bold "
              disabled={loading}
              type="submit"
            >
              {loading ? "Đang đăng ký " : "Đăng Ký "}
            </Button>
            <p className="mt-2 px-15 text-center lg:px-24 md:px-18">
              Để được tư vấn sớm và nhanh nhất, hãy gọi HOTLINE bên dưới
            </p>
            <Link
              href={"tel:0899765292"}
              className="bg-blue-900 text-white rounded-xl px-10 py-1 font-bold mt-3 "
            >
              089.976.5292
            </Link>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

export default CustomForm;
