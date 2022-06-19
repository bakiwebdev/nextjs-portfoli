import Link from "next/link";

import { motion } from "framer-motion";
const Nav = () => {
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
      className="flex flex-row w-full justify-between items-center my-4"
    >
      {/* name */}
      <Link href="/">
        <a className="text-2xl font-bold text-text">BAKI.</a>
      </Link>
      {/* nav */}
      <div className="flex flex-row justify-center items-center gap-10">
        <Link href="/">
          <a className="text-lg font-light hover:underline text-text">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-lg font-light hover:underline text-text">About</a>
        </Link>
        <Link href="/contact">
          <a className="text-lg font-light hover:underline text-text">Contact</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default Nav;
