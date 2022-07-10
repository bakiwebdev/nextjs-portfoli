import type { NextPage } from "next";
import Nav from "../components/nav";
import Profile from "../components/profile";

const Home: NextPage = () => {
  return (
    <div className="">
      <Nav />
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { delay: 0.5 } },
        }}
        className="absolute top-0 left-0 bg-green-500 w-screen h-screen flex justify-center items-center"
      >
        full screen
      </motion.div> */}
      <Profile />
    </div>
  );
};

export default Home;
