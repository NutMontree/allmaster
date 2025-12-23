import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service | AllMaster",
};

const Service = () => {
  const lastUpdated = "22 ธันวาคม 2025";

  const sections = [
    {
      id: "acceptance",
      icon: "solar:document-add-bold",
      title: "1. การยอมรับข้อกำหนด",
      content:
        "การเข้าถึงหรือใช้บริการเว็บไซต์ AllMaster ถือว่าคุณได้อ่าน เข้าใจ และตกลงที่จะผูกพันตามข้อกำหนดและเงื่อนไขเหล่านี้ทั้งหมด หากคุณไม่ตกลงตามเงื่อนไข โปรดหยุดใช้บริการทันที",
    },
    {
      id: "services",
      icon: "solar:globus-bold",
      title: "2. ขอบเขตบริการ",
      content:
        "AllMaster ให้บริการแพลตฟอร์มข้อมูลและบริการในเขตพื้นที่ศรีสะเกษ-กันทรลักษ์ เราขอสงวนสิทธิ์ในการปรับปรุง เปลี่ยนแปลง หรือยกเลิกบริการส่วนใดส่วนหนึ่งโดยไม่ต้องแจ้งให้ทราบล่วงหน้า",
    },
    {
      id: "user-conduct",
      icon: "solar:user-hand-up-bold",
      title: "3. ข้อปฏิบัติของผู้ใช้งาน",
      content:
        "คุณตกลงที่จะไม่ใช้เว็บไซต์เพื่อวัตถุประสงค์ที่ผิดกฎหมาย หรือส่งข้อมูลที่เป็นเท็จ ละเมิดลิขสิทธิ์ หรือสร้างความเสียหายต่อระบบคอมพิวเตอร์ของผู้อื่น",
    },
    {
      id: "privacy",
      icon: "solar:lock-password-bold",
      title: "4. นโยบายความเป็นส่วนตัว",
      content:
        "การใช้บริการของคุณยังอยู่ภายใต้นโยบายความเป็นส่วนตัวของเรา ซึ่งอธิบายถึงวิธีการจัดเก็บและใช้ข้อมูลของคุณ โปรดอ่านรายละเอียดได้ที่หน้า Privacy Policy",
    },
    {
      id: "liability",
      icon: "solar:shield-warning-bold",
      title: "5. การจำกัดความรับผิดชอบ",
      content:
        "เราพยายามอย่างเต็มที่เพื่อให้ข้อมูลมีความถูกต้อง อย่างไรก็ตาม AllMaster ไม่รับประกันความสมบูรณ์หรือความแม่นยำของเนื้อหา และจะไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดจากการใช้ข้อมูลบนเว็บไซต์นี้",
    },
  ];

  return (
    <div className="bg-[#FCFCFC] dark:bg-[#080808] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#EFBF04]/5 to-transparent -z-10" />
        <div className="container max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm mb-6">
            <Icon
              icon="solar:clipboard-check-bold"
              className="text-[#EFBF04]"
              width={20}
            />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Legal & Terms
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-[900] text-slate-900 dark:text-white mb-6 tracking-tight">
            Terms of <span className="text-[#EFBF04]">Service</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            ข้อกำหนดและเงื่อนไขการใช้บริการ AllMaster
            โปรดอ่านรายละเอียดด้านล่างเพื่อความเข้าใจในการใช้งานอย่างถูกต้องและปลอดภัย
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm font-medium text-slate-400">
            <Icon icon="solar:calendar-bold" width={18} />
            <span>อัปเดตล่าสุด: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Sidebar Navigation (Desktop Only) */}
          <aside className="hidden lg:block w-1/4 sticky top-32 h-fit">
            <nav className="space-y-2">
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block px-4 py-3 rounded-xl text-slate-500 hover:text-[#EFBF04] hover:bg-white dark:hover:bg-white/5 transition-all font-medium border border-transparent hover:border-slate-100 dark:hover:border-white/5"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Policy Content */}
          <div className="flex-1 space-y-12">
            {/* Warning Message Box */}
            <div className="bg-yellow-50/50 dark:bg-[#EFBF04]/5 border-l-4 border-[#EFBF04] p-8 rounded-r-[2rem]">
              <p className="text-slate-700 dark:text-slate-300 m-0 leading-relaxed font-medium text-lg italic">
                &quot;โปรดอ่านข้อกำหนดเหล่านี้อย่างละเอียดก่อนใช้งานเว็บไซต์
                AllMaster ของเรา สัญญาฉบับนี้มีผลผูกพันตามกฎหมายระหว่างคุณ และ
                AllMaster&quot;
              </p>
            </div>

            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="group bg-white dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-[#EFBF04]/20 transition-all duration-500 scroll-mt-32"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl bg-[#EFBF04]/10 text-[#EFBF04] group-hover:bg-[#EFBF04] group-hover:text-black transition-colors duration-500">
                    <Icon icon={section.icon} width={30} />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-none">
                      {section.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-8 text-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Contact Support Block */}
            <div className="bg-gradient-to-br from-[#EFBF04] to-[#cfa604] p-10 rounded-[2.5rem] text-black flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-[#EFBF04]/10">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  มีข้อสงสัยเกี่ยวกับข้อกำหนด?
                </h3>
                <p className="opacity-80 font-medium">
                  หากคุณมีคำถามหรือต้องการความช่วยเหลือเพิ่มเติม
                  สามารถติดต่อฝ่ายกฎหมายของเราได้
                </p>
              </div>
              <Link
                href="/contactus"
                className="px-10 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-white hover:text-black transition-all duration-300"
              >
                ติดต่อฝ่ายกฎหมาย
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer-like small text */}
      <section className="mt-20">
        <div className="container max-w-4xl mx-auto px-6 border-t border-slate-100 dark:border-white/5 pt-10">
          <p className="text-center text-slate-400 text-sm leading-relaxed">
            ขอบคุณที่ไว้วางใจใช้บริการ AllMaster <br />
            เรามุ่งมั่นสร้างสรรค์สังคมดิจิทัลที่ปลอดภัยและมีคุณภาพสำหรับเขตพื้นที่ศรีสะเกษ-กันทรลักษ์
          </p>
        </div>
      </section>
    </div>
  );
};

export default Service;
