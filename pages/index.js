import { Button } from "@mui/material";
import Head from "next/head";
import AboutUs from "../Components/AboutUs";
import AllDoctors from "../Components/AllDoctors";
import GoogleMap from "../Components/GoogleMap";
import Header from "../Components/Header";
import OurServices from "../Components/OurServices";
import styles from "../styles/Home.module.css";
import { useQuery } from "@tanstack/react-query";
import { allDoctors, banners } from "../lib/helper";

export default function Home() {
  const { data, isLoading, refetch } = useQuery(["banners"], banners);
  const { data: doctors, isLoading: doctorsLoading } = useQuery(
    ["doctors"],
    allDoctors
  );

  console.log("form query", data);
  return (
    <div>
      <Header banners={data} isLoading={isLoading}></Header>
      <OurServices></OurServices>
      <AboutUs></AboutUs>
      <AllDoctors
        doctors={doctors}
        doctorsLoading={doctorsLoading}
      ></AllDoctors>
      <GoogleMap></GoogleMap>
    </div>
  );
}
