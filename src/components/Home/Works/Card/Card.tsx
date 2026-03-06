"use client";
import { WorkHomes } from "@/types/workHomes";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const WorksCard: React.FC<{ item: WorkHomes }> = ({ item }) => {
  const { name, location, slug, images, href, description, details } = item;
  const mainImage = images[0]?.src;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="group relative h-full">
      {/* Background Glow Effect (แสดงเฉพาะตอน Hover) */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#EFBF04] to-orange-600 rounded-[30px] opacity-0 group-hover:opacity-20 blur transition duration-500"></div>

      <div className="relative h-full flex flex-col bg-white dark:bg-[#121212] rounded-[28px] border border-slate-100 dark:border-white/[0.08] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:shadow-2xl group-hover:shadow-black/5 dark:group-hover:shadow-[#EFBF04]/5">
        {/* Image Section with Overlay */}
        <div className="relative aspect-[16/11] overflow-hidden">
          <Link href={`/works/${slug}`} className="cursor-pointer">
            {mainImage ? (
              <Image
                src={mainImage}
                alt={name}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                unoptimized={true}
              />
            ) : (
              <div className="w-full h-full bg-slate-50 dark:bg-neutral-900 flex items-center justify-center">
                <Icon
                  icon="solar:camera-square-bold-duotone"
                  width={48}
                  className="text-slate-200 dark:text-neutral-700"
                />
              </div>
            )}
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>

          {/* Floating Action Badge */}
          <div className="absolute top-5 right-5 z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl">
              <div className="flex items-center gap-2 text-white text-xs font-bold tracking-wider">
                VIEW CASE <Icon icon="solar:alt-arrow-right-bold" width={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-7 flex flex-col flex-grow">
          {/* Tag/Category (ถ้ามี) หรือ Location */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#EFBF04] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-neutral-500">
              {location}
            </span>
          </div>

          <Link href={`/works/${slug}`}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight transition-colors group-hover:text-[#EFBF04] mb-3">
              {name}
            </h3>
          </Link>

          {/* Description ด้วย Typography ที่อ่านง่ายขึ้น */}
          {description && description.length > 0 && (
            <p className="text-[15px] text-slate-500 dark:text-neutral-400 line-clamp-2 leading-relaxed font-medium">
              {description[0].title}
            </p>
          )}

          <div className="flex-grow min-h-[24px]" />

          {/* Tech Stack - Modern Pills */}
          {details && (
            <div className="flex flex-wrap gap-2 mb-8">
              {details
                .split(",")
                .slice(0, 3)
                .map((tech, index) => (
                  <span
                    key={index}
                    className="text-[11px] font-bold text-slate-700 dark:text-neutral-300 px-3 py-1.5 bg-slate-50 dark:bg-neutral-800/50 rounded-lg border border-slate-100 dark:border-white/5 group-hover:border-[#EFBF04]/30 transition-colors"
                  >
                    {tech.trim()}
                  </span>
                ))}
            </div>
          )}

          {/* Action Footer */}
          <div className="mt-auto pt-5 border-t border-slate-50 dark:border-white/[0.05]">
            {mounted &&
              (href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-extrabold text-slate-900 dark:text-white group/link"
                >
                  <div className="p-2 bg-[#EFBF04] rounded-lg text-black group-hover:rotate-12 transition-transform">
                    <Icon icon="solar:link-bold" width={18} />
                  </div>
                  <span className="relative">
                    Live Preview
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EFBF04] transition-all group-hover:w-full" />
                  </span>
                </a>
              ) : (
                <div className="flex items-center gap-2.5 px-4 py-2 bg-slate-50 dark:bg-neutral-900/50 rounded-xl w-fit">
                  <Icon
                    icon="solar:shield-keyhole-bold-duotone"
                    width={18}
                    className="text-slate-400"
                  />
                  <span className="text-[11px] font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-tighter">
                    Internal Enterprise System
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksCard;
