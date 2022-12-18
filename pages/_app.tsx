import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <div className="relative w-screen h-screen overflow-y-scroll overflow-x-hidden">
        <div className="relative max-w-7xl w-full  mx-auto px-4 md:px-10">
          <Component {...pageProps} />
        </div>
      </div>
    </main>
  );
}

export default MyApp;
