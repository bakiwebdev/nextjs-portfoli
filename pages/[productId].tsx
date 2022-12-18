import React from "react";
import Slider from "react-slick";
import Nav from "../components/nav";
import Image from "next/image";
import Head from "next/head";
import RightTopArrow from "../components/icons/RightkTopArrow";
import Footer from "../components/Footer";
import Link from "next/link";

const SingleProduct = () => {
  const images = [
    "https://img.freepik.com/premium-psd/smartwatch-mockup_439185-553.jpg",
    "https://img.freepik.com/free-psd/smartwatch-mockup_125540-1277.jpg",
    "https://img.freepik.com/premium-psd/smart-watch-series-6-mockup-left-view_1332-25543.jpg",
    "https://img.freepik.com/premium-psd/mockup_1332-19069.jpg",
    "https://img.freepik.com/premium-psd/smartwatch-mockup-design-isolated_19223-145.jpg",
  ];

  const settings = {
    customPaging: function (i: any) {
      return (
        <Image
          alt="Tee"
          width={50}
          height={50}
          src={images[i] + "?w=300"}
          className="aspect-square drop-shadow-md h-10 max-w-lg w-10 rounded-md object-cover"
        />
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div className=" p">
        <ul className="max-w-screen overflow-x-scroll h-16 bg-rand-yellow rounded-xl p-3 gap-8 md:gap-4 flex">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
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
      <section className="md:mt-10">
        {/* main section */}
        <section className="flex flex-col md:flex-row gap-10 md:gap-5">
          {/* slider */}
          <div className="w-full md:w-4/6 h-fit">
            <Slider {...settings}>
              {images.map((image, index) => {
                return (
                  <img
                    key={index}
                    alt="Tee"
                    src={image + "?w=826"}
                    className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                  />
                );
              })}
            </Slider>
          </div>
          {/* title and small description */}
          <div className="flex-1 flex flex-col h-full gap-2">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl text-gray-800 font-bold lg:text-3xl">
                Simple Clothes Basic Tee Basic Tee Simple Clothes Basic Tee
              </h1>
              <p className="pt-4 text-sm text-gray-600">PRJ: #012345</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-bold text-gray-800"> Description</h1>
              <p className="text-sm text-gray-600 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                ad labore nostrum, a explicabo iste est dolorem deserunt id
                ullam magni accusamus saepe, nulla sed sint reiciendis, aperiam
                cumque officiis!
              </p>
            </div>
            <button
              type="submit"
              className="my-2 flex justify-center items-center gap-5 w-full rounded bg-brand-blue px-6 py-3 text-sm font-bold uppercase tracking-wide text-white bg-gray-700"
            >
              Demo <RightTopArrow />
            </button>
          </div>
        </section>
        {/* space */}
        <br className="my-3" />
        {/* Long description */}
        <p className="text-md text-gray-600 leading-6 tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ad
          labore nostrum, a explicabo iste est dolorem deserunt id ullam magni
          accusamus saepe, nulla sed sint reiciendis, aperiam cumque officiis!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ad
          labore nostrum, a explicabo iste est dolorem deserunt id ullam magni
          accusamus saepe, nulla sed sint reiciendis, aperiam cumque officiis!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ad
          labore nostrum, a explicabo iste est dolorem deserunt id ullam magni
          accusamus saepe, nulla sed sint reiciendis, aperiam cumque officiis!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ad
          labore nostrum, a explicabo iste est dolorem deserunt id ullam magni
          accusamus saepe, nulla sed sint reiciendis, aperiam cumque officiis!
        </p>
        {/* space */}
        <br className="my-3" />
        {/* Feature */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-gray-800">Feature</h1>
          <ul className="mx-5 list-disc text-gray-600">
            <li>Home page</li>
            <li>About page</li>
            <li>Contact page</li>
            <li>Blog page</li>
          </ul>
        </div>
        {/* space */}
        <br className="my-3" />
        {/* Technology used */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-gray-800">Technology used</h1>
          <div className="flex gap-2 flex-wrap">
            <div className="h-10 w-10 rounded-md drop-shadow-sm">
              <Image
                alt="logo"
                src={"/images/logo/figmalogo.png"}
                width={40}
                height={40}
              />
            </div>
            <div className="h-10 w-10 rounded-md drop-shadow-sm">
              <Image
                alt="logo"
                src={"/images/logo/figmalogo.png"}
                width={40}
                height={40}
              />
            </div>
            <div className="h-10 w-10 rounded-md drop-shadow-sm">
              <Image
                alt="logo"
                src={"/images/logo/figmalogo.png"}
                width={40}
                height={40}
              />
            </div>
            <div className="h-10 w-10 rounded-md drop-shadow-sm">
              <Image
                alt="logo"
                src={"/images/logo/figmalogo.png"}
                width={40}
                height={40}
              />
            </div>
            <div className="h-10 w-10 rounded-md drop-shadow-sm">
              <Image
                alt="logo"
                src={"/images/logo/figmalogo.png"}
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
        {/* space */}
        <br className="my-3" />
        {/* Source */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-gray-800">Source Code</h1>
          <Link href={"/"} target={"_blank"} className="flex gap-2 my-1">
            <span className="text-blue-600">open in github</span>
            <RightTopArrow />
          </Link>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default SingleProduct;
