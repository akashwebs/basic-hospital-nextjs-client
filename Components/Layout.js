import React from "react";
import Footers from "./Footers";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <div>{children}</div>
      <Footers></Footers>
    </>
  );
}

export default Layout;
