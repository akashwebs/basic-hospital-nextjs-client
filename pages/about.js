import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Heading from "../Components/Heading";
import Image from "next/image";
import AboutUs from "../Components/AboutUs";
import OurTeams from "../Components/OurTeams";
import { useQuery } from "@tanstack/react-query";
import { aboutEmployee } from "../lib/helper";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

const About = () => {
  const { data: employees, isLoading: employeesLoading } = useQuery(
    ["about-employees"],
    aboutEmployee
  );
  const color = "#1b2430";

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(employees?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(employees?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, employees]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % employees?.length;
    setItemOffset(newOffset);
  };

  return (
    <Box bgcolor={"#5db2ff"} color={"#000"}>
      <Heading color={color}>
        <span style={{ color: "#1b2430" }}>আমাদের সম্পর্কে</span>
      </Heading>

      {/* about us compoments  */}
      <AboutUs></AboutUs>
      <OurTeams
        employees={currentItems}
        employeesLoading={employeesLoading}
      ></OurTeams>
      <div>
     
      </div>
    </Box>
  );
};

export default About;
