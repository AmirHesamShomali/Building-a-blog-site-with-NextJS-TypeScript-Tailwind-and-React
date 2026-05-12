import Image from 'next/image';
import Link from 'next/link';
import { Blog } from '@/types/blog';

interface FeaturedBlogsProps {
  blogs: Blog[];
}

export default function FeaturedBlogs({ blogs }: FeaturedBlogsProps) {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          آخرین مقالات
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          جدیدترین مطالب و مقالات تخصصی را در اینجا مطالعه کنید
        </p>
      </div>

      {/* گرید مقالات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {blogs.map((blog) => (
          <Link 
            key={blog.id} 
            href={`/blog/${blog.id}`}
            className="group"
          >
            <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
              {/* تصویر مقاله */}
              <div className="relative h-48 md:h-52 lg:h-56 overflow-hidden">
                <Image
                  src={`http://localhost:4004${blog.image}`}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  جدید
                </div>
              </div>

              {/* محتوای کارت */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-1">
                  {blog.content.substring(0, 120)}...
                </p>

                {/* اطلاعات نویسنده و تاریخ */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-medium text-xs">
                        {blog.author.charAt(0)}
                      </span>
                    </div>
                    <span>{blog.author}</span>
                  </div>
                  <time className="text-xs">
                    {new Date(blog.createdAt).toLocaleDateString('fa-IR')}
                  </time>
                </div>

                {/* دکمه ادامه مطلب */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700 flex items-center gap-1">
                    ادامه مطلب
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* دکمه مشاهده همه مقالات */}
      <div className="text-center mt-12">
        <Link 
          href="/blogs"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          مشاهده همه مقالات
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      </div>
    </section>
  );
} 