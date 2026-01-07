import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const WebsiteCostBlog = () => {
  return (
    <>
      <div className="bg-zinc-950 text-slate-900 font-sans selection:bg-blue-100 pt-24">
        {/* --- div: Hero & Intro --- */}
        <div className="pt-24 px-6 border-b border-slate-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 transition-colors duration-500">
          <div className="container max-w-4xl mx-auto pb-16">
            {/* Navigation: Back Button */}
            <Link
              href="/"
              className="group inline-flex items-center gap-3 mb-10 transition-transform active:scale-95"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-zinc-800 group-hover:border-[#EFBF04] group-hover:bg-[#EFBF04] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-[#EFBF04]/20">
                <Icon icon="lucide:move-left" width={18} />
              </span>
              <span className="text-sm font-bold tracking-wide text-slate-400 group-hover:text-[#EFBF04] dark:group-hover:text-[#EFBF04] transition-colors">
                กลับหน้าหลัก
              </span>
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#EFBF04]/10 border border-[#EFBF04]/20">
                <span className="text-[10px] font-black tracking-[0.2em] text-[#EFBF04] uppercase">
                  Website Investment
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#000066] dark:text-white leading-[1.15] mb-8">
                ราคาทำเว็บไซต์ หนึ่งเว็บมีค่าใช้จ่ายเท่าไร?{" "}
                <br className="hidden md:block" />
                <span className="text-[#EFBF04] italic">
                  ทำเองง่ายกว่าหรือไม่?
                </span>
              </h1>
            </header>

            {/* Visual Gallery: GIF Illustration */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              {[
                "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnU4M3UwNm9uZHdvZDNtaW02ajY3MzgwMG9jOHMyMjJobWFyMHJ4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GghGKaZ8JeHJx0apQC/giphy.gif",
                "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmJ1NXJpajdqejFua2ppMG9sODEycGg5eWs2MmI0a25hZXNxZ2ZxcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rJsMvyk7AHHiW9qKLM/giphy.gif",
                "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmQ4dzJhcWppdHo0d3ZmbmJuZDc5MGgyanQ2c2JsbGxuNWxvaHg2MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SWoSkN6DxTszqIKEqv/giphy.gif",
              ].map((url, index) => (
                <div
                  key={index}
                  className="relative rounded-3xl overflow-hidden shadow-xl dark:shadow-none border border-slate-100 dark:border-zinc-800 hover:scale-[1.02] transition-transform duration-500"
                >
                  <img
                    src={url}
                    alt={`Illustration ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  {/* Subtle Glow Overlay for Dark Mode */}
                  <div className="absolute inset-0 hidden dark:block bg-gradient-to-t from-zinc-950/20 to-transparent pointer-events-none"></div>
                </div>
              ))}
            </div>

            {/* Lead Paragraph */}
            <div className="relative">
              {/* Decorative Quote Mark */}
              <span className="absolute -left-8 -top-4 text-7xl font-serif text-[#EFBF04]/20 pointer-events-none">
                “
              </span>

              <p className="text-xl text-slate-600 dark:text-zinc-400 leading-relaxed font-medium italic">
                เว็บไซต์เป็นหนึ่งในเครื่องมือสำคัญที่จะช่วยเชื่อมต่อธุรกิจของคุณเข้ากับโลกออนไลน์
                และมีส่วนช่วยในการดำเนินธุรกิจของคุณให้ก้าวไปได้ไกลกว่าเดิม
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "ph:users-four-fill",
                    text: "เข้าถึงกลุ่มลูกค้าเป้าหมายได้มากขึ้น",
                  },
                  {
                    icon: "ph:megaphone-simple-fill",
                    text: "ขยายช่องทางการโปรโมทสินค้า",
                  },
                  {
                    icon: "ph:shield-check-fill",
                    text: "เสริมภาพลักษณ์และความน่าเชื่อถือ",
                  },
                  {
                    icon: "ph:chart-line-up-fill",
                    text: "เพิ่มโอกาสในการสร้างยอดขาย",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800"
                  >
                    <Icon
                      icon={item.icon}
                      className="text-[#EFBF04]"
                      width={24}
                    />
                    <span className="text-sm font-bold text-slate-700 dark:text-zinc-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* --- div: DIY vs Hire --- */}
        <div className="px-6 py-24 bg-white dark:bg-zinc-950 transition-colors duration-500">
          <div className="container max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-[#000066] dark:text-white mb-6">
                เลือกทางไหนที่{" "}
                <span className="text-[#EFBF04]">ใช่สำหรับธุรกิจคุณ?</span>
              </h2>
              <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                หากคุณต้องการแค่ Blog ส่วนตัว ระบบสำเร็จรูปอาจเพียงพอ
                แต่ถ้าต้องการ "อาวุธ" ทางธุรกิจ
                การตัดสินใจเลือกผู้ทำคือหัวใจสำคัญ
              </p>
            </div>

            {/* Pricing & Comparison Grid */}
            <div className="grid grid-cols-1 gap-16">
              {/* 01. DIY Section */}
              <section className="group">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  <div className="flex-1 p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/30 transition-all hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl font-black text-slate-200 dark:text-zinc-800">
                        01
                      </span>
                      <h3 className="text-3xl font-bold text-[#000066] dark:text-white">
                        ทำด้วยตัวเอง (DIY)
                      </h3>
                    </div>

                    <div className="inline-block px-6 py-3 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm mb-8">
                      <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">
                        งบประมาณโดยประมาณ
                      </p>
                      <p className="text-2xl font-black text-blue-600 dark:text-blue-400">
                        10,000 - 40,000{" "}
                        <span className="text-sm font-medium text-slate-500">
                          บาท/ปี
                        </span>
                      </p>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                      {[
                        {
                          icon: "ph:globe-duotone",
                          text: "ต้องจัดการ Domain/Hosting เอง",
                        },
                        {
                          icon: "ph:clock-countdown-duotone",
                          text: "ใช้เวลาเรียนรู้สูงมาก",
                        },
                        {
                          icon: "ph:wrench-duotone",
                          text: "แก้ปัญหาทางเทคนิคเองทั้งหมด",
                        },
                        {
                          icon: "ph:layout-duotone",
                          text: "จำกัดอยู่ที่ Template สำเร็จรูป",
                        },
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-slate-600 dark:text-zinc-400 text-sm"
                        >
                          {/* แทนที่ด้วย Icon Library ที่คุณใช้ เช่น Lucide หรือ FontAwesome */}
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {item.text}
                        </li>
                      ))}
                    </ul>

                    <div className="p-6 bg-blue-50/50 dark:bg-blue-500/5 rounded-2xl border border-blue-100 dark:border-blue-500/10">
                      <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2 text-sm">
                        ค่าเสียเวลา = ค่าใช้จ่ายที่มองไม่เห็น
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                        การลองผิดลองถูกในมุมธุรกิจอาจหมายถึงโอกาสที่เสียไป
                        หากเว็บไซต์ทำงานผิดพลาดในช่วงเวลาสำคัญ
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/3">
                    <div className="rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white dark:border-zinc-800 rotate-2 group-hover:rotate-0 transition-transform duration-500">
                      <img
                        src="https://cdn.prod.website-files.com/62a0713d30193b2a17620bd6/63313c0dff3a741a9f3b2801_6S4dlxFihS7mw2tUjFb9xHRyzNwSZjNaHfrdkZL4peguZkoIebYoykyvuVPlY4lvLPgKalXEmOBVLt0fqOKZHkEvE8UToTisgpYJbNM7GD1tGKrjUyDj9K_cjLNEaUokfOZKaruusQRIbLSDT4e9ufhXdnoEHU8EivpQsGGBZQpgPpD6lnt1bWaeRA.png"
                        alt="Hosting Pricing"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="mt-4 text-center text-xs text-slate-400 italic">
                      ตัวอย่างราคาค่าเช่าพื้นที่ (Hosting)
                    </p>
                  </div>
                </div>
              </section>

              {/* 02. Freelance Section */}
              <section className="group">
                <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
                  <div className="flex-1 p-8 md:p-12 rounded-[3rem] border border-indigo-100 dark:border-indigo-500/20 bg-indigo-50/30 dark:bg-indigo-500/5 transition-all hover:shadow-2xl hover:shadow-indigo-200/50 dark:hover:shadow-none">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl font-black text-indigo-200 dark:text-zinc-800">
                        02
                      </span>
                      <h3 className="text-3xl font-bold text-[#000066] dark:text-white">
                        จ้างฟรีแลนซ์
                      </h3>
                    </div>

                    <div className="inline-block px-6 py-3 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm mb-8">
                      <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">
                        งบประมาณโดยประมาณ
                      </p>
                      <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                        5,000 - 100,000{" "}
                        <span className="text-sm font-medium text-slate-500">
                          บาท
                        </span>
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-3">
                        <h4 className="font-bold text-green-600 flex items-center gap-2">
                          ข้อดี
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-zinc-400 italic">
                          ราคายืดหยุ่น คุยง่าย งานเสร็จไวตามตกลง
                        </p>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-bold text-red-600 flex items-center gap-2">
                          ข้อเสีย
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-zinc-400 italic">
                          เสี่ยงต่อการทิ้งงาน และระบบหลังบ้านอาจไม่เสถียร
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/3">
                    <div className="rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white dark:border-zinc-800 -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                      <img
                        src="https://cdn.prod.website-files.com/62a0713d30193b2a17620bd6/63313d81721a2880611b3415_IMI1GzUjLqTXgDK0fOezTlIst4vhgCs4iICWeh4yDOhgfFyNhiGZfgTyvca3-fTsoHQAvfgL5f5u1XiYlgzNeedE4z313CP2Ppr1jndaUjl7VpXhkF-M3xk5-P65HA3NStWopWXgaVleORUW_OvDVYWVuWlCO9S521iD2_xgTqmUJz7H2Vf5tga_Eg.png"
                        alt="Freelance"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* 03. Agency Section (Highlighted) */}
              <section className="relative p-8 md:p-16 rounded-[4rem] bg-[#000066] dark:bg-zinc-900 text-white overflow-hidden shadow-3xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFBF04] opacity-10 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                      <div className="inline-block px-4 py-1 bg-[#EFBF04] text-[#000066] rounded-full text-[10px] font-black uppercase tracking-tighter mb-4">
                        Recommended for Business
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black mb-4">
                        บริษัทรับทำเว็บไซต์{" "}
                        <span className="text-[#EFBF04]">Professional</span>
                      </h3>
                      <p className="text-blue-100/70 max-w-xl">
                        บริการครบวงจร (One-Stop Service) ตั้งแต่กลยุทธ์
                        การออกแบบ ไปจนถึงระบบหลังบ้านที่ปลอดภัย
                      </p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-sm text-[#EFBF04] font-bold uppercase tracking-widest mb-1">
                        งบประมาณเริ่มต้น
                      </p>
                      <p className="text-5xl font-black">
                        50,000{" "}
                        <span className="text-xl font-light opacity-60">+</span>
                      </p>
                      <p className="text-xs opacity-50 mt-2">
                        *ขึ้นอยู่กับความซับซ้อนของระบบ
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <h4 className="text-xl font-bold mb-3 text-white">
                        Custom Design & Branding
                      </h4>
                      <p className="text-sm text-blue-100/60 leading-relaxed">
                        ออกแบบใหม่ทั้งหมดตามอัตลักษณ์แบรนด์ของคุณ ไม่ใช้
                        Template ซ้ำกับใคร สร้างความน่าเชื่อถือสูงสุด
                      </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <h4 className="text-xl font-bold mb-3 text-white">
                        Security & Maintenance
                      </h4>
                      <p className="text-sm text-blue-100/60 leading-relaxed">
                        ระบบความปลอดภัยมาตรฐานสูง พร้อมทีม Support
                        คอยดูแลเมื่อเกิดปัญหา ไม่ต้องกลัวโดนทิ้งงาน
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* --- div: Agency Options --- */}
        <div className="py-24 px-6 bg-[#000066] text-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">
              จ้างบริษัทรับทำเว็บไซต์โดยเฉพาะ
            </h2>

            <div className="space-y-12">
              <div className="bg-white/10 p-8 rounded-[2rem] border border-white/10">
                <h4 className="text-xl font-bold mb-4 text-blue-400">
                  1. แบบ Template/Theme สำเร็จรูป
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  เหมาะสำหรับธุรกิจเริ่มต้น ราคาไม่สูงมาก
                  แต่ดีไซน์อาจไม่แตกต่างจากคนอื่นมากนัก
                </p>
              </div>

              <div className="bg-white/10 p-8 rounded-[2rem] border border-white/10">
                <h4 className="text-xl font-bold mb-4 text-blue-400">
                  2. แบบ Custom Design
                </h4>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  เน้นการออกแบบใหม่ตั้งแต่ต้นตาม Customer Journey
                  เพื่อภาพลักษณ์ธุรกิจที่โดดเด่นที่สุด
                </p>
                <p className="text-2xl font-black">
                  งบประมาณ: 50,000 - 100,000+ บาท
                </p>
              </div>
            </div>

            <div className="mt-20 border-t border-white/10 pt-20">
              <h2 className="text-3xl font-bold mb-6 italic text-blue-400">
                Digital Agency Choice
              </h2>
              <p className="text-white/80 mb-10 leading-relaxed">
                เหมาะสำหรับองค์กรที่ต้องการ One Stop Service ทั้งงานดีไซน์
                ระบบหลังบ้าน และการตลาดออนไลน์ (SEO/SEM)
              </p>
              <div className="p-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-[3rem] text-center shadow-2xl">
                <p className="text-xl mb-4">งบประมาณเริ่มต้น</p>
                <p className="text-5xl font-black mb-8">
                  70,000 - 1,000,000+ บาท
                </p>
                <Link href="/contactus">
                  <button className="px-12 py-5 bg-white text-blue-600 font-black rounded-2xl hover:bg-slate-100 transition-all uppercase tracking-widest text-sm shadow-xl">
                    ปรึกษา AllMaster
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* --- div: Feature Grid (Icon div) --- */}
        <div className="py-24 px-6 bg-slate-50 dark:bg-zinc-950 transition-colors">
          <div className="container max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                Web Standard 2026
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#000066] dark:text-white mb-6">
                เว็บไซต์ที่ดี{" "}
                <span className="text-blue-600">ควรมีอะไรบ้าง?</span>
              </h2>
              <p className="text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
                จากประสบการณ์กว่า 10 ปี เราสรุป 6
                องค์ประกอบหลักที่เปลี่ยนเว็บไซต์ธรรมดา
                ให้กลายเป็นเครื่องมือทำเงินที่มีประสิทธิภาพ
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  icon: "solar:ranking-bold-duotone",
                  title: "รองรับการติดอันดับ Google",
                  desc: "วางโครงสร้าง SEO ตั้งแต่เริ่ม เพื่อให้เว็บไซต์ถูกค้นหาเจอในหน้าแรกของ Google เพิ่มโอกาสในการขาย",
                  color: "blue",
                },
                {
                  icon: "solar:user-rounded-bold-duotone",
                  title: "ออกแบบเพื่อผู้ใช้งาน (UX/UI)",
                  desc: "ดีไซน์ที่เน้นการใช้งานง่าย (User-Friendly) และนำทางลูกค้าไปสู่เป้าหมาย (Conversion) อย่างราบรื่น",
                  color: "indigo",
                },
                {
                  icon: "solar:shield-check-bold-duotone",
                  title: "ความปลอดภัยระดับสากล",
                  desc: "ติดตั้ง SSL Certificate และระบบป้องกันความปลอดภัย เพื่อปกป้องข้อมูลลูกค้าและสร้างความเชื่อมั่น",
                  color: "emerald",
                },
                {
                  icon: "solar:smartphone-bold-duotone",
                  title: "Responsive Full Support",
                  desc: "เว็บไซต์ที่ดูดีในทุกหน้าจอ ไม่ว่าจะเป็นมือถือ แท็บเล็ต หรือคอมพิวเตอร์ ด้วยการเขียน Code ที่ยืดหยุ่น",
                  color: "violet",
                },
                {
                  icon: "solar:graph-bold-duotone",
                  title: "Marketing Tracking",
                  desc: "เชื่อมต่อ Google Analytics และ Pixel เพื่อเก็บ Data มาวิเคราะห์พฤติกรรมลูกค้าและยิงโฆษณาได้แม่นยำ",
                  color: "amber",
                },
                {
                  icon: "solar:medal-ribbon-bold-duotone",
                  title: "Modern & International",
                  desc: "ภาพลักษณ์ที่ดูทันสมัย มีมาตรฐานสากล ช่วยยกระดับแบรนด์ให้ดูเป็นมืออาชีพและน่าเชื่อถือกว่าคู่แข่ง",
                  color: "rose",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col items-center text-center p-8 bg-transparent hover:bg-white dark:hover:bg-zinc-900 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/40 dark:hover:shadow-none border border-transparent hover:border-slate-100 dark:hover:border-zinc-800"
                >
                  {/* Icon Container with Animated Background */}
                  <div className="relative w-24 h-24 flex items-center justify-center mb-8">
                    <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-[2rem] rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-blue-50 dark:bg-blue-800/10 rounded-[2rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>

                    <div className="relative text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-500">
                      <Icon icon={item.icon} width={56} />
                    </div>
                  </div>

                  <h4 className="text-xl font-extrabold text-[#000066] dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed px-2">
                    {item.desc}
                  </p>

                  {/* Subtle Bottom Border Accent */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 rounded-full group-hover:w-12 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                </div>
              ))}
            </div>

            {/* Extra CTA or Note */}
            <div className="mt-20 text-center">
              <p className="text-sm text-slate-400 dark:text-zinc-500 italic">
                * เราใส่ใจในรายละเอียดทุกจุด
                เพื่อให้ผลลัพธ์ออกมาดีที่สุดสำหรับธุรกิจคุณ
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FCFCFC] dark:bg-[#080808] min-h-screen py-20 font-sans">
        <div className="container max-w-7xl mx-auto px-6">
          {/* Header div */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-black text-[#000066] dark:text-white mb-6 tracking-tight">
              ราคาทำเว็บไซต์ปกติมีค่าใช้จ่ายอยู่ที่เท่าไร <br />
              <span className="text-blue-600">บทความนี้มีคำตอบ</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              เจาะลึกทุกงบประมาณในการทำเว็บไซต์
              ตั้งแต่การทำเองไปจนถึงการจ้างมืออาชีพ
              เพื่อให้คุณตัดสินใจเลือกสิ่งที่คุ้มค่าที่สุดสำหรับธุรกิจของคุณ
            </p>
          </div>

          {/* Pricing Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {/* DIY - ทำเอง */}
            <div className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/10 hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                <Icon icon="solar:user-bold-duotone" width={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#000066] dark:text-white mb-4">
                ทำเว็บไซต์ด้วยตัวเอง
              </h3>
              <p className="text-blue-600 text-3xl font-black mb-6">
                10,000 - 40,000 <span className="text-sm font-normal">บาท</span>
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                เหมาะสำหรับผู้ที่มีเวลาและต้องการเรียนรู้
                ต้นทุนหลักจะไปอยู่ที่ค่า Domain, Hosting
                และเครื่องมือปรับแต่งพื้นฐาน
              </p>
              <ul className="space-y-4 text-slate-600 dark:text-slate-300 text-sm">
                <li className="flex items-center gap-2">
                  <Icon
                    icon="solar:check-circle-bold"
                    className="text-green-500"
                  />{" "}
                  ควบคุมทุกอย่างได้เอง
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="solar:check-circle-bold"
                    className="text-green-500"
                  />{" "}
                  ประหยัดค่าจ้างบริการ
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="solar:close-circle-bold"
                    className="text-red-400"
                  />{" "}
                  ใช้แรงและเวลาค่อนข้างมาก
                </li>
              </ul>
            </div>

            {/* Freelancer - จ้างฟรีแลนซ์ */}
            <div className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border-2 border-blue-600 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-6 py-2 rounded-bl-2xl text-xs font-bold uppercase tracking-widest">
                Recommended
              </div>
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                <Icon icon="solar:case-bold-duotone" width={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#000066] dark:text-white mb-4">
                จ้างฟรีแลนซ์ / บริษัทเล็ก
              </h3>
              <p className="text-blue-600 text-3xl font-black mb-6">
                5,000 - 50,000+ <span className="text-sm font-normal">บาท</span>
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                ราคากลางๆ ที่ได้ความเชี่ยวชาญขึ้นมาอีกระดับ
                เหมาะกับเว็บไซต์บริษัทหรือ SME ที่ต้องการความสวยงาม
              </p>
              <ul className="space-y-4 text-slate-600 dark:text-slate-300 text-sm">
                <li className="flex items-center gap-2">
                  <Icon
                    icon="solar:check-circle-bold"
                    className="text-green-500"
                  />{" "}
                  ได้งานเป็นสัดส่วน
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="solar:check-circle-bold"
                    className="text-green-500"
                  />{" "}
                  ปรึกษาได้ใกล้ชิด
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="solar:close-circle-bold"
                    className="text-red-400"
                  />{" "}
                  เสี่ยงเรื่องการดูแลระยะยาว
                </li>
              </ul>
            </div>

            {/* Agency - บริษัทรับทำเว็บไซต์ */}
            <div className="bg-[#000066] p-10 rounded-[2.5rem] text-white hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:rotate-12 transition-transform">
                <Icon icon="solar:buildings-bold-duotone" width={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                บริษัทรับทำเว็บไซต์ (Custom)
              </h3>
              <p className="text-blue-400 text-3xl font-black mb-6">
                30,000 - 1M+{" "}
                <span className="text-sm font-normal text-white/60">บาท</span>
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                การลงทุนเพื่อผลลัพธ์สูงสุด ได้งาน Custom Design ที่เน้น UX/UI
                และรองรับการขยายตัวของธุรกิจ
              </p>
              <ul className="space-y-4 text-white/80 text-sm">
                <li className="flex items-center gap-2">
                  <Icon
                    icon="solar:check-circle-bold"
                    className="text-blue-400"
                  />{" "}
                  ทีมงานมืออาชีพครบวงจร
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="solar:check-circle-bold"
                    className="text-blue-400"
                  />{" "}
                  ระบบ Security ขั้นสูง
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="solar:check-circle-bold"
                    className="text-blue-400"
                  />{" "}
                  บริการดูแลหลังการขาย
                </li>
              </ul>
            </div>
          </div>

          {/* Breakdown div: อะไรทำให้ราคาต่างกัน? */}
          <div className="bg-blue-50/50 dark:bg-white/5 rounded-[3rem] p-12 md:p-20 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#000066] dark:text-white leading-tight">
                  ปัจจัยสำคัญที่ <br />
                  <span className="text-blue-600">กำหนดราคาเว็บไซต์</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  ราคาการทำเว็บไซต์นั้นแปรผันตามความซับซ้อนของฟังก์ชันและระบบที่คุณต้องการใช้ในธุรกิจ
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Domain Name", desc: "ประมาณ 300-1,000 บาท/ปี" },
                    {
                      title: "Hosting Service",
                      desc: "ความเสถียรและ Security คือหัวใจ",
                    },
                    {
                      title: "Custom Design",
                      desc: "งาน UX/UI เฉพาะทางเพื่อแบรนด์",
                    },
                    {
                      title: "Special Function",
                      desc: "เช่น ระบบ E-commerce หรือจองคิว",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                      <div>
                        <h4 className="font-bold text-[#000066] dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Call to Action */}
              <div className="relative p-10 bg-white dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded-[2.5rem] shadow-2xl text-center">
                <Icon
                  icon="solar:calculator-minimalistic-bold-duotone"
                  width={80}
                  className="mx-auto text-blue-600 mb-6"
                />
                <h3 className="text-2xl font-bold text-[#000066] dark:text-white mb-4">
                  คำนวณราคาของคุณเอง
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
                  ประเมินงบประมาณเบื้องต้นตามฟังก์ชันที่คุณต้องการจริง ด้วยระบบ
                  Cost Estimator ของเรา
                </p>
                <Link href="/price-estimation">
                  <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                    ประเมินราคาทันที
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteCostBlog;
