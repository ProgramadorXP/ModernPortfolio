import { useState } from "react";
import type { Project } from "./projectsData";

export function useProjectModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return { isOpen, selectedProject, openModal, closeModal };
}