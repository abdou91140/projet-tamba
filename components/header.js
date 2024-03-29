import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";

const navigation = [
  { name: "Acceuil", href: "/" },
  { name: "Présentation", href: "/about" },
  { name: "Les projets", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
<nav className="header-bg">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-32 items-center justify-between">
      {/* Mobile menu button */}
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-main-color hover:bg-gray hover:text-yellow focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow"
          aria-controls="mobile-menu"
          aria-expanded={open}
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          <MenuIcon className="block h-6 w-6" />
          <XIcon className="hidden h-6 w-6" />
        </button>
      </div>

      {/* Logo */}
      <div className="flex-shrink-0 items-center ml-auto sm:ml-0">
        <img className="w-20" src="images/logo.png" alt="Logo" />
      </div>

      {/* Main navigation for larger screens */}
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-main-color hover:text-yellow-600"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Mobile menu for smaller screens */}
  {open && (
    <div className="sm:hidden" id="mobile-menu">
      <div className="flex flex-wrap flex-col space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="font-medium text-main-color hover:text-yellow-600"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  )}
</nav>


  );
}
