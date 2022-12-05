import Image from "next/image";
import IconButton from "../IconButton";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import TwitterIcon from "../icons/TwitterIcon";

const Profile = () => {
  const handleTwitterClick = () => {
    window.open("https://twitter.com/bakiwebdev");
  };
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/biruk-endris/");
  };
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/endris.biruk/");
  };
  const handleGithubClick = () => {
    window.open("https://github.com/Biruk-hub");
  };

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
          Experienced UI/UX designer <br /> and front-end developer
        </h1>
      </div>
      <p className="text-gray-600 text-md leading-loose md:text-2xl tracking-wider md:leading-loose">
        {/* Hi there! I&apos;m Biruk,{" "}
        <strong>a creative UI/UX Designer and Front-End Dev</strong>. I&apos;m
        passionate about building products that look <strong>good</strong>, <strong>work fast</strong>, and <strong>make people happy</strong>. I specialize in Next.js, Tailwind CSS, and making awesome
        web apps. Let me help make your product vision a reality! */}
        Hi there, I&apos;m Biruk, <strong>a creative UI/UX Designer and Front-End Developer!</strong> My superpowers lie in developing sites with Next.js, Tailwind CSS, and other tools to create amazing web applications that users love (❤️) and businesses appreciate. I love to combine my artistic flair with my technical know-how to make products that are both visually delightful and highly efficient.
      </p>
      {/* Social Links */}
      <div className="py-6 flex flex-row justify-start items-center gap-8 lg:gap-14 fill-gray-400">
        <IconButton icon={<TwitterIcon />} onClick={handleTwitterClick} />
        <IconButton icon={<LinkedinIcon />} onClick={handleLinkedInClick} />
        <IconButton icon={<InstagramIcon />} onClick={handleInstagramClick} />
        <IconButton icon={<GithubIcon />} onClick={handleGithubClick} />
      </div>
    </div>
  );
};

export default Profile;
