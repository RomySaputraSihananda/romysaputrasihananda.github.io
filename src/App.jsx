import React from "react";
import Layout from "./layout";
import { RandomReveal } from "react-random-reveal";

import clsx from "clsx";

const Meteors = ({ number }) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={clsx(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
          )}
          style={{
            top:
              Math.floor(
                Math.random() * (window.innerHeight - -window.innerHeight) +
                  -500
              ) + "px",
            left:
              Math.floor(
                Math.random() * (window.innerWidth - -window.innerWidth) + -500
              ) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};

class App extends React.Component {
  render = () => {
    return (
      <Layout>
        <div className="w-sreen h-screen grid place-items-center bg-darkBlue relative overflow-hidden">
          <div className="text-center">
            <h1 className="font-Montserrat font-bold md:text-6xl text-2xl text-white tracking-[.5em] drop-shadow-[0_35px_35px_rgba(255,255,255,0.45)] md:mb-10 mb-5">
              HELLO WORLD !
            </h1>
            <h2 className="font-Montserrat font-semibold md:text-5xl text-xl text-white tracking-[.4em] drop-shadow-[0_35px_35px_rgba(255,255,255,0.45)]">
              <RandomReveal
                isPlaying
                duration={2}
                characters="I'm ROMY よろしく ( ◡̀_◡́)ᕤ"
              />
            </h2>
          </div>
          <div className="absolute w-[100vh] h-screen md:-bottom-[650px] -bottom-[550px] bg-gradient-to-t from-darkBlue to-white/95 rounded-full"></div>
          <Meteors number={100} />
        </div>
      </Layout>
    );
  };
}

export default App;
