import Image from "next/image";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section className="relative w-full h-screen px-2 md:px-16 py-16 md:py-20 flex flex-col md:flex-row justify-center md:justify-between md:items-center gap-4 md:gap-20">
      {/* testimonials title */}
      <div className="flex flex-col gap-2 md:gap-4">
        <p className="text-blue-500 text-lg">Testimonials</p>
        <h1 className="text-2xl md:text-5xl font-semibold space-y-5 tracking-wide">
          Customer Reviews
        </h1>
        <p className="text-gray-400 text-lg">
          What our Customers are saying ...
        </p>
      </div>
      {/* testimonials area */}
      <div className="flex flex-col gap-5 max-h-[90%] h-fit w-full md:w-fit">
        {/* single testimonial */}
        <Testimonial
          image={"/images/clients/jasper.jpg"}
          words="Over the past months, Biruk has been of amazing value to our team.
        Starting off with very little knowledge of our tech stack, he was able
        to pick up on everything quickly and with great enthusiasm."
        />
        <Testimonial
          image={"/images/clients/theo.jpg"}
          words="I am very pleased with the web development services I received
          from Biruk. He was able to take the ideas and turn them into a
          beautiful, user-friendly website. he also listened to the feedback
          result. I highly recommend his service to anyone looking
          for a reliable and efficient web developer."
        />
      </div>
    </section>
  );
};

export default Testimonials;
