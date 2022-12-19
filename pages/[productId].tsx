import React from "react";
import Slider from "react-slick";
import Nav from "../components/nav";
import Image from "next/image";
import Head from "next/head";
import RightTopArrow from "../components/icons/RightkTopArrow";
import Footer from "../components/Footer";
import Link from "next/link";
import projects from "../data/projects";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import TechnologyLogo from "../components/TechnologyLogo";

interface SingleProductProps {
  id: string;
  images: string[];
  title: string;
  smallDescription: string;
  longDescription: string;
  demoUrl?: string;
  features: string[];
  technologies: string[];
  sourceLink?: string;
}

const SingleProduct = ({ product }: { product: SingleProductProps }) => {
  const settings = {
    customPaging: function (i: any) {
      return (
        <Image
          alt="Tee"
          width={50}
          height={50}
          src={product.images[i]}
          className="aspect-square drop-shadow-md h-10 max-w-lg w-10 rounded-md object-cover border border-blue-600"
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
              {product.images.map((image, index) => {
                return (
                  <Image
                    key={index}
                    alt={product.title}
                    width={1000}
                    height={1000}
                    src={image}
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
                {product.title}
              </h1>
              <p className="pt-4 text-sm text-gray-600">PRJ: #{product.id}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-bold text-gray-800"> Description</h1>
              <p className="text-sm text-gray-600 leading-6">
                {product.smallDescription}
              </p>
            </div>
            {product.demoUrl && (
              <Link
                href={product.demoUrl}
                target={"_blank"}
                className="my-2 flex justify-center items-center gap-5 w-full rounded bg-brand-blue px-6 py-3 text-sm font-bold uppercase tracking-wide text-white bg-gray-700"
              >
                Demo <RightTopArrow />
              </Link>
            )}
          </div>
        </section>
        {/* space */}
        <br className="my-3" />
        {/* Long description */}
        <p className="text-md text-gray-600 leading-6 tracking-wider">
          {product.longDescription}
        </p>
        {/* space */}
        <br className="my-3" />
        {/* Feature */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-gray-800">Feature</h1>
          <ul className="mx-5 list-disc text-gray-600">
            {product.features.map((feature, index) => {
              return <li key={index}>{feature}</li>;
            })}
          </ul>
        </div>
        {/* space */}
        <br className="my-3" />
        {/* Technology used */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-gray-800">Technology used</h1>
          <div className="flex gap-2 flex-wrap">
            {product.technologies.map((technology, index) => {
              return <TechnologyLogo key={index} name={technology} />;
            })}
          </div>
        </div>
        {/* space */}
        <br className="my-3" />
        {/* Source */}
        {product.sourceLink && (
          <div className="flex flex-col gap-2">
            <h1 className="text-lg text-gray-800">Source Code</h1>
            <Link
              href={product.sourceLink}
              target={"_blank"}
              className="flex gap-2 my-1"
            >
              <span className="text-blue-600">open in github</span>
              <RightTopArrow />
            </Link>
          </div>
        )}
      </section>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default SingleProduct;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { productId }: any = context.params;
  console.log(productId);

  const data = projects.filter((project) => {
    return project.id == productId;
  });

  if (data.length == 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: data[0],
    }, // will be passed to the page component as props
  };
};
