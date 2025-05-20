import { RxHamburgerMenu } from "react-icons/rx";

type HamburgerButtonProps = {
  isOpen: boolean;
  toggle: () => void;
};

export default function HamburgerButton({ isOpen, toggle }: HamburgerButtonProps) {
  return (
    <RxHamburgerMenu
      onClick={toggle}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="text-secondary z-50 flex size-12 flex-col items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 md:hidden cursor-pointer"
    >
      <span
        className={`hamburger-line ${isOpen ? "translate-y-[5px] rotate-45" : ""}`}
      />
      <span className={`hamburger-line my-1 ${isOpen ? "opacity-0" : ""}`} />
      <span
        className={`hamburger-line ${isOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
      />
    </RxHamburgerMenu>
  );
}