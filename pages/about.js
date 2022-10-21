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
  const color = "#1b2430";

  return (
    <Box bgcolor={"#5db2ff"} color={"#000"}>
      <Heading color={color}>
        <span style={{ color: "#1b2430" }}>আমাদের সম্পর্কে</span>
      </Heading>

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
