import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type HamburgerButtonProps = {
  isOpen: boolean;
  toggle: () => void;
};

const HamburgerButton = ({ isOpen, toggle }: HamburgerButtonProps) => (
  <RxHamburgerMenu
    onClick={toggle}
    aria-expanded={isOpen}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    className="text-secondary z-50 flex size-12 flex-col items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 md:hidden cursor-pointer"
  >
    <span
      className={`hamburger-line ${
        isOpen ? "translate-y-[5px] rotate-45" : ""
      }`}
    />
    <span className={`hamburger-line my-1 ${isOpen ? "opacity-0" : ""}`} />
    <span
      className={`hamburger-line ${
        isOpen ? "-translate-y-[5px] -rotate-45" : ""
      }`}
    />
  </RxHamburgerMenu>
);

type MenuProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

const Menu = ({ isOpen, closeMenu }: MenuProps) => (
  <nav
    aria-hidden={!isOpen}
    className={`fixed left-0 top-0 z-40 h-screen w-56 transform bg-primary shadow-lg transition-transform duration-300 ease-in-out md:relative md:flex md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:shadow-none ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <ul className="mt-16 space-y-4 p-4 sm:px-0 md:mt-0 md:flex md:space-y-0 md:space-x-6">
      {["Home", "About me", "Projects", "Skills", "Contact me"].map(
        (item) => (
          <li key={item}>
            <a
              href="#"
              onClick={closeMenu}
              className="block font-bold rounded-md px-4 py-2 text-secondary hover:bg-zinc-800 md:px-2 md:py-1"
            >
              {item}
            </a>
          </li>
        )
      )}
    </ul>
  </nav>
);

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <HamburgerButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      <Menu isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
        />
      )}
    </>
  );
};
