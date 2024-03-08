
import May from './images/may.jpg';
import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";



export const Experience = [
    {
      id: 1,
      date: "2016 - present",
      iconsSrc: <IoCodeWorking />,
      title: "Creative Director",
      location: "Doha, Qatar",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      id: 2,
      date: "2014 - 2016",
      iconsSrc: <IoCodeWorking />,
      title: "Creative Director",
      location: "Doha, Qatar",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      id: 3,
      date: "2012 - 2014",
      iconsSrc: <IoCodeWorking />,
      title: "Creative Director",
      location: "Doha, Qatar",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      id: 4,
      date: "2011 - 2012",
      iconsSrc: <IoCodeWorking />,
      title: "Creative Director",
      location: "Doha, Qatar",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      id: 5,
      date: "2010 - 2011",
      iconsSrc: <IoCodeWorking />,
      title: "Creative Director",
      location: "Doha, Qatar",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
  ];


  
export const Projects = [
  {
    id: 1,
    name: "Food Delivery UI Mockup",
    imageSrc: May,
    techs: "React Js, Redux, Material UI",
    github: "#",
  },
  {
    id: 2,
    name: "Full Stack Social Media App ",
    imageSrc: May,
    techs: "React Js, Sanity, Tailwind CSS",
    github: "#",
  },
  {
    id: 3,
    name: "Travel Advisor",
    imageSrc: May,
    techs: "React Js, Chakra UI, Google API",
    github: "#",
  },
  {
    id: 4,
    name: "Pintrest UI Clone 2.0 ",
    imageSrc: May,
    techs: "React Js,  Material UI",
    github: "#",
  },
  {
    id: 5,
    name: "Own Video Blog",
    imageSrc: May,
    techs: "React Js, Chara UI, Firebase",
    github: "#",
  },
  {
    id: 6,
    name: "Whatsapp UI Clone",
    imageSrc: May,
    techs: "NextJs, Firebase Auth",
    github: "#",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "#",
  },
  {
    id: 1,
    iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
    name: "YouTube",
    link: "#",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "#",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "#",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "#",
  },
];