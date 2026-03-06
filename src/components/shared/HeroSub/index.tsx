import React, { FC } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface HeroSubProps {
  title: string;
  description: string;
  badge: string;
}

const HeroSub: FC<HeroSubProps> = ({ title, description, badge }) => {
  return (
    <>
      <section className="text-center bg-cover !pt-32 pb-16 md:!pt-40 md:pb-20 relative overflow-x-hidden px-4">
        {/* Badge Section */}
        <div className="flex gap-2.5 items-center justify-center mb-4">
          <span>
            <Icon
              icon={"ph:house-simple-fill"}
              width={20}
              height={20}
              className="text-[#EFBF04]"
            />
          </span>
          <p className="text-sm md:text-base font-semibold text-dark/75 dark:text-white/75">
            {badge}
          </p>
        </div>

        {/* Title: ปรับขนาดอัตโนมัติ */}
        {/* มือถือ: 3xl (30px), Tablet: 5xl (48px), Desktop: 6xl (60px) หรือใช้เลขที่คุณชอบ */}
        <h2
          className="text-dark dark:text-white relative font-bold 
                       text-3xl sm:text-4xl md:text-5xl lg:text-[52px] 
                       leading-tight mb-4"
        >
          {title}
        </h2>

        {/* Description: ปรับขนาดและจำกัดความกว้างให้อ่านง่าย */}
        <p
          className="text-dark/50 dark:text-white/50 font-normal mx-auto
                      text-base md:text-lg lg:text-xl
                      max-w-[90%] md:max-w-[700px] lg:max-w-[850px]"
        >
          {description}
        </p>
      </section>
    </>
  );
};

export default HeroSub;
