import Link from "next/link";
import WorkItem from "./WorkItem";

interface WorksProps {
  heading: string;
  projects: project[];
}

const Works = ({ heading, projects }: WorksProps) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:py-28 py-20">
          <div className="flex">
            <h2 className="lg:mx-10 text-3xl md:text-6xl font-semibold space-y-5 tracking-wide capitalize">
              {heading}
            </h2>
          </div>
          {projects && (
            <div className="flex md:flex-row flex-col flex-wrap">
              {projects.map((project) => (
                <WorkItem
                  key={project.id}
                  id={project.id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;
