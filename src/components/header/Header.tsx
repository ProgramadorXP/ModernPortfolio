import { HamburgerMenu } from "./HamburgerButton";
import { IoCodeSlash } from "react-icons/io5";

export default function Header() {
  return (
    <h1 className="fixed inset-0 h-14 flex justify-between items-center px-4 bg-primary">
      {/** Looking for logo */}
      <div>
        <IoCodeSlash className="text-secondary size-12 p-2" />
      </div>
      <HamburgerMenu />
    </h1>
  );
}
