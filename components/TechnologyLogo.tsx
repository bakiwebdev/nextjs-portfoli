import Image from "next/image";

interface TechnologyLogoProps {
  //   name:
  //     | "next js"
  //     | "tailwind css"
  //     | "react js"
  //     | "figma"
  //     | "node js"
  //     | "express js";
  name: string;
}

const TechnologyLogo = ({ name }: TechnologyLogoProps) => {
  const getTechnologyLogoUrl = () => {
    let url = "";
    switch (name) {
      case "next js":
        url = "/images/logo/nextjslogo.jpg";
        break;
      case "tailwind css":
        url = "/images/logo/tailwindcsslogo.png";
        break;
      case "react js":
        url = "/images/logo/reactjslogo.png";
        break;
      case "flowbite":
        url = "/images/logo/flowbitelogo.jpg";
        break;
      case "figma":
        url = "/images/logo/figmalogo.png";
        break;
      case "node js":
        url = "/images/logo/nodejslogo.png";
        break;
      case "express js":
        url = "/images/logo/expressjslogo.jpg";
        break;
      default:
        url = "/images/logo/figmalogo.png";
        break;
    }

    return url;
  };

  return (
    <div className="h-10 w-10 rounded-md drop-shadow-sm">
      <Image alt="logo" src={getTechnologyLogoUrl()} width={40} height={40} />
    </div>
  );
};

export default TechnologyLogo;
