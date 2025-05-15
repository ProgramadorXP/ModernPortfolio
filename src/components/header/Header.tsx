import { HamburgerMenu } from "./HamburgerButton";

export default function Header() {
  return (
    <h1 className="fixed inset-0 h-14 flex justify-between items-center px-4">
      {/** Looking for logo */}
      <div></div>
      <HamburgerMenu />
    </h1>
  );
}
