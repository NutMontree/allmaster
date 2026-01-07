// app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-zinc-900">
      <section className="container mx-auto max-w-6xl px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            About <span className="text-blue-600">AllMaster </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            แพลตฟอร์มดิจิทัลสำหรับธุรกิจและสตาร์ทอัพ
            ที่รวมสินค้าและบริการด้านเทคโนโลยี เพื่อช่วยให้คุณเริ่มต้น เติบโต
            และขยายธุรกิจได้อย่างมั่นใจ
          </p>
        </div>

        {/* Who we are */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              เราคือใคร
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              AllMaster เกิดขึ้นจากทีมงานที่มีประสบการณ์ด้านเทคโนโลยี
              เว็บแอปพลิเคชัน และโซลูชันดิจิทัล
              เราเชื่อว่าธุรกิจยุคใหม่ควรเข้าถึงเครื่องมือคุณภาพได้ง่าย
              ในราคาที่เหมาะสม และพร้อมใช้งานจริง
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              เราจึงสร้างแพลตฟอร์มที่รวมสินค้าและบริการดิจิทัล เช่น
              เว็บสำเร็จรูป ระบบหลังบ้าน เทมเพลต เว็บไซต์ ระบบสมาชิก
              และโซลูชันสำหรับธุรกิจออนไลน์
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700 dark:text-gray-200">
                  สินค้าและบริการพร้อมใช้งานสำหรับธุรกิจจริง
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700 dark:text-gray-200">
                  โฟกัสที่คุณภาพ ความเร็ว และความปลอดภัย
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700 dark:text-gray-200">
                  เหมาะสำหรับสตาร์ทอัพ SME และองค์กร
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="rounded-2xl border border-gray-200 dark:border-zinc-700 p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              วิสัยทัศน์
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              เป็นแพลตฟอร์มดิจิทัลที่ธุรกิจไทยไว้วางใจ
              และเป็นตัวช่วยสำคัญในการขับเคลื่อนธุรกิจสู่โลกดิจิทัล
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-zinc-700 p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              พันธกิจ
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>พัฒนาสินค้าและบริการที่ใช้งานได้จริง</li>
              <li>ช่วยลดต้นทุนและเวลาในการเริ่มต้นธุรกิจ</li>
              <li>สนับสนุนการเติบโตของธุรกิจและสตาร์ทอัพ</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-neutral-900">
          <div className="container mx-auto px-6 py-20 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              กำลังวางแผนทำเว็บไซต์อยู่หรือไม่?
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              AllMaster มีทั้งเว็บสำเร็จรูป และบริการพัฒนาเว็บไซต์
              <br className="hidden sm:block" />
              ช่วยให้คุณควบคุมงบประมาณและเริ่มต้นได้อย่างมั่นใจ
            </p>

            <a
              href="/WebsiteCostBlog"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-3 text-white font-semibold
                 hover:bg-emerald-700 transition"
            >
              สำรวจบริการและแพ็กเกจ
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
