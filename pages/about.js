import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Heading from "../Components/Heading";
import Image from "next/image";
import AboutUs from "../Components/AboutUs";
import OurTeams from "../Components/OurTeams";

const about = () => {
  return (
    <Box bgcolor={"#83c4ff"} color={"#000"}>
      <Heading>আমাদের সম্পর্কে</Heading>

      {/* about us compoments  */}
      <AboutUs></AboutUs>
      <OurTeams></OurTeams>
    </Box>
  );
};

export default about;
