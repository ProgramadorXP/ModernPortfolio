import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import HamburgerButton from "./HamburgerButton";
import Menu from "./Menu";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HamburgerButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        {/* Menu mobile */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 md:hidden"
      >
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex">
          <DialogPanel className="w-56 bg-primary shadow-lg h-full">
            <Menu isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
          </DialogPanel>
        </div>
      </Dialog>
        {/* Menu desktop/tablet always visible */}
      <div className="hidden md:block">
        <Menu isOpen={true} closeMenu={() => {}} />
      </div>
    </>
  );
}
