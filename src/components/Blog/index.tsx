import React from "react";
import BlogCard from "@/components/shared/Blog/blogCard";
import { getAllPosts } from "@/components/utils/markdown";

interface Blog {
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  slug: string;
  detail: string;
  tag: string;
  description?: string;
}

const BlogList: React.FC = () => {
  // ดึงข้อมูลและแปลงเป็น String อย่างกระชับ
  const rawPosts = getAllPosts([
    "title",
    "date",
    "excerpt",
    "coverImage",
    "slug",
    "detail",
    "tag",
  ]);

  const posts: Blog[] = rawPosts.map((item) => {
    // ฟังก์ชันช่วยแปลงค่าเป็น string เพื่อความสะอาดของโค้ด
    const toString = (val: any) =>
      typeof val === "string" ? val : String(val ?? "");

    return {
      title: toString(item.title),
      date: toString(item.date),
      excerpt: toString(item.excerpt),
      coverImage: toString(item.coverImage),
      slug: toString(item.slug),
      detail: toString(item.detail),
      tag: toString(item.tag),
    };
  });

  return (
    <section className="py-12 md:py-20">
      {" "}
      {/* เพิ่ม Padding บนล่างให้ดูโปร่งขึ้น */}
      <div className="container max-w-7xl mx-auto px-5">
        {/* Responsive Grid: 
           - 1 คอลัมน์บนมือถือ (Default)
           - 2 คอลัมน์บน Tablet (sm/md)
           - 3 คอลัมน์บน Desktop (lg)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {posts.map((blog, i) => (
            <div key={blog.slug || i} className="w-full flex justify-center">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>

        {/* กรณีไม่มีบทความ */}
        {posts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No blog posts found.
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
