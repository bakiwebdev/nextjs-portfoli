import type { NextPage } from "next";
import Nav from "../components/nav";
import Profile from "../components/profile";
import Head from "next/head";
import ProjectCategorySection from "../components/ProjectCategorySection";
import CustomerChallenge from "../components/CustomerChallenge";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

const Home: NextPage = () => {
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
      <Profile />
      <ProjectCategorySection />
      <CustomerChallenge />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
