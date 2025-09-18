import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="relative overflow-hidden">
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
      <div>
      </div>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-10 sm:grid-cols-11 md:grid-cols-12 items-center gap-10">
          <div className="lg:col-span-6 col-span-10">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#EFBF04" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM68,96A12,12,0,1,1,80,84,12,12,0,0,1,68,96Zm40,0a12,12,0,1,1,12-12A12,12,0,0,1,108,96Z"></path></svg>
              Works
            </p>
            <h2 className="lg:text-52 text-40 mt-4 mb-2 lg:max-w-full font-medium leading-[1.2] text-dark dark:text-white">
              รับทำเว็บไซต์ ออกแบบเว็บไซต์ เพิ่มความน่าเชื่อถือ
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-lg lg:max-w-full leading-[1.3] md:max-w-3/4">
              การออกแบบเว็บไซต์จะต้องคำนึงถึงหลัก UX/UI เข้ามาเป็นองค์ความรู้ในการออกแบบด้วย เพราะจะช่วยทำให้ง่ายต่อการใช้งานไม่ว่าจะจากอุปกรณ์ไหนก็ตาม การมีเว็บไซต์ที่ดีสามารถช่วยเพิ่มยอดขายและช่วยทำให้ให้คนจดจำ Brand เราได้
            </p>
            <Link href="/properties" target="_blank" className="py-4 px-8 bg-[#EFBF04] text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300">
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
    </section>
  );
};

export default Categories;
