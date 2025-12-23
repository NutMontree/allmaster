import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const WebsiteCostBlog = () => {
  return (
    <>
      <div className="bg-white text-slate-900 font-sans selection:bg-blue-100 pt-24">
        {/* --- div: Hero & Intro --- */}
        <div className="pt-24 px-6 border-b border-slate-50">
          <div className="container max-w-4xl mx-auto">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 mb-8"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-white/10 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Icon icon="lucide:move-left" width={18} />
              </span>
              <span className="text-sm font-medium text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                Go Back
              </span>
            </Link>
            <h1 className="text-4xl md:text-5xl font-black text-[#000066] leading-tight mb-8 pt-12">
              ราคาทำเว็บไซต์ หนึ่งเว็บมีค่าใช้จ่ายเท่าไร? ทำเองง่ายกว่าหรือไม่?
            </h1>
            <div className="flex justify-center gap-4">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl mb-12 ">
                <img
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnU4M3UwNm9uZHdvZDNtaW02ajY3MzgwMG9jOHMyMjJobWFyMHJ4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GghGKaZ8JeHJx0apQC/giphy.gif"
                  alt="Website Cost Illustration"
                  className=" object-cover w-60 h-44"
                />
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-2xl mb-12 flex gap-4">
                <img
                  src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmJ1NXJpajdqejFua2ppMG9sODEycGg5eWs2MmI0a25hZXNxZ2ZxcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rJsMvyk7AHHiW9qKLM/giphy.gif"
                  alt="Website Cost Illustration"
                  className=" object-cover w-60 h-44"
                />
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-2xl mb-12 flex gap-4">
                <img
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmQ4dzJhcWppdHo0d3ZmbmJuZDc5MGgyanQ2c2JsbGxuNWxvaHg2MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SWoSkN6DxTszqIKEqv/giphy.gif"
                  alt="Website Cost Illustration"
                  className=" object-cover w-60 h-44"
                />
              </div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed ">
              เว็บไซต์
              เป็นหนึ่งในเครื่องมือสำคัญที่จะช่วยเชื่อมต่อธุรกิจของคุณเข้ากับโลกออนไลน์ได้
              และมีส่วนช่วยในการดำเนินธุรกิจของคุณ
              สามารถช่วยให้คุณเข้าถึงกลุ่มลูกค้าที่คุณต้องการได้มากขึ้น
              ขยายช่องทางการโปรโมทสินค้าและบริการของคุณ
              อีกทั้งยังช่วยเสริมภาพลักษณ์ทำให้ธุรกิจของคุณดูน่าเชื่อถือมากขึ้น
            </p>
          </div>
        </div>

        {/* --- div: DIY vs Hire --- */}
        <div className="px-6 py-24">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#000066] mb-8">
              เราควรทำเว็บไซต์ด้วยตัวเอง หรือจ้างทำเว็บไซต์ ดีกว่ากัน?
            </h2>
            <p className="text-slate-600 mb-12">
              หากคุณต้องการเป็น Blog หรือหน้าแสดงบทความธรรมดา
              การใช้ระบบสำเร็จรูปอย่าง Wix หรือ WordPress
              อาจเป็นทางเลือกที่ตอบโจทย์
            </p>

            {/* Pricing Grid */}
            <div className="grid gap-24">
              {/* DIY Card */}
              <div>
                <div className="p-8 rounded-[2.5rem] border border-slate-100 bg-slate-50/30 hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-bold text-[#000066] mb-4">
                    ทำเว็บไซต์ด้วยตัวเอง
                  </h3>
                  <p className="text-blue-600 font-black text-xl mb-6">
                    งบประมาณ: 10,000 - 40,000 บาท
                  </p>
                  <ul className="space-y-3 text-sm text-slate-600 mb-8">
                    <li>• ต้องชำระค่า Domain และ Hosting เอง</li>
                    <li>• ใช้เวลานานในการเรียนรู้และลงมือทำ</li>
                    <li>• อาจพบปัญหาทางเทคนิคที่แก้ไขเองไม่ได้</li>
                  </ul>
                  <div className="p-4 bg-white rounded-xl text-xs text-slate-400">
                    ตัวอย่างราคา Domain จาก Namecheap
                  </div>
                </div>
                <img
                  className="pt-12"
                  src="https://cdn.prod.website-files.com/62a0713d30193b2a17620bd6/63313c0dff3a741a9f3b2801_6S4dlxFihS7mw2tUjFb9xHRyzNwSZjNaHfrdkZL4peguZkoIebYoykyvuVPlY4lvLPgKalXEmOBVLt0fqOKZHkEvE8UToTisgpYJbNM7GD1tGKrjUyDj9K_cjLNEaUokfOZKaruusQRIbLSDT4e9ufhXdnoEHU8EivpQsGGBZQpgPpD6lnt1bWaeRA.png"
                  alt="Domain จาก Namecheap"
                />
                <p className="text-center italic text-sm">
                  ตัวอย่างเรทราคา hosting ของเว็บไซต์
                </p>

                <div className="max-w-4xl mx-auto px-4 py-12">
                  <div className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
                      <i className="fas fa-server mr-3 text-blue-600"></i> ค่า
                      Server และ Hosting
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-600 mb-6">
                      Hosting เหมือนเป็นการเช่าพื้นที่ให้กับเว็บไซต์ของคุณ
                      ซึ่งราคาของแต่ละเว็บมีค่า Hosting
                      รายปีต่างกันขึ้นอยู่กับปริมาณพื้นที่ที่คุณเช่า
                      นอกจากนี้อาจจะมีค่าใช้จ่ายเพิ่มเติมสำหรับระบบ CMS
                      อย่างเช่น{" "}
                      <span className="font-semibold text-blue-600">
                        WordPress
                      </span>{" "}
                      หรือ{" "}
                      <span className="font-semibold text-pink-500">Wix</span>
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
                      <h3 className="font-bold text-blue-900 mb-2 italic">
                        ค่าเสียเวลา = ค่าใช้จ่าย
                      </h3>
                      <p className="text-gray-700">
                        ไม่ว่าจะเป็นค่าคอร์สเรียนกับผู้เชี่ยวชาญ
                        หรือการเรียนรู้เองจาก YouTube ที่ต้องใช้เวลาทำความเข้าใจ
                        ในมุมธุรกิจแล้ว การลองผิดลองถูกถือเป็นค่าใช้จ่ายทั้งสิ้น
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
                      ข้อดี-ข้อเสียของการทำเว็บไซต์ด้วยตัวเอง
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-3xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                          <i className="fas fa-thumbs-up text-green-600 text-xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
                          ข้อดี
                        </h3>
                        <ul className="space-y-4 text-gray-600">
                          <li className="flex items-start">
                            <i className="fas fa-check-circle mt-1 mr-3 text-green-500"></i>
                            <span>ใช้งบประมาณน้อยที่สุดและประหยัดค่าจ้าง</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle mt-1 mr-3 text-green-500"></i>
                            <span>
                              ปรับแต่งหรืออัพเดทข้อมูลได้ตามความต้องการของตัวเอง
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white p-8 rounded-3xl shadow-sm border border-red-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                          <i className="fas fa-exclamation-triangle text-red-600 text-xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-red-700 mb-4 text-center">
                          ข้อเสีย
                        </h3>
                        <ul className="space-y-4 text-gray-600">
                          <li className="flex items-start">
                            <i className="fas fa-times-circle mt-1 mr-3 text-red-500"></i>
                            <span>
                              เสียเวลาและโอกาสในการทำอย่างอื่นจากการศึกษาข้อมูล
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-times-circle mt-1 mr-3 text-red-500"></i>
                            <span>
                              ต้องมีความรู้ด้านคอมพิวเตอร์และพื้นฐานการออกแบบ
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-times-circle mt-1 mr-3 text-red-500"></i>
                            <span>
                              อาจเจอปัญหาทางเทคนิคที่แก้เองไม่ได้จนต้องปรึกษาผู้เชี่ยวชาญ
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-16 text-center">
                    <p className="text-gray-400 text-sm">
                      เพื่อให้ได้เว็บไซต์ที่สวยงามและมีประสิทธิภาพ
                      การปรึกษาผู้เชี่ยวชาญอาจเป็นทางเลือกที่คุ้มค่ากว่าในระยะยาว
                    </p>
                  </div>
                </div>
              </div>

              {/* Freelance Card */}
              <div>
                <div className="p-8 rounded-[2.5rem] border border-blue-100 bg-blue-50/20 hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-bold text-[#000066] mb-4">
                    จ้างฟรีแลนซ์
                  </h3>
                  <p className="text-blue-600 font-black text-xl mb-6">
                    งบประมาณ: 5,000 - 100,000 บาท
                  </p>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li>• มีความเสี่ยงเรื่องความรับผิดชอบของฟรีแลนซ์</li>
                    <li>• งานอาจไม่เป็นระบบเท่าบริษัทใหญ่</li>
                    <li>• ราคาขึ้นอยู่กับประสบการณ์ของแต่ละคน</li>
                  </ul>
                </div>

                <img
                  src="https://cdn.prod.website-files.com/62a0713d30193b2a17620bd6/63313d81721a2880611b3415_IMI1GzUjLqTXgDK0fOezTlIst4vhgCs4iICWeh4yDOhgfFyNhiGZfgTyvca3-fTsoHQAvfgL5f5u1XiYlgzNeedE4z313CP2Ppr1jndaUjl7VpXhkF-M3xk5-P65HA3NStWopWXgaVleORUW_OvDVYWVuWlCO9S521iD2_xgTqmUJz7H2Vf5tga_Eg.png"
                  alt="Domain จาก Namecheap"
                />
                <p className="text-center italic text-sm">
                  freelance ทำเว็บไซต์
                </p>

                <div className="max-w-6xl mx-auto px-4 py-16">
                  <div className="mb-24">
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                      <div className="flex-1">
                        <h2 className="text-4xl font-extrabold text-[#000066] mb-6">
                          จ้างทำเว็บไซต์กับ{" "}
                          <span className="text-blue-600">ฟรีแลนซ์</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          ทางเลือกสำหรับผู้ที่ต้องการความหลากหลายในราคาที่เข้าถึงได้
                          แต่ต้องแลกมาด้วยการตรวจสอบผลงานและความรับผิดชอบอย่างละเอียด
                        </p>
                      </div>
                      <div className="bg-blue-600 text-white p-8 rounded-[2rem] text-center shadow-xl shadow-blue-200">
                        <p className="text-sm opacity-80 mb-1">
                          งบประมาณเริ่มต้น
                        </p>
                        <p className="text-3xl font-bold">
                          5,000 - 100,000 บาท
                        </p>
                        <p className="text-xs mt-2 opacity-70">
                          *ขึ้นอยู่กับรายละเอียดและการตกลง
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-8 rounded-3xl border border-blue-50">
                        <h4 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                          <i className="fas fa-plus-circle mr-2"></i> ข้อดี
                        </h4>
                        <ul className="space-y-3 text-slate-600 text-sm">
                          <li>• มีตัวเลือกหลากหลายตามความต้องการและงบประมาณ</li>
                          <li>
                            • ฟรีแลนซ์แต่ละคนมีความสามารถเฉพาะด้านที่แตกต่างกัน
                          </li>
                          <li>
                            • มักใช้ WordPress ซึ่งใช้งานง่ายและราคาไม่สูงมาก
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-8 rounded-3xl border border-red-50">
                        <h4 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                          <i className="fas fa-minus-circle mr-2"></i> ข้อเสีย
                        </h4>
                        <ul className="space-y-3 text-slate-600 text-sm">
                          <li>
                            •
                            ความเสี่ยงสูงเรื่องความรับผิดชอบและการทิ้งงานกลางคัน
                          </li>
                          <li>
                            • โอกาสได้งานไม่ตรงตามคุณภาพหรือเวลาที่ตกลงกันไว้
                          </li>
                          <li>• ขาดความเป็นมืออาชีพในบางกรณี</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#000066] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
                    <div className="relative z-10">
                      <h2 className="text-4xl font-extrabold mb-8">
                        บริษัทรับทำเว็บไซต์โดยเฉพาะ{" "}
                        <span className="text-blue-400">(Website Studio)</span>
                      </h2>
                      <p className="text-blue-100 text-lg mb-12 max-w-3xl leading-relaxed">
                        ผู้เชี่ยวชาญที่มีบริการแบบครบวงจร ตั้งแต่ฝ่ายดูแลลูกค้า
                        การตลาด ดีไซเนอร์ ไปจนถึงโปรแกรมเมอร์
                        ช่วยลดระยะเวลาและขั้นตอนการทำงานของคุณ
                      </p>

                      <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
                          <h4 className="text-xl font-bold mb-4 text-blue-300">
                            แบบ Template / Theme
                          </h4>
                          <p className="text-sm text-white/70 mb-4">
                            ราคาไม่สูงมาก
                            ใช้โครงสร้างที่พัฒนาไว้แล้วนำมาปรับแต่งข้อมูลให้เข้ากับธุรกิจของคุณ
                            แต่อาจมีข้อจำกัดด้าน Design ที่แตกต่างได้ยาก
                          </p>
                        </div>
                        <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
                          <h4 className="text-xl font-bold mb-4 text-blue-300">
                            แบบ Custom Design
                          </h4>
                          <p className="text-sm text-white/70 mb-4">
                            ออกแบบใหม่ตั้งแต่ต้นให้มีเอกลักษณ์เฉพาะตัว
                            เข้ากับสินค้าและบริการของคุณมากที่สุด
                            เพื่อภาพลักษณ์หน้าร้านที่โดดเด่น
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-10">
                        <div>
                          <p className="text-blue-300 text-sm uppercase tracking-widest mb-1">
                            งบประมาณโดยประมาณ
                          </p>
                          <p className="text-4xl font-black">
                            50,000 - 100,000 บาท
                          </p>
                        </div>
                        <div className="flex gap-4 text-sm text-white/60">
                          <span className="flex items-center">
                            <i className="fas fa-check-double mr-2 text-blue-400"></i>{" "}
                            งานมีคุณภาพ
                          </span>
                          <span className="flex items-center">
                            <i className="fas fa-clock mr-2 text-blue-400"></i>{" "}
                            ประหยัดเวลา
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
                  </div>

                  <div className="mt-12 grid md:grid-cols-2 gap-6">
                    <div className="p-8 rounded-3xl bg-green-50/50 border border-green-100">
                      <h4 className="font-bold text-green-700 mb-3">
                        ข้อดีของการจ้างบริษัท
                      </h4>
                      <p className="text-sm text-slate-600">
                        ได้เว็บไซต์คุณภาพจากมืออาชีพ ประหยัดเวลา
                        และมีความมั่นคงสูง โอกาสทิ้งงานน้อยกว่าฟรีแลนซ์
                      </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-red-50/50 border border-red-100">
                      <h4 className="font-bold text-red-700 mb-3">
                        ข้อเสียของการจ้างบริษัท
                      </h4>
                      <p className="text-sm text-slate-600">
                        ค่าใช้จ่ายสูงกว่าเพราะรวมค่าแรง ค่าไอเดีย
                        และการจัดการต่างๆ
                        หากมีฟังก์ชันหรือหน้าเพจเพิ่มอาจมีค่าใช้จ่ายเพิ่มเติม
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
        <div className="py-24 px-6 bg-slate-50">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-[#000066] mb-4">
                เว็บไซต์ที่ดีควรมีอะไรบ้าง
              </h2>
              <p className="text-slate-500">
                จากประสบการณ์กว่า 10 ปีที่เราสร้างสรรค์เว็บไซต์คุณภาพ
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  icon: "solar:ranking-bold-duotone",
                  title: "รองรับการติดอันดับ Google",
                  desc: "ค้นหา Keyword ที่เกี่ยวข้องเพื่อเพิ่ม Traffic",
                },
                {
                  icon: "solar:user-rounded-bold-duotone",
                  title: "ออกแบบเพื่อผู้ใช้งาน",
                  desc: "เน้น UX/UI ที่ตอบโจทย์พฤติกรรมลูกค้า",
                },
                {
                  icon: "solar:shield-check-bold-duotone",
                  title: "ความปลอดภัย SSL",
                  desc: "ปกป้องข้อมูลและเพิ่มความน่าเชื่อถือ",
                },
                {
                  icon: "solar:smartphone-bold-duotone",
                  title: "Responsive Design",
                  desc: "แสดงผลสวยงามในทุกขนาดหน้าจอ",
                },
                {
                  icon: "solar:graph-bold-duotone",
                  title: "ติดตั้งเครื่องมือการตลาด",
                  desc: "วัดผลข้อมูลเพื่อต่อยอดธุรกิจอย่างแม่นยำ",
                },
                {
                  icon: "solar:medal-ribbon-bold-duotone",
                  title: "ทันสมัยตามหลักสากล",
                  desc: "งานดีไซน์คุณภาพระดับมืออาชีพ",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center group p-6 hover:bg-white rounded-3xl transition-all"
                >
                  <div className="w-20 h-20 flex items-center justify-center text-blue-600 bg-blue-50 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                    <Icon icon={item.icon} width={48} />
                  </div>
                  <h4 className="text-lg font-bold text-[#000066] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
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
