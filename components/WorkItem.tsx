import Image from "next/image";

interface WorkItemProps {
  title: string;
  description: string;
  image: any;
}

const WorkItem = ({ title, description, image }: WorkItemProps) => {
  return (
    <div className="mx-auto md:mx-0 flex w-fit group basis-1/2 flex-col lg:odd:pl-10 lg:odd:pr-14 lg:even:pr-10 lg:even:pl-14 md:odd:pr-4 md:even:pl-4 px-0 md:even:mt-20 md:odd:pb-20 md:even:pb-0 pb-12 cursor-pointer">
      <div>
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="rounded-lg group-hover:shadow-lg transform duration-300 bg-white"
        />
      </div>
      <div className="flex w-full flex-col self-stretch pt-6">
        <h3 className="lg:text-display-xs text-body-xl font-semibold pb-2 group-hover:underline">
          {title}
        </h3>
        <p className="lg:text-body-md text-body-sm font-normal text-neutral-700 max-w-[400px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkItem;
