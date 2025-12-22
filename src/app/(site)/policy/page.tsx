import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policy | AllMaster ",
};
const PrivacyPolicy = () => {
  const lastUpdated = "22 ธันวาคม 2025";

  const policies = [
    {
      id: "collection",
      icon: "solar:user-id-bold",
      title: "1. ข้อมูลที่เราจัดเก็บ",
      content:
        "เราอาจจัดเก็บข้อมูลส่วนบุคคลที่คุณให้ไว้กับเราโดยตรง เช่น ชื่อ, อีเมล, เบอร์โทรศัพท์ และข้อมูลการติดต่อ เมื่อคุณลงทะเบียนรับข่าวสารหรือติดต่อสอบถามบริการ รวมถึงข้อมูลทางเทคนิค เช่น IP Address และคุกกี้ (Cookies) เพื่อปรับปรุงประสบการณ์การใช้งาน",
    },
    {
      id: "usage",
      icon: "solar:settings-minimalistic-bold",
      title: "2. การใช้ข้อมูล",
      content:
        "ข้อมูลของคุณจะถูกนำมาใช้เพื่อวัตถุประสงค์ในการให้บริการ, ตอบกลับการติดต่อ, นำเสนอโปรโมชั่นที่ตรงใจคุณ, และเพื่อวิเคราะห์สถิติการใช้งานเว็บไซต์เพื่อพัฒนาประสิทธิภาพให้ดียิ่งขึ้น",
    },
    {
      id: "protection",
      icon: "solar:shield-check-bold",
      title: "3. การคุ้มครองข้อมูล",
      content:
        "AllMaster ใช้มาตรการรักษาความปลอดภัยทางเทคนิคและทางบริหารที่เหมาะสม เพื่อป้องกันการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาต การสูญหาย หรือการเปิดเผยข้อมูลส่วนบุคคลของคุณ",
    },
    {
      id: "disclosure",
      icon: "solar:share-bold",
      title: "4. การเปิดเผยข้อมูลแก่บุคคลที่สาม",
      content:
        "เราจะไม่มีการขาย หรือให้เช่าข้อมูลส่วนบุคคลของคุณแก่บุคคลที่สาม เว้นแต่ได้รับความยินยอมจากคุณ หรือเป็นการปฏิบัติตามกฎหมายที่เกี่ยวข้อง",
    },
    {
      id: "rights",
      icon: "solar:key-bold",
      title: "5. สิทธิของคุณ (PDPA)",
      content:
        "ภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคล (PDPA) คุณมีสิทธิ์ในการขอเข้าถึง, แก้ไข, ลบ หรือระงับการใช้ข้อมูลส่วนบุคคลของคุณ คุณสามารถติดต่อเราเพื่อใช้สิทธิ์เหล่านี้ได้ตลอดเวลา",
    },
  ];

  return (
    <div className="bg-[#FCFCFC] dark:bg-[#080808] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-skyblue/5 to-transparent -z-10" />
        <div className="container max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm mb-6">
            <Icon
              icon="solar:shield-user-bold"
              className="text-skyblue"
              width={20}
            />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Secure & Private
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-[900] text-slate-900 dark:text-white mb-6 tracking-tight">
            Privacy <span className="text-[#4298b0]">Policy</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            ที่ AllMaster
            เราให้ความสำคัญกับการปกป้องข้อมูลส่วนบุคคลของคุณเป็นอันดับหนึ่ง
            เอกสารฉบับนี้จะอธิบายวิธีที่เราดูแลข้อมูลของคุณ
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
              {policies.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block px-4 py-3 rounded-xl text-slate-500 hover:text-skyblue hover:bg-white dark:hover:bg-white/5 transition-all font-medium border border-transparent hover:border-slate-100 dark:hover:border-white/5"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Policy Content */}
          <div className="flex-1 space-y-12">
            {policies.map((policy) => (
              <div
                key={policy.id}
                id={policy.id}
                className="group bg-white dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-skyblue/20 transition-all duration-500 scroll-mt-32"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl bg-skyblue/10 text-skyblue group-hover:bg-skyblue group-hover:text-white transition-colors duration-500">
                    <Icon icon={policy.icon} width={30} />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-none">
                      {policy.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-8 text-lg">
                      {policy.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Contact Support Block */}
            <div className="bg-gradient-to-br from-[#4298b0] to-skyblue p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-skyblue/20">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  ต้องการสอบถามข้อมูลเพิ่มเติม?
                </h3>
                <p className="opacity-90">
                  เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO) ของเราพร้อมให้คำแนะนำ
                </p>
              </div>
              <Link
                href="/contactus"
                className="px-10 py-4 bg-white text-skyblue font-black rounded-2xl hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                ติดต่อ DPO
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
