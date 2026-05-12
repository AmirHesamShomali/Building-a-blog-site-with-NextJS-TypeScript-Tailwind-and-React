'use client';

import { useAuth } from '@/contexts/AuthContext';
import { usePathname } from 'next/navigation';
import Loading from '@/components/Loading';
import Navbar from './(home)/_partials/Navbar';
import Footer from './(home)/_partials/Footer';
import { Cattegory } from '@/types/category';

interface LayoutContentProps {
  children: React.ReactNode;
  categories: Cattegory[];
}

export default function LayoutContent({ children, categories }: LayoutContentProps) {
  const { isLoading } = useAuth();
  const pathname = usePathname();
  
  // بررسی اینکه آیا در صفحات احراز هویت هستیم
  const isAuthPage = pathname?.startsWith('/auth');

  if (isLoading && !isAuthPage) {
    return <Loading />;
  }

  // اگر در صفحات احراز هویت هستیم، فقط children را نمایش دهیم
  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer categories={categories} />
    </>
  );
} 