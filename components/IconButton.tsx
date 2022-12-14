import { ReactElement } from "react";

interface IconButtonProps {
  icon: ReactElement;
  onClick: () => void;
}

const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <button
      aria-label="Icon"
      onClick={onClick}
      type="button"
      className=" hover:fill-gray-600 transition-colors transform ease-in-out"
    >
      {icon}
    </button>
  );
};

export default IconButton;
