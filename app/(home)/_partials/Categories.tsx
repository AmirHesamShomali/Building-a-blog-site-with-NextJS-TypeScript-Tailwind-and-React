import Link from 'next/link';
import { Cattegory } from '@/types/category';

interface CategoriesProps {
  categories: Cattegory[];
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <section id="categories" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            دسته‌بندی‌ها
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            مقالات را بر اساس موضوعات مختلف مرور کنید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/category/${category.id}`}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                  مشاهده مقالات
                  <svg className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 