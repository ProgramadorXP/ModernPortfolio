import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import ParticleBanner from "./components/banner/ParticleBanner";
import AboutMe from "./components/AboutMe";
import Projects from "./components/projects/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      {/* Particle background */}
      <ParticleBanner />
      <Header />
      <div
        id="home"
        className="w-full max-w-5xl mx-auto min-h-lvh relative z-10 overflow-x-hidden"
      >
        <Banner />
        <AboutMe />
        <Projects />
        <Skills />
      </div>
    </>
  );
}

export default App;
