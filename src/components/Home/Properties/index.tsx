import { propertyHomes } from "@/app/api/propertyhomes";
import PropertyCard from "./Card/Card";

const Properties: React.FC = () => {
  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="mb-16 flex flex-col gap-3 ">
          <div className="flex gap-2.5 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#EFBF04"
              viewBox="0 0 256 256"
            >
              <path d="M168,168c0,4.75-1.11,9.16-3.05,12.11A7.77,7.77,0,0,1,158,184c-9.72,0-10-14.36-10-16,0-4.74,1.11-9.16,3.05-12.11A7.77,7.77,0,0,1,158,152C167.72,152,168,166.36,168,168ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM140.84,75.58a8,8,0,0,0,10.74,3.58L156,76.94V112a8,8,0,0,0,16,0V64a8,8,0,0,0-11.58-7.16l-16,8A8,8,0,0,0,140.84,75.58ZM112,144a8,8,0,0,0-11.58-7.16l-16,8a8,8,0,0,0,7.16,14.32L96,156.94V192a8,8,0,0,0,16,0Zm16-56c0-18.84-10.69-32-26-32S76,69.16,76,88s10.69,32,26,32S128,106.84,128,88Zm56,80c0-18.84-10.69-32-26-32s-26,13.16-26,32,10.69,32,26,32S184,186.84,184,168ZM102,72a7.77,7.77,0,0,0-7,3.89c-1.94,3-3,7.37-3,12.11,0,1.64.28,16,10,16a7.77,7.77,0,0,0,7-3.89c1.94-3,3-7.36,3-12.11C112,86.36,111.72,72,102,72Z"></path>
            </svg>
            <p className="text-base font-semibold text-dark/75 dark:text-white/75">
              Properties
            </p>
          </div>
          <h2 className="text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-2">
            Discover inspiring design web.
          </h2>
          <p className="text-xm font-normal text-black/50 dark:text-white/50 text-center">
            Curated website where elegance, style, and comfort unite.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
          {propertyHomes.slice(0, 6).map((item, index) => (
            <div key={index} className="">
              <PropertyCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
