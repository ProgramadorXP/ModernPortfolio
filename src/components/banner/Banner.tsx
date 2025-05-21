import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import yoImage from "../../assets/images/yo.jpeg";

export default function Banner() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.5 });

  return (
    <>
      <section
        ref={sectionRef}
        className="relative -z-50 flex flex-col items-center justify-center w-full px-4 sm:px-0"
        style={{ height: "calc(100vh - 56px)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl">
          <motion.img
            src={yoImage}
            alt="Profile"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-secondary transition-transform duration-300 hover:scale-105"
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, type: "spring" }}
          />
          <motion.div
            className="text-center md:text-left flex flex-col gap-4"
            initial={false}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary"
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              💻 Full-stack web developer
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-text font-medium"
              initial={false}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Focused on the{" "}
              <span className="text-secondary font-bold">PERN</span> stack
              (PostgreSQL, Express, React, Node.js).
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row sm:justify-center md:justify-start items-center gap-4 mt-2"
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href={"/cv/CV.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary border-accent border-2 px-6 py-2 rounded-lg font-semibold shadow hover:bg-accent hover:text-primary transition-colors duration-200"
              >
                Download CV
              </a>
              <div className="flex gap-4 text-2xl mt-2 sm:mt-0">
                <a
                  href="https://github.com/ProgramadorXP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent transition-colors duration-200"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/jonhatanvillalobos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent transition-colors duration-200"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div className="h-1 w-32 mx-auto bg-gradient-to-r from-accent via-secondary to-accent rounded-full" />
    </>
  );
}