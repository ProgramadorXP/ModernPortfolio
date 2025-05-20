import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import ParticleBanner from "./components/banner/ParticleBanner";
import AboutMe from "./components/AboutMe";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      {/* Particle background */}
      <ParticleBanner />
      {/* Main content */}
      <div
        id="home"
        className="w-full max-w-5xl mx-auto min-h-lvh relative z-10"
      >
        <Header />
        <Banner />
        <AboutMe />
        <Projects />
      </div>
    </>
  );
}

export default App;
