import { useEffect, useState } from "react";
import { HamburgerMenu } from "./HamburgerButton";
import { IoCodeSlash } from "react-icons/io5";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 h-14 flex justify-between items-center px-4 transition-colors duration-300 ${scrolled ? "bg-primary shadow-lg" : "bg-transparent"}`}>
      {/** Looking for logo */}
      <div>
        <IoCodeSlash className="text-secondary size-12 p-2" />
      </div>
      <HamburgerMenu />
    </header>
  );
}
