export interface Category {
  id: string;
  icon: string;
  en: string;
  hi: string;
  te: string;
  description: { en: string; hi: string; te: string };
  jobsAvailable: number;
}

export const categories: Category[] = [
  {
    id: "maid",
    icon: "🧹",
    en: "Maid",
    hi: "घर काम",
    te: "హౌస్ కీపర్",
    description: {
      en: "Housekeeping and cleaning jobs",
      hi: "सफाई और घरेलू कार्य",
      te: "హౌస్ కీపింగ్ మరియు క్లీనింగ్ జాబ్స్",
    },
    jobsAvailable: 4,
  },
  {
    id: "driver",
    icon: "🚗",
    en: "Driver",
    hi: "ड्राइवर",
    te: "డ్రైవర్",
    description: {
      en: "Car, taxi, and delivery drivers",
      hi: "कार, टैक्सी और डिलीवरी ड्राइवर",
      te: "కారు, టాక్సీ మరియు డెలివరీ డ్రైవర్స్",
    },
    jobsAvailable: 4,
  },
  {
    id: "security",
    icon: "🛡️",
    en: "Security",
    hi: "सिक्योरिटी",
    te: "సెక్యూరిటీ",
    description: {
      en: "Guards and watchmen",
      hi: "सुरक्षा गार्ड और प्रहरी",
      te: "గార్డ్స్ మరియు వాచ్మెన్",
    },
    jobsAvailable: 0,
  },
  {
    id: "delivery",
    icon: "📦",
    en: "Delivery",
    hi: "डिलीवरी",
    te: "డెలివరీ",
    description: {
      en: "Parcel and food delivery jobs",
      hi: "पार्सल और फूड डिलीवरी",
      te: "పార్సెల్ మరియు ఫుడ్ డెలివరీ",
    },
    jobsAvailable: 0,
  },
  {
    id: "gardening",
    icon: "🌱",
    en: "Gardener",
    hi: "माली",
    te: "తోటಗಾರుడు",
    description: {
      en: "Garden and lawn maintenance jobs",
      hi: "बगीचे और लॉन की देखभाल",
      te: "గార్డెన్ మరియు లాన్ నిర్వహణ జాబ్స్",
    },
    jobsAvailable: 4,
  },
];
