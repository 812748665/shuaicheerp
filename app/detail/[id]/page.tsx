import Link from "next/link";
import {
  ChevronLeft,
  Share2,
  Heart,
  Car,
  Shield,
  CheckCircle2,
  Calendar,
  Gauge,
  MapPin,
  Fuel,
  Settings,
  Phone,
  MessageCircle,
  ChevronRight,
  Star,
  FileText,
  AlertCircle,
} from "lucide-react";

const carData = {
  id: 1,
  title: "宝马 5系 2022款 530Li 领先型 豪华套装",
  price: 38.8,
  originalPrice: 52.99,
  downPayment: 11.64,
  monthlyPayment: 7800,
  images: [1, 2, 3, 4, 5],
  certified: true,
  specs: [
    { icon: Calendar, label: "上牌时间", value: "2022年6月" },
    { icon: Gauge, label: "表显里程", value: "2.3万公里" },
    { icon: MapPin, label: "所在地", value: "杭州市" },
    { icon: Fuel, label: "燃油类型", value: "汽油" },
    { icon: Settings, label: "变速箱", value: "自动" },
  ],
  tags: ["准新车", "首任车主", "无事故", "原版原漆", "定期保养"],
  highlights: [
    "新车指导价52.99万，现仅售38.8万",
    "全车原版原漆，无任何事故",
    "首任车主，全程4S店保养",
    "配置丰富：全景天窗、座椅加热、HUD抬头显示",
  ],
  inspectionItems: [
    { label: "外观检测", status: "通过", count: 42 },
    { label: "内饰检测", status: "通过", count: 35 },
    { label: "机械检测", status: "通过", count: 68 },
    { label: "电子设备", status: "通过", count: 24 },
  ],
  dealer: {
    name: "帅车严选·杭州旗舰店",
    rating: 4.9,
    reviews: 328,
    certified: true,
    avatar: "SC",
  },
};

export default function DetailPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-b from-foreground/50 to-transparent">
        <div className="flex items-center justify-between px-4 pt-12 pb-4">
          <Link
            href="/list"
            className="w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </Link>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center">
              <Share2 className="w-5 h-5 text-foreground" />
            </button>
            <button className="w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center">
              <Heart className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Image Gallery */}
      <div className="relative">
        <div className="aspect-[4/3] bg-gradient-to-br from-muted to-border flex items-center justify-center">
          <Car className="w-24 h-24 text-muted-foreground/30" />
        </div>
        {carData.certified && (
          <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5">
            <Shield className="w-4 h-4" />
            帅车严选认证
          </div>
        )}
        <div className="absolute bottom-4 right-4 bg-foreground/60 text-card text-xs px-2.5 py-1 rounded-full">
          1 / {carData.images.length}
        </div>
      </div>

      {/* Price Section */}
      <section className="bg-card px-4 py-4">
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-2xl font-bold text-danger">{carData.price}</span>
          <span className="text-sm text-danger">万</span>
          <span className="text-sm text-muted-foreground line-through ml-2">
            新车{carData.originalPrice}万
          </span>
        </div>
        <h1 className="text-base font-medium text-foreground leading-relaxed mb-3">
          {carData.title}
        </h1>
        <div className="flex items-center gap-2 flex-wrap">
          {carData.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-primary-light text-primary rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Finance Options */}
      <section className="bg-card mt-2 px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <div className="text-xs text-muted-foreground mb-1">首付低至</div>
              <div className="text-base font-bold text-foreground">
                {carData.downPayment}万
              </div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="text-xs text-muted-foreground mb-1">月供低至</div>
              <div className="text-base font-bold text-foreground">
                {carData.monthlyPayment}元
              </div>
            </div>
          </div>
          <button className="text-sm text-primary flex items-center">
            计算分期
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Specs */}
      <section className="bg-card mt-2 px-4 py-4">
        <div className="grid grid-cols-3 gap-4">
          {carData.specs.slice(0, 3).map((spec) => (
            <div key={spec.label} className="text-center">
              <spec.icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
              <div className="text-xs text-muted-foreground mb-0.5">
                {spec.label}
              </div>
              <div className="text-sm font-medium text-foreground">
                {spec.value}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-border">
          {carData.specs.slice(3).map((spec) => (
            <div key={spec.label} className="flex items-center gap-2">
              <spec.icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{spec.label}</span>
              <span className="text-sm text-foreground">{spec.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Inspection Report */}
      <section className="bg-card mt-2 px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            <h2 className="text-base font-bold text-foreground">检测报告</h2>
            <span className="bg-success/10 text-success text-[10px] px-2 py-0.5 rounded-full">
              169项全部通过
            </span>
          </div>
          <button className="text-xs text-primary flex items-center">
            查看详情
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {carData.inspectionItems.map((item) => (
            <div
              key={item.label}
              className="bg-muted rounded-lg p-3 text-center"
            >
              <CheckCircle2 className="w-5 h-5 text-success mx-auto mb-1" />
              <div className="text-xs text-foreground font-medium">
                {item.label}
              </div>
              <div className="text-[10px] text-muted-foreground">
                {item.count}项通过
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-card mt-2 px-4 py-4">
        <h2 className="text-base font-bold text-foreground mb-3">车辆亮点</h2>
        <div className="space-y-2">
          {carData.highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground leading-relaxed">
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="bg-card mt-2 px-4 py-4">
        <h2 className="text-base font-bold text-foreground mb-3">服务保障</h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-primary-light rounded-lg p-3 text-center">
            <Shield className="w-6 h-6 text-primary mx-auto mb-1.5" />
            <div className="text-xs font-medium text-foreground">7天无理由</div>
            <div className="text-[10px] text-muted-foreground">退车保障</div>
          </div>
          <div className="bg-primary-light rounded-lg p-3 text-center">
            <AlertCircle className="w-6 h-6 text-primary mx-auto mb-1.5" />
            <div className="text-xs font-medium text-foreground">重大事故</div>
            <div className="text-[10px] text-muted-foreground">全额退款</div>
          </div>
          <div className="bg-primary-light rounded-lg p-3 text-center">
            <Star className="w-6 h-6 text-primary mx-auto mb-1.5" />
            <div className="text-xs font-medium text-foreground">1年质保</div>
            <div className="text-[10px] text-muted-foreground">延长保修</div>
          </div>
        </div>
      </section>

      {/* Dealer Info */}
      <section className="bg-card mt-2 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">
              {carData.dealer.avatar}
            </span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium text-foreground">
                {carData.dealer.name}
              </h3>
              {carData.dealer.certified && (
                <span className="bg-primary text-primary-foreground text-[10px] px-1.5 py-0.5 rounded">
                  认证
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-0.5">
                <Star className="w-3 h-3 text-primary fill-primary" />
                <span className="text-xs text-foreground font-medium">
                  {carData.dealer.rating}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                {carData.dealer.reviews}条评价
              </span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </div>
      </section>

      <div className="h-4" />

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-3 safe-bottom">
        <div className="flex items-center gap-3">
          <button className="flex flex-col items-center gap-0.5 px-3">
            <Phone className="w-5 h-5 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">电话</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 px-3">
            <MessageCircle className="w-5 h-5 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">咨询</span>
          </button>
          <button className="flex-1 bg-primary text-primary-foreground py-3 rounded-xl font-medium text-sm">
            预约看车
          </button>
          <button className="flex-1 bg-danger text-card py-3 rounded-xl font-medium text-sm">
            立即购买
          </button>
        </div>
      </div>
    </div>
  );
}
