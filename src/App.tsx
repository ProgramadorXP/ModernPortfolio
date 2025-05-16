import Banner from "./components/banner/Banner"
import Header from "./components/header/Header"
import ParticleBanner from "./components/banner/ParticleBanner"
import AboutMe from "./components/AboutMe"

function App() {
  return (
    <>
      {/* Particle background */}
      <ParticleBanner />
      {/* Main content */}
      <div className="w-full max-w-5xl mx-auto min-h-lvh relative z-10">
        <Header />
        <Banner />
        <AboutMe />
      </div>
    </>
  )
}

export default App
