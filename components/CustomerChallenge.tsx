import Link from "next/link";
import ChallengeCard from "./ChallengeCard";

const CustomerChallenge = () => {
  return (
    <section className="relative w-full h-fit px-2 md:px-16 py-16 md:py-20 flex flex-col justify-between gap-10">
      <h1 className="text-2xl md:text-5xl font-semibold space-y-5 tracking-wide">
        Why Is Your Business Struggling to Attract Customers?
      </h1>
      {/* challenges */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-6 md:grid-rows-3 lg:grid-rows-2 gap-10">
        <ChallengeCard
          index={1}
          header={"Lack of an online presence"}
          description={
            "A lack of visibility on the web could lead to a business website's failure due to an inability to attract web traffic and potential customers."
          }
        />
        <ChallengeCard
          index={2}
          header={"Lack of an online presence"}
          description={
            "A lack of visibility on the web could lead to a business website's failure due to an inability to attract web traffic and potential customers."
          }
        />
        <ChallengeCard
          index={3}
          header={"Lack of an online presence"}
          description={
            "A lack of visibility on the web could lead to a business website's failure due to an inability to attract web traffic and potential customers."
          }
        />
        <ChallengeCard
          index={4}
          header={"Lack of an online presence"}
          description={
            "A lack of visibility on the web could lead to a business website's failure due to an inability to attract web traffic and potential customers."
          }
        />
        <ChallengeCard
          index={5}
          header={"Lack of an online presence"}
          description={
            "A lack of visibility on the web could lead to a business website's failure due to an inability to attract web traffic and potential customers."
          }
        />
        <ChallengeCard
          index={6}
          header={"Lack of an online presence"}
          description={
            "A lack of visibility on the web could lead to a business website's failure due to an inability to attract web traffic and potential customers."
          }
        />
      </div>
      <div className="flex flex-col justify-center items-center my-5 gap-10">
        <p className="text-gray-400 tracking-wide">
          What are you waiting for ?
        </p>
        <Link href="https://calendly.com/bakiwebdev" target={"_blank"}>
          <span className="px-7 md:px-20 py-2 bg-blue-500 text-white font-lg font-semibold rounded-full">
            Make An Appointment !
          </span>
        </Link>
      </div>
    </section>
  );
};

export default CustomerChallenge;
