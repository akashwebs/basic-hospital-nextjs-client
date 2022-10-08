import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
