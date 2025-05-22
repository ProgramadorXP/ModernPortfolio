import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { IoCodeSlash } from "react-icons/io5";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`max-w-5xl mx-auto sticky top-0 z-50 h-14 flex justify-between items-center px-4 sm:px-0 transition-colors duration-300 ${scrolled ? "bg-primary shadow-lg" : "bg-transparent"}`}>
      <a href="/">
        <IoCodeSlash className="text-secondary size-12" />
      </a>
      <HamburgerMenu />
    </header>
  );
}
