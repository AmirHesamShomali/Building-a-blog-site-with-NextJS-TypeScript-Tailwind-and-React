import Link from 'next/link';
import { 
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { Cattegory } from '@/types/category';

interface FooterProps {
  categories: Cattegory[];
}

export default function Footer({ categories }: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* درباره وبلاگ */}
          <div>
            <h3 className="text-xl font-bold mb-4">وبلاگ من</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              مرجع تخصصی مقالات در زمینه‌های مختلف تکنولوژی، کسب و کار، سلامت و موضوعات متنوع دیگر. هدف ما ارائه محتوای باکیفیت و مفید برای شماست.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* لینک‌های مفید */}
          <div>
            <h3 className="text-xl font-bold mb-4">لینک‌های مفید</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-white transition-colors text-sm">
                  همه مقالات
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-gray-300 hover:text-white transition-colors text-sm">
                  جستجو و فیلتر
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* دسته‌بندی‌ها */}
          <div>
            <h3 className="text-xl font-bold mb-4">دسته‌بندی‌ها</h3>
            <ul className="space-y-2">
              {categories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/category/${category.id}`} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* اطلاعات تماس */}
          <div>
            <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <span className="text-gray-300 text-sm">info@myblog.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400" />
                <span className="text-gray-300 text-sm">021-12345678</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="text-gray-300 text-sm">تهران، ایران</span>
              </div>
            </div>
          </div>
        </div>

        {/* خط جداکننده و کپی‌رایت */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 وبلاگ من. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
} 