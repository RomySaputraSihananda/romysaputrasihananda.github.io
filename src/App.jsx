import React from "react";

class App extends React.Component {
  render = () => {
    return (
      <div
        className="w-[100vw] h-[100vh] grid place-items-center backdrop-blur-sm bg-black/30"
        onClick={this.fullScreen}
      ></div>
    );
  };
}

export default App;
