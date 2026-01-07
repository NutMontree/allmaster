"use client";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import {
  TrendingUp,
  Edit3,
  Sparkles,
  Lock,
  Smartphone,
  Megaphone,
  ChevronRight,
} from "lucide-react";

const Categories = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Background Vectors */}
      <div className="absolute left-0 top-0">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized={true}
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized={true}
        />
      </div>

      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10 pt-48">
        <div className="grid grid-cols-10 sm:grid-cols-11 md:grid-cols-12 items-center gap-10">
          <div className="lg:col-span-6 col-span-10">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#EFBF04"
                viewBox="0 0 256 256"
              >
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM68,96A12,12,0,1,1,80,84,12,12,0,0,1,68,96Zm40,0a12,12,0,1,1,12-12A12,12,0,0,1,108,96Z"></path>
              </svg>
              Works
            </p>
            <h2 className="lg:text-52 text-40 mt-4 mb-2 lg:max-w-full font-medium leading-[1.2] text-dark dark:text-white">
              รับทำเว็บไซต์ ออกแบบเว็บไซต์ เพิ่มความน่าเชื่อถือ
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-lg lg:max-w-full leading-[1.3] md:max-w-3/4">
              การออกแบบเว็บไซต์จะต้องคำนึงถึงหลัก UX/UI
              เข้ามาเป็นองค์ความรู้ในการออกแบบด้วย
              เพราะจะช่วยทำให้ง่ายต่อการใช้งานไม่ว่าจะจากอุปกรณ์ไหนก็ตาม
              การมีเว็บไซต์ที่ดีสามารถช่วยเพิ่มยอดขายและช่วยทำให้คนจดจำ Brand
              เราได้
            </p>
            <Link
              href="/works"
              target="_blank"
              className="py-4 px-8 bg-[#EFBF04] text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark dark:hover:bg-white dark:hover:text-dark duration-300 shadow-lg shadow-[#EFBF04]/20"
            >
              ดูผลงานของเรา
            </Link>
          </div>

          {/* Featured Works Grids */}
          {[
            {
              src: "/images/categories/m1.webp",
              size: "lg:col-span-6 col-span-10",
            },
            {
              src: "/images/categories/m2.webp",
              size: "lg:col-span-6 col-span-10",
            },
            {
              src: "/images/categories/m3.webp",
              size: "lg:col-span-3 col-span-5",
            },
            {
              src: "/images/categories/m4.webp",
              size: "lg:col-span-3 col-span-5",
            },
          ].map((img, idx) => (
            <div key={idx} className={`${img.size}`}>
              <div className="relative rounded-2xl overflow-hidden group border border-slate-100 dark:border-zinc-800">
                <Image
                  src={img.src}
                  alt="works"
                  width={680}
                  height={386}
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">
                    Project Overview
                  </h3>
                  <p className="text-white/80 text-sm mt-2">
                    คลิกเพื่อดูรายละเอียดเพิ่มเติม
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-48 font-sans">
        <div className="container max-w-7xl mx-auto px-6">
          {/* Section 1: Intro Cards */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000066] dark:text-indigo-400 mb-4">
              ทำความรู้จักเว็บไซต์
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {[
              {
                id: 1,
                title: "บริการออกแบบเว็บไซต์คืออะไร",
                desc: "การออกแบบเว็บไซต์ คือ การออกแบบเว็บไซต์โดยคำนึงถึง Customer Journey ของกลุ่มลูกค้าผู้ใช้งานเป็นหลัก ดังนั้นจะเหมือนกับการออกแบบระบบการใช้งานบนเว็บไซต์ โดยการออกแบบเว็บไซต์จะต้องคำนึงถึงหลัก UX/UI เข้ามาเป็นองค์ความรู้ในการออกแบบด้วย",
              },
              {
                id: 2,
                title: "ต่างจากการใช้ Template อย่างไร",
                desc: "เว็บไซต์ Template คือ โครงสร้างของเว็บไซต์ที่เตรียมไว้แล้ว เพื่อลดเวลาการสร้าง แต่เว็บไซต์ที่ออกแบบใหม่จะผ่านการใส่ใจในทุกรายละเอียด ตั้งแต่ตำแหน่งเมนูจนถึงล่างสุดของแต่ละหน้าเว็บไซต์",
              },
              {
                id: 3,
                title: "การออกแบบเว็บไซต์ที่ดีควรต้องคำนึงถึงอะไรบ้าง",
                desc: "งานออกแบบเว็บไซต์ของเราทุกชิ้นจะเป็นการออกแบบโดยทีมงานผู้เชี่ยวชาญ โดยใช้หลัก Customer Centric ในการออกแบบ ซึ่งจะทำให้เว็บไซต์ที่ออกมานั้นตอบโจทย์การใช้งานของกลุ่มลูกค้าให้มากที่สุด",
              },
              {
                id: 4,
                title: "บริการทำเว็บไซต์บริษัทคืออะไร",
                desc: "การทำเว็บไซต์บริษัท คือ การทำเว็บไซต์ในรูปแบบของ Informative ซึ่งจะเน้นการแสดงข้อมูลของสินค้าหรือบริการเป็นหลัก โดยเป้าหมายเพื่อช่วยตอบโจทย์ธุรกิจที่หลากหลาย ไม่ว่าจะเป็นการเพิ่มความน่าเชื่อถือให้กับธุรกิจ",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="relative p-8 border-2 border-slate-100 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/30 rounded-[2rem] hover:shadow-xl transition-all group overflow-hidden"
              >
                <span className="absolute -top-6 -left-4 text-8xl font-black text-blue-600/5 dark:text-indigo-500/10 italic group-hover:text-blue-600/10 transition-colors pointer-events-none">
                  {item.id}
                </span>
                <h3 className="text-xl font-bold text-[#000066] dark:text-indigo-300 mb-4 relative z-10">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Section 2: Features */}
          <div className="max-w-7xl mx-auto py-20 border-t border-slate-100 dark:border-zinc-900">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#000066] dark:text-indigo-400 mb-4">
                เว็บไซต์ที่ดีควรมีอะไรบ้าง
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-12 text-center">
              {[
                {
                  icon: TrendingUp,
                  title: "รองรับการติดอันดับบน Google",
                  desc: "ค้นหา Keyword ที่เกี่ยวข้อง กับธุรกิจของคุณ เพื่อเพิ่มการค้นหาและการเข้าชมเว็บไซต์",
                },
                {
                  icon: Edit3,
                  title: "ออกแบบให้ตอบโจทย์การใช้งานของลูกค้า",
                  desc: "บริการ SEO (Off-page) ด้วย บทความภาษาไทย คุณภาพสูง เพิ่มพลังให้กับเว็บไซต์ของคุณ",
                },
                {
                  icon: Sparkles,
                  title: "น่าเชื่อถือ ทันสมัย ออกแบบตามหลัก UX/UI",
                  desc: "ช่วยทำให้ Keyword ที่ต้องการ ติด SEO อันดับ 1-5 อย่างน้อย 3 เดือนขึ้นไป",
                },
                {
                  icon: Lock,
                  title: "เพิ่มความปลอดภัยด้วย SSL",
                  desc: "ทำการปรับปรุง Meta Tag ของเว็บไซต์ให้ตรงกับเนื้อหาในแต่ละหน้า (Keywords, Descriptions, Title)",
                },
                {
                  icon: Smartphone,
                  title: "Responsive website",
                  desc: "ช่วยทำให้ Keyword ที่ต้องการ ติด SEO อันดับ 1-5 อย่างน้อย 3 เดือนขึ้นไป",
                },
                {
                  icon: Megaphone,
                  title: "ติดตั้งเครื่องมือการตลาด",
                  desc: "ช่วยทำให้ Keyword ที่ต้องการ ติด SEO อันดับ 1-5 อย่างน้อย 3 เดือนขึ้นไป",
                },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="mb-6 p-4 text-slate-400 dark:text-zinc-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    <feature.icon size={56} strokeWidth={1.2} />
                  </div>
                  <h4 className="text-[17px] font-bold text-[#000066] dark:text-indigo-200 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-slate-500 dark:text-zinc-400 text-[14px] leading-relaxed px-4">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: CTA Banner */}
          <div className="max-w-7xl mx-auto px-6 pb-24">
            <div
              className="relative w-full rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 overflow-hidden flex flex-col md:flex-row items-center justify-between transition-all duration-500
    /* Light Mode: พื้นหลังไล่สีสว่างสะอาดตา */
    bg-gradient-to-br from-indigo-50 via-white to-purple-50 
    /* Dark Mode: พื้นหลังเข้มมีมิติ */
    dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800
    /* Border & Shadow */
    border border-indigo-100/50 dark:border-zinc-700/30
    shadow-[0_20px_50px_rgba(99,102,241,0.1)] dark:shadow-none"
            >
              {/* Abstract Background Elements (วงกลมตกแต่งที่ดูซอฟต์ลง) */}
              <div className="absolute right-[-5%] top-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] pointer-events-none opacity-40 dark:opacity-20 blur-3xl">
                <div className="absolute inset-0 bg-indigo-400 rounded-full translate-x-20 translate-y-10"></div>
                <div className="absolute inset-0 bg-purple-400 rounded-full opacity-50"></div>
              </div>

              <div className="relative z-10 md:w-3/5 text-center md:text-left">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-100/80 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20">
                  <span className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
                    Knowledge Base
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white leading-[1.2] mb-6">
                  ราคาทำเว็บไซต์ปกติ <br className="hidden md:block" />
                  <span className="text-indigo-600 dark:text-indigo-400">
                    มีค่าใช้จ่ายเท่าไร?
                  </span>
                </h2>

                <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg font-medium mb-10 max-w-xl leading-relaxed">
                  เจาะลึกทุกรายละเอียดเกี่ยวกับการทำเว็บไซต์
                  ตั้งแต่เริ่มต้นจนถึงการจ้างมืออาชีพ
                  รวมถึงการประเมินราคาเพื่อให้คุณตัดสินใจได้อย่างแม่นยำที่สุด
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link href="/WebsiteCostBlog">
                    <button className="group bg-zinc-900 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-500 text-white px-10 py-4 rounded-2xl font-bold text-base transition-all duration-300 shadow-xl shadow-indigo-200 dark:shadow-none active:scale-95 flex items-center justify-center gap-2">
                      อ่านบทความเต็ม
                      <ChevronRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </Link>

                  {/* เพิ่มปุ่มรอง (Secondary CTA) เพื่อ UX ที่ดีขึ้น */}
                  <Link href="/contactus">
                    <button className="px-10 py-4 rounded-2xl font-bold text-base text-zinc-600 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-800 transition-all border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
                      ปรึกษาเราฟรี
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Side Visual (Optional: สามารถใส่รูปภาพประกอบบทความหรือ Icon ขนาดใหญ่) */}
              <div className="hidden lg:flex relative z-10 w-1/3 justify-center items-center">
                <div className="w-64 h-64 bg-white dark:bg-zinc-800 rounded-[2.5rem] shadow-2xl rotate-12 flex items-center justify-center border border-zinc-100 dark:border-zinc-700">
                  <Icon
                    icon="solar:bill-list-bold-duotone"
                    width={100}
                    className="text-indigo-600 dark:text-indigo-400 -rotate-12"
                  />
                </div>
                {/* ตกแต่งด้วยจุด (Dots) */}
                <div className="absolute top-0 right-0 grid grid-cols-4 gap-2 opacity-20">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 bg-indigo-600 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
