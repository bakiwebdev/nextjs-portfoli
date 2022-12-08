import Head from "next/head";
import Nav from "../components/nav";
import Works from "../components/Works";

const Frontend = () => {
  return (
    <div>
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
      <Works
        heading={
          "Building Beautiful UIs and Creating Smoother Customer Experiences"
        }
      />
    </div>
  );
};

export default Frontend;
