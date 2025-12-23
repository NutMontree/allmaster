import React from "react";
import Image from "next/image";
import { packetData } from "./data";
import Link from "next/link";

// Helper Component สำหรับไอคอนติ๊กถูก (ใช้ SVG เพื่อความคมชัดสูงสุดแทนรูปภาพ)
const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-5 h-5 flex-shrink-0 text-yellow-500 mt-0.5"
  >
    <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.2" />
    <path
      d="M7 13L10 16L17 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Packet() {
  return (
    <section className="relative py-24 overflow-hidden bg-gray-50 dark:bg-[#0b1120]">
      {/* --- Background Effects (แสงฟุ้งด้านหลังเพิ่มมิติ) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-400/20 dark:bg-yellow-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-block py-1.5 px-4 rounded-full bg-yellow-100/80 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold tracking-wider uppercase backdrop-blur-sm border border-yellow-200 dark:border-yellow-700/50">
            Our Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
            เลือกแพ็กเกจที่ใช่ <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
              เพื่อธุรกิจที่เหนือกว่า
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
            ยกระดับมาตรฐานเว็บไซต์ของคุณด้วยโซลูชันระดับมืออาชีพ คุ้มค่า ครบครัน
          </p>
        </div>

        {/* --- Pricing Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
          {packetData.dataItems.map((item, index) => {
            // ตรวจสอบว่าเป็น Card ตรงกลางหรือไม่ (เพื่อทำ Highlight)
            const isPopular = index === 1;

            return (
              <div
                key={index}
                className={`
                  relative flex flex-col p-8 rounded-[2rem] transition-all duration-500 group
                  ${
                    isPopular
                      ? "bg-gray-900 dark:bg-[#161f32] text-white shadow-2xl shadow-yellow-500/20 lg:-mt-8 lg:mb-8 border border-yellow-500/50 scale-100 lg:scale-105 z-20"
                      : "bg-white dark:bg-[#1e293b] text-gray-900 dark:text-white border border-gray-100 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-600/50 shadow-xl shadow-gray-200/50 dark:shadow-none hover:-translate-y-2"
                  }
                `}
              >
                {/* Badge: Best Value (เฉพาะตัวกลาง) */}
                {isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    POPULAR CHOICE
                  </div>
                )}

                {/* Card Title & Price */}
                <div className="mb-8 text-center">
                  <h3
                    className={`text-lg font-semibold tracking-wider uppercase mb-4 ${
                      isPopular
                        ? "text-yellow-400"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {item.subtitle}
                  </h3>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-5xl font-extrabold tracking-tight">
                      {item.price}
                    </span>
                    <span
                      className={`text-lg font-medium self-end mb-2 ${
                        isPopular ? "text-gray-400" : "text-gray-400"
                      }`}
                    >
                      ฿
                    </span>
                  </div>
                  <p
                    className={`text-sm ${
                      isPopular ? "text-gray-400" : "text-gray-400"
                    }`}
                  >
                    (ไม่รวม VAT 7%)
                  </p>
                </div>

                {/* Divider */}
                <div
                  className={`h-px w-full mb-8 ${
                    isPopular ? "bg-gray-700" : "bg-gray-100 dark:bg-gray-700"
                  }`}
                />

                {/* Feature List */}
                <ul className="space-y-4 mb-10 flex-1">
                  {item.Description.map((dect, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {/* ใช้ SVG Icon แทน Image เพื่อความคมชัด */}
                      <CheckIcon />
                      <span
                        className={`text-sm leading-6 ${
                          isPopular
                            ? "text-gray-300"
                            : "text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        {dect.describetion}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/price-estimation">  
                  <button
                    className={`
                    w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1
                    ${
                      isPopular
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-400 hover:to-orange-400"
                        : "bg-white text-gray-900 border-2 border-gray-100 hover:border-yellow-400 hover:text-yellow-600 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:border-yellow-500"
                    }
                    `}
                  >
                    เลือกแพ็กเกจ
                  </button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* --- Footer Note --- */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            * ราคาค่าบริการรายปีอาจมีการเปลี่ยนแปลง
            โปรดตรวจสอบเงื่อนไขก่อนชำระเงิน
          </p>
        </div>

        {/* --- Contact Section (Redesigned) --- */}
        <div className="mt-20 border-t border-gray-200 dark:border-gray-800 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              ต้องการคำแนะนำเพิ่มเติม? ปรึกษาเราได้ทันที
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Line Button */}
              <a
                href="https://line.me/ti/p/p-xwfjMXJM"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-5 bg-[#06C755]/10 hover:bg-[#06C755] border border-[#06C755]/20 rounded-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#06C755] text-white p-3 rounded-xl group-hover:bg-white group-hover:text-[#06C755] transition-colors">
                    <Image
                      src="/images/icon/line.webp"
                      width={28}
                      height={28}
                      alt="Line"
                      className="w-7 h-7"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-[#06C755] group-hover:text-white uppercase tracking-wider">
                      Add Line
                    </p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-white">
                      ติดต่อผ่าน Line
                    </p>
                  </div>
                </div>
                <svg
                  className="w-6 h-6 text-[#06C755] group-hover:text-white transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* Messenger Button */}
              <a
                href="https://www.facebook.com/all.m.min.2024"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-5 bg-[#0084FF]/10 hover:bg-[#0084FF] border border-[#0084FF]/20 rounded-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#0084FF] text-white p-3 rounded-xl group-hover:bg-white group-hover:text-[#0084FF] transition-colors">
                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.03 2 11c0 2.87 1.69 5.4 4.29 7.03-.18 1.48-.82 2.76-.84 2.8 0 0 .86.13 3.03-1.07.69.19 1.43.29 2.18.29 5.52 0 10-4.03 10-9S16.52 2 12 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-[#0084FF] group-hover:text-white uppercase tracking-wider">
                      Chat Now
                    </p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-white">
                      ติดต่อผ่าน Messenger
                    </p>
                  </div>
                </div>
                <svg
                  className="w-6 h-6 text-[#0084FF] group-hover:text-white transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
