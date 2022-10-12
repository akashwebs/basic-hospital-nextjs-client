import { Button } from "@mui/material";
import Head from "next/head";

import AboutUs from "../Components/AboutUs";
import AllDoctors from "../Components/AllDoctors";
import GoogleMap from "../Components/GoogleMap";
import Header from "../Components/Header";
import OurServices from "../Components/OurServices";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <OurServices></OurServices>
      <AboutUs></AboutUs>
      <AllDoctors></AllDoctors>
      <GoogleMap></GoogleMap>
    </div>
  );
}
