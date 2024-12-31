import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,
  // meta,
  Cyborgsapient,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  ecommerce,
  spotifyClone,
  etutor,
  rl1,
  rl2,
  rl3,
  faq,
  certificate1,
  certificate2,
  certificate3,
  certificate6,
  certificate5,
  certificate4,
  certificate7,
  certificate8,
  // threejs,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Web Developer Internship (Remote)',
    companyName: 'Cyborgsapient',
    icon: Cyborgsapient,
    iconBg: '#383E56',
    date: 'JAN 2024 - JUL 2024',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  // {
  //   title: "React Native Developer",
  //   companyName: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   companyName: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   companyName: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials: TTestimonial[] = [
  {
    name: 'Tech Trek Hackathon Season 1',
    image: certificate2,
  },
  {
     name: 'Introduction to HTML',
    image: certificate3,
  },
  {
    name: 'Practice Go',
   image: certificate4,
 },
 {
  name: 'NPTEL -  Google Cloud Computing Foundations',
 image: certificate5,
},
{
  name: 'FlutterFlow Beginners Bootcamp',
 image: certificate6,
},
{
  name: 'React Hooks Crash Course',
  image: certificate8,
},
{
  name: 'Web Development Internship',
  image: certificate1,
},
{
  name: 'Web Design Internship',
  image: certificate7,
},

];

const projects: TProject[] = [
  {
    name: 'Ecommerce',
    description:
      'I built an e-commerce website using React and Tailwind CSS that lets users search for products and add them to their cart. The site is designed to offer a smooth and user-friendly shopping experience. Hosting it on Netlify ensures it loads quickly and runs reliably. This project reflects my skills in creating responsive, interactive web applications and highlights my ability to design practical and scalable solutions for real-world users.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: ecommerce,
    sourceCodeLink: 'https://github.com/ABI17Codes/ReactEcommerce.git',
    LiveLink: 'https://react-ecommerce-frontend-website.netlify.app/',
  },
  {
    name: 'Spotify-Clone',
    description:
      'I built a web application inspired by Spotify using React and TailwindCSS It lets users play, pause, skip tracks, and choose songs from playlists. With React Router DOM, users can easily move between pages, and the app remembers playback and navigation history for a smooth experience. It also allows users to jump to specific parts of a song, making it more user-friendly. This project showcases my skills in creating real-time, interactive web applications with easy navigation and efficient state management.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: spotifyClone,
    sourceCodeLink: 'https://github.com/ABI17Codes/SpotifyClone.git',
    LiveLink: 'https://spotify-clonep-roject.netlify.app/',
  },
  {
    name: 'E-tutor-landingpage',
    description:
      'I created a dynamic landing page for the eTutor platform using React, Tailwind CSS, and Motion for animations. The smooth animations make the page more engaging and provide a seamless experience on any device. This project highlights my ability to build interactive and visually appealing web applications with modern frontend technologies, delivering a user-friendly design.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'motion',
        color: 'green-text-gradient',
      },
    ],
    image: etutor,
    sourceCodeLink: 'https://github.com/ABI17Codes/E-tutor.git',
    LiveLink: 'https://e-tutor-landingpage.vercel.app/',
  },
  {
    name: 'Landingpage',
    description:
      'I created a dynamic landing page using React and Tailwind CSS. This project highlights my ability to build interactive and visually appealing web applications with modern frontend technologies, delivering a user-friendly design.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: rl1,
    sourceCodeLink: 'https://github.com/ABI17Codes/Landing_Page.git',
    LiveLink: 'https://landing-page-phi-gold.vercel.app/',
  },
  {
    name: 'Landingpage',
    description:
      'I created a dynamic landing page using React and Tailwind CSS. This project highlights my ability to build interactive and visually appealing web applications with modern frontend technologies, delivering a user-friendly design.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'motion',
        color: 'green-text-gradient',
      },
    ],
    image: rl2,
    sourceCodeLink: 'https://github.com/ABI17Codes/Landing_Page2.git',
    LiveLink: 'https://landing-page2-drab.vercel.app/',
  },
  {
    name: 'Landingpage',
    description:
      'I created a dynamic landing page using React and Tailwind CSS. This project highlights my ability to build interactive and visually appealing web applications with modern frontend technologies, delivering a user-friendly design.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: rl3,
    sourceCodeLink: 'https://github.com/ABI17Codes/LandingPage_ShoppingWebsite.git',
    LiveLink: 'https://landing-page-shopping-website.vercel.app/',
  },
  {
    name: 'FAQ-accordion',
    description:
      'I created a dynamic FAQ-accordion using HTML, CSS and JAVASCRIPT. This project highlights my ability to build interactive and visually appealing web applications with modern frontend technologies, delivering a user-friendly design.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'JAVASCRIPT',
        color: 'green-text-gradient',
      },
    ],
    image: faq,
    sourceCodeLink: 'https://github.com/ABI17Codes/FAQ-accordion.git',
    LiveLink: 'https://faqaccordionabicodes.netlify.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
