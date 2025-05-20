type Section = {
  label: string;
  id: string;
};

const sections: Section[] = [
  { label: "Home", id: "home" },
  { label: "About me", id: "about-me" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact me", id: "contact-me" },
];

type MenuProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

export default function Menu({ isOpen, closeMenu }: MenuProps) {
  return (
    <nav
      aria-hidden={!isOpen}
      className={`fixed left-0 top-0 z-40 h-screen w-56 transform bg-primary shadow-lg transition-transform duration-300 ease-in-out md:relative md:flex md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:shadow-none ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="mt-16 space-y-4 p-4 sm:px-0 md:mt-0 md:flex md:space-y-0 md:space-x-6">
        {sections.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={closeMenu}
              className="block font-bold rounded-md px-4 py-2 text-secondary hover:bg-zinc-800 md:px-2 md:py-1"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}