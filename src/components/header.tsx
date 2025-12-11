// import ShoppingCard from "./shopping-card";
import IconMenu from "../assets/images/icon-menu.svg";
import IconCart from "../assets/images/icon-cart.svg";
import Logo from "../assets/images/logo.svg";
import ImageAvatar from "../assets/images/image-avatar.png";
import { useState } from "react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handelChange = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="sticky z-20 flex items-center justify-between px-4 py-4 shadow-2xl">
      <div className="flex items-center justify-between space-x-4">
        <img
          src={IconMenu}
          alt="icon menu"
          className="w-4 text-gray-500 md:hidden"
          onClick={() => handelChange()}
        />
        <div className="flex gap-10">
          <img src={Logo} alt="logo" className="" />
          {/* <ul className="flex  items-center justify-center space-x-4 text-gray-400 ">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul> */}
          {/* mobile */}
          {isMenuOpen && (
            <div>
              <ul className="">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-end space-x-4">
        <img src={IconCart} alt="icon cart" />
        <img src={ImageAvatar} alt="image avatar" className="w-6" />
      </div>
    </div>
  );
}
