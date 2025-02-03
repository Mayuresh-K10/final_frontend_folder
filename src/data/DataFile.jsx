import imag from "../Assets/image/1.webp";
import imag2 from "../Assets/image/2.webp";
import imag3 from "../Assets/image/3.webp";
import svgimg1 from "../Assets/city-logo/india gate.webp";
import svgimg2 from "../Assets/city-logo/banglore.webp";
import svgimg3 from "../Assets/city-logo/hyderabad.svg";
import svgimg4 from "../Assets/city-logo/pune.webp";
import svgimg5 from "../Assets/city-logo/mumbai.svg";
import svgimg6 from "../Assets/city-logo/chennai.webp";
import img from "../Assets/image/1.webp";
import img2 from "../Assets/image/2.webp";
import img3 from "../Assets/image/3.webp";
import img4 from "../Assets/image/aust.webp";
import Videoimg1 from "../Assets/image/acadtips.webp";
import Videoimg2 from "../Assets/image/interttips.avif";
import Videoimg3 from "../Assets/image/acadStrat.avif";
import Videoimg4 from "../Assets/image/campuscult.avif";
import NPTEL from "../Assets/HomePage/nptel.webp";
import FreeCode from "../Assets/HomePage/FreeCodeCamp.webp";
import NDLI from "../Assets/HomePage/NDLI-white.webp";
import Swayam from "../Assets/HomePage/Swayam.webp";

const DataFile = [
  {
    city: "Delhi",
    img: svgimg1,
  },
  {
    city: "Bangalore",
    img: svgimg2,
  },
  {
    city: "Hyderabad",
    img: svgimg3,
  },
  {
    city: "Pune",
    img: svgimg4,
  },
  {
    city: "Mumbai",
    img: svgimg5,
  },
  {
    city: "Chennai",
    img: svgimg6,
  },
];

const AboutDegree = [
  {
    degree: "B.Com General",
    type: "Full Time",
    duration: "3 Years",
    avgFee: "59.9k",
    colleges: "6354",
  },
  {
    degree: "B.Ed General",
    type: "Full Time",
    duration: "2 Years",
    avgFee: "82.42k",
    colleges: "5455",
  },
  {
    degree: "BCA General",
    type: "Full Time",
    duration: "3 Years",
    avgFee: "1.36L",
    colleges: "4938",
  },
];

const Abroad = [
  {
    imgg: imag,
    cardName: "Study in USA",
    check: "Check colleges",
    no: "1037",
    fee: "21.4k USD/Year",
    avgLivingCost: "15,000/year",
    ranking: "#1 in the world",
    keyFact1: "High-quality education system",
    keyFact2: "Diverse range of academic programs",
    keyFact3: "Robust research opportunities",
    link: "usa",
  },

  {
    imgg: imag2,
    cardName: "Study in UK",
    check: "Check colleges",
    no: "170",
    fee: "20.44K USD/Year",
    avgLivingCost: "12,000/year",
    ranking: "#2 in the world",
    keyFact1: "Rich history of academic excellence",
    keyFact2: "Cutting-edge research facilities",
    keyFact3: "Internationally recognized degrees",
    link: "uk",
  },
  {
    imgg: imag3,
    cardName: "Study in Canada",
    check: "Check colleges",
    no: "221",
    fee: "19.49K USD/Year",
    avgLivingCost: "10,000/year",
    ranking: "#3 in the world",
    keyFact1: "World-class education at affordable cost",
    keyFact2: "Multicultural & welcoming environment",
    keyFact3: "Opportunities for post-graduation work",
    link: "canada",
  },
];

const GraphData = [
  {
    img: img,
    country: "USA",
    fields: {
      engineering: 25,
      business: 30,
      medicine: 20,
      law: 15,
      arts: 10,
    },
  },
  {
    img: img2,
    country: "UK",
    fields: {
      engineering: 20,
      business: 25,
      medicine: 18,
      law: 20,
      arts: 17,
    },
  },
  {
    img: img3,
    country: "Canada",
    fields: {
      engineering: 22,
      business: 28,
      medicine: 15,
      law: 18,
      arts: 17,
    },
  },
  {
    img: img4,
    country: "Australia",
    fields: {
      engineering: 23,
      business: 27,
      medicine: 17,
      law: 19,
      arts: 14,
    },
  },
];

const Videos = [
  {
    id: 1,
    thumbnail: Videoimg1,
    title: "Academic Tips and Strategies",
    subtitle:
      "How to Succeed Academically as an International Student in the US",
  },
  {
    id: 2,
    thumbnail: Videoimg2,
    title: "Tips for International Students",
    subtitle: "5 Things to Know Before Studying Abroad in the US",
  },
  {
    id: 3,
    thumbnail: Videoimg3,
    title: "Educational Guidance and Tactics",
    subtitle: "Achieving Academic Excellence as a Foreign Student in the US",
  },
  {
    id: 4,
    thumbnail: Videoimg4,
    title: "Understanding Campus Culture",
    subtitle: "Navigating US Campus Life: A Guide for International Students",
  },
];

const FreeCourseData = [
  {
    img: NPTEL,
    name: "NPTEL",
    link: "https://nptel.ac.in/",
  },
  {
    img: FreeCode,
    name: "FreeCodeCamp",
    link: "https://www.freecodecamp.org/",
  },
  {
    img: NDLI,
    name: "National Digital Library",
    link: "https://ndl.iitkgp.ac.in/",
  },
  {
    img: Swayam,
    name: "Swayam",
    link: "https://swayam.gov.in/",
  },
];


export { AboutDegree, Abroad, GraphData, Videos, FreeCourseData };
export { DataFile };
