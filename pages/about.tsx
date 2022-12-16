import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/nav";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Head>
        <title>
          Welcome, I&apos;m Biruk Endris a UI/UX Designer and Front-End Dev
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* add image */}
        <meta name="title" content="baki.ruqad.com" />
        <meta
          name="description"
          content="A UI/UX Designer and Web Developer. I specialize in Next JS, Tailwind CSS, and creating         user-friendly, efficient, and visually appealing web apps."
        />
        <meta
          name="keywords"
          content="freelancer, web service, web design, UI/UX, portfolio, website, developer, artist, full stack, next.js,        tailwind, react, framer motion, typescript, JavaScript, HTML, CSS, Node JS, express JS, AWS, telegram bot, bot"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Biruk Endris" />
      </Head>
      <Nav />
      <div className="flex h-[25rem] w-full bg-gray-500">hey</div>
      <div className="md:mx-10 my-10">
        {/* about me */}
        <div>
          <div className="flex flex-col gap-3 md:gap-10">
            <h1 className="text-xl md:text-3xl font-semibold text-gray-800 tracking-wider">
              About Me
            </h1>
            <p className="text-base md:text-lg text-gray-600 tracking-wider leading-8">
              My name is Biruk and I&apos;m 24 years old. I&apos;m from the
              Netherlands and I have been working as a software developer for
              the past 3 years. I have a great experience in web development
              from scratch to production and I am proud to have successfully
              solved numerous real world problems through technology. <br />
              <br />
              Throughout my many years of experience, I have worked in various
              team environments and I have been tasked with researching and
              developing various web applications. As a result of my hard work,
              I have put together several projects that have been successful in
              the marketplace.
              <br />
              <br />
              My top priority is to ensure that whatever I create is modern,
              well-crafted and highly functional. I strive to deliver software
              of the highest quality; even if that means spending extra time and
              energy on the development process.
              <br />
              <br />I am always on the lookout for new challenges and
              opportunities. If you are interested in working together or just
              want to chat, please don&apos;t hesitate to get in touch. I look
              forward to hearing from you.
            </p>
            <Link href="/contact">
              <span className="px-7 md:px-20 py-2 bg-blue-500 text-white font-lg font-semibold rounded-full">
                Get in touch !
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
