import React from "react";
import { CloseSvg } from "../components/svg";
class SideBar extends React.Component {
  data = ["Home", "About", "Project"];
  render = () => {
    return (
      <div className="absolute z-10 h-screen w-screen backdrop-blur-md bg-white/20 rounded-sm">
        <div
          className="absolute right-0 top-0 p-3 cursor-pointer"
          onClick={() => alert(1)}
        >
          <CloseSvg className="fill-black w-14 h-14 hover:fill-white transition duration-300" />
        </div>
        <div className="md:w-[50%] xl:w-[30%] w-[80%] bg-black h-full rounded-sm relative border-r-2 border-white/20">
          <div className=" bg-white w-full h-24 px-8 flex items-center rounded-sm">
            <h1 className="text-5xl">Sheeshhh</h1>
          </div>
          <div className="text-white">
            {this.data.map((e) => {
              return <h2 className="text-lg p-2">{e}</h2>;
            })}
          </div>
        </div>
      </div>
    );
  };
}

export default SideBar;
