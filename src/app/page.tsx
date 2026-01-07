import FeaturedProperty from "@/components/Home/FeaturedProperty";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Home/Testimonial";
import BlogSmall from "@/components/shared/Blog";
import GetInTouch from "@/components/Home/GetInTouch";
import FAQ from "@/components/Home/FAQs";
import Packet from "@/components/packet";
import Works from "@/components/Home/Works";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Works />
      <Packet />
      {/* <FeaturedProperty /> */}
      <Testimonial />
      {/* <BlogSmall /> */}
      <GetInTouch />
      <FAQ />
    </main>
  );
}
