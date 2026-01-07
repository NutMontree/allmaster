"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      username: formData.get("username"),
      mobile: formData.get("mobile"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send-line", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        alert("ส่งข้อความสำเร็จ! ขอบคุณที่ติดต่อเรา");
        (e.target as HTMLFormElement).reset();
      } else {
        alert(`เกิดข้อผิดพลาด: ${result.error || "กรุณาลองใหม่ในภายหลัง"}`);
      }
    } catch (error) {
      console.error("Submit Error:", error);
      alert("ไม่สามารถเชื่อมต่อระบบได้ กรุณาตรวจสอบอินเทอร์เน็ต");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28">
      <div className="mb-16">
        <div className="flex gap-2.5 items-center justify-center mb-3">
          <span>
            <Icon
              icon={"ph:house-simple-fill"}
              width={20}
              height={20}
              className="text-[#EFBF04]"
            />
          </span>
          <p className="text-base font-semibold text-badge dark:text-white/90">
            ติดต่อเรา
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14">
            มีคำถามหรือข้อสงสัย? เรายินดีให้คำปรึกษา!
          </h3>
          <p className="text-xm font-normal tracking-tight text-black/50 dark:text-white/50 leading-6 max-w-3xl mx-auto">
            เนรมิตเว็บไซต์ในฝันของคุณให้เป็นจริง
            ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษา
            และออกแบบเว็บไซต์ที่ตอบโจทย์ธุรกิจของคุณโดยเฉพาะ
            เพื่อสร้างตัวตนบนโลกออนไลน์ให้โดดเด่นและเติบโตอย่างยั่งยืน
          </p>
        </div>
      </div>

      <div className="border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-xl dark:shadow-white/10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
          {/* ข้อมูลการติดต่อ (ซ้าย) */}
          <div className="relative w-fit">
            <Image
              src={"/images/contactUs/contactUs.webp"}
              alt="contact us"
              width={497}
              height={535}
              className="rounded-2xl brightness-50 h-full object-cover"
              unoptimized={true}
            />
            <div className="absolute top-6 left-6 lg:top-12 lg:left-12 flex flex-col gap-2">
              <h5 className="text-xl xs:text-2xl mobile:text-3xl font-medium tracking-tight text-white">
                ข้อมูลการติดต่อ
              </h5>
              <p className="text-sm xs:text-base mobile:text-xm font-normal text-white/80">
                พร้อมที่จะเริ่มโปรเจกต์ใหม่หรือยัง? <br />
                ทักมาคุยกับเราได้ทุกช่องทางครับ
              </p>
            </div>
            <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 flex flex-col gap-4 text-white">
              <Link href={"tel:0855953326"} className="w-fit">
                <div className="flex items-center gap-4 group w-fit">
                  <Icon icon={"ph:phone"} width={32} height={32} />
                  <p className="text-sm xs:text-base mobile:text-xm font-normal group-hover:text-[#EFBF04]">
                    085-595-3326
                  </p>
                </div>
              </Link>
              <Link href={"mailto:Nutmontree29@gmail.com"} className="w-fit">
                <div className="flex items-center gap-4 group w-fit">
                  <Icon icon={"ph:envelope-simple"} width={32} height={32} />
                  <p className="text-sm xs:text-base mobile:text-xm font-normal group-hover:text-[#EFBF04]">
                    Nutmontree29@gmail.com
                  </p>
                </div>
              </Link>
              <div className="flex items-center gap-4">
                <Icon icon={"ph:map-pin"} width={32} height={32} />
                <p className="text-sm xs:text-base mobile:text-xm font-normal">
                  กันทรลักษ์ ศรีสะเกษ
                </p>
              </div>
            </div>
          </div>

          {/* ฟอร์มการติดต่อ (ขวา) */}
          <div className="flex-1 w-full lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <input
                    type="text"
                    name="username"
                    placeholder="ชื่อ-นามสกุล*"
                    required
                    className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-[#EFBF04] focus:outline w-full bg-transparent dark:text-white"
                  />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="เบอร์โทรศัพท์ (10 หลัก)*"
                    required
                    maxLength={10}
                    pattern="^[0-9]{10}$"
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value
                        .replace(/[^0-9]/g, "")
                        .slice(0, 10);
                    }}
                    className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-[#EFBF04] focus:outline w-full bg-transparent dark:text-white"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="อีเมลสำหรับการติดต่อกลับ*"
                  required
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-[#EFBF04] focus:outline bg-transparent dark:text-white"
                />
                <textarea
                  rows={8}
                  name="message"
                  placeholder="รายละเอียดที่ต้องการสอบถาม..."
                  required
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-[#EFBF04] focus:outline bg-transparent dark:text-white"
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 rounded-full bg-[#EFBF04] text-white text-base font-semibold w-full mobile:w-fit hover:cursor-pointer hover:bg-black transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "กำลังส่งข้อความ..." : "ส่งข้อความ"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
