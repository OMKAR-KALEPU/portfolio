import {
  backend,
  creator,
  web,
  java,
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
  zyxan,
  gssoc,
  todoApp,
  currencyDetector,
  stackoverflow,
  github,
  linkedIn,
  twitter,
  instagram,
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
    name: "git",
    icon: git,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "java",
    icon: java,
  },
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
    name: "Stack Overflow Clone",
    description:
      "A Stack Overflow clone built using the MERN stack, providing a platform for users to ask and answer programming-related questions. Features include user authentication, voting, and sorting to facilitate a vibrant community of developers seeking and sharing knowledge.",
    tags: [
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
    ],
    image: stackoverflow,
    source_code_link: "https://github.com/OMKAR-KALEPU/StackOverflow-Clone",
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
    source_code_link: "https://github.com/OMKAR-KALEPU/the-blind-assist",
  },
  {
    name: "Full Stack Todo App",
    description:
      "To-Do List project is an application specially built to keep track of errands or tasks that need to be done. This is a beginner project with MERN stack. This is a complete todo-app created using React-Class Components with basic CRUD operations. Users can store their everyday activities.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: todoApp,
    source_code_link: "https://github.com/OMKAR-KALEPU/todo_app",
  },
];

const socialMediaHandles = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/OMKAR-KALEPU",
  },
  {
    name: "LinkedIn",
    icon: linkedIn,
    link: "https://www.linkedin.com/in/omkar-kalepu-7a6718219/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/Omkarstwt",
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/omkar.kalepu/",
  },
];

export { services, technologies, experiences, projects, socialMediaHandles };
