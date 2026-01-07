// app/about/page.tsx
import Image from "next/image"; // ถ้าจะใช้รูปภาพในอนาคต

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-zinc-900 font-sans py-24">
      <section className="container mx-auto max-w-6xl px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            <span className="text-[#EFBF04]">✓</span> AllMaster &lt;
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            เรื่องที่ควรรู้เกี่ยวกับ{" "}
            <span className="text-[#EFBF04]">AllMaster</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            เราเชื่อมั่นและทุ่มเทที่จะเป็นส่วนหนึ่งในการขับเคลื่อนธุรกิจของคุณให้เติบโตในโลกดิจิทัลที่ก้าวไปข้างหน้าอย่างรวดเร็ว
          </p>
        </div>

        {/* Section: Who we are */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Who we are
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-20">
          {/* Left Card: รายละเอียด AllMaster */}
          <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-xl p-8 transform hover:scale-[1.01] transition-transform duration-300 border border-gray-100 dark:border-zinc-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-[#EFBF04] pl-4">
              ทำไมต้อง AllMaster ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              AllMaster เกิดขึ้นจากทีมงานที่มีประสบการณ์ด้านเทคโนโลยี
              เว็บแอปพลิเคชัน และโซลูชันดิจิทัล
              เราเชื่อว่าธุรกิจยุคใหม่ควรเข้าถึงเครื่องมือคุณภาพได้ง่าย
              ในราคาที่เหมาะสม และพร้อมใช้งานจริง
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              เราจึงสร้างแพลตฟอร์มที่รวมสินค้าและบริการดิจิทัล เช่น
              เว็บสำเร็จรูป, ระบบหลังบ้าน, เทมเพลต, เว็บไซต์, ระบบสมาชิก
              และโซลูชันสำหรับธุรกิจออนไลน์
            </p>
          </div>

          {/* Right Card: จุดเด่น */}
          <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-xl p-8 transform hover:scale-[1.01] transition-transform duration-300 border border-gray-100 dark:border-zinc-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-[#EFBF04] pl-4">
              สิ่งที่เรายึดมั่น
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#EFBF04] font-bold text-xl">✔</span>
                <span className="text-gray-700 dark:text-gray-200 text-lg">
                  สินค้าและบริการคุณภาพระดับสากล ใช้งานได้จริง 100%
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#EFBF04] font-bold text-xl">✔</span>
                <span className="text-gray-700 dark:text-gray-200 text-lg">
                  พร้อมสำหรับธุรกิจทุกขนาด: สตาร์ทอัพ, SME, และองค์กรขนาดใหญ่
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#EFBF04] font-bold text-xl">✔</span>
                <span className="text-gray-700 dark:text-gray-200 text-lg">
                  โฟกัสที่ความเร็ว, ความปลอดภัย, และประสบการณ์ผู้ใช้ที่ดีที่สุด
                  (UX)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section: Vision & Mission */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Vision & Mission
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Card: Vision */}
          <div className="rounded-3xl border border-gray-200 dark:border-zinc-700 p-8 transform hover:translate-y-[-5px] transition-transform duration-300 shadow-lg bg-white dark:bg-zinc-800">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-[#EFBF04] rounded-full"></div>
              วิสัยทัศน์
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              เป็นแพลตฟอร์มดิจิทัลที่ธุรกิจไทยไว้วางใจ
              และเป็นตัวช่วยสำคัญในการขับเคลื่อนธุรกิจสู่โลกดิจิทัล
            </p>
          </div>

          {/* Card: Mission */}
          <div className="rounded-3xl border border-gray-200 dark:border-zinc-700 p-8 transform hover:translate-y-[-5px] transition-transform duration-300 shadow-lg bg-white dark:bg-zinc-800">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-[#EFBF04] rounded-full"></div>
              พันธกิจ
            </h3>
            <ul className="list-none space-y-3 text-gray-600 dark:text-gray-300 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-[#EFBF04] mt-1">●</span>{" "}
                พัฒนาสินค้าและบริการที่ใช้งานได้จริง ตอบโจทย์ทุกความต้องการ
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EFBF04] mt-1">●</span>{" "}
                ช่วยลดต้นทุนและเวลาในการเริ่มต้นธุรกิจให้มีประสิทธิภาพ
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EFBF04] mt-1">●</span>{" "}
                สนับสนุนการเติบโตของธุรกิจและสตาร์ทอัพในทุกมิติ
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] dark:from-yellow-700 dark:to-yellow-800 rounded-3xl overflow-hidden shadow-2xl p-12 text-center transform hover:scale-[1.01] transition-transform duration-300">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-md">
              อยากสร้างเว็บไซต์ธุรกิจของคุณให้โดดเด่น?
            </h2>

            <p className="text-gray-900 dark:text-gray-200 leading-relaxed text-xl mb-8">
              AllMaster มีบริการที่ครบครัน
              ตั้งแต่เว็บไซต์สำเร็จรูปไปจนถึงการพัฒนาเว็บไซต์ตามความต้องการ
              <br className="hidden sm:block" />
              ช่วยให้คุณควบคุมงบประมาณและเริ่มต้นได้อย่างมั่นใจในทุกก้าวของธุรกิจ
            </p>

            <a
              href="/WebsiteCostBlog"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-black font-bold text-lg
                hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl active:scale-95
                shadow-md shadow-black/20"
            >
              สำรวจบริการและแพ็กเกจของเรา
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
