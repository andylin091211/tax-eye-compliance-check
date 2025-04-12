
// Common types used throughout the application

export type VerificationStatus = "未核销" | "已核销" | "部分核销" | "异常";

export interface FourFlowItem {
  id: string;
  fourFlowCode: string; // 四流核销码
  status: VerificationStatus;
  created: string;
  lastUpdated: string;
  amount: number;
  verifiedAmount: number;
  differenceAmount: number;
  differenceReason: string;
}

export interface SalesOrder extends FourFlowItem {
  orderNumber: string;
  customerName: string;
  orderDate: string;
  orderTotal: number;
  orderStatus: "待发货" | "已发货" | "已完成" | "已取消";
}

export interface Invoice extends FourFlowItem {
  invoiceNumber: string;
  invoiceDate: string;
  invoiceTotal: number;
  invoiceType: "增值税专用发票" | "增值税普通发票" | "电子发票" | "其他";
}

export interface Payment extends FourFlowItem {
  bankTransactionId: string;
  paymentDate: string;
  paymentMethod: "银行转账" | "现金" | "支票" | "其他";
  paymentDirection: "收" | "支";
  balance: number;
}

export interface Shipment extends FourFlowItem {
  shipmentNumber: string;
  shipmentDate: string;
  shipmentType: "发货" | "收货";
  shipmentStatus: "待处理" | "已发出" | "已接收" | "已取消";
}

export interface ExpenseReport extends FourFlowItem {
  reportNumber: string;
  reportDate: string;
  expenseCategory: string;
  approvalStatus: "待审批" | "已审批" | "已拒绝";
}

export interface Purchase extends FourFlowItem {
  purchaseNumber: string;
  vendorName: string;
  purchaseDate: string;
  purchaseTotal: number;
  purchaseStatus: "待收货" | "部分收货" | "已完成" | "已取消";
}

export interface RiskItem {
  id: string;
  fourFlowCode: string;
  riskLevel: "高" | "中" | "低";
  riskType: string;
  description: string;
  created: string;
  status: "未处理" | "处理中" | "已解决" | "已关闭";
}

export interface DataSummary {
  totalTransactions: number;
  verifiedTransactions: number;
  pendingVerification: number;
  abnormalTransactions: number;
  totalRisks: number;
  highRisks: number;
  mediumRisks: number;
  lowRisks: number;
}
