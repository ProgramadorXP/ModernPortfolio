import "swiper/css";
import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { type Project } from "./projectsData";
// --- Modal Component ---
export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}) {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <Dialog
          open={isOpen}
          onClose={onClose}
          className="fixed z-50 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-black opacity-80"
              onClick={onClose}
              aria-hidden="true"
            />
            <motion.div
              className="relative bg-primary rounded max-w-md mx-auto p-6 z-50"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.5, type: "spring" }}
              style={{ perspective: 1000 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Dialog.Title className="text-secondary text-xl font-bold mb-2">
                {project.title}
              </Dialog.Title>
              {project.createdAt && (
                <p className="text-xs text-gray-400 mb-2">
                  Created:{" "}
                  {new Date(project.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <p className="text-text">{project.description}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-2xl hover:text-accent/70 transition-colors"
                    title="Ver proyecto"
                  >
                    <FiExternalLink />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-2xl hover:text-accent/70 transition-colors"
                    title="Ver repositorio en GitHub"
                  >
                    <FiGithub />
                  </a>
                </div>
                <button
                  className="px-4 py-2 bg-accent text-primary font-bold rounded cursor-pointer hover:bg-accent/70 transition-colors"
                  onClick={onClose}
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
