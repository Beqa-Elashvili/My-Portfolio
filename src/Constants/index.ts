import { v4 as uuidv4 } from "uuid";
import { Experiencetype, ProjectType } from "src@/assets/types";
import amazonImage from "src@/assets/images/amazon.png";
import carRentApplication from "src@/assets/images/carRentApplication.png";
import MessengerClone from "src@/assets/images/messangerClone.png";
import InventoryManagement from "src@/assets/images/invetoryManagement.png";

import weatherImage from "src@/assets/images/weatherApp.png";
import TeacherElecronicMagazineImage from "src@/assets/images/TeacherElectonicMagazine.png";

export const EXPERIENCES: Experiencetype[] = [
  {
    id: uuidv4(),
    role: "Junior React Front-end Developer",
    company: "LineDevLtd",
    description:
      "As a junior front-end developer, I've significantly enhanced my ability to structure code efficiently. Collaborating with my team and through dedicated efforts, I continue to gain knowledge every day. Actively engaging in the debugging process provides me with valuable experience. I also write concise articles on various programming topics to broaden my understanding and share insights with a wider audience.",
    technologies: ["React.js", "TypeScript", "JavaScript"],
    year: "jan 2024 - Present",
  },
];

export const PROJECTES: ProjectType[] = [
  {
    id: uuidv4(),
    title: "Inventory Management website",
    image: InventoryManagement,
    description:
      "A comprehensive Inventory Management website built with Next.js, Node.js, Express, Prisma, and Pusher. This platform provides powerful analytics, purchase and sales tracking, and detailed dashboards to help businesses manage their inventory efficiently. It offers real-time updates, dark mode support, and seamless data interaction for a modern and user-friendly experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "postgeSQL",
      "express",
      "Prisma",
      "Tailwind CSS",
    ],
    live: "https://inventorymanagement-liard.vercel.app/",
    code: "https://github.com/Beqa-Elashvili/inventory-management",
  },
  {
    id: uuidv4(),
    title: "Messenger Clone",
    image: MessengerClone,
    description:
      "A real-time messaging platform built with Next.js, MongoDB, Prisma, and Pusher. This application offers features such as real-time messaging, group chat functionality, and active status tracking for users. It includes secure authentication and user management using NextAuth, allowing for a smooth and engaging communication experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Prisma",
      "Pusher",
      "Tailwind CSS",
    ],
    live: "https://messenger-clone-eight-neon.vercel.app/",
    code: "https://github.com/Beqa-Elashvili/messenger-clone",
  },
  {
    id: uuidv4(),
    title: "Car Rent Application",
    image: carRentApplication,
    description:
      "A fully functional Car Rental Application built with Next.js, MongoDB, and NextAuth. Users can easily browse a variety of cars, select rental dates using a calendar, and track their rental days. The application supports reservations, checkout, and secure payments, making the car rental process smooth and user-friendly",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDb",
      "Tailwind CSS",
      "Ant Design",
    ],
    live: "https://luxurydrive.vercel.app/",
    code: "https://github.com/Beqa-Elashvili/Car-Rent-Application",
  },
  {
    id: uuidv4(),
    title: "Weather APP",
    image: weatherImage,
    description:
      "Weather Forecast Application, This innovative application provides,🌍 Any Weather Forecast: Get weather updates for any location, whether it's days or hours in advance. 🗓️ Calendar Integration: Seamlessly check future and past weather forecasts with our user-friendly calendar feature. 🔍 Search Page: Easily search for weather information by location. 🎨 Format Change: Customize how you view weather data with various format options. 📍 Map Integration: See the location you're getting your weather information from on an interactive map. ⏰ Local Time Zone: See the local time and weather conditions for your current time zone. 📱 Responsive Design: Enjoy a seamless experience across all devices, whether you're on a desktop, tablet, or smartphone.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Ant Design"],
    live: "https://weatherappier.netlify.app/",
    code: "https://github.com/Beqa-Elashvili/Weather_App",
  },
  {
    id: uuidv4(),
    title: "Amazon E-Comerce",
    image: amazonImage,
    description:
      "This is my biggest personal project an Amazon-inspired E-Commerce platform! 🛒 This platform is packed with features that truly elevate the online shopping experience:  Comprehensive Cart & Checkout: Seamless and intuitive cart and checkout process, designed for a smooth user journey, Wishlist Functionality: Easily save items for later with a fully functional wishlist.Profile Management: Users can update and manage their profile information effortlessly. User Authentication: Secure user registration and login functionality to keep accounts safe. Robust Features: From product browsing to secure transactions, this platform mirrors the essential functionalities of top-tier shopping sites.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Ant Design"],
    live: "",
    code: "https://github.com/Beqa-Elashvili/Amazon-E-Comerce-Project",
  },
  {
    id: uuidv4(),
    title: "Teacher-s-electronic-magazine",
    image: TeacherElecronicMagazineImage,
    description:
      "Teacher-s-electronic-magazine Project! 👩‍🏫 which is analogous to a standard teacher's journal. 👀 The database is stored globally, which helps it to be dynamic. 🗯 The memorized score knows on which day of the selected week and subject the score was recorded.❗ The score can only be between 1 and 10.",
    technologies: ["JavaScript", "HTML", "Css"],
    live: "https://resplendent-queijadas-4fd346.netlify.app/",
    code: "https://github.com/Beqa-Elashvili/Teacher-s-electronic-magazine",
  },
];

export const CONTACT: { number: string; gmail: string } = {
  number: "+995 591 448 452",
  gmail: "beqaelashvili3@gmail.com",
};
