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
    <div className="relative overflow-hidden">
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
      <div></div>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-10 sm:grid-cols-11 md:grid-cols-12 items-center gap-10">
          <div className="lg:col-span-6 col-span-10">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
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
              การมีเว็บไซต์ที่ดีสามารถช่วยเพิ่มยอดขายและช่วยทำให้ให้คนจดจำ Brand
              เราได้
            </p>
            <Link
              href="/properties"
              target="_blank"
              className="py-4 px-8 bg-[#EFBF04] text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300"
            >
              ดูผลงานของเรา
            </Link>
          </div>
          <div className="lg:col-span-6 col-span-10">
            <div className="relative rounded-2xl overflow-hidden group">
              <div>
                <Image
                  // src="/images/categories/villas.jpg"
                  src="/images/categories/m1.webp"
                  alt="villas"
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </div>
              <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-4 pb-4 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  {/* <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div> */}
                </div>
                <div className="flex flex-col gap-2.5 pr-6">
                  <h3 className="text-white text-2xl">
                    {/* allmaster.vercel.app */}
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    {/* หน้าเว็บไซต์หลักของ AllM Master ที่นำเสนอข้อมูลเกี่ยวกับบริการรับทำเว็บไซต์ ออกแบบเว็บไซต์ ด้วย Next.js โดยทีมงานมืออาชีพ */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-10">
            <div className="relative rounded-2xl overflow-hidden group">
              <div>
                <Image
                  src="/images/categories/m2.webp"
                  alt="villas"
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </div>
              <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-4 pb-4 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  {/* <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div> */}
                </div>
                <div className="flex flex-col gap-2.5 pr-6">
                  <h3 className="text-white text-2xl">
                    {/* ktltcp.vercel.app */}
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    {/* หน้าเว็บไซต์หลักของวิทยาลัยเทคนิคกันทรลักษ์ ที่นำเสนอข้อมูลเกี่ยวกับภารกิจ การใช้เทคโนโลยีในการพัฒนาการเรียนรู้ และช่องทางการติดต่อ โดยสื่อสารผ่านช่องทางต่าง ๆ */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-5">
            <div className="relative rounded-2xl overflow-hidden group">
              <div>
                <Image
                  src="/images/categories/m3.webp"
                  alt="villas"
                  width={320}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </div>
              <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-4 pb-4 group-hover:top-0  ">
                <div className="flex justify-end">
                  {/* <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div> */}
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    {/* ktltcp.vercel.app */}
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    {/* หน้าเว็บไซต์ประจำงานวางแผนและงบประมาณ ที่ให้ข้อมูลเกี่ยวกับงานวางแผนและงบประมาณของวิทยาลัยเทคนิคกันทรลักษ์ */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-5">
            <div className="relative rounded-2xl overflow-hidden group">
              <div>
                <Image
                  src="/images/categories/m4.webp"
                  alt="m3"
                  width={320}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </div>
              <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-4 pb-4 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  {/* <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div> */}
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    {/* sonklin.vercel.app */}
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    {/* ร้านซ่อนกลิ่น เว็บ E-Commerce สำหรับร้านค้า ที่จำหน่าย น้ำอาหาร เครื่องดื่ม และ ขนมไทย */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pt-48 font-sans ">
        <div className="container max-w-7xl mx-auto px-6">
          {/* div 1: ทำความรู้จักเว็บไซต์ */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000066] mb-4">
              ทำความรู้จักเว็บไซต์
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {/* Card 1 */}
            <div className="relative p-8 border-2 border-slate-100 rounded-[2rem] hover:shadow-xl transition-all group">
              <span className="absolute -top-10 -left-4 text-8xl font-black text-blue-600/10 italic group-hover:text-blue-600/20 transition-colors">
                1
              </span>
              <h3 className="text-xl font-bold text-[#000066] mb-4">
                บริการออกแบบเว็บไซต์คืออะไร
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                การออกแบบเว็บไซต์ คือ การออกแบบเว็บไซต์โดยคำนึงถึง Customer
                Journey ของกลุ่มลูกค้าผู้ใช้งานเป็นหลัก
                ดังนั้นจะเหมือนกับการออกแบบระบบการใช้งานบนเว็บไซต์
                โดยการออกแบบเว็บไซต์จะต้องคำนึงถึงหลัก UX/UI
                เข้ามาเป็นองค์ความรู้ในการออกแบบด้วย
                เพราะจะทำให้เว็บง่ายต่อการใช้งานไม่ว่าจะจากอุปกรณ์ไหนก็ตาม
                นอกจากนี้ยังตอบโจทย์เป้าหมายของธุรกิจอีกด้วย
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative p-8 border-2 border-slate-100 rounded-[2rem] hover:shadow-xl transition-all group">
              <span className="absolute -top-10 -left-4 text-8xl font-black text-blue-600/10 italic group-hover:text-blue-600/20 transition-colors">
                2
              </span>
              <h3 className="text-xl font-bold text-[#000066] mb-4">
                ต่างจากการใช้ Template อย่างไร
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                เว็บไซต์ Template คือ โครงสร้างของเว็บไซต์ที่เตรียมไว้แล้ว
                เพื่อลดเวลาการสร้าง
                แต่เว็บไซต์ที่ออกแบบใหม่จะผ่านการใส่ใจในทุกรายละเอียด
                ตั้งแต่ตำแหน่งเมนูจนถึงล่างสุดของแต่ละหน้าเว็บไซต์
                นอกจากนี้ยังสามารถออกแบบแต่ละส่วนให้มีความโดดเด่นตามความต้องการได้
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative p-8 border-2 border-slate-100 rounded-[2rem] hover:shadow-xl transition-all group">
              <span className="absolute -top-10 -left-4 text-8xl font-black text-blue-600/10 italic group-hover:text-blue-600/20 transition-colors">
                3
              </span>
              <h3 className="text-xl font-bold text-[#000066] mb-4">
                การออกแบบเว็บไซต์ที่ดีควรต้องคำนึงถึงอะไรบ้าง
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                งานออกแบบเว็บไซต์ของเราทุกชิ้นจะเป็นการออกแบบโดยทีมงานผู้เชี่ยวชาญ
                โดยใช้หลัก Customer Centric ในการออกแบบ
                ซึ่งจะทำให้เว็บไซต์ที่ออกมานั้นตอบโจทย์การใช้งานของกลุ่มลูกค้าให้มากที่สุด
                เพื่อเพิ่มโอกาสในการสร้างกำไรให้กับธุรกิจ
              </p>
            </div>

            {/* Card 4 */}
            <div className="relative p-8 border-2 border-slate-100 rounded-[2rem] hover:shadow-xl transition-all group">
              <span className="absolute -top-10 -left-4 text-8xl font-black text-blue-600/10 italic group-hover:text-blue-600/20 transition-colors">
                4
              </span>
              <h3 className="text-xl font-bold text-[#000066] mb-4">
                บริการทำเว็บไซต์บริษัทคืออะไร
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                การทำเว็บไซต์บริษัท คือ การทำเว็บไซต์ในรูปแบบของ Informative
                ซึ่งจะเน้นการแสดงข้อมูลของสินค้าหรือบริการเป็นหลัก
                โดยเป้าหมายเพื่อช่วยตอบโจทย์ธุรกิจที่หลากหลาย
                ไม่ว่าจะเป็นการเพิ่มความน่าเชื่อถือให้กับธุรกิจ
                การโปรโมทผ่านช่องทาง Social Media
                และการประชาสัมพันธ์ผ่านช่องทางอื่นๆ
              </p>
            </div>
          </div>
          {/* div: เว็บไซต์ที่ดีควรมีอะไรบ้าง */}
          <div className="max-w-7xl mx-auto py-20 border-t border-slate-50">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#000066] mb-4">
                เว็บไซต์ที่ดีควรมีอะไรบ้าง
              </h2>
              {/* <p className="text-slate-400 font-medium">
                เพราะเรามีประสบการณ์มากกว่า 10 ปี
                ในการสร้างเว็บไซต์ทุกประเภทที่ตอบโจทย์ความต้องการของลูกค้า
              </p> */}
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
                  <div className="mb-6 p-4 text-slate-400 group-hover:text-indigo-500 transition-colors">
                    <feature.icon size={56} strokeWidth={1.2} />
                  </div>
                  <h4 className="text-[17px] font-bold text-[#000066] mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-slate-400 text-[14px] leading-relaxed px-4">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* div: CTA BANNER */}
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="relative w-full rounded-[3rem] p-10 md:p-20 overflow-hidden flex flex-col md:flex-row items-center justify-between"
              style={{
                background: "linear-gradient(90deg, #EBF8FF 0%, #FFF5F7 100%)",
              }}
            >
              <div className="relative z-10 md:w-3/5">
                <h2 className="text-3xl md:text-5xl font-black text-[#6366F1] leading-[1.15] mb-6">
                  ราคาทำเว็บไซต์ปกติมีค่าใช้จ่ายอยู่ที่เท่าไร <br />
                  บทความนี้มีคำตอบ
                </h2>
                <p className="text-[#93C5FD] text-lg font-medium mb-10 max-w-2xl">
                  สำหรับบทความนี้ จะเกี่ยวกับการทำเว็บไซต์ทั้งหมด
                  การทำเว็บไซต์เอง การจ้างทำเว็บไซต์ รวมไปถึงราคาการทำเว็บไซต์
                  เพื่อช่วยให้คุณตัดสินใจได้ง่ายขึ้น
                </p>
                <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-100 active:scale-95 flex items-center gap-2">
                  อ่านเพิ่มเติม <ChevronRight size={20} />
                </button>
              </div>

              {/* Abstract Circle Graphics */}
              <div className="absolute right-[-10%] top-[-10%] w-[450px] h-[450px] pointer-events-none hidden lg:block">
                {/* Blue Ring */}
                <div className="absolute inset-0 border-[30px] border-[#60A5FA] rounded-full translate-x-10 translate-y-10"></div>
                {/* Purple Ring */}
                <div className="absolute inset-0 border-[30px] border-[#8B5CF6] rounded-full"></div>
                {/* Yellow Ring */}
                <div className="absolute inset-0 border-[25px] border-[#FBBF24] rounded-full translate-x-20 translate-y-32"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
