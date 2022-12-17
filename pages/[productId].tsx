import React from "react";
import Slider from "react-slick";
import Nav from "../components/nav";
import Image from "next/image";
import Head from "next/head";

const SingleProduct = () => {
  const images = [
    "https://img.freepik.com/premium-psd/smartwatch-mockup_439185-553.jpg",
    "https://img.freepik.com/free-psd/smartwatch-mockup_125540-1277.jpg",
    "https://img.freepik.com/premium-psd/smart-watch-series-6-mockup-left-view_1332-25543.jpg",
    "https://img.freepik.com/premium-psd/mockup_1332-19069.jpg",
    "https://img.freepik.com/premium-psd/smartwatch-mockup-design-isolated_19223-145.jpg",
  ];

  // const settings = {
  //   customPaging: function (i: any) {
  //     console.log("image : " + i);
  //     return (
  //       <Image
  //         alt="Tee"
  //         width={50}
  //         height={50}
  //         src={images[i] + "?w=300"}
  //         className="aspect-square shadow-xl h-10 max-w-lg w-10 rounded-md object-cover"
  //       />
  //     );
  //   },
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   appendDots: (dots: any) => (
  //     <div className=" p">
  //       <ul className=" max-w-screen overflow-x-scroll h-16 bg-rand-yellow rounded-xl p-3 gap-4 flex">
  //         {" "}
  //         {dots}{" "}
  //       </ul>
  //     </div>
  //   ),
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
      <section className="">
        {/* main section */}
        <section className="flex flex-col md:flex-row md:h-[30rem] gap-5">
          {/* slider */}
          <div className="w-full md:w-4/6 h-96 md:h-[30rem] bg-gray-400"></div>
          {/* title and small description */}
          <div className="flex-1 flex flex-col h-full gap-2">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl text-brand-blue font-bold lg:text-3xl">
                Simple Clothes Basic Tee
              </h1>
              <p className="pt-4 text-sm text-brand-blue">SKU: #012345</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-bold"> Description</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                ad labore nostrum, a explicabo iste est dolorem deserunt id
                ullam magni accusamus saepe, nulla sed sint reiciendis, aperiam
                cumque officiis!
              </p>
            </div>
            <div>
              <p className="py-[2px] px-2 w-fit rounded-full bg-brand-yellow text-xs text-brand-blue">
                Price
              </p>
              <p className="text-xl font-bold">3219.99 </p>
            </div>
            <form className="space-y-4 lg:pt-8">
              <button
                type="submit"
                className="w-full rounded bg-brand-blue px-6 py-3 text-sm font-bold uppercase tracking-wide text-white bg-gray-700"
              >
                Call Now
              </button>
            </form>
          </div>
        </section>
        {/* more section */}
      </section>
    </div>
  );
};

export default SingleProduct;
