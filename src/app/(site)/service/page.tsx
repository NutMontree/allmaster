import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service | AllMaster",
};

const Service = () => {
  const lastUpdated = "22 ธันวาคม 2025";

  const sections = [
    {
      id: "acceptance",
      title: "1. การยอมรับข้อกำหนด",
      content:
        "การเข้าถึงหรือใช้บริการเว็บไซต์ AllMaster ถือว่าคุณได้อ่าน เข้าใจ และตกลงที่จะผูกพันตามข้อกำหนดและเงื่อนไขเหล่านี้ทั้งหมด หากคุณไม่ตกลงตามเงื่อนไข โปรดหยุดใช้บริการทันที",
    },
    {
      id: "services",
      title: "2. ขอบเขตบริการ",
      content:
        "AllMaster ให้บริการแพลตฟอร์มข้อมูลและบริการในเขตพื้นที่ศรีสะเกษ-กันทรลักษ์ เราขอสงวนสิทธิ์ในการปรับปรุง เปลี่ยนแปลง หรือยกเลิกบริการส่วนใดส่วนหนึ่งโดยไม่ต้องแจ้งให้ทราบล่วงหน้า",
    },
    {
      id: "user-conduct",
      title: "3. ข้อปฏิบัติของผู้ใช้งาน",
      content:
        "คุณตกลงที่จะไม่ใช้เว็บไซต์เพื่อวัตถุประสงค์ที่ผิดกฎหมาย หรือส่งข้อมูลที่เป็นเท็จ ละเมิดลิขสิทธิ์ หรือสร้างความเสียหายต่อระบบคอมพิวเตอร์ของผู้อื่น",
    },
    {
      id: "privacy",
      title: "4. นโยบายความเป็นส่วนตัว",
      content:
        "การใช้บริการของคุณยังอยู่ภายใต้นโยบายความเป็นส่วนตัวของเรา ซึ่งอธิบายถึงวิธีการจัดเก็บและใช้ข้อมูลของคุณ โปรดอ่านรายละเอียดได้ที่หน้า Privacy Policy",
    },
    {
      id: "liability",
      title: "5. การจำกัดความรับผิดชอบ",
      content:
        "เราพยายามอย่างเต็มที่เพื่อให้ข้อมูลมีความถูกต้อง อย่างไรก็ตาม AllMaster ไม่รับประกันความสมบูรณ์หรือความแม่นยำของเนื้อหา และจะไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดจากการใช้ข้อมูลบนเว็บไซต์นี้",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#050505] min-h-screen">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Terms of <span className="text-[#EFBF04]">Service</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg uppercase tracking-widest font-bold">
            ข้อกำหนดและเงื่อนไขการใช้บริการ
          </p>
          <p className="mt-8 text-sm text-slate-400">
            อัปเดตล่าสุดเมื่อ: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="bg-yellow-50 dark:bg-[#EFBF04]/5 border-l-4 border-[#EFBF04] p-6 mb-12 rounded-r-2xl">
              <p className="text-slate-700 dark:text-slate-300 m-0 leading-relaxed font-medium">
                โปรดอ่านข้อกำหนดเหล่านี้อย่างละเอียดก่อนใช้งานเว็บไซต์ AllMaster
                ของเรา สัญญาฉบับนี้มีผลผูกพันตามกฎหมายระหว่างคุณ (ผู้ใช้บริการ)
                และ AllMaster (ผู้ให้บริการ)
              </p>
            </div>

            {/* Render Sections */}
            <div className="space-y-16">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center bg-[#EFBF04] text-black text-sm rounded-lg font-black">
                      {section.title.split(".")[0]}
                    </span>
                    {section.title.split(".")[1]}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-8 text-lg">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Info Box */}
            <div className="mt-20 p-10 bg-slate-900 dark:bg-white rounded-[2.5rem] text-white dark:text-black relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  มีข้อสงสัยเกี่ยวกับข้อกำหนด?
                </h3>
                <p className="opacity-80 mb-8 max-w-md text-lg">
                  หากคุณมีคำถามเกี่ยวกับข้อกำหนดการให้บริการ
                  หรือต้องการความช่วยเหลือเพิ่มเติม สามารถติดต่อทีมงานได้โดยตรง
                </p>
                <Link
                  href="/contactus"
                  className="inline-block py-4 px-10 bg-[#EFBF04] text-black font-black rounded-2xl hover:bg-white dark:hover:bg-slate-200 transition-all duration-300 shadow-xl"
                >
                  ติดต่อฝ่ายกฎหมาย
                </Link>
              </div>
              {/* Background Accent */}
              <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-white/10 dark:bg-black/10 rounded-full blur-[80px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer-like small text */}
      <section className="pb-20">
        <div className="container max-w-4xl mx-auto px-6 border-t border-slate-100 dark:border-white/5 pt-10">
          <p className="text-center text-slate-400 text-sm">
            ขอบคุณที่ไว้วางใจใช้บริการ AllMaster <br />
            เรามุ่งมั่นสร้างสรรค์สังคมดิจิทัลที่ปลอดภัยและมีคุณภาพ
          </p>
        </div>
      </section>
    </div>
  );
};

export default Service;
