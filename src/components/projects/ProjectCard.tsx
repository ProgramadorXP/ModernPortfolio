import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { type Project } from "./projectsData";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isInView: boolean;
  idx: number;
}

export default function ProjectCard({
  project,
  onClick,
  onMouseEnter,
  onMouseLeave,
  isInView,
  idx,
}: ProjectCardProps) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.25}
      scale={1.04}
      transitionSpeed={1500}
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      className="h-full"
    >
      <motion.div
        className="rounded-lg p-4 cursor-pointer"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{
          duration: 1,
          delay: idx * 0.15,
          type: "spring",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 sm:h-40 object-cover rounded"
        />
        <h3 className="text-text mt-4 text-lg font-semibold">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm mt-2 text-gray-400 truncate">
          {project.description}
        </p>
      </motion.div>
    </Tilt>
  );
}
