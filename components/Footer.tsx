import Image from "next/image";
import Link from "next/link";
import IconButton from "./IconButton";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import TwitterIcon from "./icons/TwitterIcon";

const Footer = () => {
  const handleTwitterClick = () => {
    window.open("https://twitter.com/bakiwebdev");
  };
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/bakiwebdev/");
  };
  const handleGithubClick = () => {
    window.open("https://github.com/bakiwebdev");
  };

  return (
    <footer className="text-gray-600 body-font border-t border-gray-200 mt-10">
      <div className="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <Image
            src="/images/profile.jpg"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full object-cover h-8 w-8 md:h-12 md:w-12"
          />
          <span className="ml-3 text-xl">Baki Web Dev</span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          2023 Bakiwebdev
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start fill-gray-400 gap-5">
          <IconButton icon={<TwitterIcon />} onClick={handleTwitterClick} />
          <IconButton icon={<LinkedinIcon />} onClick={handleLinkedInClick} />
          <IconButton icon={<GithubIcon />} onClick={handleGithubClick} />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
