import Link from "next/link";
import WorkItem from "./WorkItem";

interface WorksProps {
  heading: string;
}

const Works = ({ heading }: WorksProps) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:py-28 py-20">
          <div className="flex">
            <h2 className="lg:mx-10 text-3xl md:text-6xl font-semibold space-y-5 tracking-wide capitalize">
              {heading}
            </h2>
          </div>
          <div className="flex md:flex-row flex-col flex-wrap">
            {[1, 2, 3, 4].map((item, index) => (
              <WorkItem
                key={index}
                image={"/images/ice-cream.png"}
                title={"Ice Cream App Concept"}
                description={
                  "Nibh tellus ut suspendisse porttitor. Vivamus sit tincidunt bibendum a etiam fringilla quis nisl. Amet eget et, lacus, ullamcorper lectus ullamcorper amet."
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
