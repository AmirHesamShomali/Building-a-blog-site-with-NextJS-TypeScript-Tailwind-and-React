'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  FaHome, 
  FaSearch, 
  FaInfoCircle, 
  FaPhone, 
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaUser,
  FaSignInAlt,
  FaSignOutAlt
} from 'react-icons/fa';
import { useAuth } from '@/contexts/AuthContext';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, logout, isLoading } = useAuth();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeSidebar();
  };

  return (
    <>
      {/* نوبار */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* لوگو */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                وبلاگ من
              </Link>
            </div>

            {/* منوی دسکتاپ */}
            <div className="hidden md:flex gap-5 items-center">
              <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                <FaHome />
                صفحه اصلی
              </Link>
              <Link href="/search" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                <FaSearch />
                جستجو و فیلتر
              </Link>
              <Link href="/about" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                <FaInfoCircle />
                درباره ما
              </Link>
              <Link href="/contact" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                <FaPhone />
                تماس با ما
              </Link>
              
              {/* بخش احراز هویت */}
              {!isLoading && (
                <div className="flex items-center gap-3 mr-4 pr-4 border-r border-gray-200">
                  {user ? (
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 text-gray-700">
                        <FaUser className="text-blue-600" />
                        <span className="font-medium">{user.username}</span>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
                      >
                        <FaSignOutAlt />
                        خروج
                      </button>
                    </div>
                  ) : (
                    <Link 
                      href="/auth/login" 
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <FaSignInAlt />
                      ورود
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* دکمه همبرگر موبایل */}
            <div className="md:hidden">
              <button 
                onClick={toggleSidebar}
                className="text-gray-700 hover:text-blue-600 transition-colors p-2"
              >
                <FaBars className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* اورلی سایدبار */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 bg-opacity-50 z-50 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* سایدبار موبایل */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* هدر سایدبار */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-blue-600">منوی اصلی</h2>
          <button 
            onClick={closeSidebar}
            className="text-gray-500 hover:text-gray-700 transition-colors p-2"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* آیتم‌های منو */}
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link 
                href="/" 
                onClick={closeSidebar}
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200"
              >
                <FaHome className="text-lg" />
                <span className="font-medium">صفحه اصلی</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/search" 
                onClick={closeSidebar}
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200"
              >
                <FaSearch className="text-lg" />
                <span className="font-medium">جستجو و فیلتر</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                onClick={closeSidebar}
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200"
              >
                <FaInfoCircle className="text-lg" />
                <span className="font-medium">درباره ما</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={closeSidebar}
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200"
              >
                <FaPhone className="text-lg" />
                <span className="font-medium">تماس با ما</span>
              </Link>
            </li>
            
            {/* بخش احراز هویت در سایدبار */}
            {!isLoading && (
              <>
                <li className="border-t border-gray-200 pt-4 mt-4">
                  {user ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-gray-700 p-3 bg-blue-50 rounded-lg">
                        <FaUser className="text-blue-600 text-lg" />
                        <span className="font-medium">{user.username}</span>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 text-gray-700 hover:text-red-600 hover:bg-red-50 p-3 rounded-lg transition-all duration-200"
                      >
                        <FaSignOutAlt className="text-lg" />
                        <span className="font-medium">خروج</span>
                      </button>
                    </div>
                  ) : (
                    <Link 
                      href="/auth/login" 
                      onClick={closeSidebar}
                      className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200"
                    >
                      <FaSignInAlt className="text-lg" />
                      <span className="font-medium">ورود</span>
                    </Link>
                  )}
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* فوتر سایدبار */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">وبلاگ من</p>
            <div className="flex justify-center space-x-4 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 