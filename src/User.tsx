import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
const Info = {
  name: "Aasmi C.",
  stack: [
    "Software Developer",
    "ReactJS Developer",
    "React Native Developer",
    "AngularJS Developer",
  ],
  bio: "As a highly skilled and goal-oriented mobile and web developer, I bring 3 years of comprehensive experience in the complete development cycle. My expertise spans ReactJS, React Native, AngularJS, and NodeJS, with a proven ability to stay ahead of leading development trends and drive strategic, efficient product upgrades. I am adept at delivering high-quality, innovative solutions and continuously enhancing my skills in dynamic, collaborative environments. I am seeking a challenging role where I can leverage my extensive development experience and technical expertise to contribute effectively and grow professionally.",
};

const ProjectInfo = [
  {
    title: "Mogra Trips",
    desc: "This is a Trip management application integrated with email notifications and payment gateway for schools and other clients which is used for planning their trips for their proper destination",
    technologies: ["ReactJS", "Tailwind", "Redux", "NodeJS", "Prisma", "AWS"],
  },
  {
    title: "Online Admission Form",
    desc: "This is a simple form developed for Online Admission Form which will be active only during the admission period.",
    technologies: ["ReactJS", "Tailwind", "Redux", "NodeJS", "Prisma", "AWS"],
  },
  {
    title: "Mograsys UserApp",
    desc: "This is a mobile application completely developed for teachers to mark the Attendance and Mark Entry and several other advanced features are developed in this application.",
    technologies: ["React Native", "NodeJS", "Tailwind", "Prisma", "AWS"],
  },
  {
    title: "Mograsys ParentApp",
    desc: "This is a mobile application completely developed for parents and students to check all the circulars, assignments and several other advanced features are developed in this application.",
    technologies: ["React Native", "NodeJS", "Tailwind", "Prisma", "AWS"],
  },
  {
    title: "Translation",
    desc: "Worked on Auto translate for communication Application reference from TWITTER. Got a good amount of experience in using AWS translate similar to Google translate",
    technologies: ["HTML", "CSS", "AngularJS", "C#", "MySQL", "AWS"],
  },
  {
    title: "Logbook Dashboard",
    desc: "Have worked as a full stack developer intensively Developed many applications like Teacher timetable, Assignment Scheduler, Class Profile View, Triangulation etc. Production code deployment and debugging",
    technologies: ["HTML", "CSS", "AngularJS", "C#", "MySQL", "AWS"],
  },
  {
    title:
      "Parent Portal Application and Teacher Web Application(Student Leave Application)",
    desc: "Created an application for parent portal where the student can apply their leaves and the teacher can approve and view the attachments attached by parents.",
    technologies: ["HTML", "CSS", "AngularJS", "C#", "MySQL", "AWS"],
  },
  {
    title:
      "File/Photo upload, download and export Functionality in almost all the Applications",
    desc: "Managed the above case in almost all the applications which is redirected to S3 bucket and Images and uploaded after compression from original size",
    technologies: ["HTML", "CSS", "AngularJS", "C#", "MySQL", "AWS"],
  },
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "React JS",
      "React Native",
      "AngularJS",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: ["Node JS", "Express JS", "MySQL", "C#", "Prisma"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    skills: ["Git", "Github", "VS Code", "Postman"],
  },
];
const socialLinks = [
  { link: "https://github.com/aasmi27", icon: IconBrandGithub },
  {
    link: "https://linkedin.com/in/aasmi-c",
    icon: IconBrandLinkedin,
  },
];

const ExperienceInfo = [
  {
    role: "Team Lead",
    company: "Mograsys Technologies",
    date: "May 2024 - Present",
    desc: "As a team lead, I actively participated in the ReactJS team, taking on responsibilities that included developing applications from scratch using ReactJS, Tailwind CSS, NodeJS, Postman, and Prisma. Additionally, I have worked on React Native projects. I collaborated on all stages of the systems development lifecycle, from requirement gathering to production releases. In my role, I supervised the work of programmers, designers, and technicians, assigned tasks, and monitored performance against targets. Furthermore, I explained project technical risks and benefits during project kick-offs, ensuring clear communication and understanding among all stakeholders.",
    skills: ["React JS", "React Native", "Node JS", "Tailwind CSS"],
  },
  {
    role: "Software Developer",
    company: "Mograsys Technologies",
    date: "June 2021 - April 2024",
    desc: "As a software developer, my hands-on experience includes working with AngularJS, ReactJS, and NodeJS, alongside C# for API management and MySQL. I successfully implemented an AWS-S3 bucket system for seamless user document uploads, achieving a 50% reduction in upload errors and enhancing data integrity. My role involved reviewing code, debugging problems, and correcting issues, as well as coordinating with other engineers to evaluate and improve software and hardware interfaces. I am technically proficient, an analytical problem solver, and maintain a calm and focused demeanor. Additionally, I have updated legacy codebases to meet modern development standards, significantly improving functionality.",
    skills: [
      "React JS",
      "Angular JS",
      "Node JS",
      "MySQL",
      "C#",
      "Tailwind CSS",
      "AWS",
      "Jenkins",
    ],
  },
];
const Slugs = [
  "typescript",
  "javascript",
  "react",
  "angular",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mysql",
  "amazonaws",
  "firebase",
  "nginx",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };
