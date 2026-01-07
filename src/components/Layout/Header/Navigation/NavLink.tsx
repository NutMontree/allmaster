import { NavLinks } from "@/types/navlink";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  item: NavLinks;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ item, onClick }) => {
  const path = usePathname();
  const isActive = item.href === path;

  const linkclasses = clsx(
    // Transition และ Layout
    "py-3 text-3xl sm:text-6xl font-bold transition-all duration-500 ease-out inline-block",

    // สถานะปกติ (Normal State)
    // โหมดสว่าง: สีเทา Zinc-500 (ชัดเจนพอที่จะอ่านออก)
    // โหมดมืด: สีขาวจาง White/30
    "text-zinc-500 dark:text-white/30",

    // สถานะ Hover (Hover State)
    // โหมดสว่าง: สีทองเข้ม #D4A903 (เพื่อให้อ่านออกบนพื้นขาว)
    // โหมดมืด: สีทองสว่าง #EFBF04
    "group-hover:text-[#D4A903] dark:group-hover:text-[#EFBF04] group-hover:translate-x-3",

    {
      // สถานะกำลังใช้งาน (Active State)
      "text-[#D4A903] dark:text-[#EFBF04] translate-x-3": isActive,
    }
  );

  const lineStyle = clsx(
    // เส้น Indicator ด้านหน้า
    "h-[4px] transition-all duration-500 ease-out rounded-full",
    "bg-[#D4A903] dark:bg-[#EFBF04]", // ปรับสีตามโหมด
    "shadow-[0_0_10px_rgba(212,169,3,0.3)] dark:shadow-[0_0_15px_rgba(239,191,4,0.5)]",
    {
      "w-12 mr-6 opacity-100": isActive,
      "w-0 opacity-0 group-hover:w-8 group-hover:mr-4 group-hover:opacity-100":
        !isActive,
    }
  );

  return (
    <li className="flex items-center group w-fit my-3">
      {/* เส้นลูกเล่นด้านหน้า */}
      <div className={lineStyle} />

      <Link href={item.href} className={linkclasses} onClick={onClick}>
        <span className="relative">
          {item.label}
          {/* เอฟเฟกต์สะท้อนแสงบางๆ เมื่อ Hover (ใช้เฉพาะ Dark Mode เพื่อความสะอาดตา) */}
          <span className="absolute -inset-4 hidden dark:block rounded-full bg-[#EFBF04]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </span>
      </Link>
    </li>
  );
};

export default NavLink;
