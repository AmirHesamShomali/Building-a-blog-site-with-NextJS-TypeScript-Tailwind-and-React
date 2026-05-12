import type { Metadata } from "next";
import "./globals.css";
import { getCategoriesService } from "@/services/category";
import { AuthProvider } from "@/contexts/AuthContext";
import LayoutContent from "./LayoutContent";

export const metadata: Metadata = {
  title: "وبلاگ من",
  description: "وبلاگ من، مرجع مقالات تخصصی در زمینه‌های تکنولوژی، کسب و کار، سلامت، گردشگری و موضوعات متنوع دیگر",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // دریافت دسته‌بندی‌ها فقط یک بار برای فوتر
  const categories = await getCategoriesService();

  return (
    <html lang="fa" dir="rtl">
      <body>
        <AuthProvider>
          <LayoutContent categories={categories}>
            {children}
          </LayoutContent>
        </AuthProvider>
      </body>
    </html>
  );
}
