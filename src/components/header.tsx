// import ShoppingCard from "./shopping-card";
import IconMenu from "../assets/images/icon-menu.svg";
import IconClose from "../assets/images/icon-close.svg";
import IconCart from "../assets/images/icon-cart.svg";
import Logo from "../assets/images/logo.svg";
import ImageAvatar from "../assets/images/image-avatar.png";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <>
      <header className="sticky top-0 z-20 flex min-w-[259px] items-center justify-between bg-white px-4 py-4 shadow-md">
        {/* left : Logo + menu */}
        <div className="flex items-center gap-4">
          {/* Bouton menu mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="icon menu"
            aria-expanded={isMenuOpen}
          >
            <img src={IconMenu} alt="Menu" className="w-4" />
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Sneakers logo" className="h-5 md:h-7" />
          </div>

          {/* Menu desktop */}
          <nav className="ml-8 hidden md:block">
            <ul className="flex items-center gap-6 text-gray-500">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="relative inline-block py-2 text-sm transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-orange-500 after:transition-all hover:text-black hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* right */}
        <div className="flex items-center gap-4">
          {/*cart */}
          <button className="relative p-1" aria-label="Panier">
            <img src={IconCart} alt="Cart" className="h-5 w-5" />
          </button>

          {/* Avatar */}
          <button className="rounded-full border-2 border-transparent transition-colors hover:border-orange-500">
            <img
              src={ImageAvatar}
              alt="Avatar"
              className="h-8 w-8 rounded-full md:h-10 md:w-10"
            />
          </button>
        </div>
      </header>

      {/* Menu mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/70 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Menu mobile */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 transform bg-white p-6 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close menu */}
        <button onClick={closeMenu} className="mb-10" aria-label="Close">
          <img src={IconClose} alt="Close menu" className="w-4" />
        </button>

        {/* mobile */}
        <nav>
          <ul className="space-y-5">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block py-1 text-lg font-bold text-black transition-colors hover:text-orange-500"
                  onClick={closeMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
