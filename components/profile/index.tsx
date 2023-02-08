import Image from "next/image";
import IconButton from "../IconButton";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import TwitterIcon from "../icons/TwitterIcon";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Profile = () => {
  const handleTwitterClick = () => {
    window.open("https://twitter.com/bakiwebdev");
  };
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/bakiwebdev/");
  };
  const handleGithubClick = () => {
    window.open("https://github.com/bakiwebdev");
  };

  // useEffect(() => {
  //   gsap.to(".headerText", { duration: 2, backgroundColor: "#003284" });
  // }, []);

  return (
    <div className="relative w-full h-fit px-2 md:px-16 py-16 md:py-20 flex flex-col justify-between gap-4">
      {/* profile image */}
      <Image
        src="/images/profile.jpg"
        alt="profile"
        width={100}
        height={100}
        className="rounded-full object-cover h-12 w-12 md:h-20 md:w-20"
      />
      <div className="py-3 md:py-5">
        <h1 className="text-2xl md:text-6xl font-semibold space-y-5 tracking-wide capitalize">
          Experienced UI/UX designer <br /> and Web developer
        </h1>
      </div>
      <p className="text-gray-600 text-md leading-loose md:text-2xl tracking-wider md:leading-loose">
        <strong>a Web Developer and creative UI/UX Designer!</strong> My
        superpowers lie in developing sites with Next.js, Tailwind CSS, and
        other tools to create amazing web applications that users love (❤️) and
        businesses appreciate. I love to combine my artistic flair with my
        technical know-how to make products that are both visually delightful
        and highly efficient.
      </p>
      <button className="w-fit px-10 py-3 bg-gray-800 text-white cursor-pointer rounded-md flex justify-center items-center gap-5 active:bg-gray-700">
        <span>Say Hello</span>
        <span className="text-2xl">👋</span>
      </button>
      {/* Social Links */}
      <div className="py-6 flex flex-row justify-start items-center gap-8 lg:gap-14 fill-gray-400">
        <IconButton icon={<TwitterIcon />} onClick={handleTwitterClick} />
        <IconButton icon={<LinkedinIcon />} onClick={handleLinkedInClick} />
        <IconButton icon={<GithubIcon />} onClick={handleGithubClick} />
      </div>
    </div>
  );
};

export default Profile;
