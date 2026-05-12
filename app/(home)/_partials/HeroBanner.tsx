import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <Image
        src="/assets/images/Blog-banner.jpg"
        alt="بنر وبلاگ"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/35 bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            وبلاگ من
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
            مرجع مقالات تخصصی در زمینه‌های مختلف
          </p>
        </div>
      </div>
    </section>
  );
} 