interface ChallengeCardProps {
  index: number;
  header: string;
  description: string;
}

const ChallengeCard = ({ index, header, description }: ChallengeCardProps) => {
  const colorList = [
    "bg-pink-200",
    "bg-green-200",
    "bg-indigo-200",
    "bg-yellow-200",
  ];
  const random = colorList[Math.floor(Math.random() * 4)];
  return (
    <div className="relative bg-white w-full min-w-min h-fit rounded-md shadow-sm flex flex-col gap-3 p-5">
      <span
        className={`bg-pink-200 h-14 w-14 rounded-full text-lg font-bold flex justify-center items-center shadow-md absolute -top-6 md:-left-6 -left-2 ${random}`}
      >
        {index}
      </span>
      {/* reason */}
      <h1 className="text-xl text-gray-800 font-bold my-2">{header}</h1>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default ChallengeCard;
