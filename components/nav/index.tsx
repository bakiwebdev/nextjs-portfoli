import Link from "next/link";
import IconButton from "../IconButton";
import MenuIcon from "../icons/MenuIcon";
import { useEffect, useState } from "react";
// import { gsap } from "gsap";
import Modal from "react-modal";
import CloseIcon from "../icons/CloseIcon";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // let tl = gsap.timeline();

  const customStyles = {
    overlay: {
      zIndex: 10,
      backgroundColor: "#faf9f9",
    },
    content: {
      border: "none",
      background: "#faf9f9",
    },
  };

  // useEffect(() => {
  //   tl.to(".brand-name", { duration: 1, scale: 2, ease: "back" })
  //   tl.from(".nav", {duration: 1, opacity: '100%', x: 20})
  // }, [tl]);

  return (
    <div className="sticky top-0 left-0 flex flex-row w-full justify-between items-center py-4 rounded-b-md backdrop-blur-sm z-20">
      {/* name */}
      <Link className={"brand-name"} href="/">
        <span className="text-2xl font-bold text-text">BAKI.</span>
      </Link>
      {/* nav */}
      {!isOpen && (
        <div className="hidden md:flex flex-row justify-center items-center gap-10">
          <Link className={"nav"} href="/">
            <span className="text-lg font-light hover:underline text-text">
              Home
            </span>
          </Link>
          <Link className={"nav"} href="/about">
            <span className="text-lg font-light hover:underline text-text">
              About
            </span>
          </Link>
          <Link className={"nav"} href="/contact">
            <span className="text-lg font-light hover:underline text-text">
              Contact
            </span>
          </Link>
        </div>
      )}
      {/* mobile menu button */}
      <div className="md:hidden">
        <IconButton
          icon={isOpen ? <CloseIcon /> : <MenuIcon />}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className="hidden z-20">
        {/* mobile menu */}
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
        >
          <div className="flex flex-col pt-20 gap-5 flex-1 h-full items-start bg-background z-20">
            <Link href="/">
              <h1 className="w-full h-fit text-5xl text-gray-700 font-bold flex items-center justify-between">
                Home <hr className="border-gray-700 w-20 mt-2" />
              </h1>
            </Link>
            <Link href="/about">
              <h1 className="text-5xl text-gray-500 font-bold">About</h1>
            </Link>
            <Link href="/contact">
              <h1 className="text-5xl text-gray-500 font-bold">Contact</h1>
            </Link>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Nav;
