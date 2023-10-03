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

const navLinks = [
  {
    id: "about",
    title: "About",
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
    title: "Frontend Developer",
    icon: front,
  },
  {
    title: "Backend Developer",
    icon: back,
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
    startDate: "2023",
    finishDate: "2023",
    title: "Industrial Engineering",
    institution: "Universidad Nacional de la Matanza",
    logo: unlamLogo,
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
    startDate: "2020",
    finishDate: "2020",
    title: "Power BI - Data Analysis and Business Intelligence Course",
    institution: "Udemy",
    logo: udemyLogo,
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
    name: "HTML",
    icon: "/technologies/html.png",
  },
  {
    name: "CSS",
    icon: "/technologies/css.png",
  },
  {
    name: "Javascript",
    icon: "/technologies/js.png",
  },
  {
    name: "Typescript",
    icon: "/technologies/typescript.png",
  },
  {
    name: "React",
    icon: "/technologies/react.png",
  },
  {
    name: "NextJS",
    icon: "/technologies/nextjs.png",
  },
  {
    name: "NodeJS",
    icon: "/technologies/node.png",
  },
  {
    name: "TailwindCSS",
    icon: "/technologies/tailwind.png",
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
    name: "Python",
    icon: "/technologies/python.png",
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
    name: "Go",
    icon: "/technologies/go.png",
  },
  {
    name: "MySQL",
    icon: "/technologies/mysql.png",
  },
  {
    name: "PostgreSQL",
    icon: "/technologies/postgresql.png",
  },
  {
    name: "SQL Server",
    icon: "/technologies/sqlserver.png",
  },
  {
    name: "Firebase",
    icon: "/technologies/firebase.png",
  },
  {
    name: "Git",
    icon: "/technologies/git.png",
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

const projects = [
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
    name: "Tic Tac Toe",
    description:
      "A Tic Tac Toe player vs player game that counts the matches and wins.",
    technologies: ["React", "NextJS", "Typescript", "TailwindCSS", "CSS"],
    link: "https://tictactoe-brown-iota.vercel.app/",
    image: "/projects/tictactoe.png",
    github: "https://github.com/alejoDiDiego/tictactoe",
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
  {
    name: "Color Changer",
    description:
      "Simple web page where you can change the background color by clicking a button. ",
    technologies: ["React", "Javascript", "CSS", "TailwindCSS"],
    link: "https://alejodidiego.github.io/color-changer/",
    image: "/projects/colorchanger.png",
    github: "https://github.com/alejoDiDiego/color-changer",
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
    number: "+54 11 3950-0991",
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

export { navLinks, services, education, technologies, projects, contact };
