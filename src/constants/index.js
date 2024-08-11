// src/constants/index.js
import {
  analogele,
  machinelearing,
  vlsidegign,
  application,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  stepdtu,
  sihpic,
  vihaanpic,
  engifestdtu_logo,
  netflix,
  solarpanel,
  currencyConvertor,
  threejs,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume"
  }
];

export const services = [
  {
    title: "Web Developer",
    icon: application
  },
  {
    title: "Machine Learning",
    icon: machinelearing,
  },
  {
    title: "Analog and Digital Electronics",
    icon: analogele,
  },
  {
    title: "VLSI Design",
    icon: vlsidegign,
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const experiences = [
  {
    title: "Smart India Hackathon",
    company_name: "Judiciary Management Web Application",
    icon: sihpic,
    iconBg: "#383E56",
    date: "August 2023 - December 2023",
    points: [
      "Developed a web application to streamline the judiciary system, offering users easy access to court hearing details.",
      "Designed and implemented a user-friendly interface that displays comprehensive information about upcoming court hearings, including date, time, location, and case specifics.",
      "Integrated advanced search functionality to allow users to efficiently locate specific cases and hearing schedules.",
      "Implemented automated notifications and reminders to keep users informed about their upcoming court dates."
    ],
  },
  {
    title: "Vihaan 007",
    company_name: "Parking System",
    icon: vihaanpic,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - March 2024",
    points: [
      "Developed a comprehensive web application for renting parking spaces, aimed at simplifying the process of finding and booking parking spots.",
      "Designed an intuitive user interface that allows users to search for available parking spaces based on location, time, and duration.",
      "Implemented real-time availability updates and booking features to ensure users have access to the most current information.",
      "Integrated secure payment processing using QR code to handle transactions smoothly and efficiently.",
    ],
  },
  {
    title: "Cultural Council",
    company_name: "Engiest Team",
    icon: engifestdtu_logo,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
        "Served as Co-Head of the Logistics Department for the Cultural Council at Delhi Technological University (DTU), overseeing the coordination and management of logistical operations for major college events and festivals.",
        "Led the planning and execution of logistics strategies to ensure smooth and efficient operations during campus festivals and cultural events.",
        "Managed corporate relationships and liaised with sponsors, vendors, and partners to secure resources and support for the events."
    ],
  },
  {
    title: "Step DTU",
    company_name: "Sub-Coordinator of Team",
    icon: stepdtu,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Served as the Sub-Coordinator for STEP DTU Society, overseeing the orientation program for new freshmen at Delhi Technological University (DTU).",
      "Played a key role in planning and organizing the orientation program, ensuring a smooth and welcoming experience for incoming students.",
      "Coordinated with fellow team members to design and implement engaging activities, workshops, and sessions to introduce freshmen to campus life and academic expectations."
    ],
  },
];

export const projects = [
  {
    name: "Sun Following Solar Panel",
    description:
      "I created a sun-following solar panel system with an Arduino that adjusts the panel's angle for optimal sunlight. Using light sensors and servo motors, I enhanced its efficiency and learned more about electronics and renewable energy.",
    tags: [
      {
        name: "aurdino",
        color: "blue-text-gradient",
      },
      {
        name: "C/C++",
        color: "green-text-gradient",
      },
    ],
    image: solarpanel,
    source_code_link: "https://github.com/",
  },
  {
    name: "Netflix Clone",
    description:
      "I built a Web Based Netflix clone with React and a backend API along with tailwind CSS, enabling browsing, searching, and streaming of movies Trailers and TV shows for a realistic user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/sanchitwiz/netflix-clone",
  },
  {
    name: "Currency Convertor",
    description:
      "I created a currency converter app using React and Tailwind CSS, featuring real-time exchange rate updates and a user-friendly interface for seamless currency conversion.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "currency-api",
        color: "pink-text-gradient",
      },
    ],
    image: currencyConvertor,
    source_code_link: "https://github.com/sanchitwiz/currency-convertor",
  },
];
