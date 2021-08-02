import emoji from "react-easy-emoji"
import TreeleafLogo from "./assets/img/icons/common/treeleaf-logo.svg"
import RtwLogo from "./assets/img/icons/common/rtw-logo.svg"

export const greetings = {
  name: "Sudip Shrestha",
  title: "Hello, I'm Sudip",
  description:
    "A passionate Full Stack Web Developer having an experience of building Web applications with Javascript | React | Next | Node | Firebase | Golang  and some other cool libraries and frameworks and Cross Platform Mobile Apps With React Native.",
  resumeLink: "",
}

export const openSource = {
  githubUserName: process.env.REACT_APP_GITHUB_USERNAME,
}

export const contact = {}

export const socialLinks = {
  facebook: process.env.REACT_APP_FACEBOOK_URL,
  instagram: process.env.REACT_APP_INSTAGRAM_URL,
  twitter: process.env.REACT_APP_TWITTER_URL,
  github: process.env.REACT_APP_GITHUB_URL,
  linkedin: process.env.REACT_APP_LINKEDIN_URL,
}

export const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER EXPLORING NEW TECH EVERYDAY",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "ReactJs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "NextJs",
      fontAwesomeClassname: "simple-icons:next-dot-js",
    },
    {
      skillName: "ReduxJs",
      fontAwesomeClassname: "logos:redux",
    },
    {
      skillName: "NodeJs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "Npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "MySql",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "Aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "grommet-icons:golang",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "logos:figma",
    },
    {
      skillName: "AntDesign",
      fontAwesomeClassname: "logos:ant-design",
    },
    {
      skillName: "MaterialUI",
      fontAwesomeClassname: "logos:material-ui",
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "logos:google-cloud",
    },
  ],
}

export const SkillBars = [
  {
    Stack: "Frontend",
    progressPercentage: "80",
  },
  {
    Stack: "Backend",
    progressPercentage: "50",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
]

export const educationInfo = [
  {
    schoolName: "Rhododendron International Boarding School",
    subHeader: "School Leaning Ceritificate (SLC)",
    duration: "2012",
    // desc: '',
    // descBullets: [],
  },
  {
    schoolName: "Kathmandu Model College",
    subHeader: "HSEB",
    duration: "2013 - 2015",
    desc: "Science Major",
  },
  {
    schoolName: "Eastern Regional Campues (IOE)",
    subHeader: "Computer Engineering (BE)",
    duration: "2016 - 2019",
    // descBullets: [''],
  },
]

export const experience = [
  {
    role: "Software Engineer",
    company: "Ready To Work",
    companylogo: RtwLogo,
    date: "Dec 2020 – Present",
    desc: "Working as a full stack engineer",
    descBullets: ["Next JS", "Go", "Gin", "Firebase"],
  },
  {
    role: "Front-End Developer",
    company: "Treeleaf Technologies",
    companylogo: TreeleafLogo,
    date: "May 2020 – Aug 2020",
    desc: "Worked as a front end engineer",
    descBullets: ["React JS", "Redux JS", "Node JS"],
  },
  {
    role: "Front End Developer Intern",
    company: "Treeleaf Technologies",
    companylogo: TreeleafLogo,
    date: "Dec 2019 – Feb 2019",
    desc: "Developed a lot of professional skills with hands on environment",
    descBullets: ["React JS", "Redux JS"],
  },
]

export const projects = [
  {
    name: "MySecondTeacher",
    desc: `Online acedemic delivery platform where students can learn 
      from e-books and interactive videos, seek answers from live tutors 
      online and teachers can schedule and conduct live video classes, 
      distribute assignments & publish the results.`,
    link: {
      name: "",
      url: "https://www.mysecondteacher.com/",
    },
  },
  {
    name: "Sawari Kinbech",
    desc: `e-commerce platform for automotives. It lets users scroll 
      through images of the company’s products and navigate to product 
      pages to read specifications, watch videos of the products in action,
      Read and write reviews and view related products and much more`,
    link: {
      name: "",
      url: "https://sawarikinbech.com/",
    },
  },
]
