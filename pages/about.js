import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Heading from "../Components/Heading";
import Image from "next/image";
import AboutUs from "../Components/AboutUs";
import OurTeams from "../Components/OurTeams";
import { useQuery } from "@tanstack/react-query";
import { aboutEmployee } from "../lib/helper";

const About = () => {
  const { data: employees, isLoading: employeesLoading } = useQuery(
    ["about-employees"],
    aboutEmployee
  );

  return (
    <Box bgcolor={"#5db2ff"} color={"#000"}>
      <Heading>আমাদের সম্পর্কে</Heading>

      {/* about us compoments  */}
      <AboutUs></AboutUs>
      <OurTeams
        employees={employees}
        employeesLoading={employeesLoading}
      ></OurTeams>
    </Box>
  );
};

export default About;
