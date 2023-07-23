import {
  backend,
  creator,
  web,
  java,
  sql,
  javascript,
  html,
  postman,
  css,
  reactjs,
  redux,
  mui,
  tailwind,
  nodejs,
  mongodb,
  git,
  githubDark,
  zyxan,
  gssoc,
  currencyDetector,
  carrent,
  tripguide,
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Open Source Contributor",
    icon: creator,
  },
];

const technologies = [
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
    name: "Material UI",
    icon: mui,
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
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: githubDark,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "java",
    icon: java,
  }
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Zyxan Tech",
    icon: zyxan,
    iconBg: "#383E56",
    date: "Aug 2022 - Jan 2023",
    responsibilities: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including UI/UX designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Open Source Contribution",
    company_name: "GSSOC'23 & SSOC'23",
    icon: gssoc,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    responsibilities: [
      "Contributed to numerous repositories during GirlScript Summer of Code, showcasing your expertise in JavaScript and its frameworks such as ReactJS and NodeJS.",
      "Made valuable contributions to approximately 10 repositories, leaving a significant impact on the open source community.",
      "Implemented innovative solutions and enhancements, addressing bugs, and optimizing performance to ensure the repositories reached new levels of excellence.",
      "Demonstrated exceptional versatility by contributing an algorithm in not just one, but multiple programming languages including C, C++, Java, and Python, showcasing your adaptability and proficiency across different coding paradigms.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "The Blind Assist",
    description:
      "A Machine Learning project aimed at empowering visually impaired individuals by providing them with a system capable of accurately detecting and identifying different currency denominations, enabling independent and efficient financial transactions.",
    tags: [
      {
        name: "machineLearning",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: currencyDetector,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/OMKAR-KALEPU",
  },
];

export { services, technologies, experiences, projects };
