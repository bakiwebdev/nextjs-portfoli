import Image from "next/image";

interface TestimonialProps {
  image: string | any;
  words: string;
}

const Testimonial = ({ image, words }: TestimonialProps) => {
  return (
    <div className="max-w-[500px] w-full p-5 rounded-md h-fit bg-white shadow-md flex flex-col lg:flex-row items-start gap-5">
      {/* Image section */}
      <div className="flex justify-center items-center lg:min-h-[48px] lg:min-w-[48px] h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-gray-300">
        <Image
          src={image}
          alt="profile"
          width={100}
          height={100}
          className="rounded-full object-cover h-10 w-10 lg:h-12 lg:w-12"
        />
      </div>
      <p className="text-gray-400 italic">{`"${words}"`}</p>
    </div>
  );
};

export default Testimonial;
