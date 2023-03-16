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
          header={"Poor Website Design"}
          description={
            "If a business's website is outdated, slow, or difficult to use, potential customers may not be able to find or purchase products or services easily. As a website developer, I can help by redesigning the website to make it more user-friendly and mobile-responsive, optimizing it for search engines."
          }
        />
        <ChallengeCard
          index={2}
          header={"Outdated technology"}
          description={
            "If a business is still using outdated technology for operations, it may be causing delays, errors, or frustration for customers and staff. As a website developer, I can help by integrating new software or apps to streamline operations and improve the customer experience."
          }
        />
        <ChallengeCard
          index={3}
          header={"Outdated or irrelevant content"}
          description={
            "If a business's website has not been updated in a while, or if the content is no longer relevant to the target audience, it may not be engaging potential customers. As a website developer, I can help by refreshing the content to make it more engaging and up-to-date, or by adding new content such as blog posts or articles."
          }
        />
        <ChallengeCard
          index={4}
          header={"Lack of social media integration"}
          description={
            "If a business is not active on social media or if its social media accounts are not integrated with its website, it may be missing out on potential customers. As a website developer, I can help by integrating social media buttons or feeds on the website, making it easy for customers to connect with the business on social media."
          }
        />
        <ChallengeCard
          index={5}
          header={"Slow website performance"}
          description={
            "If a business's website takes too long to load, potential customers may become impatient and leave the site. As a website developer, I can help by optimizing the website's speed and performance, such as compressing images or using a content delivery network."
          }
        />
        <ChallengeCard
          index={6}
          header={"Lack of mobile responsiveness"}
          description={
            "If a business's website is not optimized for mobile devices, potential customers may have difficulty accessing the site on their smartphones or tablets. As a website developer, I can help by creating a mobile-responsive website that is easy to use and navigate on any device."
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
