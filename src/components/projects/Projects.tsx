import { useRef } from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import "swiper/css";
import { useInView } from "framer-motion";
import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useAutoSlide } from "./hooks/useAutoSlide";
import { useProjectModal } from "./hooks/useProjectModal";

export default function Projects() {
  const swiperRef = useRef<SwiperRef | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.5,
  });

  // Auto slide functionality
  const { startAutoSlide, stopAutoSlide } = useAutoSlide(swiperRef);

  // Modal functionality
  const { isOpen, selectedProject, openModal, closeModal } = useProjectModal();

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="py-16 px-4 sm:px-0"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <h2 className="text-2xl sm:text-2xl md:text-3xl text-center text-secondary font-bold">
          Projects
        </h2>
        <div className="mt-2 sm:mt-4">
          <p className="text-center text-xl mb-14">
            Here are some of the projects I have worked on:
          </p>
          <Swiper
            ref={swiperRef}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <ProjectCard
                  project={project}
                  onClick={() => openModal(project)}
                  onMouseEnter={stopAutoSlide}
                  onMouseLeave={startAutoSlide}
                  isInView={isInView}
                  idx={idx}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <ProjectModal
            isOpen={isOpen}
            onClose={closeModal}
            project={selectedProject}
          />
        </div>
      </section>
      <div className="h-1 w-32 mx-auto bg-gradient-to-r from-accent via-secondary to-accent rounded-full" />
    </>
  );
}
