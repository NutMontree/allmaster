"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // ปรับให้ปุ่มแสดงเมื่อเลื่อนลงมาเกิน 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // การตั้งค่า Scroll แบบ Smooth ที่นุ่มนวลที่สุด
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-[99] 
        p-4 rounded-full bg-[#EFBF04] text-white shadow-2xl
        transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
        flex items-center justify-center
        border border-white/20 backdrop-blur-sm
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-20 scale-50 pointer-events-none"
        }
        hover:bg-[#EFBF04] hover:-translate-y-3 hover:scale-110
        active:scale-90
      `}
      aria-label="เลื่อนกลับไปด้านบน"
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
// EFBF04;
