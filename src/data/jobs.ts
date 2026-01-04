export interface Job {
  id: number;
  title: { en: string; hi: string; te: string };
  category: string;
  location: { en: string; hi: string; te: string };
  salary: string;
  verified?: boolean;
  rating?: number;
  description: { en: string; hi: string; te: string };
}

export const jobs: Job[] = [
  {
    id: 1,
    title: { en: "Housemaid", hi: "हाउस मेड", te: "హౌస్‌మేడ్" },
    category: "maid",
    location: { en: "Hyderabad", hi: "हैदराबाद", te: "హైదరాబాదు" },
    salary: "₹10,000/month",
    verified: true,
    rating: 4.5,
    description: {
      en: "Responsible for cleaning and household chores.",
      hi: "सफाई और घरेलू कार्यों के लिए जिम्मेदार।",
      te: "క్లీనింగ్ మరియు హౌస్హోల్డ్ పనుల బాధ్యత.",
    },
  },
  {
    id: 2,
    title: { en: "Part-Time Maid", hi: "पार्ट-टाइम मेड", te: "పార్ట్-టైమ్ హౌస్‌మేడ్" },
    category: "maid",
    location: { en: "Madhapur", hi: "माधापुर", te: "మాధాపూర్" },
    salary: "₹6,000/month",
    verified: false,
    rating: 4.0,
    description: {
      en: "Part-time cleaning assistance.",
      hi: "पार्ट-टाइम सफाई सहायता।",
      te: "పార్ట్-టైమ్ క్లీనింగ్ సహాయం.",
    },
  },
  {
    id: 3,
    title: { en: "Maid for Cooking", hi: "खाना बनाने के लिए मेड", te: "కుకింగ్ కోసం హౌస్‌మేడ్" },
    category: "maid",
    location: { en: "Gachibowli", hi: "गचिबोवली", te: "గచ్చిబౌలీ" },
    salary: "₹9,000/month",
    verified: true,
    rating: 4.3,
    description: {
      en: "Responsible for cooking meals.",
      hi: "खाना बनाने के लिए जिम्मेदार।",
      te: "భోజనం తయారీ బాధ్యత.",
    },
  },
  {
    id: 4,
    title: { en: "Full-Time Maid", hi: "फुल टाइम मेड", te: "ఫుల్ టైమ్ హౌస్‌మేడ్" },
    category: "maid",
    location: { en: "Banjara Hills", hi: "बंजारा हिल्स", te: "బంజారా హిల్స్" },
    salary: "₹12,000/month",
    verified: true,
    rating: 4.6,
    description: {
      en: "Full-time maid for household tasks.",
      hi: "दैनिक घरेलू कार्यों के लिए फुल टाइम मेड।",
      te: "ప్రతిరోజూ హౌస్హోల్డ్ పనుల కోసం ఫుల్-టైమ్ మేడ్.",
    },
  },
  {
    id: 5,
    title: { en: "Car Driver", hi: "कार ड्राइवर", te: "కారు డ్రైవర్" },
    category: "driver",
    location: { en: "Hyderabad", hi: "हैदराबाद", te: "హైదరాబాద్" },
    salary: "₹15,000/month",
    verified: true,
    rating: 4.5,
    description: { en: "Drive cars safely.", hi: "सुरक्षित रूप से कार चलाएँ।", te: "కారు సురక్షితంగా డ్రైవ్ చేయండి." },
  },
  {
    id: 6,
    title: { en: "Taxi Driver", hi: "टैक्सी ड्राइवर", te: "టాక్సీ డ్రైవర్" },
    category: "driver",
    location: { en: "Madhapur", hi: "माधापुर", te: "మాధాపూర్" },
    salary: "₹14,000/month",
    verified: false,
    rating: 4.0,
    description: { en: "Transport passengers safely.", hi: "यात्री सुरक्षित रूप से ले जाएँ।", te: "ప్రయాణికులను సురక్షితంగా తీసుకెళ్ళండి." },
  },
  {
    id: 7,
    title: { en: "Delivery Driver", hi: "डिलीवरी ड्राइवर", te: "డెలివరీ డ్రైవర్" },
    category: "driver",
    location: { en: "Secunderabad", hi: "सिकंदराबाद", te: "సికింద్రాబాద్" },
    salary: "₹12,000/month",
    verified: true,
    rating: 4.2,
    description: { en: "Deliver goods to customers.", hi: "ग्राहकों को सामान वितरित करें।", te: "కస్టమర్లకు వస్తువులు డెలివర్ చేయండి." },
  },
  {
    id: 8,
    title: { en: "Bus Driver", hi: "बस ड्राइवर", te: "బస్ డ్రైవర్" },
    category: "driver",
    location: { en: "Banjara Hills", hi: "बंजारा हिल्स", te: "బంజారా హిల్స్" },
    salary: "₹18,000/month",
    verified: true,
    rating: 4.6,
    description: { en: "Drive buses safely.", hi: "बस सुरक्षित रूप से चलाएँ।", te: "బస్సులు సురక్షితంగా డ్రైవ్ చేయండి." },
  },
  {
    id: 9,
    title: { en: "Garden Helper", hi: "गार्डन हेल्पर", te: "గార్డెన్ సహాయకుడు" },
    category: "gardening",
    location: { en: "Hyderabad", hi: "हैदराबाद", te: "హైదరాబాద్" },
    salary: "₹8,000/month",
    verified: true,
    rating: 4.2,
    description: { en: "Help maintain garden.", hi: "बगीचे की देखभाल में मदद करें।", te: "గార్డెన్ నిర్వహణలో సహాయం చేయండి." },
  },
  {
    id: 10,
    title: { en: "Lawn Gardener", hi: "लॉन गार्डनर", te: "లాన్ గార్డెనర్" },
    category: "gardening",
    location: { en: "Madhapur", hi: "माधापुर", te: "మాధాపూర్" },
    salary: "₹9,000/month",
    verified: false,
    rating: 4.0,
    description: { en: "Maintain lawns.", hi: "लॉन्स बनाए रखें।", te: "లాన్స్ నిర్వహించండి." },
  },
  {
    id: 11,
    title: { en: "Plant Care Specialist", hi: "पौधों की देखभाल विशेषज्ञ", te: "మొక్కల సంరక్షణ నిపుణుడు" },
    category: "gardening",
    location: { en: "Gachibowli", hi: "गाचिबोवली", te: "గచిబౌలీ" },
    salary: "₹10,000/month",
    verified: true,
    rating: 4.5,
    description: { en: "Specialist in plants.", hi: "पौधों में विशेषज्ञ।", te: "మొక్కలలో నిపుణుడు." },
  },
  {
    id: 12,
    title: { en: "Garden Supervisor", hi: "गार्डन सुपरवाइजर", te: "గార్డెన్ సూపర్వైజర్" },
    category: "gardening",
    location: { en: "Kukatpally", hi: "कुकटपल्ली", te: "కూకటపల్లి" },
    salary: "₹12,000/month",
    verified: true,
    rating: 4.6,
    description: { en: "Supervise garden team.", hi: "बागवानी टीम की निगरानी करें।", te: "గార్డెన్ టీమ్ పర్యవేక్షణ." },
  },
];
