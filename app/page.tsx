import Link from "next/link";
import {
  Search,
  MapPin,
  ChevronRight,
  Car,
  Truck,
  Zap,
  Shield,
  Heart,
  Home,
  Grid3X3,
  User,
} from "lucide-react";

// 模拟数据
const brands = [
  { name: "宝马", logo: "BMW" },
  { name: "奔驰", logo: "BENZ" },
  { name: "奥迪", logo: "AUDI" },
  { name: "大众", logo: "VW" },
  { name: "丰田", logo: "TOYOTA" },
  { name: "本田", logo: "HONDA" },
  { name: "日产", logo: "NISSAN" },
  { name: "更多", logo: "+" },
];

const categories = [
  { name: "轿车", icon: Car, count: "2,340" },
  { name: "SUV", icon: Truck, count: "1,856" },
  { name: "新能源", icon: Zap, count: "892" },
  { name: "认证车", icon: Shield, count: "1,234" },
];

const featuredCars = [
  {
    id: 1,
    title: "宝马 5系 2022款 530Li 领先型",
    price: 38.8,
    originalPrice: 52.99,
    year: "2022年",
    mileage: "2.3万公里",
    location: "杭州",
    tags: ["准新车", "首任车主"],
    certified: true,
  },
  {
    id: 2,
    title: "奔驰 E级 2021款 E300L 运动版",
    price: 35.5,
    originalPrice: 49.98,
    year: "2021年",
    mileage: "3.8万公里",
    location: "杭州",
    tags: ["无事故", "原版原漆"],
    certified: true,
  },
  {
    id: 3,
    title: "奥迪 A6L 2023款 45TFSI 臻选版",
    price: 42.9,
    originalPrice: 56.68,
    year: "2023年",
    mileage: "0.8万公里",
    location: "上海",
    tags: ["准新车", "官方认证"],
    certified: true,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-primary px-4 pt-12 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-primary-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">杭州</span>
            <ChevronRight className="w-4 h-4" />
          </div>
          <h1 className="text-lg font-bold text-primary-foreground">帅车严选</h1>
          <div className="w-16" />
        </div>

        {/* Search Bar */}
        <Link href="/list" className="block">
          <div className="bg-card rounded-full px-4 py-3 flex items-center gap-3 shadow-sm">
            <Search className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground text-sm">搜索品牌、车系</span>
          </div>
        </Link>
      </header>

      {/* Quick Categories */}
      <section className="bg-card mx-4 -mt-2 rounded-xl p-4 shadow-sm relative z-10">
        <div className="grid grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href="/list"
              className="flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs text-foreground font-medium">
                {category.name}
              </span>
              <span className="text-[10px] text-muted-foreground">
                {category.count}辆
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Section */}
      <section className="mt-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-foreground">热门品牌</h2>
          <Link
            href="/list"
            className="text-xs text-muted-foreground flex items-center"
          >
            全部品牌
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href="/list"
              className="bg-card rounded-lg p-3 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <span className="text-[10px] font-bold text-muted-foreground">
                  {brand.logo}
                </span>
              </div>
              <span className="text-xs text-foreground">{brand.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="mt-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-foreground">严选好车</h2>
            <span className="bg-primary text-primary-foreground text-[10px] px-2 py-0.5 rounded-full font-medium">
              官方认证
            </span>
          </div>
          <Link
            href="/list"
            className="text-xs text-muted-foreground flex items-center"
          >
            查看更多
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-4">
          {featuredCars.map((car) => (
            <Link key={car.id} href={`/detail/${car.id}`} className="block">
              <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <div className="aspect-[16/10] bg-gradient-to-br from-muted to-border flex items-center justify-center">
                    <Car className="w-16 h-16 text-muted-foreground/30" />
                  </div>
                  {car.certified && (
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] px-2 py-1 rounded-md font-medium flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      严选认证
                    </div>
                  )}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-foreground line-clamp-1 mb-2">
                    {car.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    {car.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 bg-primary-light text-primary rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span>{car.year}</span>
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span>{car.mileage}</span>
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span>{car.location}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-danger">
                        {car.price}
                      </span>
                      <span className="text-xs text-danger">万</span>
                    </div>
                    <span className="text-xs text-muted-foreground line-through">
                      新车{car.originalPrice}万
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="mt-6 mx-4 bg-gradient-to-r from-primary to-primary-dark rounded-xl p-4 text-primary-foreground">
        <div className="flex items-center justify-around">
          <div className="text-center">
            <div className="text-2xl font-bold">5,000+</div>
            <div className="text-xs opacity-80">在售车源</div>
          </div>
          <div className="w-px h-10 bg-primary-foreground/20" />
          <div className="text-center">
            <div className="text-2xl font-bold">200+</div>
            <div className="text-xs opacity-80">认证商家</div>
          </div>
          <div className="w-px h-10 bg-primary-foreground/20" />
          <div className="text-center">
            <div className="text-2xl font-bold">98%</div>
            <div className="text-xs opacity-80">好评率</div>
          </div>
        </div>
      </section>

      <div className="h-8" />

      {/* Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border safe-bottom">
        <div className="flex items-center justify-around py-2">
          <Link href="/" className="flex flex-col items-center gap-1 py-1">
            <Home className="w-5 h-5 text-primary" />
            <span className="text-[10px] text-primary font-medium">首页</span>
          </Link>
          <Link href="/list" className="flex flex-col items-center gap-1 py-1">
            <Grid3X3 className="w-5 h-5 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">车源</span>
          </Link>
          <Link href="/list" className="flex flex-col items-center gap-1 py-1">
            <Heart className="w-5 h-5 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">收藏</span>
          </Link>
          <Link href="/list" className="flex flex-col items-center gap-1 py-1">
            <User className="w-5 h-5 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">我的</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
