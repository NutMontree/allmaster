"use client";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-skyblue/40 via-[#4298b0]/20 to-transparent dark:from-[#4298b0]/20 dark:via-black dark:to-black" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center pt-32 pb-20 md:pt-48 md:pb-56">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <span className="inline-block py-1 px-4 rounded-full bg-skyblue/10 text-skyblue dark:text-skyblue-300 text-sm font-bold uppercase tracking-widest mb-6 border border-skyblue/20">
              Sisaket Kantharalak
            </span>
            <h1 className="text-5xl lg:text-8xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-tight">
              All-in-One <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4298b0] to-skyblue">
                Expert
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto md:mx-0">
              ผู้เชี่ยวชาญด้านบริการแบบครบวงจร พร้อมดูแลคุณด้วยคุณภาพมาตรฐานสากล
              ในเขตพื้นที่ศรีสะเกษและกันทรลักษ์
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link
                href="/contactus"
                className="px-10 py-4 bg-[#4298b0] hover:bg-[#357a8e] text-white transition-all duration-300 shadow-lg shadow-cyan-500/25 text-lg font-bold rounded-2xl text-center"
              >
                ติดต่อเรา
              </Link>
              <button className="px-10 py-4 border-2 border-slate-200 dark:border-slate-800 hover:border-[#4298b0] dark:hover:border-[#4298b0] text-slate-700 dark:text-slate-300 transition-all duration-300 text-lg font-bold rounded-2xl">
                ดูรายละเอียด
              </button>
            </div>
          </div>

          {/* Hero Image (Right Side) */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            <div className="relative w-full max-w-[500px] md:max-w-none animate-float hidden lg:block">
              <div className="absolute top-0 right-0 w-1/3 opacity-80">
                <Image
                  src="/logo.svg"
                  alt="icon"
                  width={200}
                  height={200}
                  unoptimized
                  className="drop-shadow-2xl"
                />
              </div>
              {/* Overlay Icon Image */}
              {/* <div className="absolute top-0 right-0 w-1/3 opacity-80">
                <Image
                  src="/images/icon/allm.png"
                  alt="icon"
                  width={200}
                  height={200}
                  unoptimized
                />
              </div> */}
            </div>
          </div>
        </div>

        {/* Feature Cards Section (Bottom) */}
        <div className="relative -mb-48 md:-mb-64 lg:-mb-72 z-20 px-4">
          <div className="max-w-5xl mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-800 shadow-2xl rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-slate-100 dark:divide-slate-800">
              {[
                "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnVxamcxZHhpdnFtOHYzamlnem96bW92NzV0djN1azYxeXRmdHR3NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/98kcZtideBuSDrzDcR/giphy.gif",
                "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXo0aHlsenZwcTBzem9rOWd1Y3l3eW1odmJhMmt1NHl2N2toNG9xaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/GyHvYnLiEHLjh6Chpw/giphy.gif",
                "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjV0OTVqcXY2djNvdjl5b25raGRqZzRmaGxrdjNzMGk1MTdwNnBjMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/PIjlwugCy49HhyE8O2/giphy.gif",
              ].map((src, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-4 md:p-8 hover:bg-skyblue/5 transition-colors"
                >
                  {/* ปรับขนาด wrapper ของรูปภาพให้เล็กลงในมือถือ */}
                  <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-3 md:mb-4 transform group-hover:scale-110 transition-transform">
                    <Image
                      src={src}
                      alt={`service-${index}`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs md:text-base text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-center">
                    Service {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for the overlapping cards */}
      <div className="h-24 md:h-32 bg-slate-50 dark:bg-slate-950" />

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
