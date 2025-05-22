import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutMe() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.5 });

  return (
    <>
      <section
        id="about-me"
        ref={sectionRef}
        className="py-16 px-4 sm:px-0 flex flex-col justify-center"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <motion.h2
          className="text-2xl sm:text-2xl md:text-3xl text-center text-secondary font-bold"
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          About me
        </motion.h2>
        <div className="mt-14">
          <motion.p
            className="text-center text-lg"
            initial={false}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            I’m Jonhatan, a{" "}
            <span className="font-bold text-secondary">
              Full-Stack Developer
            </span>{" "}
            with a love for{" "}
            <span className="font-semibold text-accent">clean code</span> and{" "}
            <span className="font-semibold text-accent">
              innovative solutions
            </span>
            . Specializing in{" "}
            {["PostgreSQL", "Express", "React", "Node.js"].map((tech, idx, arr) => (
              <span className="font-bold" key={tech}>
                {tech}
                {idx < arr.length - 1 ? ", " : ""}
              </span>
            ))}{" "}
            I build <span className="font-semibold text-accent">scalable</span>{" "}
            and{" "}
            <span className="font-semibold text-accent">
              user-friendly applications
            </span>
            . I thrive on turning{" "}
            <span className="font-semibold text-accent">
              complex challenges
            </span>{" "}
            into{" "}
            <span className="font-semibold text-accent">
              elegant, functional systems
            </span>
            .
            <br />
            <motion.span
              className="block mt-4"
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
            >
              Outside of coding, I enjoy{" "}
              {[
                ["🎮", "Gaming"],
                ["📚", "Reading"],
                ["🌍", "Traveling"],
                ["🎶", "Music"],
              ]
                .map(([emoji, hobby], idx, arr) => (
                  <span key={hobby}>
                    {emoji} <span className="font-semibold">{hobby}</span>
                    {idx < arr.length - 1 ? ", " : ""}
                  </span>
                ))}
              .
            </motion.span>
            <br />
            <motion.span
              className="mt-10 block text-text font-bold"
              initial={false}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
            >
              Let’s connect and build the future!
            </motion.span>
          </motion.p>
        </div>
      </section>
      <div className="h-1 w-32 mx-auto bg-gradient-to-r from-accent via-secondary to-accent rounded-full" />
    </>
  );
}