export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Dịch vụ", href: "#services" },
  { label: "Gói dịch vụ", href: "#packages" },
  { label: "Academy", href: "#academy" },
  { label: "Giải pháp", href: "#solutions" },
  { label: "Liên hệ", href: "#contact" },
];

export const heroTags: string[] = [
  "Digital Transformation",
  "Enterprise Architecture",
  "PMO & Project Excellence",
  "AI for Business",
  "Omnichannel & CX",
  "Corporate Training",
];

export const heroHighlights = [
  { title: "Strategy", desc: "Chọn đúng bài toán" },
  { title: "Architecture", desc: "Thiết kế đúng cấu trúc" },
  { title: "Execution", desc: "Đưa vào thực tế" },
];

export type Capability = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
};

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "Transformation Consulting",
    description:
      "Chiến lược chuyển đổi số, mô hình vận hành và roadmap ưu tiên theo giá trị kinh doanh.",
    bullets: [
      "Digital maturity assessment",
      "IT strategy & transformation roadmap",
      "CIO / executive advisory",
      "Operating model design",
    ],
  },
  {
    number: "02",
    title: "Enterprise Architecture",
    description:
      "Kiến trúc hóa từ Business → Process → Data → Application → Integration → Technology.",
    bullets: [
      "Enterprise Architecture blueprint",
      "Solution & integration architecture",
      "API / platform landscape",
      "Technology selection",
    ],
  },
  {
    number: "03",
    title: "PMO & Project Excellence",
    description:
      "Thiết lập governance để dự án minh bạch, ra quyết định nhanh và kiểm soát được vendor.",
    bullets: [
      "PMO setup / PMO as a Service",
      "Project health check & rescue",
      "Program / vendor management",
      "KPI, risk & executive reporting",
    ],
  },
  {
    number: "04",
    title: "AI & Intelligent Enterprise",
    description:
      "Đưa AI vào doanh nghiệp có chiến lược, có use case, có governance và có khả năng đo hiệu quả.",
    bullets: [
      "AI readiness assessment",
      "Use-case discovery workshop",
      "Enterprise AI roadmap",
      "AI agent / knowledge AI advisory",
    ],
  },
  {
    number: "05",
    title: "Omnichannel & Customer Experience",
    description:
      "Thiết kế trải nghiệm xuyên suốt giữa CRM, Contact Center, web/app, loyalty, data và AI.",
    bullets: [
      "Customer journey & CX blueprint",
      "CRM / omnichannel architecture",
      "Vendor selection",
      "Implementation governance",
    ],
  },
  {
    number: "06",
    title: "ERP & Enterprise Systems",
    description:
      "Đứng về phía khách hàng để làm rõ nhu cầu, chọn giải pháp và quản trị triển khai ERP hiệu quả.",
    bullets: [
      "ERP readiness & process mapping",
      "RFP / vendor evaluation",
      "Implementation PMO",
      "UAT & go-live readiness",
    ],
  },
];

export type Package = {
  duration: string;
  title: string;
  description: string;
  tags: string[];
};

export const packages: Package[] = [
  {
    duration: "2–4 tuần",
    title: "Digital & AI Readiness Sprint",
    description: "Dành cho SME / doanh nghiệp chưa biết bắt đầu chuyển đổi từ đâu.",
    tags: ["Current-state assessment", "Top pain points", "Priority AI use cases", "Transformation roadmap"],
  },
  {
    duration: "8–12 tuần",
    title: "PMO Setup Sprint",
    description: "Cho doanh nghiệp có nhiều dự án nhưng thiếu governance và reporting thống nhất.",
    tags: ["PMO operating model", "Governance & templates", "KPI / risk dashboard", "Executive reporting cadence"],
  },
  {
    duration: "Theo phạm vi",
    title: "OmniX Blueprint",
    description: "Cho doanh nghiệp muốn hợp nhất hành trình khách hàng và hệ sinh thái kênh.",
    tags: ["Customer journey map", "Target architecture"],
  },
  {
    duration: "Theo tháng",
    title: "Executive Technology Advisory",
    description: "Cố vấn công nghệ định kỳ cho SME / doanh nghiệp chưa cần CIO full-time.",
    tags: ["Monthly advisory", "Vendor / solution review"],
  },
];

export const solutionPillars = [
  { index: "01", label: "CUSTOMER ENGAGEMENT", title: "Omnichannel & CX" },
  { index: "02", label: "DATA INTELLIGENCE", title: "Data & BI" },
  { index: "03", label: "ENTERPRISE AI", title: "AI Solutions" },
];

export const academyPrograms = [
  {
    tag: "ENTERPRISE",
    title: "AI for Executives & Managers",
    description: "Từ nhận thức đến use case và roadmap ứng dụng.",
  },
  {
    tag: "SME",
    title: "SME Digital Bootcamp",
    description: "Strategy → Process → AI → CRM → KPI.",
  },
  {
    tag: "UNIVERSITY",
    title: "AI & Digital Career Readiness",
    description: "Job-ready skills, project và roadmap nghề nghiệp.",
  },
  {
    tag: "ENTERPRISE",
    title: "PMO & Project Excellence",
    description: "Governance, rủi ro và KPI theo dõi danh mục dự án.",
  },
];

export const academyTags = [
  "AI for Executives",
  "PMO Masterclass",
  "Business Analysis",
  "Digital Transformation",
  "Enterprise Architecture",
];

export const audiences = [
  { title: "Enterprise", desc: "Kiến trúc / AI / PMO / ERP" },
  { title: "SME & Growth Companies", desc: "Transformation / AI / advisory" },
  { title: "Education & Universities", desc: "Academy / industry programs" },
  { title: "Enterprise Partners", desc: "Omnichannel / ERP / solution ecosystem" },
];

export const workSteps = [
  { title: "ASSESS", desc: "Hiểu đúng hiện trạng" },
  { title: "ARCHITECT", desc: "Thiết kế đúng cấu trúc" },
  { title: "SELECT", desc: "Chọn đúng giải pháp" },
  { title: "TRANSFORM", desc: "Triển khai có governance" },
  { title: "OPERATE", desc: "Đo lường & tối ưu" },
  { title: "ENABLE", desc: "Đào tạo & chuyển giao" },
];

export const leadership = {
  role: "BUSINESS DEVELOPMENT & PARTNERSHIPS DIRECTOR",
  name: "Nguyễn Thị Thanh Vy",
  focus: "Strategy • Technology • Academy • Partnerships",
  email: "it@litada.com",
  website: "litada.com",
  location: "TP. Hồ Chí Minh, Việt Nam",
  summary:
    "Phụ trách phát triển khách hàng, đối tác và các chương trình hợp tác của LITADA; tập trung vào chuyển đổi số, PMO, Enterprise Architecture, AI, Omnichannel và đào tạo doanh nghiệp/trường học.",
  tags: [
    "Digital Transformation",
    "Project / PMO",
    "Enterprise Architecture",
    "AI for Business",
    "Omnichannel",
    "Corporate Training",
  ],
  expertNetworkNote:
    "Khi dự án cần năng lực chuyên sâu, LITADA huy động chuyên gia/đối tác phù hợp về CRM, Omnichannel, ERP, Data/AI, Cloud, Integration, Security và Training — dưới một mô hình quản trị thống nhất.",
};
