import Link from "next/link";
import WorkItem from "./WorkItem";

const Works = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:py-28 py-20">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 items-center">
            <div className="xl:col-span-6 lg:col-span-8 flex flex-row items-center gap-8 lg:pr-8">
              <h2 className="lg:text-display-lg text-display-md font-semibold lg:pl-10">
                The work I do, <br></br>and business I help.
              </h2>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex md:flex-row flex-col flex-wrap">
              {[1, 2, 3, 4].map((item, index) => (
                <WorkItem
                  key={index}
                  image={"/images/ice-cream.png"}
                  title={"Ice Cream App Concept"}
                  description={
                    "Nibh tellus ut suspendisse porttitor. Vivamus sit tincidunt bibendum a etiam fringilla quis nisl. Amet eget et, lacus, ullamcorper lectus ullamcorper amet."
                  }
                />
              ))}
            </div>
            <div className="flex items-start lg:px-10 md:-mt-7">
              <Link
                href="/"
                className="text-body-sm font-semibold text-white bg-neutral-900 py-4 pl-5 pr-4 rounded-full flex flex-row gap-2 items-center justify-center"
              >
                VISIT MY DRIBBBLE
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.7932 4.48233C15.9884 3.10352 14.8967 2.01182 13.5178 1.20704C12.1387 0.40229 10.6333 0 9.00024 0C7.3674 0 5.86147 0.40229 4.48262 1.20704C3.10368 2.0117 2.01198 3.10339 1.20716 4.48233C0.40229 5.86135 0 7.36728 0 9C0 10.6328 0.402413 12.1385 1.20703 13.5176C2.01182 14.8964 3.10352 15.9881 4.48245 16.793C5.86147 17.5977 7.36728 18 9.00008 18C10.6329 18 12.1389 17.5977 13.5178 16.793C14.8966 15.9884 15.9883 14.8964 16.793 13.5176C17.5977 12.1386 17.9999 10.6327 17.9999 9C18 7.36711 17.5977 5.86114 16.7932 4.48233ZM9.00012 1.31252C10.9375 1.31252 12.629 1.95313 14.0742 3.23429L13.9278 3.43923C13.8692 3.52141 13.7227 3.67943 13.4884 3.91393C13.2541 4.14822 12.9982 4.37101 12.7209 4.58191C12.4433 4.79288 12.0666 5.03308 11.5899 5.30263C11.1133 5.57218 10.6055 5.80864 10.0664 6.01174C9.168 4.35533 8.20716 2.86315 7.18368 1.53511C7.80097 1.38669 8.40639 1.31252 9.00012 1.31252ZM2.97681 4.23019C3.72676 3.28506 4.64068 2.55839 5.71892 2.05065C6.68764 3.3397 7.64068 4.81636 8.57825 6.48036C6.20326 7.10536 3.83614 7.41789 1.47675 7.41776C1.72688 6.23815 2.22686 5.17551 2.97681 4.23019ZM1.82818 11.7717C1.48438 10.8928 1.31252 9.96885 1.31252 9C1.31252 8.89057 1.31655 8.80852 1.32426 8.75389C4.15253 8.75389 6.78151 8.39072 9.21118 7.664C9.46123 8.14834 9.66826 8.58195 9.83232 8.96486C9.80068 8.98046 9.75027 8.99795 9.67992 9.01753C9.60936 9.03706 9.55871 9.05061 9.52719 9.05853L9.09371 9.21085C8.7967 9.32028 8.40791 9.50782 7.92763 9.7733C7.44723 10.0392 6.93749 10.3554 6.39839 10.7227C5.85929 11.09 5.30263 11.5763 4.72848 12.182C4.15425 12.7874 3.67184 13.4376 3.2812 14.1329C2.6562 13.4376 2.1719 12.6503 1.82818 11.7717ZM9.00012 16.6876C7.17194 16.6876 5.53914 16.1016 4.10159 14.9298L4.27739 15.0588C4.55079 14.457 4.95308 13.8789 5.48446 13.3243C6.01576 12.7697 6.52744 12.3223 7.01962 11.9823C7.5118 11.6427 8.04691 11.3224 8.62513 11.0213C9.20322 10.7207 9.59754 10.5291 9.80868 10.4473C10.0197 10.3653 10.1877 10.3007 10.3126 10.2537L10.336 10.242H10.3596C11.1249 12.2498 11.6721 14.1952 12.0001 16.078C11.0313 16.4845 10.0315 16.6875 9.00012 16.6876ZM15.4692 13.1543C14.891 14.049 14.1682 14.7894 13.3013 15.3751C12.9807 13.5783 12.481 11.746 11.8011 9.87896C13.3558 9.6365 14.9534 9.74999 16.5941 10.2186C16.4221 11.2811 16.0471 12.2599 15.4692 13.1543ZM16.5704 8.89455C16.4923 8.87904 16.3946 8.86131 16.2774 8.84189C16.1603 8.82248 16.0176 8.79892 15.8496 8.77158C15.6818 8.74424 15.494 8.71892 15.2872 8.69544C15.0801 8.672 14.8594 8.65058 14.6248 8.63104C14.3905 8.61142 14.1405 8.59594 13.875 8.58412C13.6091 8.57247 13.3397 8.56656 13.0662 8.56656C12.793 8.56656 12.5056 8.57448 12.205 8.58999C11.9043 8.60538 11.6134 8.63305 11.3322 8.67204C11.3086 8.63293 11.2794 8.56844 11.2442 8.47855C11.2091 8.38879 11.1835 8.32032 11.1684 8.27345C11.0197 7.94533 10.8478 7.57419 10.6523 7.16024C11.1914 6.94135 11.7052 6.68949 12.1938 6.40426C12.6819 6.11903 13.0722 5.86529 13.3654 5.64265C13.6584 5.41978 13.9357 5.18343 14.1974 4.93351C14.4592 4.68354 14.6289 4.50979 14.7073 4.4121C14.7855 4.31425 14.8597 4.21861 14.9299 4.12498L14.9417 4.11316C16.0823 5.5038 16.6646 7.10528 16.6877 8.91795L16.5704 8.89455Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
