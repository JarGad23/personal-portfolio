const caseCobra = "/images/case-cobra.png";
const portfolio = "/images/portfolio.png";
const nextCrypto = "/images/next-crypto.png";
const focusFlow = "/images/focus-flow.png";
const financeManager = "/images/finance-manager.png";
const notionClone = "/images/notion-clone.png";
const dualingoClone = "/images/dualingo-clone.png";

export type Project = {
  label: string;
  image: string;
  description: string;
  technologies: {
    icon: string;
  }[];
  href: string;
  github: string;
};

export const projects: Project[] = [
  {
    label: "FocusFlow",
    image: focusFlow,
    description:
      "FocusFlow is an intuitive task management and event scheduling app featuring a sleek, Google Calendar-style interface. With its user-friendly design, you can effortlessly manage your calendar, track tasks, and plan events, all built using Next.js and server actions. I had a great time building this app, and its functional elegance taught me a lot about creating a seamless user experience.",
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
        icon: "/svgs/node.svg",
      },
    ],
    href: "https://focus-flow-one.vercel.app",
    github: "https://github.com/JarGad23/focus-flow",
  },
  {
    label: "Next Crypto",
    image: nextCrypto,
    description:
      "Next Crypto is a dynamic application that simulates the cryptocurrency market, allowing users to add, sell, and manage their tokens, as well as check transactions and buy tokens from others. The app boasts a beautiful and easy-to-use interface, crafted with Next.js and TRPc. Building this app was an exciting journey, and I learned a lot about the complexities of cryptocurrency trading.",
    technologies: [
      {
        icon: "/svgs/js.svg",
      },
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
    ],
    href: "https://next-crypto-marketplace.vercel.app",
    github: "https://github.com/JarGad23/next-14-crypto-marketplace",
  },
  {
    label: "CaseCobra",
    image: caseCobra,
    description:
      "CaseCobra lets you create custom phone cases with your chosen images, featuring a clean and clear UI. It integrates Stripe for smooth payment processing and is built with Next.js, ensuring an easy editing experience to perfectly fit your image on the case. I truly enjoyed developing this app, and it was incredibly rewarding to see how a simple idea could be transformed into a personalized product.",
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
    href: "https://casecobra-liart.vercel.app",
    github: "https://github.com/JarGad23/custom-case-shop",
  },
  {
    label: "Finance Manager",
    image: financeManager,
    description:
      "Finance Manager is an intuitive app designed to help you manage your finances, track expenses, and budget effectively. Featuring a sleek and user-friendly interface, it simplifies financial management, built with Next.js and server actions. Creating this app was a fulfilling experience, and I learned a lot about the importance of personal finance and how to present it seamlessly to users.",
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
        icon: "/svgs/node.svg",
      },
      {
        icon: "/svgs/mysql.svg",
      },
    ],
    href: "https://finance-manager-lovat.vercel.app",
    github: "https://github.com/JarGad23/finance-manager",
  },
  {
    label: "Dualingo clone",
    image: dualingoClone,
    description:
      "The Duolingo Clone is an engaging language-learning app that offers interactive lessons and quizzes to help users master new languages. Its beautiful and intuitive design ensures a pleasant learning experience, crafted using Next.js and server actions. I had an enjoyable time developing this app, and it was incredibly rewarding to create something that makes language learning fun and accessible.",
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
        icon: "/svgs/node.svg",
      },
      {
        icon: "/svgs/mongodb.svg",
      },
    ],
    href: "https://duolingo-clone-zeta.vercel.app",
    github: "https://github.com/JarGad23/duolingo-clone",
  },
  {
    label: "Notion Clone",
    image: notionClone,
    description:
      "The Notion Clone is a versatile and easy-to-use note-taking and organization app that mimics the functionality of Notion. With a clean and modern interface, it allows users to create notes, manage projects, and collaborate efficiently, all developed with Next.js and server actions. Building this app was a delightful challenge, and I gained valuable insights into the power of productivity tools.",
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
    href: "https://note-app-delta.vercel.app",
    github: "https://github.com/JarGad23/notion-clone",
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
