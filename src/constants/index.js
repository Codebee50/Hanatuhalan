import { agric, book, business, shop } from "../assets/icons";
import { girls, woman, orphans, bayero } from "../assets/images";
import { whatsapp, facebook, instagram } from "../assets/icons";

export const teamList = [

  {
    name: "L.B HALAN",
    role: "FOUNDER HANNATU HALAN FOUNDATION",
    image:
      "https://i.ibb.co/M1fZtPQ/LB.jpg",
    contactLinks: {
      whatsapp: "https://wa.me/987654321",
      facebook: "https://www.facebook.com/janesmith",
    },
  },
  {
    name: "POLUM HALAN BAYERO",
    role: "EXECUTIVE DIRECTOR HANNATU HALAN FOUNDATION",
    image:
      "https://i.ibb.co/CKpLL4P/LB-3.jpg",
    contactLinks: {
      whatsapp: "https://wa.me/111111111",
      facebook: "https://www.facebook.com/emilybrown",
    },
  },
  {
    name: "MICHEAL LUKA BAKO",
    role: "NATIONAL COORDINATOR HANNATU HALAN FOUNDATION",
    image:
      "https://i.ibb.co/N9Qrgp9/LB-2.jpg",
    contactLinks: {
      whatsapp: "https://wa.me/555555555",
      facebook: "https://www.facebook.com/alexjohnson",
    },
  },
 
];


export const socials = [
  {
    label: "Facebook",
    image: facebook,
    link: "https://www.facebook.com/share/s9yo9DNurntbRGNt/?mibextid=qi2Omg",
  },
  {
    label: "Whatsapp",
    image: whatsapp,
    link: "https://wa.me/+2348071589478",
  },

  {
    label: "Instagram",
    image: instagram,
    link: "https://www.instagram.com/hannatuhalanfoundation?igsh=YzljYTk1ODg3Zg==",
  },
];

export const navLinks = [
  {
    href: "#home",
    label: "Home",
    breakup:false
  },
  {
    href: null,
    label: "About",
    breakup:true,
    subLinks: [
      { href: "#about", label: "About us" },
      { href: "#mv", label: "Mision and Vision" },
      { href: "#objectives", label: "Our Objectives" },
      { href: "#team", label: "Management Staff" },
    ],
  },

  { href: "#gallery", label: "Gallery", breakup: false },
  { href: "#contact-us", label: "Contact us", breakup:false },
  { href: "#team", label: "Team", breakup: false },
];

export const aboutItemList = [
  {
    img: book,
    label: "Education",
    description:
      "Payments Of Tuition Fees, WAEC,NECO & JAMB For Orphans And The Girl Child",
  },
  {
    img: shop,
    label: "Business",
    description:
      "Helping widows who are interested in farming and small trade/businesses. To ensure they get the help they need in achieving their goal.",
  },
  {
    img: business,
    label: "Entrepreneurship Program",
    description:
      "Empowering Widows & Orphans With Startups Capital For Small Scale Businesses In Rural Communities",
  },
  {
    img: agric,
    label: "Agricultural empowerment",
    description:
      "Empowering Widows With Foods And Agricultural Equipments Such As Seedlings, Fertilizer And Pesticides during Farming Season",
  },
];

export const objectivesList = [
  {
    imgURL: orphans,
    label: "Orphans",
    body: [
      "Increasing access for orphans to primary and secondary education and vocational training and assisting them develop health lifestyles to become responsible citizens.",
      "Providing legal support which enable them secure property rights.",
      "Providing healthcare insurance to the orphans and creating awareness for proper lifestyle.",
    ],
    reverse: false,
  },
  {
    imgURL: woman,
    label: "Widows",
    body: [
      "To enhance the dignity and social wellbeing of widows through advocacy, education, training and development programs and networking.",
      "Improving the lives of widows, Orphans and destitute persons through economic and social empowerment, access to basic needs, advocating to their human rights.",
      "Helping widows in providing basic financial supports for their families.",
    ],
    reverse: true,
  },
  {
    imgURL: girls,
    label: "Girl child Education/Less Privileged",
    body: [
      "Helping the less privileged in educational sector",
      "Standing in for the less privileged children. In the aspect of financial and social services.",
      "Making sure their voices are heard and them relevant in the society.",
    ],
    reverse: false,
  },
];
