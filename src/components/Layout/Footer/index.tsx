import Link from "next/link";
import { Icon } from "@iconify/react";
import { FooterLinks } from "@/app/api/footerlinks";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#0A0A0A] pt-20 pb-10">
      {/* Decorative Blur Background */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#EFBF04]/5 blur-[120px] -z-10" />

      <div className="container max-w-7xl mx-auto px-6">
        {/* Top Section: Newsletter & Social */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 pb-16 border-b border-white/5">
          <div className="max-w-md">
            <h3 className="text-white text-2xl font-bold mb-3">Newsletter</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              ติดตามข่าวสาร โปรโมชั่น และสิทธิพิเศษก่อนใคร
              เพียงลงทะเบียนรับข่าวสารจากเรา
            </p>
          </div>

          <div className="w-full lg:w-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="อีเมลของคุณ"
                className="w-full sm:w-80 rounded-2xl py-4 px-6 bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#EFBF04]/50 transition-all"
              />
              <button className="bg-[#EFBF04] text-black py-4 px-8 font-bold rounded-2xl hover:bg-white hover:scale-105 duration-300 transition-all shadow-lg shadow-[#EFBF04]/10">
                Subscribe
              </button>
            </div>
            <p className="text-slate-500 text-[12px] italic">
              *คุณสามารถยกเลิกการรับข่าวสารได้ทุกเมื่อ
            </p>
          </div>
        </div>

        {/* Middle Section: Links & Contact CTA */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Branding & CTA (กว้างขึ้นเป็น 8 ส่วน) */}
            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tighter">
                เริ่มต้นความสำเร็จ <br />
                <span className="text-[#EFBF04]">ไปกับเราได้ตั้งแต่วันนี้</span>
              </h2>
              <Link
                href="/contactus"
                className="inline-flex items-center gap-2 group text-white font-bold text-lg"
              >
                <span className="bg-white/10 p-4 rounded-full group-hover:bg-[#EFBF04] group-hover:text-black transition-all duration-500">
                  <Icon icon="solar:phone-calling-bold" width={24} />
                </span>
                <span className="border-b-2 border-white/10 group-hover:border-[#EFBF04] pb-1 transition-all">
                  Get In Touch
                </span>
              </Link>
            </div>

            {/* Quick Links Group: Services (ย้ายมาไว้ข้างๆ CTA) */}
            <div className="lg:col-span-4">
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs opacity-50">
                Our Services
              </h4>
              <ul className="flex flex-col gap-5">
                {/* ดึงลิงก์จาก FooterLinks มาแสดง (ปรับจำนวน slice ตามต้องการ) */}
                {FooterLinks.slice(0, 5).map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-[#EFBF04] hover:translate-x-1 transition-all inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Policy */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Social Icons */}
          <div className="flex items-center gap-4 order-2 md:order-1">
            {[
              {
                icon: "ph:facebook-logo-bold",
                href: "https://www.facebook.com/profile.php?id=61584948345343",
              },
              { icon: "ph:instagram-logo-bold", href: "#" },
              { icon: "ph:x-logo-bold", href: "#" },
              { icon: "ph:line-segments-bold", href: "#" },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-[#EFBF04] hover:text-black transition-all duration-300"
              >
                <Icon icon={social.icon} width={20} />
              </Link>
            ))}
          </div>

          <div className="text-center md:text-right order-1 md:order-2 space-y-2">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="text-white">AllMaster</span>. All rights
              reserved.
            </p>
            <div className="flex gap-6 justify-center md:justify-end">
              <Link
                href="/service"
                className="text-xs text-slate-600 hover:text-[#EFBF04]"
              >
                Terms of Service
              </Link>
              <Link
                href="/policy"
                className="text-xs text-slate-600 hover:text-[#EFBF04]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
