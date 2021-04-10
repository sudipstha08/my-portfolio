import emoji from 'react-easy-emoji'
import TreeleafLogo from './assets/img/icons/common/treeleaf-logo.svg'
import RtwLogo from './assets/img/icons/common/rtw-logo.svg'

export const greetings = {
  name: 'Sudip Shrestha',
  title: "Hello, I'm Sudip",
  description:
    'A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript | Reactjs | NextJs | Nodejs | Firebase | Golang  and some other cool libraries and frameworks and Cross Platform Mobile Apps With React Native.',
  resumeLink: '',
}

export const openSource = {
  githubUserName: 'sudipstha08',
}

export const contact = {}

export const socialLinks = {
  facebook: 'https://www.facebook.com/sud.shr',
  instagram: 'https://www.instagram.com/iam5udipstha',
  twitter: 'https://twitter.com/sudipstha08',
  github: 'https://github.com/sudipstha08',
  linkedin: 'https://www.linkedin.com/in/sudipstha08/',
}

export const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications',
    ),
    emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean',
    ),
  ],

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'vscode-icons:file-type-html',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'vscode-icons:file-type-css',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'logos:sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'logos:javascript',
    },
    {
      skillName: 'TypeScript',
      fontAwesomeClassname: 'logos:typescript-icon',
    },
    {
      skillName: 'ReactJs',
      fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
    },
    {
      skillName: 'NextJs',
      fontAwesomeClassname: 'simple-icons:next-dot-js',
    },
    {
      skillName: 'ReduxJs',
      fontAwesomeClassname: 'logos:redux',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'logos:nodejs-icon',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'vscode-icons:file-type-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'vscode-icons:file-type-sql',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'logos:aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'logos:firebase',
    },
    {
      skillName: 'Golang',
      fontAwesomeClassname: 'grommet-icons:golang',
    },
    {
      skillName: 'git',
      fontAwesomeClassname: 'logos:git-icon',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'logos:docker-icon',
    },
    {
      skillName: 'figma',
      fontAwesomeClassname: 'logos:figma',
    },
    {
      skillName: 'AntDesign',
      fontAwesomeClassname: 'logos:ant-design',
    },
    {
      skillName: 'MaterialUI',
      fontAwesomeClassname: 'logos:material-ui',
    },
    {
      skillName: 'GCP',
      fontAwesomeClassname: 'logos:google-cloud',
    },
  ],
}

export const SkillBars = [
  {
    Stack: 'Frontend',
    progressPercentage: '80',
  },
  {
    Stack: 'Backend',
    progressPercentage: '50',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
]

export const educationInfo = [
  {
    schoolName: 'Rhododendron International Boarding School',
    subHeader: 'SLC',
    duration: '2012',
    // desc: '',
    // descBullets: [],
  },
  {
    schoolName: 'Kathmandu Model College',
    subHeader: 'HSEB',
    duration: '2013 - 2015',
    desc: 'Science Major',
  },
  {
    schoolName: 'Eastern Regional Campues (IOE)',
    subHeader: 'Computer Engineering (BE)',
    duration: '2016 - 2019',
    // descBullets: [''],
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Ready To Work',
    companylogo: RtwLogo,
    date: 'Dec 2020 – Present',
    desc: 'Working as a full stack engineer',
    descBullets: ['Next Js', 'Go', 'Gin', 'Firebase'],
  },
  {
    role: 'Front-End Developer',
    company: 'Treeleaf Technologies',
    companylogo: TreeleafLogo,
    date: 'May 2020 – Aug 2020',
    desc: 'Worked as a front end engineer',
    descBullets: ['React Js', 'Redux Js'],
  },
  {
    role: 'Front End Developer Intern',
    company: 'Treeleaf Technologies',
    companylogo: TreeleafLogo,
    date: 'Dec 2019 – Feb 2019',
    desc: 'Developed a lot of professional skills with hands on environment',
    descBullets: ['React Js', 'Redux Js'],
  },
]

export const projects = [
  {
    name: 'MySecondTeacher',
    desc:
      'Online acedemic delivery platform where students can learn from e-books and interactive videos, seek answers from live tutors online and teachers can schedule and conduct live video classes, distribute assignments & publish the results.',
    link: {
      name: '',
      url: 'https://www.mysecondteacher.com/',
    },
  },
  {
    name: 'Kowapets',
    desc: 'Full featured e-commerce platform for buying and selling of pets.',
    link: {
      name: '',
      url: '',
    },
  },
  {
    name: 'Gliv',
    desc: 'Video streaming platform for mobile and web',
    link: {
      name: '',
      url: '',
    },
  },
  {
    name: 'Digi Sign',
    desc:
      'Cloud based signature service that lets you easily send, sign, track & manage signature processes',
    link: {
      name: '',
      url: '',
    },
  },
]
