export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="py-4 min-h-lvh px-4 sm:px-0 flex flex-col justify-center"
      style={{ minHeight: "calc(100vh - 56px)" }}
    >
      <h2 className="text-2xl sm:text-2xl md:text-3xl text-center text-secondary font-bold">
        About me
      </h2>
      <div className="mt-14">
        <p className="text-center text-lg">
          I’m Jonhatan, a{" "}
          <span className="font-bold text-secondary">Full-Stack Developer</span>{" "}
          with a love for{" "}
          <span className="font-semibold text-accent">clean code</span> and{" "}
          <span className="font-semibold text-accent">
            innovative solutions
          </span>
          . Specializing in{" "}
          {["PostgreSQL", "Express", "React", "Node.js"].map((tech) => (
            <span className="font-bold" key={tech}>
              {tech}
              {", "}
            </span>
          ))}{" "}
          I build <span className="font-semibold text-accent">scalable</span>{" "}
          and{" "}
          <span className="font-semibold text-accent">
            user-friendly applications
          </span>
          . I thrive on turning{" "}
          <span className="font-semibold text-accent">complex challenges</span>{" "}
          into{" "}
          <span className="font-semibold text-accent">
            elegant, functional systems
          </span>
          .
          <br />
          Outside of coding, I enjoy{" "}
          {[
            ["🎮", "Gaming"],
            ["📚", "Reading"],
            ["🌍", "Traveling"],
            ["🎶", "Music"],
          ]
            .map(([emoji, hobby]) => (
              <span key={hobby}>
                {emoji} <span className="font-semibold">{hobby}</span>
                {", "}
              </span>
            ))
            .slice(0, -1)}
          .
          <br />
          <span className="mt-10 block text-text font-bold">
            Let’s connect and build the future!
          </span>
        </p>
      </div>
    </section>
  );
}
