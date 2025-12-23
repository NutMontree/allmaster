"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const PriceEstimationNew = () => {
  const [selectedType, setSelectedType] = useState("corporate");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // 1. เพิ่ม State สำหรับสถานะการส่งข้อมูล
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    line: "",
  });

  useEffect(() => setIsMounted(true), []);

  const siteTypes = [
    {
      id: "starter-1",
      title: "Starter (1 หน้า)",
      price: 2500,
      icon: "solar:shop-2-bold-duotone",
      desc: "เหมาะสำหรับโปรโมทธุรกิจ หน้าเดียว",
      features: [
        "ออกแบบเว็บไซต์จำนวน 1 หน้า",
        "รองรับการแสดงผลทุกหน้าจอ",
        "ฟรี โดเมน (Domain)",
        "ฟรี รูปภาพประกอบเว็บไซต์",
        "ฟรี ช่องทางการติดต่อ / แบบฟอร์ม",
        "แก้ไขงานได้ไม่เกิน 3 ครั้ง",
        "ดูแลระบบความปลอดภัยตลอดการใช้งาน",
      ],
    },
    {
      id: "starter-3",
      title: "Starter (3 หน้า)",
      price: 3500,
      icon: "solar:shop-bold-duotone",
      desc: "แพ็กเกจยอดนิยมสำหรับธุรกิจเริ่มต้น",
      features: [
        "ออกแบบเว็บไซต์จำนวน 3 หน้า",
        "รองรับการแสดงผลทุกหน้าจอ",
        "ฟรี โดเมน (Domain)",
        "ฟรี รูปภาพประกอบเว็บไซต์",
        "ฟรี ช่องทางการติดต่อ / แบบฟอร์ม",
        "แก้ไขงานได้ไม่เกิน 3 ครั้ง",
        "ดูแลระบบความปลอดภัยตลอดการใช้งาน",
      ],
    },
    {
      id: "landing-pro",
      title: "Landing Page Pro",
      price: 15000,
      icon: "solar:leaf-bold-duotone",
      desc: "เน้นงานคุณภาพและการทำ SEO",
      features: [
        "ออกแบบ 1 หน้า (Long Page)",
        "รองรับการแสดงผลทุกหน้าจอ",
        "พื้นที่เก็บข้อมูล 5 GB",
        "ระบบจัดการหลังบ้าน แก้ไขข้อมูลเองได้",
        "เว็บไซต์รองรับการทำ SEO",
        "ฟรี SSL Certificate (ความปลอดภัย)",
      ],
    },
    {
      id: "corporate",
      title: "Corporate / Service",
      price: 25900,
      icon: "solar:city-bold-duotone",
      desc: "เว็บไซต์บริษัท เสริมภาพลักษณ์องค์กร",
      features: [
        "ออกแบบ 3-5 หน้าหลัก",
        "Sub Menu 3-5 หน้า",
        "พื้นที่เก็บข้อมูล 15 GB",
        "ระบบจัดการหลังบ้าน (CMS)",
        "โครงสร้างรองรับการทำ SEO",
        "เชื่อมต่อ Social Media เต็มรูปแบบ",
      ],
    },
    {
      id: "catalog",
      title: "Catalog Showcase",
      price: 34900,
      icon: "solar:clapperboard-edit-bold-duotone",
      desc: "เน้นโชว์สินค้าและบริการแบบละเอียด",
      features: [
        "ออกแบบ 4-8 หน้าหลัก",
        "Sub Menu 8-10 หน้า",
        "ระบบตะกร้าสินค้า (สั่งซื้อผ่านไลน์/เมล)",
        "ลงสินค้าให้เริ่มต้น 30 รายการ",
        "พื้นที่เก็บข้อมูล 20 GB",
        "ระบบจัดการหมวดหมู่สินค้า",
      ],
    },
    {
      id: "ecommerce",
      title: "Full E-Commerce",
      price: 43000,
      icon: "solar:cart-large-4-bold-duotone",
      desc: "ร้านค้าออนไลน์เต็มรูปแบบ ครบวงจร",
      features: [
        "ออกแบบ 5-10 หน้าหลัก",
        "ระบบชำระเงิน (บัตรเครดิต/โอนเงิน)",
        "ระบบสมาชิก คูปองส่วนลด และสต๊อก",
        "ระบบจัดการสถานะ Order",
        "พื้นที่เก็บข้อมูล 25 GB",
        "รายงานยอดขายรายวัน/เดือน",
      ],
    },
  ];

  const addons = [
    {
      id: "seo",
      title: "Premium SEO Optimization",
      price: 15000,
      icon: "solar:graph-up-bold-duotone",
      tag: "Popular",
    },
    {
      id: "gmb",
      title: "Google Maps & GMB",
      price: 3500,
      icon: "solar:map-point-wave-bold-duotone",
    },
    {
      id: "ads",
      title: "Tracking Pixel Setup",
      price: 4500,
      icon: "solar:target-bold-duotone",
      desc: "ติดตั้ง Facebook Pixel / Google Tags",
    },
    {
      id: "content",
      title: "Professional Copywriting",
      price: 5000,
      icon: "solar:pen-new-square-bold-duotone",
    },
    {
      id: "banner",
      title: "Premium Banner Set",
      price: 4500,
      icon: "solar:gallery-wide-bold-duotone",
      desc: "ออกแบบแบนเนอร์โปรโมท 5 รูป",
    },
    {
      id: "multilingual",
      title: "Multi-Language (2 ภาษา)",
      price: 8000,
      icon: "solar:global-bold-duotone",
    },
    {
      id: "speed",
      title: "Ultra Speed Loading",
      price: 3500,
      icon: "solar:bolt-circle-bold-duotone",
    },
    {
      id: "security",
      title: "Premium Security (WAF)",
      price: 5500,
      icon: "solar:shield-keyhole-bold-duotone",
      tag: "Security",
    },
    {
      id: "maintenance",
      title: "Yearly Maintenance",
      price: 9500,
      icon: "solar:settings-bold-duotone",
      tag: "Best Value",
    },
    {
      id: "chatbot",
      title: "Smart Chatbot Setup",
      price: 6500,
      icon: "solar:chat-square-call-bold-duotone",
    },
    {
      id: "booking",
      title: "ระบบจอง / Appointment",
      price: 12000,
      icon: "solar:calendar-date-bold-duotone",
    },
    {
      id: "storage",
      title: "Extra Storage +20GB",
      price: 2500,
      icon: "solar:database-bold-duotone",
    },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const currentPackage = siteTypes.find((s) => s.id === selectedType);
  const selectedAddonDetails = addons.filter((a) =>
    selectedAddons.includes(a.id)
  );
  const totalPrice =
    (currentPackage?.price || 0) +
    selectedAddonDetails.reduce((sum, a) => sum + a.price, 0);

  // ฟังก์ชันส่งข้อมูลไป Line
  const handleSubmitToLine = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const addonList = selectedAddonDetails
      .map((a) => `• ${a.title}`)
      .join("\n");
    const message = `🚀 *มีโปรเจกต์ใหม่เข้า!*\n\n👤 *ข้อมูลลูกค้า*\nชื่อ: ${
      customerInfo.name
    }\nเบอร์โทร: ${customerInfo.phone}\nLine ID: ${
      customerInfo.line
    }\n\n📦 *รายละเอียด*\nแพ็กเกจ: ${currentPackage?.title}\nบริการเสริม:\n${
      addonList || "- ไม่มี -"
    }\n\n💰 *ราคารวม: ฿${totalPrice.toLocaleString()}*`;

    try {
      // 1. ส่งข้อมูลเข้า Webhook / API เพื่อแจ้งเตือนเข้ากลุ่ม Line ทันที
      await fetch("/api/send-line", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      // 2. เปิดหน้าแชท Line OA ให้ลูกค้าทักมาหาเรา (User Experience)
      const lineId = process.env.NEXT_PUBLIC_LINE_OA_ID;
      const clientMessage = `สวัสดีครับ ผมสนใจ ${currentPackage?.title} ที่คำนวณไว้ครับ`;
      //   const lineUrl = `https://line.me/ti/p/~${lineId}`;
      const lineUrl = `https://line.me/R/oaMessage/${lineId}/?${encodeURIComponent(
        clientMessage
      )}`;

      window.open(lineUrl, "_blank");
    } catch (err) {
      console.error("Webhook Error:", err);
    } finally {
      setIsSubmitting(false);
      setShowModal(false);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="bg-[#FBFBFE] dark:bg-[#050505] min-h-screen py-16 px-4 md:px-8 font-kanit transition-colors duration-500 pt-48">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="bg-[#EFBF04]/10 text-[#CC9900] px-4 py-1.5 rounded-full text-sm font-bold tracking-wider">
              ESTIMATION TOOL
            </span>
            <h1 className="text-4xl md:text-6xl font-[1000] text-slate-900 dark:text-white mt-4 mb-6 tracking-tight">
              คำนวณงบประมาณ{" "}
              <span className="text-[#EFBF04]">เว็บไซต์ของคุณ</span>
            </h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Side: Selection Area */}
          <div className="lg:col-span-8 space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-black shadow-lg">
                  <Icon icon="solar:globus-bold" width={24} />
                </div>
                <h2 className="text-2xl font-black dark:text-white">
                  1. เลือกรูปแบบโปรเจกต์
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {siteTypes.map((type) => (
                  <motion.div
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`relative cursor-pointer p-6 rounded-[2.5rem] border-2 transition-all duration-300 flex flex-col h-full ${
                      selectedType === type.id
                        ? "bg-white dark:bg-white/5 border-[#EFBF04] shadow-2xl shadow-yellow-200/40"
                        : "bg-white/50 dark:bg-white/[0.02] border-slate-100 dark:border-white/5 opacity-60 grayscale hover:grayscale-0 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 ${
                        selectedType === type.id
                          ? "bg-[#EFBF04] text-black rotate-12"
                          : "bg-slate-100 dark:bg-white/10 text-slate-400"
                      }`}
                    >
                      <Icon icon={type.icon} width={34} />
                    </div>
                    <h3 className="font-black text-xl text-slate-800 dark:text-white mb-2">
                      {type.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-6 flex-grow">
                      {type.desc}
                    </p>
                    <div className="text-2xl font-black text-slate-900 dark:text-[#EFBF04]">
                      ฿{type.price.toLocaleString()}
                    </div>
                    {selectedType === type.id && (
                      <div className="absolute top-4 right-4 text-[#EFBF04]">
                        <Icon icon="solar:check-circle-bold" width={24} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-black shadow-lg">
                  <Icon icon="solar:add-square-bold" width={24} />
                </div>
                <h2 className="text-2xl font-black dark:text-white">
                  2. บริการเพิ่มเติม
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {addons.map((addon) => (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`group cursor-pointer flex items-center justify-between p-5 md:p-7 rounded-[2rem] border-2 transition-all duration-300 ${
                      selectedAddons.includes(addon.id)
                        ? "bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/20 translate-x-2"
                        : "bg-white dark:bg-white/[0.02] border-slate-100 dark:border-white/5 text-slate-600 hover:border-[#EFBF04]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          selectedAddons.includes(addon.id)
                            ? "bg-white/10"
                            : "bg-slate-100 dark:bg-white/10"
                        }`}
                      >
                        <Icon
                          icon={addon.icon}
                          width={28}
                          className={
                            selectedAddons.includes(addon.id)
                              ? "text-[#EFBF04]"
                              : "text-slate-400"
                          }
                        />
                      </div>
                      <div>
                        <span className="font-black text-sm block dark:text-white">
                          {addon.title}
                        </span>
                        {addon.tag && (
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#EFBF04]">
                            {addon.tag}
                          </span>
                        )}
                      </div>
                    </div>
                    <span
                      className={`font-black text-lg ${
                        selectedAddons.includes(addon.id)
                          ? "text-[#EFBF04]"
                          : "text-slate-900 dark:text-white"
                      }`}
                    >
                      +฿{addon.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Side: Price Summary (Sticky) */}
          <div className="lg:col-span-4">
            <div className="sticky top-10">
              <div className="bg-white dark:bg-white/[0.03] p-10 rounded-[3.5rem] border border-slate-100 dark:border-white/5 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#EFBF04]/10 rounded-full blur-3xl"></div>
                <h3 className="text-xl font-black mb-8 dark:text-white flex items-center gap-2">
                  <Icon
                    icon="solar:bill-list-bold-duotone"
                    width={26}
                    className="text-[#EFBF04]"
                  />
                  สรุปรายละเอียด
                </h3>

                <div className="mb-8 p-6 bg-slate-50 dark:bg-white/5 rounded-[2rem] border border-slate-100 dark:border-white/5">
                  <h4 className="text-xs font-black mb-4 flex items-center gap-2 dark:text-white text-slate-900 uppercase tracking-widest">
                    <Icon
                      icon="solar:star-fall-minimalistic-2-bold-duotone"
                      className="text-[#EFBF04]"
                      width={18}
                    />
                    สิ่งที่คุณจะได้รับ
                  </h4>
                  <ul className="space-y-3">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedType}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {currentPackage?.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2.5 text-[13px] text-slate-500 dark:text-slate-400 mb-2.5 last:mb-0"
                          >
                            <Icon
                              icon="solar:check-circle-bold"
                              className="text-[#EFBF04] mt-0.5 shrink-0"
                              width={16}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </ul>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Package หลัก</span>
                    <span className="font-bold dark:text-white underline decoration-[#EFBF04]">
                      {currentPackage?.title}
                    </span>
                  </div>
                  {selectedAddons.length > 0 && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">
                        Add-ons ({selectedAddons.length})
                      </span>
                      <span className="font-bold dark:text-white">
                        +฿
                        {selectedAddonDetails
                          .reduce((s, a) => s + a.price, 0)
                          .toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-100 dark:border-white/10 pt-8 mb-10 text-center">
                  <p className="text-slate-400 text-xs font-bold uppercase mb-2">
                    ยอดรวมงบประมาณโดยประมาณ
                  </p>
                  <div className="text-6xl font-[1000] text-slate-900 dark:text-white italic tracking-tighter">
                    ฿{totalPrice.toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() => setShowModal(true)}
                  className="w-full bg-[#EFBF04] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black py-5 rounded-[2rem] font-black text-lg transition-all duration-500 flex items-center justify-center gap-3 shadow-xl shadow-yellow-400/20 active:scale-95 group"
                >
                  เริ่มโปรเจกต์กับเรา{" "}
                  <Icon
                    icon="solar:arrow-right-up-bold"
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-[#0F0F0F] w-full max-w-lg p-10 rounded-[3rem] shadow-2xl border border-white/10"
            >
              <h2 className="text-3xl font-black dark:text-white mb-2">
                ยืนยันข้อมูลติดต่อ
              </h2>
              <p className="text-slate-400 text-sm mb-8">
                เราจะส่งข้อมูลสรุปราคาที่คุณเลือกไปยังแชท Line OA
              </p>

              <form onSubmit={handleSubmitToLine} className="space-y-5">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-[#EFBF04] mb-2">
                    ชื่อของคุณ
                  </label>
                  <input
                    required
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, name: e.target.value })
                    }
                    type="text"
                    className="w-full bg-slate-100 dark:bg-white/5 border-none rounded-2xl py-4 px-6 dark:text-white focus:ring-2 focus:ring-[#EFBF04] outline-none transition-all"
                    placeholder="เช่น คุณสมชาย"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-[#EFBF04] mb-2">
                    เบอร์โทรศัพท์
                  </label>
                  <input
                    required
                    value={customerInfo.phone}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        phone: e.target.value,
                      })
                    }
                    type="tel"
                    className="w-full bg-slate-100 dark:bg-white/5 border-none rounded-2xl py-4 px-6 dark:text-white focus:ring-2 focus:ring-[#EFBF04] outline-none transition-all"
                    placeholder="08x-xxx-xxxx"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-[#EFBF04] mb-2">
                    Line ID
                  </label>
                  <input
                    value={customerInfo.line}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, line: e.target.value })
                    }
                    type="text"
                    className="w-full bg-slate-100 dark:bg-white/5 border-none rounded-2xl py-4 px-6 dark:text-white focus:ring-2 focus:ring-[#EFBF04] outline-none transition-all"
                    placeholder="ID สำหรับติดต่อกลับ"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 mt-4"
                >
                  {isSubmitting
                    ? "กำลังส่งข้อมูล..."
                    : "ส่งข้อมูลไปยัง Line OA"}
                  {!isSubmitting && (
                    <Icon icon="solar:chat-round-line-bold" width={24} />
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PriceEstimationNew;
