import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
const Team = ({ employee }) => {
    
  return (
    <Grid item xs={12} sm={3}>
      <Paper sx={{ height: "100%" }}>
        <Box
          id={"porcihalok"}
          p={2}
          bgcolor={"#2596be"}
          textAlign="center"
          color="#fff"
          sx={{ height: "100%" }}
        >
          <Image src={employee?.image} width={400} height={250}></Image>
          <Typography variant="h6" component={"h6"} textAlign="center">
            {employee?.fullName}
          </Typography>
          <Typography variant="p" textAlign="center" component={"p"}>
            {employee?.position}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Team;
