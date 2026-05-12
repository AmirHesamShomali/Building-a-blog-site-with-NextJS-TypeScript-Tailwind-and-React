import { 
  FaNewspaper, 
  FaUsers, 
  FaEye, 
  FaHeart 
} from 'react-icons/fa';

export default function Statistics() {
  const stats = [
    {
      icon: FaNewspaper,
      value: "250+",
      label: "مقاله منتشر شده"
    },
    {
      icon: FaUsers,
      value: "15K+",
      label: "کاربر فعال"
    },
    {
      icon: FaEye,
      value: "500K+",
      label: "بازدید ماهانه"
    },
    {
      icon: FaHeart,
      value: "98%",
      label: "رضایت کاربران"
    }
  ];

  return (
    <section className="bg-blue-200 py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center text-blue-700">
                <div className="flex justify-center mb-3">
                  <IconComponent className="text-4xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1 flex justify-center">
                  {stat.value}
                </h3>
                <p className="text-blue-600 flex justify-center">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 