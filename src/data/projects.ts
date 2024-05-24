import StaticImageData from "next/image";
import twitchClone from "/public/images/twitch.png";
import messenger from "/public/images/messenger.png";
import portfolio from "/public/images/portfolio.png";
import taskify from "/public/images/taskify.png";
import modernTasklist from "/public/images/tasklist.png";

export type Project = {
  label: string;
  image: typeof StaticImageData;
  description: string;
  technologies: {
    icon: string;
  }[];
  href: string;
  github: string;
};

export const projects: Project[] = [
  {
    label: "Twitch Clone",
    image: twitchClone,
    description:
      "This project is a twitch clone. You can upload yout images by uploadthing and live stram your stream using live kit that create a stream key that you connects into OBS or other streaming program. Functionality of this app is nearly same a twitch, you can also fallow and block people, manage community and chatting in live time.",
    technologies: [
      {
        icon: "/svgs/typescript.svg",
      },
      {
        icon: "/svgs/next-js.svg",
      },
      {
        icon: "/svgs/tailwind-css.svg",
      },
      {
        icon: "/svgs/prisma.svg",
      },
      {
        icon: "/svgs/mysql.svg",
      },
    ],
    href: "https://digital-marketplace-production-80c9.up.railway.app/",
    github: "https://github.com/JarGad23/digital-marketplace",
  },
  {
    label: "Taskify",
    image: taskify,
    description:
      "This is a trello clone named Taskify. Here you can create board and add tasks to them all in organized format. This project is build using Next.js, Typescript, Prisma and new Next js server actions. For the database i choose MySql and alos this project accepts payments via Stripe. Authentication flow is handled by clerk which provides security for the entire app.",
    technologies: [
      {
        icon: "/svgs/typescript.svg",
      },
      {
        icon: "/svgs/next-js.svg",
      },
      {
        icon: "/svgs/tailwind-css.svg",
      },
      {
        icon: "/svgs/prisma.svg",
      },
      {
        icon: "/svgs/mysql.svg",
      },
    ],
    href: "https://trello-app-lovat.vercel.app",
    github: "https://github.com/JarGad23/trello-app",
  },
  {
    label: "Moder tasklist",
    image: modernTasklist,
    description:
      "This is a small project where users can store their tasks. Also like the other this project is build on top of the Next.Js, Typescript, Prisma, MongoDB and for styling Tailwind CSS. At this project i use both API and server actions to manage app workflow.",
    technologies: [
      {
        icon: "/svgs/typescript.svg",
      },
      {
        icon: "/svgs/next-js.svg",
      },
      {
        icon: "/svgs/tailwind-css.svg",
      },
      {
        icon: "/svgs/prisma.svg",
      },
      {
        icon: "/svgs/mongodb.svg",
      },
    ],
    href: "https://modern-task-list.vercel.app",
    github: "https://github.com/JarGad23/modern-task-list",
  },
  {
    label: "Messenger clone",
    image: messenger,
    description:
      "This is a messenger clone. Project is build using Pusher, that allows you to send messages in real-time. Project is build using Next.js, TypeScript, Tailwind CSS, MongoDB, and Prisma. The entire app workflow is build using APIs. Also a this project I decided to self handle authentication which allows to more flexibility when it comes to users managment.",
    technologies: [
      {
        icon: "/svgs/typescript.svg",
      },
      {
        icon: "/svgs/next-js.svg",
      },
      {
        icon: "/svgs/tailwind-css.svg",
      },
      {
        icon: "/svgs/prisma.svg",
      },
      {
        icon: "/svgs/mongodb.svg",
      },
    ],
    href: "https://messenger-clone-jarosz23.vercel.app",
    github: "https://github.com/JarGad23/messenger-clone",
  },
  {
    label: "Personal Portfolio",
    image: portfolio,
    description:
      "Personal Portfolio project helps better present my self. Here I add information about me and give you a chance to known me better. To build this I used Next.js Typescript Tailwind CSS, Framer Motion and React Email. I took time to create a great looking and animated design. Also is my first project using framer motion.",
    technologies: [
      {
        icon: "/svgs/typescript.svg",
      },
      {
        icon: "/svgs/next-js.svg",
      },
      {
        icon: "/svgs/tailwind-css.svg",
      },
    ],
    href: "https://personal-portfolio-nine-orpin.vercel.app/",
    github: "https://github.com/JarGad23/personal-portfolio",
  },
];
