import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import AltIcon from "../components/icons/AltIcon";
import PhoneIcon from "../components/icons/PhoneIcon";
import Nav from "../components/nav";
import CalenderIcon from "../components/icons/CalenderIcon";

const Contact = () => {
  return (
    <section>
      <Head>
        <title>
          Welcome, I&apos;m Biruk Endris a UI/UX Designer and Front-End Dev
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* add image */}
        <meta
          name="description"
          content="I am Biruk, a UI/UX Designer and Front-End Dev. I specialize in Next.js, Tailwind CSS, and creating user-friendly, efficient, and visually appealing web apps."
        />
        <meta
          name="keywords"
          content="portfolio, website, developer, artist, full stack, next.js, tailwind, react, framer motion, typescript, javascript, html, css, node js, express js, aws, telegram bot, bot"
        />
        <meta name="author" content="Biruk Endris" />
      </Head>
      <Nav />
      <section className="md:h-screen py-10 flex md:justify-center md:items-center">
        <div className="flex flex-col md:flex-row md:gap-20">
          {/* Link section */}
          <div className="flex flex-col gap-1 text-gray-400 uppercase tracking-wide text-sm">
            <p className="text-blue-500 md:text-xl">Contact me</p>
            <h1 className="text-gray-800 text-2xl md:text-3xl lg:text-5xl font-semibold">
              How can i help you ?
            </h1>
            <p className="md:text-lg">Fill in the form or drop an email</p>
            {/* quick link */}
            <div className="flex flex-wrap md:flex-col my-4 gap-2 text-lg tracking-wider">
              <Link
                href={"tel: +31 6 1050 3230"}
                className="flex flex-row gap-2 md:w-fit justify-center items-center md:justify-start rounded-md border border-gray-200 px-4 py-1 text-gray-600"
              >
                <PhoneIcon />
                <span>+31 6 1050 3230</span>
              </Link>
              <Link
                href={"mailto:developer@bakiwebdev.com"}
                className="flex flex-row gap-2 md:w-fit justify-center items-center md:justify-star rounded-md border border-gray-200 px-4 py-1 text-gray-600 lowercase"
              >
                <AltIcon />
                <span>developer@bakiwebdev.com</span>
              </Link>
              <Link
                href={"https://calendly.com/bakiwebdev"}
                target={"_blank"}
                className="flex flex-row gap-2 md:w-fit justify-center items-center md:justify-start rounded-md border border-gray-200 px-4 py-1 text-gray-600 lowercase"
              >
                {/* Appointment link */}
                <CalenderIcon />
                <span>Make an appointment</span>
              </Link>
            </div>
          </div>
          {/* Form section */}
          <div className="flex flex-col md:w-96">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Submit
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Contact;
