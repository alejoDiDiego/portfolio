const front = "/programming.png";
const back = "/development.png";

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
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "Industria Engineering",
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
    finishDate: "2018",
    title: "English",
    institution: "Edison English Instituo",
    logo: edisonLogo,
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
    title: "Power BI - Data Analysis andBusiness Intelligence Course",
    institution: "Udemy",
    logo: udemyLogo,
  },
  {
    startDate: "2019",
    finishDate: "2019",
    title: "Advanced Excel Capacitation",
    institution: "Udemy",
    logo: utnLogo,
  },
];

export { navLinks, services, education };
