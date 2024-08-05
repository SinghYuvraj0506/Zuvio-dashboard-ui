import { Building2 } from "lucide-react";

export const CountrySales = [
  {
    country: "USA",
    countryFlag: `https://media.istockphoto.com/id/1195599258/vector/usa-flag.jpg?s=1024x1024&w=is&k=20&c=18sONYBF2i5-UBa2S-6AGw_e14otOS2JEp9VaJDApno=`,
    sales: "2500",
    value: "$230,900",
    bounce: "29.9%",
  },
  {
    country: "Germany",
    countryFlag: `https://media.istockphoto.com/id/691333546/vector/german-flag-flat-layout-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=0Igz9kewJ3Hpf30gNVabtAa-kvGWDyjfjqc1zCT2-5A=`,
    sales: "2500",
    value: "$230,900",
    bounce: "29.9%",
  },
  {
    country: "Brazil",
    countryFlag: `https://media.istockphoto.com/id/967321044/vector/vector-flag-of-brazil-proportion-7-10-brazilian-national-flag.jpg?s=1024x1024&w=is&k=20&c=83fqd-qcPO1hY3x0T31yqrkyNQz_saNEJsEoJ02E0xE=`,
    sales: "2500",
    value: "$230,900",
    bounce: "29.9%",
  },
  {
    country: "Britain",
    countryFlag: `https://media.istockphoto.com/id/497118178/vector/flag-of-great-britain.jpg?s=1024x1024&w=is&k=20&c=xYo2bNpbJ5LcJae7hOH0mk1o89s6O14BFqhHHR-GLko=`,
    sales: "2500",
    value: "$230,900",
    bounce: "29.9%",
  },
  {
    country: "Canada",
    countryFlag: `https://media.istockphoto.com/id/934017954/vector/canada-flag.webp?s=1024x1024&w=is&k=20&c=c9uxuIyIwh1CwOOdAJtjpf-aPClkQuwIJ4gqa_7QLt0=`,
    sales: "465",
    value: "$230,900",
    bounce: "22.18%",
  },
];

export const ChartsDataAnalytics = {
  chartData: [
    { day: "Monday", views: 20 },
    { day: "Tuesday", views: 35 },
    { day: "Wednesday", views: 28 },
    { day: "Thursday", views: 45 },
    { day: "Friday", views: 52 },
    { day: "Saturday", views: 36 },
    { day: "Sunday", views: 10 },
  ],
  xDataLabel: "day",
  yDataLabel: "views",
  views: [
    {
      head: "Website Views",
      span: "Last Campaign Performance",
      type: "Bar",
      helpertext: "updated 4 min ago",
    },
    {
      head: "Daily Sales",
      span: "(+15%) increase in today sales.",
      type: "Area",
      helpertext: "updated 4 min ago",
    },
    {
      head: "Completed Tasks",
      span: "Last Campaign Performance",
      type: "Line",
      helpertext: "updated 4 min ago",
    },
  ],
};

export const AnalyticsCardData = [
  {
    bgImg: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    head: "Cozy 5 Stars Apartment",
    desc: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
    location: "Barcelona, Spain",
    price: "$899/night",
  },
  {
    bgImg: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    head: "Office Studio",
    desc: 'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
    location: "London, UK",
    price: "$1.119/night",
  },
  {
    bgImg: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
    head: "Beautiful Castle",
    desc: 'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
    location: "Milan, Italy",
    price: "$459/night",
  },
];

export const AnalyticsData2 = [
  {
    head: "Bookings",
    value: "281",
    desc: {
      value: "+55%",
      point: "than last week",
    },
    icon: Building2,
  },
  {
    head: "Today's Users",
    value: "2,300",
    desc: {
      value: "+3%",
      point: "than last month",
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
  },
  {
    head: "Revenue",
    value: "34k",
    desc: {
      value: "+1%",
      point: "than yesterday",
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
  },
  {
    head: "Followers",
    value: "+91",
    desc: {
      point: "Just updated",
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
  },
];

export const disoverTestimonials = [
  {
    profile: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    username: "Flores Juanita",
    desc: "I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves!",
    likes: 34,
    comments: 12,
  },
  {
    profile: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    username: "Flores Juanita",
    desc: "I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves!",
    likes: 34,
    comments: 12,
  },
  {
    profile: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    username: "Flores Juanita",
    desc: "I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves!",
    likes: 34,
    comments: 12,
  },
];

export const discoverData2 = [
  {
    isMeet: false,
    head: "Digital Marketing",
    desc: "A group of people who collectively are responsible for all of the work necessary to produce working, validated assets.",
    points: [
      {
        head: "Industry",
        value: "MARKETING TEAM",
      },
      {
        head: "Rating",
        value: "4.5",
      },
      {
        head: "Members",
        image: "/assets/images/hero1.png",
      },
    ],
  },
  {
    isMeet: false,
    head: "Design",
    desc: "Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too.",
    points: [
      {
        head: "Industry",
        value: "MARKETING TEAM",
      },
      {
        head: "Rating",
        value: "4.5",
      },
      {
        head: "Members",
        image: "/assets/images/hero1.png",
      },
    ],
  },
  {
    isMeet: true,
    meetName: "Slack Meet",
    time: "11:00 AM",
    desc: "You have an upcoming meet for Marketing Planning",
    meetId: "902-128-281",
    companyLogo: "https://avatars.githubusercontent.com/u/6911160?s=280&v=4",
  },
  {
    isMeet: true,
    meetName: "Invision",
    time: "4:50 PM",
    desc: "You have an upcoming video call for Material Design at 5:00 PM.",
    meetId: "111-968-981",
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tpzQW-UHflig48IIvO2E5b0r54jiJYuChkvkOVwB6NpiYztZf8tJp9WxC8NfeB25YWk&usqp=CAU",
  },
];

export const SmartHomeCameraData = [
  {
    title: "Kitchen",
    imgSrc:
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Living",
    imgSrc:
      "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Bedroom",
    imgSrc:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Terrace",
    imgSrc:
      "https://images.pexels.com/photos/1662549/pexels-photo-1662549.jpeg",
  },
];

export const SmaetHomeData2 = [
  {
    head: "Living Room",
    value: "21°C",
    desc: {
      value: "+3%",
      point: "than last month",
    },
    icon: Building2,
  },
  {
    head: "Outside",
    value: "44%",
    desc: {
      value: "+3%",
      point: "than last month",
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
  },
  {
    head: "Water",
    value: "87m³",
    desc: {
      value: "+3%",
      point: "than last month",
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
  },
  {
    head: "Internet",
    value: "417GB",
    desc: {
      point: "All devices",
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
  },
];

export const SmaetHomeData3 = [
  {
    switchOn: false,
    head: "Humidity",
    desc: "Inactive since: 2 days",
    icon: "",
  },
  {
    switchOn: true,
    head: "Temperature",
    desc: "Active",
    icon: "",
  },
  {
    switchOn: false,
    head: "AC",
    desc: "Inactive since: 1 hour",
    icon: "",
  },
  {
    switchOn: false,
    head: "Lights",
    desc: "Inactive since: 27 min",
    icon: "",
  },
  {
    switchOn: false,
    head: "Wi-fi",
    desc: "Active",
    icon: "",
  },
  {
    addMore: true,
  },
];

export const AutomotiveData1 = [
  {
    head: "Today's Trip",
    value: "145 Km",
    desc: {
      point: "Last 1 hour update",
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
  },
  {
    head: "Battery Health",
    value: "80%",
    desc: {
      point: "than last month",
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
  },
  {
    head: "Music Volume",
    value: "40 /100",
    desc: {
      point: "Just updated",
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
  },
  {
    head: "Average Speed",
    value: "50 k/hr",
    desc: {
      point: "Last 1 hour update",
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
  },
];

export const settingsNotification = [
  {
    head: "Mentions",
    desc: "Notify when another user mentions you in a comment",
    email: true,
    push: false,
    sms: false,
  },
  {
    head: "Comments",
    desc: "Notify when another user comments your item.",
    email: false,
    push: true,
    sms: false,
  },
  {
    head: "Follows",
    desc: "Notify when another user follows you.",
    email: false,
    push: false,
    sms: false,
  },
];

export const settingsAccount = [
  {
    name: "Slack Meet",
    desc: "You haven't added your Slack yet or you aren't authorized. Please add our Slack Bot to your account by clicking on here. When you've added the bot, send your verification code that you have received.",
    switchChecked: false,
    accountId: "hello@creative-tim.com",
    code: "1172913",
    companyLogo: "https://avatars.githubusercontent.com/u/6911160?s=280&v=4",
  },
  {
    name: "Spotify",
    switchChecked: false,
    companyLogo:
      "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png",
  },
  {
    name: "Atlassian",
    subHead: "Payment vendor",
    switchChecked: false,
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr42lt0uL4-RkQGD5AoUhQGn4OGr-foggxTQ&s",
  },
  {
    name: "Asana",
    subHead: "Organize your team",
    switchChecked: false,
    companyLogo:
      "https://w7.pngwing.com/pngs/556/977/png-transparent-asana-logo-thumbnail-tech-companies.png",
  },
];


export const SalesData = [
  {
    itemImg:"https://media.istockphoto.com/id/471565719/photo/nike-air-force-1.jpg?s=1024x1024&w=is&k=20&c=_5gI06E-TdHaHdk8mY2N3BqNuPXGjuu3kRQ9WumrGIc=",
    product:"Nike v22 Running",
    orders:"8.232",
    value:"$130.992",
    adsSpent:"$9.500",
    refunds:"+13"
  },
  {
    itemImg:"https://media.istockphoto.com/id/821282266/photo/white-mug-isolated.jpg?s=1024x1024&w=is&k=20&c=lLoIQoXCxqgzgI9HHaLDduS2pZvh9fqFZCcN9qjowbs=",
    product:"Business Kit (Mug + Notebook)",
    orders:"12.821",
    value:"$130.992",
    adsSpent:"$9.500",
    refunds:"+13"
  },
  {
    itemImg:"https://media.istockphoto.com/id/1179333798/photo/modern-black-office-armchair-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=1JknBQMaZyKN2lU-40mUvIJIjnO5vCks0IcZKSItHnY=",
    product:"Black Chair",
    orders:"8.232",
    value:"$130.992",
    adsSpent:"$9.500",
    refunds:"+13"
  },
  {
    itemImg:"https://media.istockphoto.com/id/1215029140/photo/modern-smart-phone-wireless-charging-on-carbon-fibre-surface.jpg?s=1024x1024&w=is&k=20&c=8Ytblh3yPjuA8pKnlIiporMI69p0qc0Fdbip7QCV2lI=",
    product:"Wireless Charger",
    orders:"832",
    value:"$130.992",
    adsSpent:"$9.500",
    refunds:"+13"
  },
  {
    itemImg:"https://media.istockphoto.com/id/1156470896/photo/outdoor-travel-equipment-planning-for-a-mountain-trekking-camping-trip-on-wooden-background.jpg?s=1024x1024&w=is&k=20&c=Xpw0oECcVKf2bXqJtQ0Z0D8eWPA7-NXRdUnRJL7LsQs=",
    product:"Mountain Trip Kit (Camera + Backpack)",
    orders:"232",
    value:"$130.992",
    adsSpent:"$9.500",
    refunds:"+13"
  }
]