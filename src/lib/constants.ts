import { CarTaxiFront, ChartNoAxesCombined, ChartPie, House, Search } from "lucide-react";

export const NavbarOptions = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Feature",
    link: "/",
  },
  {
    text: "Review",
    link: "/",
  },
  {
    text: "Pricing",
    link: "/",
  },
];

export const TrustedBrands = [
  {
    name: "demo",
    src: "/assets/svg/trustBrand.svg",
  },
  {
    name: "demo",
    src: "/assets/svg/trustBrand.svg",
  },
  {
    name: "demo",
    src: "/assets/svg/trustBrand.svg",
  },
  {
    name: "demo",
    src: "/assets/svg/trustBrand.svg",
  },
  {
    name: "demo",
    src: "/assets/svg/trustBrand.svg",
  },
  {
    name: "demo",
    src: "/assets/svg/trustBrand.svg",
  },
  {
    name: "demo",
    src: "/assets/svg/trustBrand.svg",
  },
  {
    name: "demo",
    src: "/assets/svg/trustBrand.svg",
  },
];

export const StatsData = [
  {
    head: "10,000+",
    sub: "Businesses Trust Us",
  },
  {
    head: "25,000+",
    sub: "Active Users",
  },
  {
    head: "95%",
    sub: "Customer Satisfaction Rate",
  },
];

export const FeaturesData = [
  {
    image: "/assets/images/feat1.png",
    head: "Detailed Reports and Analytics",
    sub: "Generate detailed reports and analytics to understand your business performance better. Our platform provides you with in-depth insights, helping you identify areas for improvement and growth opportunities.",
    gridSpanTwo: true,
    Textbackground: "",
    backdropFilter: "",
  },
  {
    image: "/assets/images/feat2.png",
    head: "Comprehensive Order Summary",
    sub: "Manage your orders efficiently with our summary feature. Track how many orders you received today and how many have been delivered, ensuring smooth operations and satisfied customers.",
    gridSpanTwo: false,
    Textbackground: "#FFFFFF05",
    backdropFilter: "77px",
  },
  {
    image: "/assets/images/feat3.png",
    head: "Tailored Dashboard Experience",
    sub: "Customize your dashboard to fit your unique business needs. Select and prioritize the metrics that matter most to you, creating a personalized experience that maximizes your efficiency and effectiveness.",
    gridSpanTwo: false,
    Textbackground: "#FFFFFF05",
    backdropFilter: "77px",
  },
  {
    image: "/assets/images/feat4.png",
    head: "Tailored Dashboard Experience",
    sub: "Customize your dashboard to fit your unique business needs. Select and prioritize the metrics that matter most to you, creating a personalized experience that maximizes your efficiency and effectiveness.",
    gridSpanTwo: true,
    Textbackground: "",
    backdropFilter: "",
  },
];

export const ExtraFeaturesData = [
  {
    imageOnly: false,
    head: "Track Your Business Performance",
    sub: [
      "Easily monitor your Growth Rate, Total Revenue, and Monthly Orders with our intuitive dashboard.",
      "Gain valuable insights into your business performance to make informed decisions and drive growth.",
    ],
    button: {
      text: "Start for free",
      onClick: () => {},
    },
  },
  {
    imageOnly: true,
    imgsrc: "/assets/images/Extrafeat1.png",
  },
  {
    imageOnly: true,
    imgsrc: "/assets/images/Extrafeat2.png",
  },
  {
    imageOnly: false,
    head: "Stay Updated with Transactions",
    sub: [
      "Keep track of all your recent transactions with real-time updates. Our platform ensures you never miss a beat, providing detailed records of your business activities for better financial management.",
      "Stay informed and in control with instant access to your transaction history.",
    ],
    button: {
      text: "Start for free",
      onClick: () => {},
    },
  },
];

export const PricingData = [
  {
    name: "Free Account",
    default: false,
    price: {
      main: "$00",
      sub: "00",
      spec: "per user / yearly",
    },
    desc: "start with essential features at no cost. Perfect for small businesses and startups looking to explore our platform. Access basic analytics and essential tools to kickstart your business growth.",
    benefits: [
      "Basic analytics",
      "Essential tools included",
      "Limited feature access",
      "Ideal for small teams and startups",
    ],
    button: {
      text: "Start for free",
      onClick: () => {},
    },
  },
  {
    name: "Pro account",
    default: true,
    price: {
      main: "$45",
      sub: "00",
      spec: "per user / yearly",
    },
    desc: "Unlock advanced features for growing businesses. Ideal for scaling operations and maximizing efficiency. Take your business to the next level with robust tools designed .",
    benefits: [
      "Everything in starter",
      "Access to SaaS analytics",
      "Enhanced integrations",
      "Priority support included",
    ],
    button: {
      text: "Let’s Started",
      onClick: () => {},
    },
  },
  {
    name: "For team",
    default: false,
    price: {
      main: "$85",
      sub: "00",
      spec: "per team / yearly",
    },
    desc: "Collaborate seamlessly with team-friendly features. Designed for teams and enterprises to collaborate effectively. Empower your team with secure and efficient collaboration.",
    benefits: [
      "Everything in Pro Account",
      "Customizable permissions",
      "Collaborative tools",
      "Comprehensive team reporting",
    ],
    button: {
      text: "Start with team",
      onClick: () => {},
    },
  },
];

export const FooterLinks = [
  {
    head: "Zuvio",
    links: [
      {
        text: "About",
        link: "/",
      },
      {
        text: "Blog",
        link: "/",
      },
      {
        text: "Contact",
        link: "/",
      },
      {
        text: "Contact",
        link: "/",
      },
      {
        text: "Press",
        link: "/",
      },
      {
        text: "Sitemap",
        link: "/",
      },
    ],
  },
  {
    head: "Sell",
    links: [
      {
        text: "Sell everywhere",
        link: "/",
      },
      {
        text: "Online store",
        link: "/",
      },
      {
        text: "International ecommerce",
        link: "/",
      },
      {
        text: "Omnichannel commerce",
        link: "/",
      },
      {
        text: "Headless commerce",
        link: "/",
      },
      {
        text: "Campaigns and flash sales",
        link: "/",
      },
      {
        text: "Retail and point of sale",
        link: "/",
      },
    ],
  },
  {
    head: "Manage",
    links: [
      {
        text: "Manage complexity",
        link: "/",
      },
      {
        text: "Automation",
        link: "/",
      },
      {
        text: "Shipping",
        link: "/",
      },
      {
        text: "Payments",
        link: "/",
      },
    ],
  },
  {
    head: "Integrate",
    links: [
      {
        text: "Integrate systems",
        link: "/",
      },
      {
        text: "Automation",
        link: "/",
      },
      {
        text: "Headless commerce",
        link: "/",
      },
      {
        text: "Omnichannel commerce",
        link: "/",
      },
      {
        text: "Partners",
        link: "/",
      },
    ],
  },
];

export const SidebarOptions = [
  { title: "Analytics", link: "/dashboard/analytics", icon : ChartPie },
  { title: "Discover", link: "/dashboard/discover", icon: Search },
  { title: "Sales", link: "/dashboard/sales", icon: ChartNoAxesCombined },
  { title: "Automotive", link: "/dashboard/automotive", icon: CarTaxiFront },
  { title: "Smart Home", link: "/dashboard/smart-home", icon: House },
];
