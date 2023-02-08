import { useEffect } from "react";
import { gsap } from "gsap";
const PlayGround = () => {
  let tl = gsap.timeline();

  useEffect(() => {
    // tl.to(".red-box", { x: 100, duration: 2 })
    //   .to(".green-box", { x: 30, y: -20, rotate: 360, duration: 1 })
    //   .to(".yellow-box", { y: 50, rotate: -90, duration: 3 });
  }, [tl]);

  return (
    <div className="container w-full h-screen flex justify-center items-center">
      <div className="absolute top-10 right-10 flex w-fit gap-2">
        <button onClick={() => tl.play()}>Play</button>
        <button onClick={() => tl.resume()}>Resume</button>
        <button onClick={() => tl.restart()}>Restart</button>
        <button onClick={() => tl.reverse()}>Reverse</button>
      </div>
      <div className="flex flex-col gap-2">
        <div
          onMouseEnter={() =>
            tl.to(".red-box", {
              scale: 2,
              duration: 1,
            })
          }
          onMouseLeave={() =>
            tl.to(".red-box", {
              scale: 1,
              duration: 1,
            })
          }
          className="red-box p-4 bg-red-400 rounded-md"
        >
          1
        </div>
        <div className="green-box p-4 bg-green-400 rounded-md">2</div>
        <div className="yellow-box p-4 bg-yellow-400 rounded-md">3</div>
      </div>
    </div>
  );
};

export default PlayGround;
