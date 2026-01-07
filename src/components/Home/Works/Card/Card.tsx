import { WorkHomes } from "@/types/workHomes";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const WorksCard: React.FC<{ item: WorkHomes }> = ({ item }) => {
  const { name, location, rate, slug, images, href, description, details } =
    item;
  const mainImage = images[0]?.src;

  return (
    <div>
      <div className="relative rounded-2xl border border-dark/10 dark:border-white/10 group hover:shadow-3xl duration-300 dark:hover:shadow-white/20">
        <div className="overflow-hidden rounded-t-2xl">
          <Link href={`/works/${slug}`}>
            {mainImage && (
              <Image
                src={mainImage}
                alt={name}
                width={440}
                height={300}
                className="w-full rounded-t-2xl group-hover:brightness-50 group-hover:scale-125 transition duration-300 delay-75"
                unoptimized={true}
              />
            )}
          </Link>
          <div className="absolute top-6 right-6 p-4 bg-white rounded-full hidden group-hover:block transition-all">
            <Icon
              icon={"solar:arrow-right-linear"}
              width={24}
              height={24}
              className="text-black"
            />
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex justify-between items-start">
              <div>
                <Link href={`/works/${slug}`}>
                  <h3 className="text-xl font-bold text-black dark:text-white duration-300 group-hover:text-[#EFBF04]">
                    {name}
                  </h3>
                </Link>
                <p className="text-sm font-normal text-black/50 dark:text-white/50 truncate max-w-[200px]">
                  {location}
                </p>
              </div>
              <button className="text-sm font-bold text-[#EFBF04] px-4 py-1.5 rounded-full bg-[#EFBF04]/10 border border-[#EFBF04]/20">
                ฿{rate}
              </button>
            </div>

            {/* --- ส่วนที่เพิ่มใหม่: แสดง Description แบบย่อ --- */}
            {description && description.length > 0 && (
              <p className="text-sm text-slate-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                {description[0].title}
              </p>
            )}

            {/* --- ส่วนที่เพิ่มใหม่: แสดง Tech Stack (Details) เป็นเม็ดๆ --- */}
            {details && (
              <div className="flex flex-wrap gap-2 mt-2">
                {details
                  .split(",")
                  .slice(0, 3)
                  .map((tech, index) => (
                    <span
                      key={index}
                      className="text-[10px] uppercase tracking-wider px-2 py-1 bg-slate-100 dark:bg-white/5 rounded text-slate-500 dark:text-zinc-400"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                {details.split(",").length > 3 && (
                  <span className="text-[10px] text-slate-400">
                    +{details.split(",").length - 3}
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-white/5">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-black dark:text-white hover:text-[#EFBF04] flex items-center gap-2 transition-colors"
              >
                <Icon icon="solar:link-circle-bold" width={20} />
                เยี่ยมชมเว็บไซต์จริง
              </a>
            ) : (
              <span className="text-sm font-normal text-black/30 dark:text-white/30 italic flex items-center gap-2">
                <Icon icon="solar:lock-password-bold" width={20} />
                Internal System
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksCard;
