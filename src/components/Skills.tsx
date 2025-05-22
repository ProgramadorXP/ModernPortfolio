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
  SiDiscord,
} from "react-icons/si";

const skills = [
  { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 80 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" />, level: 85 },
  { name: "Sass", icon: <FaSass className="text-pink-400" />, level: 70 },
  {
    name: "Discord",
    icon: <SiDiscord className="text-indigo-400" />,
    level: 70,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-800" />,
    level: 75,
  },
  { name: "Express", icon: <SiExpress className="text-gray-700" />, level: 80 },
  { name: "Figma", icon: <SiFigma className="text-pink-500" />, level: 60 },
  {
    name: "GitHub",
    icon: <FaGithub className="text-black dark:text-white" />,
    level: 85,
  },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 95 },
  //{ name: "Material UI", icon: <SiMaterialui className="text-blue-500" />, level: 80 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 85 },
  {
    name: "Postman",
    icon: <SiPostman className="text-orange-500" />,
    level: 75,
  },
  { name: "React", icon: <FaReact className="text-cyan-400" />, level: 90 },
  { name: "jQuery", icon: <SiJquery className="text-blue-500" />, level: 60 },
  { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: 80 },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-cyan-500" />,
    level: 85,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-700" />,
    level: 75,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
    level: 85,
  },
  //{ name: "VSCode", icon: <SiVisualstudiocode className="text-blue-600" />, level: 90 },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
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
              className="flex flex-col items-center w-full"
              variants={itemVariants}
            >
              {/* Circular Progress */}
              <div className="relative mb-2">
                <svg className="w-16 h-16">
                  <circle
                    className="text-accent/20"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="transparent"
                    r="28"
                    cx="32"
                    cy="32"
                  />
                  <motion.circle
                    className="text-accent"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="transparent"
                    r="28"
                    cx="32"
                    cy="32"
                    strokeDasharray={2 * Math.PI * 28}
                    strokeDashoffset={2 * Math.PI * 28}
                    animate={{
                      strokeDashoffset:
                        2 * Math.PI * 28 * (1 - skill.level / 100),
                    }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-secondary">
                  {skill.level}%
                </span>
                <span className="absolute inset-0 flex items-center justify-center text-3xl">
                  {skill.icon}
                </span>
              </div>
              {/* Badge */}
              <span className="mt-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                {skill.name}
              </span>
              {/* Progress Bar */}
              <div className="w-full mt-2">
                <div className="h-2 rounded-full bg-accent/20">
                  <motion.div
                    className="h-2 rounded-full bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <div className="h-1 w-32 mx-auto bg-gradient-to-r from-accent via-secondary to-accent rounded-full" />
    </>
  );
}
