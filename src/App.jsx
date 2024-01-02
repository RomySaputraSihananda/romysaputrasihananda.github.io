import React from "react";
import Layout from "./layout";

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
          <h1 className="font-Montserrat font-bold md:text-6xl text-3xl text-white tracking-widest drop-shadow-[0_35px_35px_rgba(255,255,255,0.85)]">
            HELLO WORLD
          </h1>
          <div className="absolute md:w-[100vh] w-screen md:h-screen h-[100vw] md:-bottom-[650px] -bottom-[300px] bg-gradient-to-t from-darkBlue to-white/95 rounded-full"></div>
          <Meteors number={100} />
        </div>
      </Layout>
    );
  };
}

export default App;
