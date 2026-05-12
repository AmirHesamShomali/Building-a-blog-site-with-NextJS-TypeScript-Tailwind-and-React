import { getBlogsByCategoryService } from '@/services/blog';
import { getCategoryByIdService } from '@/services/category';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaCalendarAlt, FaUser } from 'react-icons/fa';

interface CategoryPageProps {
  params: Promise<{
    categoryId: string;
  }>;
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function CategoryPage({ params }: CategoryPageProps) {
  try {
    // Await params before using its properties
    const { categoryId } = await params;
    
    const [blogs, category] = await Promise.all([
      getBlogsByCategoryService(categoryId),
      getCategoryByIdService(categoryId)
    ]);

    return (
      <>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <Link 
                href="/" 
                className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
              >
                <FaArrowLeft className="ml-2" />
                بازگشت به صفحه اصلی
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {category.title}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                {category.description}
              </p>
              <div className="mt-6 inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="text-white font-medium">
                  {blogs.length} مقاله
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="container mx-auto px-4 py-16 bg-gray-50">
          {blogs.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-400 text-6xl mb-6">📝</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                هنوز مقاله‌ای در این دسته‌بندی منتشر نشده
              </h3>
              <p className="text-gray-600 mb-8">
                به زودی مقالات جدید در این دسته‌بندی اضافه خواهد شد.
              </p>
              <Link 
                href="/"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaArrowLeft className="ml-2" />
                بازگشت به صفحه اصلی
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article 
                  key={blog.id} 
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={`http://localhost:4004${blog.image}` || '/assets/images/blog-placeholder.jpg'}
                      alt={blog.title}
                      width={400}
                      height={240}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {blog.content.substring(0, 150)}...
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <FaUser className="ml-1" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="ml-1" />
                        <span>{new Date(blog.createdAt).toLocaleDateString('fa-IR')}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-end">
                      <Link 
                        href={`/blog/${blog.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                      >
                        ادامه مطلب
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Related Categories */}
        {blogs.length > 0 && (
          <div className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  سایر دسته‌بندی‌ها
                </h2>
                <p className="text-gray-600">
                  مقالات سایر دسته‌بندی‌ها را نیز مطالعه کنید
                </p>
              </div>
              
              <div className="text-center">
                <Link 
                  href="/#categories"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  مشاهده همه دسته‌بندی‌ها
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
    );
  } catch {
    notFound();
  }
} 