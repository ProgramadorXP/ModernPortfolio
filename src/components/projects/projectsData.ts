export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "JSON Placeholder API",
    description: "Consuming almost all data from the api and show it in my app. Using React, CSS, HTML, React-hook-form, TanStack Query, Material UI, axios & more.",
    image: "/projects/project-1.png",
    url: "https://json-placeholder-app.netlify.app/",
    github: "https://github.com/ProgramadorXP/JSON-Placeholder-API",
  },
  {
    title: "The CocktailDB",
    description: "Query the 'TheCocktailDB' API to interact with its data and display it in the app. Technologies used: React, react router dom, tailwind css, zod, zustand, axios, heroicons, headlessui with performance improvements using react's lazy and suspense.",
    image: "/projects/project-2.png",
    url: "https://phenomenal-otter-9e4904.netlify.app/",
    github: "https://github.com/ProgramadorXP/bebidas-react-typescript",
  },
  {
    title: "Patient Control",
    description: "This is a patient control application using React, TypeScript, Tailwind CSS, zustand, uuidv4, react-toastify, react-hook-form.",
    image: "/projects/project-3.png",
    url: "https://pacientes-zustand.netlify.app/",
    github: "https://github.com/ProgramadorXP/pacientes-zustand",
  },
  {
    title: "GuitarLA",
    description: "Simulating the purchase of guitars to add them to the cart. Technologies used: React, TypeScript.",
    image: "/projects/project-4.png",
    url: "https://guitarlatsreducer.netlify.app/",
    github: "https://github.com/ProgramadorXP/guitarLA-TS",
  },
  // Agrega más proyectos aquí
];