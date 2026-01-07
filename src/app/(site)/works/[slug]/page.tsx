"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { testimonials } from "@/app/api/testimonial";
import Link from "next/link";
import Image from "next/image";
import { workHomes } from "@/app/api/workhomes";

// --- ส่วนที่เพิ่มมาสำหรับดูรูปภาพ ---
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Details() {
  const { slug } = useParams();
  const item = workHomes.find((item) => item.slug === slug);

  // State สำหรับเปิด-ปิด Lightbox
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (!item) return <div className="pt-44 text-center">Work not found</div>;

  // เตรียม Slides รูปภาพ
  const slides = item.images.map((img) => ({ src: img.src }));

  const openLightbox = (idx: number) => {
    setIndex(idx);
    setOpen(true);
  };

  return (
    <section className="!pt-44 pb-20 relative">
      <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
        {/* Title Section */}
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="lg:col-span-8 col-span-12">
            <h1 className="lg:text-52 text-40 font-semibold text-dark dark:text-white">
              {item.name}
            </h1>
            <div className="flex items-center gap-2.5">
              <Icon icon="ph:link-bold" width={20} className="text-[#EFBF04]" />
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark/50 dark:text-white/50 text-xm hover:text-[#EFBF04] transition-colors"
              >
                {item.location}
              </a>
            </div>
          </div>
        </div>

        {/* Gallery Section - แก้ไขให้คลิกดูรูปได้ทุกรูป */}
        <div className="grid grid-cols-12 mt-8 gap-4 lg:gap-8">
          <div
            className="lg:col-span-8 col-span-12 row-span-2 cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => openLightbox(0)}
          >
            {item.images?.[0] && (
              <Image
                src={item.images[0].src}
                alt={item.name}
                width={800}
                height={600}
                className="hover:scale-105 duration-500 w-full h-full object-cover border border-dark/10"
                unoptimized
              />
            )}
          </div>

          <div
            className="lg:col-span-4 hidden lg:block cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => openLightbox(1)}
          >
            {item.images?.[1] && (
              <Image
                src={item.images[1].src}
                alt={item.name}
                width={400}
                height={300}
                className="hover:scale-105 duration-500 w-full h-full object-cover border border-dark/10"
                unoptimized
              />
            )}
          </div>

          <div
            className="lg:col-span-2 col-span-6 cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => openLightbox(2)}
          >
            {item.images?.[2] && (
              <Image
                src={item.images[2].src}
                alt={item.name}
                width={400}
                height={300}
                className="hover:scale-105 duration-500 w-full h-full object-cover border border-dark/10"
                unoptimized
              />
            )}
          </div>

          <div
            className="lg:col-span-2 col-span-6 cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => openLightbox(3)}
          >
            {item.images?.[3] && (
              <div className="relative h-full">
                <Image
                  src={item.images[3].src}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="hover:scale-105 duration-500 w-full h-full object-cover border border-dark/10"
                  unoptimized
                />
                {item.images.length > 4 && (
                  <div className="absolute inset-0 bg-black/60 hover:bg-black/40 transition-colors flex flex-col items-center justify-center text-white font-medium">
                    <span className="text-2xl">+{item.images.length - 4}</span>
                    <span className="text-xs uppercase tracking-widest">
                      More Photos
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* เรียกใช้ Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
        />

        {/* Content Section (Project Overview) */}
        <div className="grid grid-cols-12 gap-8 mt-10">
          <div className="lg:col-span-8 col-span-12">
            <h3 className="text-2xl font-bold mb-6">Project Overview</h3>

            <div className="py-8 my-8 border-y border-dark/10 dark:border-white/20 flex flex-col gap-8">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <Icon
                    icon="solar:code-bold"
                    width={28}
                    className="text-blue-500"
                  />
                </div>
                <div>
                  <h3 className="text-dark dark:text-white font-semibold">
                    Tech Stack Details
                  </h3>
                  <p className="text-base text-dark/50 dark:text-white/50 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                  <Icon
                    icon="solar:settings-bold"
                    width={28}
                    className="text-purple-500"
                  />
                </div>
                <div>
                  <h3 className="text-dark dark:text-white font-semibold">
                    Development Tools (Control)
                  </h3>
                  <p className="text-base text-dark/50 dark:text-white/50">
                    {item.contronl}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-3 bg-amber-500/10 rounded-xl">
                  <Icon
                    icon="solar:lightbulb-bold"
                    width={28}
                    className="text-amber-500"
                  />
                </div>
                <div>
                  <h3 className="text-dark dark:text-white font-semibold">
                    Creative Implementation
                  </h3>
                  <p className="text-base text-dark/50 dark:text-white/50">
                    {item.creation || "Standard Creative Guidelines"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {item.description.map((desc, index) => (
                <p
                  key={index}
                  className="text-dark/70 dark:text-white/70 text-lg leading-relaxed"
                >
                  {desc.title}
                </p>
              ))}
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="lg:col-span-4 col-span-12">
            <div className="sticky top-28 space-y-6">
              <div className="bg-[#EFBF04]/10 p-8 rounded-2xl relative z-10 overflow-hidden border border-[#EFBF04]/20">
                <h4 className="text-dark text-3xl font-bold dark:text-white">
                  ฿{item.rate}
                </h4>
                <p className="text-sm text-dark/50 dark:text-white/70">
                  Estimated Project Value
                </p>

                <div className="grid gap-3 mt-8">
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      className="py-4 px-8 bg-dark text-white dark:bg-white dark:text-dark rounded-full w-full block text-center hover:opacity-90 duration-300 font-medium"
                    >
                      Live Preview
                    </a>
                  )}
                  <Link
                    href="/contactus"
                    className="py-4 px-8 bg-[#EFBF04] text-white rounded-full w-full block text-center hover:bg-dark duration-300 font-medium"
                  >
                    Hire Me
                  </Link>
                </div>
              </div>

              {/* Testimonial */}
              {testimonials.slice(0, 1).map((testi, index) => (
                <div
                  key={index}
                  className="border p-8 rounded-2xl border-dark/10 dark:border-white/20 flex flex-col gap-6 bg-white/50 dark:bg-white/5"
                >
                  <Icon
                    icon="ph:quotes-fill"
                    width={40}
                    className="text-[#EFBF04]/40"
                  />
                  <p className="italic text-dark/80 dark:text-white/80">
                    {testi.review}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testi.image}
                      alt={testi.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                      unoptimized
                    />
                    <div>
                      <h5 className="font-bold text-dark dark:text-white">
                        {testi.name}
                      </h5>
                      <p className="text-xs text-dark/50 dark:text-white/50">
                        {testi.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
