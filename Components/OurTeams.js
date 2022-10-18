import { Grid} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Heading from "./Heading";

import Team from "./Team";

const OurTeams = ({ employees }) => {
  console.log("from employees", employees);
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Heading> পরিচালকগন</Heading>
      <Grid container spacing={2}>
        {employees?.map((employee) => {
          return <Team employee={employee} key={employee._id}></Team>;
        })}
      </Grid>
    </Container>
  );
};

export default OurTeams;
