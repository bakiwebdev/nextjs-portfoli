interface CategoryCardProps {
  title: string;
  description: string;
  style?: string;
}

const CategoryCard = ({ description, title, style }: CategoryCardProps) => {
  return (
    <div className="h-48 md:h-full cursor-pointer relative p-5 flex flex-row border border-gray-200 drop-shadow-sm bg-background rounded-sm md:rounded-lg backdrop-blur-sm">
      <h3 className={`my-2 md:w-[70%] text-3xl text-gray-800 ${style}`}>
        {title}
      </h3>
      <p className="absolute bottom-0 left-0 p-5 font-thin text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default CategoryCard;
