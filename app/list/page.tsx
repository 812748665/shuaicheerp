import Link from "next/link";
import {
  Search,
  ChevronLeft,
  SlidersHorizontal,
  ChevronDown,
  Car,
  Shield,
  Heart,
  Home,
  Grid3X3,
  User,
} from "lucide-react";

const filters = [
  { label: "品牌", active: false },
  { label: "价格", active: false },
  { label: "车龄", active: false },
  { label: "筛选", active: false, icon: SlidersHorizontal },
];

const sortOptions = [
  { label: "综合排序", active: true },
  { label: "价格最低", active: false },
  { label: "里程最少", active: false },
  { label: "最新上架", active: false },
];

const cars = [
  {
    id: 1,
    title: "宝马 5系 2022款 530Li 领先型",
    subtitle: "豪华商务座驾，品质之选",
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
    subtitle: "运动外观，动感十足",
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
    subtitle: "科技豪华，驾驭从容",
    price: 42.9,
    originalPrice: 56.68,
    year: "2023年",
    mileage: "0.8万公里",
    location: "上海",
    tags: ["准新车", "官方认证"],
    certified: true,
  },
  {
    id: 4,
    title: "特斯拉 Model 3 2023款 长续航版",
    subtitle: "纯电出行，绿色环保",
    price: 24.9,
    originalPrice: 29.99,
    year: "2023年",
    mileage: "1.2万公里",
    location: "杭州",
    tags: ["新能源", "自动驾驶"],
    certified: true,
  },
  {
    id: 5,
    title: "保时捷 Cayenne 2022款 3.0T",
    subtitle: "跑车基因，SUV身段",
    price: 89.9,
    originalPrice: 102.8,
    year: "2022年",
    mileage: "2.1万公里",
    location: "杭州",
    tags: ["豪华SUV", "准新车"],
    certified: true,
  },
  {
    id: 6,
    title: "丰田 凯美瑞 2022款 2.5G 豪华版",
    subtitle: "可靠省心，家用首选",
    price: 18.8,
    originalPrice: 23.98,
    year: "2022年",
    mileage: "3.5万公里",
    location: "宁波",
    tags: ["省油", "保值率高"],
    certified: false,
  },
];

export default function ListPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card sticky top-0 z-20 border-b border-border">
        <div className="flex items-center gap-3 px-4 pt-12 pb-3">
          <Link href="/" className="p-1">
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </Link>
          <div className="flex-1 bg-muted rounded-full px-4 py-2.5 flex items-center gap-2">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索品牌、车系"
              className="bg-transparent text-sm flex-1 outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 px-4 py-3 overflow-x-auto">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                filter.active
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground"
              }`}
            >
              {filter.icon && <filter.icon className="w-4 h-4" />}
              {filter.label}
              {!filter.icon && <ChevronDown className="w-3 h-3" />}
            </button>
          ))}
        </div>
      </header>

      {/* Sort Bar */}
      <div className="bg-card px-4 py-2 flex items-center gap-4 border-b border-border">
        {sortOptions.map((option, index) => (
          <button
            key={index}
            className={`text-sm ${
              option.active
                ? "text-primary font-medium"
                : "text-muted-foreground"
            }`}
          >
            {option.label}
          </button>
        ))}
        <div className="flex-1" />
        <span className="text-xs text-muted-foreground">共 {cars.length} 辆</span>
      </div>

      {/* Car List */}
      <div className="p-4 space-y-4">
        {cars.map((car) => (
          <Link key={car.id} href={`/detail/${car.id}`} className="block">
            <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex">
                {/* Car Image */}
                <div className="relative w-36 h-28 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted to-border flex items-center justify-center">
                    <Car className="w-12 h-12 text-muted-foreground/30" />
                  </div>
                  {car.certified && (
                    <div className="absolute bottom-2 left-2 bg-primary text-primary-foreground text-[8px] px-1.5 py-0.5 rounded font-medium flex items-center gap-0.5">
                      <Shield className="w-2.5 h-2.5" />
                      严选
                    </div>
                  )}
                </div>

                {/* Car Info */}
                <div className="flex-1 p-3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-foreground line-clamp-1 mb-1">
                      {car.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-1 mb-2">
                      {car.subtitle}
                    </p>
                    <div className="flex items-center gap-1.5">
                      {car.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-1.5 py-0.5 bg-primary-light text-primary rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                      <span>{car.year}</span>
                      <span>|</span>
                      <span>{car.mileage}</span>
                      <span>|</span>
                      <span>{car.location}</span>
                    </div>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="p-3 flex flex-col items-end justify-between">
                  <button className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                    <Heart className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <div className="text-right">
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-base font-bold text-danger">
                        {car.price}
                      </span>
                      <span className="text-[10px] text-danger">万</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground line-through">
                      {car.originalPrice}万
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More */}
      <div className="px-4 pb-4">
        <button className="w-full py-3 bg-card rounded-xl text-sm text-muted-foreground border border-border">
          加载更多车源
        </button>
      </div>

      {/* Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border safe-bottom">
        <div className="flex items-center justify-around py-2">
          <Link href="/" className="flex flex-col items-center gap-1 py-1">
            <Home className="w-5 h-5 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">首页</span>
          </Link>
          <Link href="/list" className="flex flex-col items-center gap-1 py-1">
            <Grid3X3 className="w-5 h-5 text-primary" />
            <span className="text-[10px] text-primary font-medium">车源</span>
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
