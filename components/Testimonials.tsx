import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="relative w-full h-screen px-2 md:px-16 py-16 md:py-20 flex flex-col md:flex-row justify-center md:justify-between md:items-center gap-4 md:gap-20">
      {/* testimonials title */}
      <div className="flex flex-col gap-2 md:gap-4">
        <p className="text-blue-500 text-lg">Testimonials</p>
        <h1 className="text-2xl md:text-5xl font-semibold space-y-5 tracking-wide">
          Customer Reviews
        </h1>
        <p className="text-gray-400">What our Customers are saying ...</p>
      </div>
      {/* testimonials area */}
      <div className="flex flex-col gap-5 max-h-[90%] h-fit w-full md:w-fit">
        {/* single testimonial */}
        <div className="max-w-[500px] w-full p-5 rounded-md h-fit bg-white shadow-md flex flex-col md:flex-row items-start gap-5">
          {/* Image section */}
          <Image
            src="/images/profile.jpg"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full object-cover h-8 w-8 md:h-12 md:w-12"
          />
          <p className="text-gray-400 italic">
            &quot;Over the past months, Biruk has been of amazing value to our
            team. Starting off with very little knowledge of our tech stack, he
            was able to pick up on everything quickly and with great
            enthusiasm.&quot;
          </p>
        </div>
        {/* single testimonial */}
        <div className="max-w-[500px] w-full p-5 rounded-md h-fit bg-white shadow-md flex flex-col md:flex-row items-start gap-5">
          {/* Image section */}
          <Image
            src="/images/profile.jpg"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full object-cover h-8 w-8 md:h-12 md:w-12"
          />
          <p className="text-gray-400 italic">
            &quot;I am very pleased with the web development services I received
            from Biruk. He were able to take the ideas and turn them into a
            beautiful, user-friendly website. They also listened to our feedback
            throughout the process and made sure we were satisfied with the end
            result. We would highly recommend [web developer] to anyone looking
            for a reliable and efficient web developer.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
