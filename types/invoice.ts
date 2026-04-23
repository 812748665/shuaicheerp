export type InvoiceStatus = 
  | "待开票" 
  | "开票中" 
  | "已开票" 
  | "已作废" 
  | "已红冲" 
  | "已取消";

export type InvoiceSource = "采购发票" | "销售发票";

export type InvoiceType = "反向开票" | "正向开票";

export type InvoiceCategory = "增值税专用发票" | "增值税普通发票" | "电子发票";

export type BillingPartyType = "经营单位" | "个人";

export type DeliveryMethod = "不推送" | "邮箱推送" | "短信推送";

export interface Invoice {
  id: string;
  applicationNumber: string; // 发票申请编号
  stockNumber: string; // 库存号
  source: InvoiceSource; // 发票来源
  amount: number; // 开票金额
  taxRate: string; // 税率
  invoiceType: InvoiceType; // 发票类型
  invoiceCategory: InvoiceCategory; // 发票类别
  billingPartyType: BillingPartyType; // 开票方类型
  registrationNumber: string; // 登记证号
  licensePlate: string; // 车牌号
  vin: string; // VIN码
  vehicleType: string; // 车辆类型
  transferLocation: string; // 转入地车管所
  brandModel: string; // 品牌车型
  taxNumber: string; // 税盘号
  sellerTaxNumber: string; // 卖方税号
  deliveryMethod: DeliveryMethod; // 推送方式
  deliveryEmail?: string; // 推送邮箱
  deliveryPhone?: string; // 推送手机
  
  // 买方信息
  buyerName: string;
  buyerIdNumber: string; // 身份证号码/税号
  buyerAddress: string;
  buyerPhone: string;
  
  // 卖方信息
  sellerName: string;
  sellerAddress: string;
  sellerIdNumber: string; // 身份证号码/税号
  sellerPhone: string;
  
  // 发票图片
  invoiceImages?: string[];
  
  // 状态信息
  status: InvoiceStatus;
  createdAt: string;
  createdBy: string;
  updatedAt?: string;
  
  // 车辆信息
  vehicleInfo: {
    name: string; // 车辆名称 如 "奥迪A4 2011款 豪华款"
    image?: string;
  };
  
  // 交易方名称（根据发票来源不同显示）
  partyName: string; // 买方名称或卖方名称
  partyLabel: "买方" | "卖方";
  tradingCompany: string; // 交易方公司
}

// 模拟数据
export const mockInvoices: Invoice[] = [
  {
    id: "1",
    applicationNumber: "V000111111111111",
    stockNumber: "544545445",
    source: "采购发票",
    amount: 80000,
    taxRate: "2025-10-30 00:00:00",
    invoiceType: "反向开票",
    invoiceCategory: "增值税专用发票",
    billingPartyType: "经营单位",
    registrationNumber: "",
    licensePlate: "浙A89X2R",
    vin: "SALWA2BU4NA217578",
    vehicleType: "小型越野客车",
    transferLocation: "",
    brandModel: "路虎SALWA2BU",
    taxNumber: "91330114MA8GFFNU0R",
    sellerTaxNumber: "",
    deliveryMethod: "不推送",
    buyerName: "杭州帅车阿东数据科技有限公司",
    buyerIdNumber: "91330114MA8GFFNU0R",
    buyerAddress: "浙江省杭州市钱塘区下沙街道德胜东",
    buyerPhone: "13757617083",
    sellerName: "杭州帅车阿东数据科技有限公司",
    sellerAddress: "浙江省杭州市钱塘区下沙街道德胜东",
    sellerIdNumber: "91330114MA8GFFNU0R",
    sellerPhone: "13757617083",
    status: "待开票",
    createdAt: "2025-10-05 18:25",
    createdBy: "张三",
    vehicleInfo: {
      name: "奥迪A4 2011款 豪华款",
    },
    partyName: "张三",
    partyLabel: "买方",
    tradingCompany: "杭州帅车阿东数据科技有限公司",
  },
  {
    id: "2",
    applicationNumber: "V000111111111112",
    stockNumber: "544545446",
    source: "采购发票",
    amount: 80000,
    taxRate: "2025-10-30 00:00:00",
    invoiceType: "反向开票",
    invoiceCategory: "增值税专用发票",
    billingPartyType: "经营单位",
    registrationNumber: "",
    licensePlate: "浙A89X2R",
    vin: "LHGCM566543037575",
    vehicleType: "小型越野客车",
    transferLocation: "",
    brandModel: "路虎SALWA2BU",
    taxNumber: "91330114MA8GFFNU0R",
    sellerTaxNumber: "",
    deliveryMethod: "不推送",
    buyerName: "杭州帅车阿东数据科技有限公司",
    buyerIdNumber: "91330114MA8GFFNU0R",
    buyerAddress: "浙江省杭州市钱塘区下沙街道德胜东",
    buyerPhone: "13757617083",
    sellerName: "杭州帅车阿东数据科技有限公司",
    sellerAddress: "浙江省杭州市钱塘区下沙街道德胜东",
    sellerIdNumber: "91330114MA8GFFNU0R",
    sellerPhone: "13757617083",
    status: "开票中",
    createdAt: "2025-10-05 18:25",
    createdBy: "张三",
    vehicleInfo: {
      name: "奥迪A4 2011款 豪华款",
    },
    partyName: "张三",
    partyLabel: "买方",
    tradingCompany: "杭州帅车阿东数据科技有限公司",
  },
  {
    id: "3",
    applicationNumber: "V000111111111113",
    stockNumber: "544545447",
    source: "采购发票",
    amount: 80000,
    taxRate: "2025-10-30 00:00:00",
    invoiceType: "反向开票",
    invoiceCategory: "增值税专用发票",
    billingPartyType: "经营单位",
    registrationNumber: "",
    licensePlate: "浙A89X2R",
    vin: "LHGCM566543037575",
    vehicleType: "小型越野客车",
    transferLocation: "",
    brandModel: "路虎SALWA2BU",
    taxNumber: "91330114MA8GFFNU0R",
    sellerTaxNumber: "",
    deliveryMethod: "不推送",
    buyerName: "杭州帅车阿东数据科技有限公司",
    buyerIdNumber: "91330114MA8GFFNU0R",
    buyerAddress: "浙江省杭州市钱塘区下沙街道德胜东",
    buyerPhone: "13757617083",
    sellerName: "杭州帅车阿东数据科技有限公司",
    sellerAddress: "浙江省杭州市钱塘区下沙街道德胜东",
    sellerIdNumber: "91330114MA8GFFNU0R",
    sellerPhone: "13757617083",
    status: "已开票",
    createdAt: "2025-10-05 18:25",
    createdBy: "张三",
    vehicleInfo: {
      name: "奥迪A4 2011款 豪华款",
    },
    partyName: "张三",
    partyLabel: "买方",
    tradingCompany: "杭州帅车阿东数据科技有限公司",
  },
  {
    id: "4",
    applicationNumber: "V000111111111114",
    stockNumber: "544545448",
    source: "采购发票",
    amount: 80000,
    taxRate: "2025-10-30 00:00:00",
    invoiceType: "反向开票",
    invoiceCategory: "增值税专用发票",
    billingPartyType: "经营单位",
    registrationNumber: "",
    licensePlate: "浙A89X2R",
    vin: "LHGCM566543037575",
    vehicleType: "小型越野客车",
    transferLocation: "",
    brandModel: "路虎SALWA2BU",
    taxNumber: "91330114MA8GFFNU0R",
    sellerTaxNumber: "",
    deliveryMethod: "不推送",
    buyerName: "杭州帅车阿东数据科技有限公司",
    buyerIdNumber: "91330114MA8GFFNU0R",
    buyerAddress: "浙江省杭州市钱塘区下沙街道德胜东",
    buyerPhone: "13757617083",
    sellerName: "杭州帅车阿东数据科技有限公司",
    sellerAddress: "浙江省杭州市钱塘区下沙街道德胜东",
    sellerIdNumber: "91330114MA8GFFNU0R",
    sellerPhone: "13757617083",
    status: "已作废",
    createdAt: "2025-10-05 18:25",
    createdBy: "张三",
    vehicleInfo: {
      name: "奥迪A4 2011款 豪华款",
    },
    partyName: "张三",
    partyLabel: "买方",
    tradingCompany: "杭州帅车阿东数据科技有限公司",
  },
  {
    id: "5",
    applicationNumber: "V000111111111115",
    stockNumber: "544545449",
    source: "采购发票",
    amount: 80000,
    taxRate: "2025-10-30 00:00:00",
    invoiceType: "反向开票",
    invoiceCategory: "增值税专用发票",
    billingPartyType: "经营单位",
    registrationNumber: "",
    licensePlate: "浙A89X2R",
    vin: "LHGCM566543037575",
    vehicleType: "小型越野客车",
    transferLocation: "",
    brandModel: "路虎SALWA2BU",
    taxNumber: "91330114MA8GFFNU0R",
    sellerTaxNumber: "",
    deliveryMethod: "不推送",
    buyerName: "杭州帅车阿东数据科技有限公司",
    buyerIdNumber: "91330114MA8GFFNU0R",
    buyerAddress: "浙江省杭州市钱塘区下沙街道德胜东",
    buyerPhone: "13757617083",
    sellerName: "杭州帅车阿东数据科技有限公司",
    sellerAddress: "浙江省杭州市钱塘区下沙街道德胜东",
    sellerIdNumber: "91330114MA8GFFNU0R",
    sellerPhone: "13757617083",
    status: "已红冲",
    createdAt: "2025-10-05 18:25",
    createdBy: "张三",
    vehicleInfo: {
      name: "奥迪A4 2011款 豪华款",
    },
    partyName: "张三",
    partyLabel: "买方",
    tradingCompany: "杭州帅车阿东数据科技有限公司",
  },
  {
    id: "6",
    applicationNumber: "V000111111111116",
    stockNumber: "544545450",
    source: "采购发票",
    amount: 80000,
    taxRate: "2025-10-30 00:00:00",
    invoiceType: "反向开票",
    invoiceCategory: "增值税专用发票",
    billingPartyType: "经营单位",
    registrationNumber: "",
    licensePlate: "浙A89X2R",
    vin: "LHGCM566543037575",
    vehicleType: "小型越野客车",
    transferLocation: "",
    brandModel: "路虎SALWA2BU",
    taxNumber: "91330114MA8GFFNU0R",
    sellerTaxNumber: "",
    deliveryMethod: "不推送",
    buyerName: "杭州帅车阿东数据科技有限公司",
    buyerIdNumber: "91330114MA8GFFNU0R",
    buyerAddress: "浙江省杭州市钱塘区下沙街道德胜东",
    buyerPhone: "13757617083",
    sellerName: "杭州帅车阿东数据科技有限公司",
    sellerAddress: "浙江省杭州市钱塘区下沙街道德胜东",
    sellerIdNumber: "91330114MA8GFFNU0R",
    sellerPhone: "13757617083",
    status: "已取消",
    createdAt: "2025-10-05 18:25",
    createdBy: "张三",
    vehicleInfo: {
      name: "奥迪A4 2011款 豪华款",
    },
    partyName: "张三",
    partyLabel: "买方",
    tradingCompany: "杭州帅车阿东数据科技有限公司",
  },
];

// 销售发票数据
export const mockSalesInvoices: Invoice[] = mockInvoices.map((invoice) => ({
  ...invoice,
  id: `sales-${invoice.id}`,
  source: "销售发票" as InvoiceSource,
  partyLabel: "卖方" as const,
}));
