const front = "/services/programming.png";
const back = "/services/development.png";

const uaiLogo = "/education/uai.png";
const unlamLogo = "/education/unlam.png";
const liverpoolLogo = "/education/liverpool.png";
const sanJudasLogo = "/education/sanjudas.png";
const edisonLogo = "/education/edison.png";
const freeCodeCampLogo = "/education/freeCodeCamp.png";
const udemyLogo = "/education/udemy.png";
const utnLogo = "/education/utn.png";

const sortboksLogo = "/experience/sortboks.png";
const netjamLogo = "/experience/netjam.png";
const ibmLogo = "/experience/ibm.png";
const socialnetLogo = "/experience/socialnet.png";
const inmoLogo = "/experience/inmo.png";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Engineer",
    icon: back,
  },
  {
    title: "Technical Project Manager",
    icon: front,
  },
];

const education = [
  {
    startDate: "2024",
    finishDate: "In Course",
    title: "Computer Systems Engineering",
    institution: "Universidad Abierta Interamericana (UAI)",
    logo: uaiLogo,
  },
  {
    startDate: "2022",
    finishDate: "2022",
    title: "English Cambridge First B2 (176/190 score)",
    institution: "Liverpool English Institute",
    logo: liverpoolLogo,
  },
  {
    startDate: "2016",
    finishDate: "2022",
    title:
      "Computer Technician. Best average of the promotion (9.3/10) and National Flag Bearer",
    institution: "Instituto Técnico Industrial San Judas Tadeo",
    logo: sanJudasLogo,
  },
  {
    startDate: "2021",
    finishDate: "2021",
    title: "Responsive Web Design (300 hours)",
    institution: "freeCodeCamp",
    logo: freeCodeCampLogo,
  },
  {
    startDate: "2019",
    finishDate: "2019",
    title: "Advanced Excel Capacitation",
    institution: "Universidad Tecnológica Nacional (UTN)",
    logo: utnLogo,
  },
];

const technologies = [
  {
    name: "NodeJS",
    icon: "/technologies/node.png",
  },
  {
    name: "NestJS",
    icon: "/technologies/nestjs.png",
  },
  {
    name: "TypeScript",
    icon: "/technologies/typescript.png",
  },
  {
    name: "JavaScript",
    icon: "/technologies/js.png",
  },
  {
    name: "PHP",
    icon: "/technologies/php.png",
  },
  {
    name: "Laravel",
    icon: "/technologies/laravel.png",
  },
  {
    name: "Prisma",
    icon: "/technologies/prisma.png",
  },
  {
    name: "Rust",
    icon: "/technologies/rust.png",
  },
  {
    name: "Python",
    icon: "/technologies/python.png",
  },
  {
    name: "C#",
    icon: "/technologies/csharp.png",
  },
  {
    name: ".Net Core",
    icon: "/technologies/netcore.png",
  },
  {
    name: "Go",
    icon: "/technologies/go.png",
  },
  {
    name: "C",
    icon: "/technologies/c.png",
  },
  {
    name: "Java",
    icon: "/technologies/java.png",
  },
  {
    name: "PostgreSQL",
    icon: "/technologies/postgresql.png",
  },
  {
    name: "MySQL",
    icon: "/technologies/mysql.png",
  },
  {
    name: "MariaDB",
    icon: "/technologies/mariadb.png",
  },
  {
    name: "SQL Server",
    icon: "/technologies/sqlserver.png",
  },
  {
    name: "MongoDB",
    icon: "/technologies/mongodb.png",
  },
  {
    name: "Redis",
    icon: "/technologies/redis.png",
  },
  {
    name: "Docker",
    icon: "/technologies/docker.png",
  },
  {
    name: "Git",
    icon: "/technologies/git.png",
  },
  {
    name: "Firebase",
    icon: "/technologies/firebase.png",
  },
  {
    name: "Excel",
    icon: "/technologies/excel.png",
  },
  {
    name: "Power BI",
    icon: "/technologies/powerbi.png",
  },
];

const experience = [
  {
    startDate: "Oct 2025",
    finishDate: "Present",
    title: "Technical Project Manager / Technical Implementation",
    company: "Sortboks",
    logo: sortboksLogo,
    points: [
      "Leading an Instana implementation for a banking client, coordinating requirements, technical tasks and stakeholder communication.",
      "Designing Smart Alerts and operational workflows to support incident detection, escalation and reliability practices.",
      "Managing a cybersecurity solution involving SOC, SOAR and SIEM, including QRadar implementation details, configuration, agents and server-related requirements (Linux, Windows and FortiGate).",
      "Creating technical documentation, training material and escalation criteria for SOC L1 teams to identify and escalate real incidents.",
    ],
  },
  {
    startDate: "Sep 2025",
    finishDate: "Mar 2026",
    title: "Backend Developer (NestJS)",
    company: "NetJam Group",
    logo: netjamLogo,
    points: [
      "Built backend services and microservices with Node.js, NestJS and TypeScript, following Domain-Driven Design principles.",
      "Designed and maintained REST API endpoints, service layers and backend modules for production-oriented applications.",
      "Wrote tests and technical documentation to improve maintainability and support backend delivery.",
      "Collaborated on backend architecture decisions involving modularity, data flow and service boundaries.",
    ],
  },
  {
    startDate: "Apr 2025",
    finishDate: "Oct 2025",
    title: "Pre-Sales Engineer (IBM Power)",
    company: "IBM",
    logo: ibmLogo,
    points: [
      "Analyzed enterprise technical requirements and infrastructure challenges to design solution proposals for clients and partners.",
      "Led the Linux on Power proposal, translating platform capabilities into client-facing technical and business value.",
      "Delivered technical presentations in English and collaborated with sales, architecture and engineering teams to validate feasibility.",
      "Gained exposure to enterprise-grade infrastructure, performance, reliability and deployment considerations.",
    ],
  },
  {
    startDate: "Oct 2024",
    finishDate: "Apr 2025",
    title: "Storage & Power Pre-Sales Intern",
    company: "IBM",
    logo: ibmLogo,
    points: [
      "Implemented and led an AI on Power proposal; presented the initiative in English to the global CFO of IBM Power.",
      "Expanded from Storage pre-sales into Power, integrating with IBM infrastructure teams within six months.",
    ],
  },
  {
    startDate: "Jan 2024",
    finishDate: "Oct 2024",
    title: "Backend-Focused Full Stack Developer (Laravel / JavaScript)",
    company: "Socialnet",
    logo: socialnetLogo,
    points: [
      "Developed a web platform from scratch to manage internal and public documentation, including backend modules for tasks, procedures and integrations.",
      "Built authentication and workflow features including passwordless login, table reordering, GitLab integration, Google Docs API integration and Figma integration.",
      "Translated business needs into functional and technical specifications for the redesign of the company's main product.",
      "Contributed to core sections of the company's main application rewrite, focusing on backend logic, integrations and maintainable implementation.",
    ],
  },
  {
    startDate: "Mar 2022",
    finishDate: "Dec 2022",
    title: "Lead Developer / Product & Project Manager (Next.js, Firebase)",
    company: "Inmo",
    logo: inmoLogo,
    points: [
      "Led a team of 5 to build a real-estate software product from concept to functional prototype.",
      "Owned scope, requirements, UX direction and development execution across the product lifecycle.",
      "Built product features with Next.js and Firebase while coordinating technical decisions and delivery.",
    ],
  },
];

const projects = [
  {
    name: "MyFinances",
    description:
      "A fullstack web app where you can manage all your personal or business finances. It has authentication, Google login, filters, charts, email sending, etc. You can add, edit, filter or delete both your expenses and your budget",
    technologies: [
      "Laravel",
      "PHP",
      "React",
      "Inertia",
      "PostgreSQL (Supabase)",
      "SQLite",
      "Typescript",
      "TailwindCSS",
    ],
    link: "https://expenses-production-b141.up.railway.app",
    image: "/projects/myfinances.png",
    github: "https://github.com/alejoDiDiego/expenses/tree/main/laravel3",
  },
  {
    name: "Task Manager",
    description:
      "A Task Manager/TODO web app where you can create, edit, finish and delete your tasks. They are stored in the localStorage of your browser.",
    technologies: [
      "React",
      "React Router",
      "Typescript",
      "TailwindCSS",
      "MobX",
    ],
    link: "https://task-manager-sigma-ten.vercel.app/",
    image: "/projects/taskmanager.png",
    github: "https://github.com/alejoDiDiego/task-manager",
  },
  {
    name: "Inmo",
    description:
      "A Zillow like web app made as part of the professional practices in my last year of technical high school. You could create and edit a profile, create, edit, delete and search for properties. You could also see and search properties in a map and filter them by price, type, etc.",
    technologies: [
      "React",
      "NextJS",
      "Javascript",
      "CSS",
      "Firebase",
      "OpenStreetMaps",
      "Leaflet",
    ],
    link: "https://drive.google.com/file/d/1joz3aMSQKgs0_qHgr4DDcIgv7HG2hx45/view",
    image: "/projects/inmo.png",
    github: "",
  },
  {
    name: "CRUD",
    description:
      "Create, Read, Update and Delete web app where you can create an account and create, edit, delete and search for tasks",
    technologies: ["C#", "ASP.NET MVC", "HTML", "CSS", "Javascript", "LinQ"],
    link: "https://github.com/alejoDiDiego/CRUDandLogin",
    image: "/projects/crud.png",
    github: "https://github.com/alejoDiDiego/CRUDandLogin",
  },
  {
    name: "Hospital Management System",
    description:
      "Windows Forms app where you can add doctors, patients and schedule appointments between them",
    technologies: ["C#", "Windows Forms"],
    link: "https://github.com/alejoDiDiego/Hospital-Windows-Forms",
    image: "/projects/hospital.png",
    github: "https://github.com/alejoDiDiego/Hospital-Windows-Forms",
  },
];

// <a href="https://www.flaticon.com/free-icons/css" title="css icons">Css icons created by Pixel perfect - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/typescript" title="typescript icons">Typescript icons created by Freepik - Flaticon</a>

const contact = [
  {
    name: "Whatsapp",
    icon: "/contact/whatsapp.png",
    link: "https://wa.link/kebcjs",
    number: "+54 11 7244-4127",
  },
  {
    name: "Github",
    icon: "/contact/github.png",
    link: "https://github.com/alejoDiDiego",
    number: "",
  },
  {
    name: "LinkedIn",
    icon: "/contact/linkedin.png",
    link: "https://www.linkedin.com/in/alejo-di-diego/",
    number: "",
  },
  {
    name: "Email",
    icon: "/contact/gmail.png",
    link: "mailto:alejohernandidiego@gmail.com",
    number: "alejohernandidiego@gmail.com",
  },
];

// <a href="https://www.flaticon.com/free-icons/whatsapp" title="whatsapp icons">Whatsapp icons created by Freepik - Flaticon</a>

// <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Freepik - Flaticon</a>

// <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a>

// <a href="https://www.flaticon.com/free-icons/gmail" title="gmail icons">Gmail icons created by Freepik - Flaticon</a>

export {
  navLinks,
  services,
  education,
  experience,
  technologies,
  projects,
  contact,
};
