import dynatrace from "./assets/images/dynatrace.svg";

const logotext = "Ankush Ahuja";
const meta = {
  title: "Ankush Ahuja",
  description: "Ankush Ahuja - Data Science",
};

const colors = {
  dark: {
    "bg-color": "#0b0d12",
    "primary-color": "#0e1319",
    "secondary-color": "#ffffff",
    "text-color": "#ffffff",
    "text-color-2": "#cccccc",
    "text-color-3": "#00ffb1",
    "particles-color": "#61686f",
    "overlay-color": "rgb(15 20 26 / 63%)",
  },
  light: {
    "bg-color": "#f3f5f7",
    "primary-color": "#ffffff",
    "secondary-color": "#000000",
    "text-color": "#000000",
    "text-color-2": "#333333",
    "text-color-3": "#00ffb1",
    "particles-color": "#3b3f44",
    "overlay-color": "rgb(255 255 255 / 70%)",
  },
};

const introdata = {
  title: "Ankush Ahuja",
  animated: {
    first: "Software Engineer",
    second: "Data Sciencist",
    third: "Competitive Programmer",
  },
  description: "Student specializing in data science & software engineering.",
};

const dataabout = {
  title: "Me and myself",
  aboutme:
    "I am a 17-year-old student from Austria, currently enrolled at a technical high school (HTL) in the Department of Information Technology, specializing in data science.",
};
const worktimeline = [
  {
    jobtitle: "Software Engineering Intern",
    where: "Dynatrace",
    img: dynatrace,
    date: "Jul 2023 - Aug 2023",
  },
];

const dataportfolio = [
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/800/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },

  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/550/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "aahuja06@proton.me",
  description:
    "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/ahujaankush",
  linkedin: "https://linkedin.com/in/ahujaankush",
  twitter: "https://twitter.com",
};
export {
  meta,
  colors,
  dataabout,
  dataportfolio,
  worktimeline,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
