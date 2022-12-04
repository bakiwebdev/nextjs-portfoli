import Link from "next/link";
import { motion } from "framer-motion";
import IconButton from "../IconButton";
import MenuIcon from "../icons/MenuIcon";
import { useState } from "react";
import Modal from "react-modal";
import CloseIcon from "../icons/CloseIcon";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: "#faf9f9",
    },
    content: {
      border: "none",
      background: "#faf9f9",
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: 0.4, ease: "easeInOut", duration: 0.4 },
        },
      }}
      className="sticky top-0 left-0 flex flex-row w-full justify-between items-center py-4 bg-background z-10"
    >
      {/* name */}
      <Link href="/">
        <span className="text-2xl font-bold text-text">BAKI.</span>
      </Link>
      {/* nav */}
      {!isOpen && (
        <div className="hidden md:flex flex-row justify-center items-center gap-10">
          <Link href="/">
            <span className="text-lg font-light hover:underline text-text">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="text-lg font-light hover:underline text-text">
              About
            </span>
          </Link>
          <Link href="/contact">
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
      <div className="hidden">
        {/* mobile menu */}
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
        >
          <div className="flex flex-col pt-20 gap-5 flex-1 h-full items-start">
            <h1 className="w-full h-fit text-5xl text-gray-700 font-bold flex items-center justify-between">
              Home <hr className="border-gray-700 w-20 mt-2" />
            </h1>
            <h1 className="text-5xl text-gray-500 font-bold">About</h1>
            <h1 className="text-5xl text-gray-500 font-bold">Contact</h1>
          </div>
        </Modal>
      </div>
    </motion.div>
  );
};

export default Nav;
