import React from "react";
import SideBar from "./Sidebar";
import Navbar from "./Navbar";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    const { children } = this.props;

    return (
      <main className="relative">
        {/* <Navbar /> */}
        {/* <SideBar /> */}
        {children}
      </main>
    );
  };
}

export default Layout;
