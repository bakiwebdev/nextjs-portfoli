import Link from "next/link";

interface CategoryCardProps {
  title: string;
  description: string;
  link: string;
  style?: string;
}

const CategoryCard = ({
  description,
  title,
  link,
  style,
}: CategoryCardProps) => {
  return (
    <Link href={link}>
      <div className="z-10 h-56 md:h-full cursor-pointer relative p-5 flex flex-row border border-gray-200 drop-shadow-sm  rounded-sm md:rounded-lg hover:shadow-lg transform duration-300 bg-background/50">
        <h3
          className={`my-2 md:w-[70%] text-3xl md:text-xl text-gray-800 ${style}`}
        >
          {title}
        </h3>
        <p className="absolute bottom-0 left-0 p-5 font-thin text-gray-400">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
