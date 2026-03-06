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
    <section className="bg-[#fafafa] dark:bg-neutral-950 py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header Section (Optional): เพิ่มหัวข้อเล็กๆ เพื่อบอกบริบท */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Latest Articles
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400">
              Explore our latest thoughts on design and code.
            </p>
          </div>
          <div className="h-[1px] flex-grow bg-neutral-200 dark:bg-neutral-800 hidden md:block mx-8 mb-2"></div>
          <div className="text-sm font-medium text-neutral-400">
            Showing {posts.length} posts
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 md:gap-x-10">
          {posts.map((blog, i) => (
            <article
              key={blog.slug || i}
              className="group transition-all duration-500 ease-out hover:-translate-y-2"
            >
              <BlogCard blog={blog} />

              {/* ตกแต่งเพิ่มเติมใต้ Card (ถ้า BlogCard ยังไม่มี) */}
              <div className="mt-6 flex items-center gap-3">
                <div className="h-px w-8 bg-neutral-300 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-blue-500 transition-colors">
                  Read Article
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-3xl">
            <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-full mb-4">
              {/* ใส่ Icon หน้าเศร้าหรือกล่องว่างๆ ตรงนี้ */}
            </div>
            <p className="text-xl font-medium text-neutral-600">
              No stories found yet.
            </p>
            <p className="text-neutral-400">Check back with us later!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
