
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background with Syrian-inspired pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-syria-sand/40 to-white z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://img.freepik.com/premium-vector/arabesque-pattern-seamless-arabic-geometric-pattern-background_8580-1014.jpg')] bg-repeat bg-[length:400px_400px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-1 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            ابحث عن السيارة المثالية في <span className="text-syria-terracotta">سوريا</span>
          </h1>
          <p className="subtitle mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            تصفح آلاف السيارات من الوكلاء الموثوقين والبائعين في جميع أنحاء سوريا، كل ذلك في مكان واحد.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <Link to="/car-listings" className="button-primary">
              تصفح السيارات
            </Link>
            <Link to="/know-your-needs" className="inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground hover:text-syria-terracotta transition-colors">
              <span>اعرف احتياجاتك</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="glass-card p-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-xl font-medium mb-4">بحث سريع</h2>
            <form className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative">
                <select className="w-full bg-white border border-input rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all">
                  <option value="">جميع الماركات</option>
                  <option value="toyota">تويوتا</option>
                  <option value="honda">هوندا</option>
                  <option value="bmw">بي إم دبليو</option>
                  <option value="mercedes">مرسيدس</option>
                  <option value="kia">كيا</option>
                </select>
              </div>
              <div className="relative">
                <select className="w-full bg-white border border-input rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all">
                  <option value="">نطاق السعر</option>
                  <option value="5000">أقل من 5,000$</option>
                  <option value="10000">أقل من 10,000$</option>
                  <option value="20000">أقل من 20,000$</option>
                  <option value="30000">أقل من 30,000$</option>
                </select>
              </div>
              <button className="bg-primary text-white rounded-md py-2 px-4 text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                <Search size={16} />
                <span>بحث</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
