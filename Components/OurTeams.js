import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Heading from "./Heading";
import Loading from "./Loading";

import Team from "./Team";

const OurTeams = ({ employees, employeesLoading }) => {
  if (employeesLoading) {
    return <Loading></Loading>;
  }
  const color = "#1b2430";
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Heading color={color}>
        <span style={{ color: "#1b2430" }}>পরিচালকগন</span>
      </Heading>

      <Grid container spacing={2}>
        {employees?.map((employee) => {
          return <Team employee={employee} key={employee._id}></Team>;
        })}
      </Grid>
    </Container>
  );
};

export default OurTeams;
