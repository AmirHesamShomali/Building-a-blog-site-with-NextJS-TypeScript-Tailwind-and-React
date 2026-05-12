import { getBlogsService } from '../../services/blog';
import { getCategoriesService } from '../../services/category';
// Import components
import HeroBanner from './_partials/HeroBanner';
import Statistics from './_partials/Statistics';
import Categories from './_partials/Categories';
import FeaturedBlogs from './_partials/FeaturedBlogs';
// Force dynamic rendering (SSR)
export const dynamic = 'force-dynamic';
export default async function Home() {
  // دریافت مقالات و دسته‌بندی‌ها
  const [blogs, categories] = await Promise.all([
    getBlogsService(),
    getCategoriesService()
  ]);
  
  // نمایش فقط 6 مقاله اول
  const featuredBlogs = blogs.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroBanner />
      <Statistics />
      <Categories categories={categories} />
      <FeaturedBlogs blogs={featuredBlogs} />
    </div>
  );
}
