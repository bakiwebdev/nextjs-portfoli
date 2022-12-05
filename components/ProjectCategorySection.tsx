import CategoryCard from "./CategoryCard";

const ProjectCategorySection = () => {
  return (
    <section className="relative w-full h-fit px-2 md:px-16 py-16 md:py-20 flex flex-col justify-between gap-4">
      <h1 className="text-2xl md:text-6xl font-semibold space-y-5 tracking-wide capitalize">
        Unearth my latest creations!
      </h1>
      <section className="mx-auto w-full h-[40rem] md:h-[20rem] lg:h-[30rem] my-10 grid md:grid-cols-3 gap-5 ">
        <CategoryCard
          title="user-experience Design"
          description="Focuses on an enjoyable, efficient, and intuitive experience for users when interacting with a product."
        />
        <CategoryCard
          style="my-20"
          title={"client-side development"}
          description={
            "Bring beautiful designs to life with Frontend Development. Create a delightful user experience."
          }
        />
        <CategoryCard
          style="my-40"
          title="server-side development"
          description="Used to store and organize data, manage user authentication and business logic, and connect the frontend to the database."
        />
        <div className="absolute top-3 md:top-0 -left-2 md:-left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 md:top-10 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 md:left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </section>
    </section>
  );
};

export default ProjectCategorySection;
