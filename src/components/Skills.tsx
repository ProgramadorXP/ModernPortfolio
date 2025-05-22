import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaSass,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiJquery,
  SiPostman,
  SiFigma,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Sass", icon: <FaSass className="text-pink-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "jQuery", icon: <SiJquery className="text-blue-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-700" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
  { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.10,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", duration: 0.7 },
  },
};

export default function Skills() {
  return (
    <>
      <section id="skills" className="py-16 px-4 sm:px-0 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center text-secondary font-bold mb-8">
          Skills
        </h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center w-full group"
              variants={itemVariants}
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Icono grande */}
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.25, rotate: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {skill.icon}
              </motion.div>
              {/* Badge */}
              <motion.span
                className="px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold shadow-sm group-hover:bg-accent group-hover:text-primary transition-colors"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <div className="h-1 w-32 mx-auto bg-gradient-to-r from-accent via-secondary to-accent rounded-full" />
    </>
  );
}
