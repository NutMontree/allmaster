import { Icon } from "@iconify/react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
    <section id="faqs">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className=" ">
          {/* <div className='lg:mx-0 mx-auto'>
                        <Image
                            src="/images/faqs/faq-image.png"
                            alt='image'
                            width={680}
                            height={644}
                            className='lg:w-full'
                            unoptimized={true}
                        />
                    </div> */}

          <div className="lg:px-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
              {/* <Icon icon="ph:house-simple-fill" className="text-2xl text-[#EFBF04] " /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#EFBF04"
                viewBox="0 0 256 256"
              >
                <path
                  d="M168,72V224l-56-40L56,224V72a8,8,0,0,1,8-8h96A8,8,0,0,1,168,72Z"
                  opacity="0.2"
                ></path>
                <path d="M160,56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V72A16,16,0,0,0,160,56Zm0,152.46-43.36-31a8,8,0,0,0-9.3,0L64,208.45V72h96ZM208,40V192a8,8,0,0,1-16,0V40H88a8,8,0,0,1,0-16H192A16,16,0,0,1,208,40Z"></path>
              </svg>
              FAQs
            </p>
            <h2 className="lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white">
              Everything about AllM Master
            </h2>
            <p className="text-dark/50 dark:text-white/50 pr-20">
              We understand that designing, developing, or managing a website
              can feel overwhelming. Here are some frequently asked questions to
              help guide you through working with AllM Master, your all-in-one
              solution for professional website services.
            </p>
            <div className="my-8">
              <Accordion
                type="single"
                defaultValue="item-1"
                collapsible
                className="w-full flex flex-col gap-6"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    1. บริการของ AllM Master มีอะไรบ้าง?
                  </AccordionTrigger>
                  <AccordionContent>
                    AllM Master ให้บริการออกแบบและพัฒนาเว็บไซต์ครบวงจร
                    ไม่ว่าจะเป็นเว็บไซต์ธุรกิจ เว็บไซต์ขายสินค้าออนไลน์
                    (E-commerce) หรือเว็บไซต์ส่วนบุคคล เรามีบริการทั้งออกแบบ
                    UI/UX, การตั้งค่าโดเมน, การเชื่อมระบบหลังบ้าน และการปรับแต่ง
                    SEO เพื่อให้เว็บไซต์ของคุณพร้อมใช้งานอย่างมืออาชีพ
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    2. เริ่มต้นสร้างเว็บไซต์ต้องทำอย่างไร?
                  </AccordionTrigger>
                  <AccordionContent>
                    คุณสามารถเริ่มโดยส่งรายละเอียดของธุรกิจหรือแนวคิดเว็บไซต์ให้ทีมงาน
                    AllM Master
                    จากนั้นเราจะช่วยออกแบบโครงสร้างเว็บไซต์และให้คำปรึกษาเกี่ยวกับดีไซน์
                    ฟีเจอร์ และแพ็กเกจบริการที่เหมาะสมกับคุณ
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    3. ระยะเวลาในการสร้างเว็บไซต์นานเท่าไหร่?
                  </AccordionTrigger>
                  <AccordionContent>
                    ระยะเวลาในการสร้างเว็บไซต์ขึ้นอยู่กับความซับซ้อนของโปรเจกต์
                    โดยปกติเว็บไซต์พื้นฐานจะใช้เวลาประมาณ 1–2 สัปดาห์
                    ส่วนเว็บไซต์ที่มีฟีเจอร์เฉพาะ เช่น
                    ระบบขายสินค้าออนไลน์หรือระบบจองออนไลน์ อาจใช้เวลาประมาณ 3–4
                    สัปดาห์ ขึ้นอยู่กับความต้องการของลูกค้า
                    เราจะอัปเดตความคืบหน้าให้คุณทุกขั้นตอน
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    4. สามารถแก้ไขเว็บไซต์เองได้ไหม?
                  </AccordionTrigger>
                  <AccordionContent>
                    ได้แน่นอน! AllM Master ออกแบบระบบหลังบ้านที่ใช้งานง่าย
                    คุณสามารถอัปเดตเนื้อหา รูปภาพ
                    หรือสินค้าได้ด้วยตัวเองโดยไม่จำเป็นต้องมีความรู้ด้านการเขียนโค้ด
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    5. เว็บไซต์ที่สร้างสามารถรองรับมือถือได้หรือไม่?
                  </AccordionTrigger>
                  <AccordionContent>
                    ทุกเว็บไซต์ที่เราสร้างจะถูกออกแบบให้รองรับการใช้งานบนมือถือและแท็บเล็ต
                    (Responsive Design)
                    เพื่อให้ผู้เข้าชมเว็บไซต์ของคุณได้รับประสบการณ์ที่ดีที่สุด
                    ไม่ว่าจะใช้อุปกรณ์ใดก็ตาม
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    6. มีบริการหลังการขายหรือดูแลเว็บไซต์ไหม?
                  </AccordionTrigger>
                  <AccordionContent>
                    ใช่! AllM Master มีบริการดูแลเว็บไซต์หลังการสร้าง เช่น
                    อัปเดตระบบ แก้ไขบั๊ก และปรับปรุงความปลอดภัย
                    คุณสามารถเลือกแพ็กเกจบริการรายเดือนหรือรายปีตามความต้องการ
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>7. ราคาเริ่มต้นเท่าไหร่?</AccordionTrigger>
                  <AccordionContent>
                    ราคาเริ่มต้นขึ้นอยู่กับฟีเจอร์และความซับซ้อนของเว็บไซต์
                    เว็บไซต์พื้นฐานสำหรับธุรกิจขนาดเล็กเริ่มต้นที่ราคาประมาณ
                    2,000 บาท ส่วนเว็บไซต์ E-commerce
                    หรือฟีเจอร์เฉพาะสามารถปรับตามแพ็กเกจที่คุณเลือก
                    ทีมงานจะให้คำปรึกษาและเสนอราคาอย่างชัดเจนก่อนเริ่มงาน
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
