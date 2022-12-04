import Link from "next/link";
import HomeIcon from "../components/icons/HomeIcon";
import RightArrowIcon from "../components/icons/RightArrowIcon";

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-48">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <div className="text-gray-400 font-bold text-7xl">404</div>

          <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
            This page does not exist
          </div>

          <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
            The page you are looking for could not be found.
          </div>
        </div>

        <div className="flex flex-col mt-48">
          <div className="text-gray-400 font-bold uppercase">Continue With</div>

          <div className="flex flex-col items-stretch mt-5">
            {/* Home Link */}
            <Link href="/">
              <div className="flex flex-row group px-4 py-8 border-t hover:cursor-pointer transition-all duration-200 delay-100">
                <div className="flex justify-center items-center rounded-xl bg-gray-100 my-auto p-3 w-fit h-fit">
                  <i className=" text-gray-400 group-hover:text-gray-500 transition-all duration-200 delay-100">
                    <HomeIcon />
                  </i>
                </div>

                <div className="grow flex flex-col pl-5 pt-2">
                  <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                    Home Page
                  </div>

                  <div className="font-semibold text-sm md:text-md lg:text-lg  text-gray-400 group-hover:text-gray-500 transition-all duration-200 delay-100">
                    Everything starts here
                  </div>
                </div>

                <i className="text-gray-400 my-auto pr-2  group-hover:text-gray-700 transition-all duration-200 delay-100">
                  <RightArrowIcon />
                </i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;

{
  /* <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"> */
}
