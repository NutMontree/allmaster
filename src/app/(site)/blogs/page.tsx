import BlogList from "@/components/Blog";
import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Grids | AllMaster ",
};

const Blog = () => {
  return (
    <>
      <HeroSub
        title="	Digital Development Insights."
        description="Stay ahead in the digital world with expert web development advice and technology updates."
        badge="Tech Blog (or Dev Guide)"
      />
      <BlogList />
      {/* <h1 className="text-4xl text-center py-24">Any</h1> */}
    </>
  );
};

export default Blog;
